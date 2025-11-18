import './AdminLayout.css';
import { PiUserListFill } from "react-icons/pi";
import axios from 'axios';
import { BsPostcardHeartFill } from "react-icons/bs";
import { BiCategory } from "react-icons/bi";
import { MdOutlineContactPhone } from "react-icons/md";
import { IoLogOutOutline } from "react-icons/io5";
import { NavLink , Link, useNavigate} from "react-router-dom";



function Aheader() {

  const navigate = useNavigate();

  const handlelogout = () =>{
    localStorage.removeItem("accessToken");
    delete axios.defaults.headers.common["Authorization"];
    navigate("/signin");
  }

  return (
    <>
      <div className="admin-navbar">
        <nav className="navbar navbar-dark bg-dark">
          <div className="container-fluid admin-navbarrr">
            <form className="d-flex admin-search-form " role="search">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button className="btn btn-outline-success" type="submit">
                Search
              </button>
            </form>

            <div className="dropdown">
              <a
                href="#"
                className="d-flex align-items-center text-white text-decoration-none dropdown-toggle"
                data-bs-toggle="dropdown"
              >
                <img
                  src="/proPic.jpg"
                  alt="proPic.png"
                  width="32"
                  height="32"
                  className="rounded-circle me-2"
                />
                <strong>Admin vishal</strong>
              </a>
              <ul className="dropdown-menu dropdown-menu-dark text-small shadow">
                <li><Link className="dropdown-item" to="/admin/profile">Profile</Link></li>
                <li><Link className="dropdown-item" to="404">New project</Link></li>
                <li><Link className="dropdown-item" to="404">Settings</Link></li>
                <li><hr className="dropdown-divider" /></li>
              </ul>
            </div>
          </div>
        </nav>
      </div>

      {/* Admin Sidebar */}
      <div className="admin-sidebar">
        <div className="admin-sidebar-inner d-flex flex-column flex-shrink-0 p-3">
          <Link
            to="/admin"
            className="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-white text-decoration-none"
          >
            <span className="fs-4">Admin Panel</span>
          </Link>
          <hr />
          <ul className="nav nav-pills flex-column mb-auto">
            <li className="nav-item">
              <NavLink
                to="/admin"
                end
                className={({ isActive }) =>
                  isActive ? "nav-link active" : "nav-link"
                }
              >
                <PiUserListFill /> User List
              </NavLink>
            </li>

            <li>
              <NavLink
                to="/admin/eventPost"
                className={({ isActive }) =>
                  isActive ? "nav-link active" : "nav-link"
                }
              >
                <BsPostcardHeartFill /> Event Post
              </NavLink>
            </li>

            <li>
              <NavLink
                to="/admin/postCategory"
                className={({ isActive }) =>
                  isActive ? "nav-link active" : "nav-link"
                }
              >
                <BiCategory /> Post Category
              </NavLink>
            </li>

            <li>
              <NavLink
                to="/admin/addGallary"
                className={({ isActive }) =>
                  isActive ? "nav-link active" : "nav-link"
                }
              >
                <MdOutlineContactPhone /> Add Gallary
              </NavLink>
            </li>

            <li>
              <NavLink
                to="/admin/contactList"
                className={({ isActive }) =>
                  isActive ? "nav-link active" : "nav-link"
                }
              >
                <PiUserListFill /> Contact List
              </NavLink>
            </li>
          </ul>

          <hr />
          <button className="logout-btn" onClick={handlelogout} >Logout  <IoLogOutOutline /></button>
        </div>
      </div>
    </>
  );
}

export default Aheader;
