import axios from "axios";
import { createContext, useState, useContext, useEffect } from "react";
import { Navigate } from "react-router-dom";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const init = async () => {
      const token = localStorage.getItem("accessToken");
      if (!token) {
        setLoading(false);
        return;
      }

      axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;

      // Fetch FULL user securely from backend (role MUST come from backend)
      try {
        const res = await axios.get("http://localhost:8080/api/user/profile");
        if (res?.data?.user) {
          setUser(res.data.user);
          localStorage.setItem("user", JSON.stringify(res.data.user));
        }
      } catch (err) {
        console.log("Profile load failed");
        localStorage.removeItem("accessToken");
        localStorage.removeItem("user");
        setUser(null);
      }

      setLoading(false);
    };

    init();
  }, []);

  return (
    <AuthContext.Provider value={{ user, setUser, loading }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);


// PROTECTED ROUTES
export const AdminRoute = ({ children }) => {
  const { user, loading } = useAuth();
  if (loading) return null; // prevents wrong redirect

  if (!user) return <Navigate to="/signin" />;
  if (user.role !== "admin") return <Navigate to="/not-authorized" />;

  return children;
};

export const UserRoute = ({ children }) => {
  const { user, loading } = useAuth();
  if (loading) return null;

  if (!user) return <Navigate to="/signin" />;
  if (user.role !== "user") return <Navigate to="/not-authorized" />;

  return children;
};
