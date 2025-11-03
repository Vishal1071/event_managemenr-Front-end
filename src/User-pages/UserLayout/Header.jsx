import './UserLayout.css'
import { NavLink, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { useAuth } from '../../Context/AuthContext';

const Header = () => {
    const { user, setUser } = useAuth();
    const navigate = useNavigate();
    const [open, setOpen] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false); // for mobile menu

    const handleLogout = () => {
    setUser(null);
    navigate("/signin");
  };
    return (
        <>
            <div className="header">
                <div className="tital" onClick={() => navigate(`/`)}>
                    <img src="/logo.png" alt="logo.png" />
                    <div className="titalText">
                        <h4>HARMONI</h4>
                        <p>EVENT MANAGEMENT</p>
                    </div>
                </div>

                {/* Hamburger only on small screen */}
                <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
                    ☰
                </div>

                {/* Menu */}
                <div className={`menu ${menuOpen ? "active" : ""}`}>
                    <NavLink to="/" className={({isActive})=>{return isActive ? "heloo" : ""}}>HOME</NavLink>
                    <div className="dropdown">
                        <button className="dropbtn">EVENT▾</button>
                        <div className="dropdown-content">
                            <NavLink to="/events/wedding"className={({isActive})=>{return isActive ? "heloo" : ""}}>Wedding Event</NavLink>
                            <NavLink to="/events/cricket"className={({isActive})=>{return isActive ? "heloo" : ""}}>Cricket Event</NavLink>
                            <NavLink to="/events/corporate"className={({isActive})=>{return isActive ? "heloo" : ""}}>Corporate Event</NavLink>
                            <NavLink to="/events/birthday"className={({isActive})=>{return isActive ? "heloo" : ""}}>Birthday Party</NavLink>
                        </div>
                    </div>
                    <NavLink to="/gallery" className={({isActive})=>{return isActive ? "heloo" : ""}}>GALLERY</NavLink>
                    <NavLink to="/contact" className={({isActive})=>{return isActive ? "heloo" : ""}}>CONTACT</NavLink>
                    <NavLink to="/about" className={({isActive})=>{return isActive ? "heloo" : ""}}>ABOUT</NavLink>
                </div>

                {/* User menu */}
                <div className="user-menu">
                    {user ? (
                        <>
                        <img 
                        src="/proPic.jpg" 
                        alt="STI-modified.png" 
                        className='profile-img' 
                        onClick={() => setOpen(!open)} 
                    />
                    {open && (
                        <div className="drop-down">
                            <NavLink to="/profile"><button>Profile</button></NavLink>
                            <NavLink to="/mybooking"><button>My booking</button></NavLink>
                            <NavLink to="/signin"><button>Logout</button></NavLink>
                        </div>
                    )}
                    <span className='span'>{user?.name}</span>
                    </>
                    ):( 
                        <button className='mail-login-btn' onClick={handleLogout}>Login</button>
                    )}
                    
                </div>
            </div>
        </>
    );
}

export default Header ;
