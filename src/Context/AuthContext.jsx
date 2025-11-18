import axios from "axios";
import { useEffect } from "react";
import {jwtDecode} from "jwt-decode";
import { createContext, useState, useContext } from "react";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  // On mount: rehydrate auth from token, then fetch full profile
  useEffect(() => {
    const init = async () => {
      const token = localStorage.getItem("accessToken");
      if (!token) {
        setLoading(false);
        return;
      }

      axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;

      // Try to decode token (may contain limited claims)
      try {
        const decoded = jwtDecode(token);
        // set a preliminary user object so UI can show something quickly
        setUser((prev) => ({ ...(prev || {}), ...decoded }));
      } catch (error) {
        console.error("Invalid token", error);
        setUser(null);
      }

      // Fetch full profile from server to populate fields like name/phone
      try {
        const res = await axios.get("http://localhost:8080/api/user/profile");
        // expect res.data.user
        if (res?.data?.user) {
          setUser(res.data.user);
          // persist minimal user info for faster reloads (optional)
          try {
            localStorage.setItem("user", JSON.stringify(res.data.user));
          } catch {}
        }
      } catch (err) {
        // If profile endpoint fails, try reading persisted `user` from localStorage
        try {
          const persisted = localStorage.getItem("user");
          if (persisted) setUser(JSON.parse(persisted));
        } catch (e) {
          console.warn("Failed to fetch profile and no persisted user available", e);
        }
      } finally {
        setLoading(false);
      }
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
