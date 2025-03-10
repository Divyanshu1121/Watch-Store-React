import React from "react";
import "./Navbar.css";

const Navbar = ({ setActivePage, toggleTheme, isDarkMode }) => {
    return (
        <nav className={`navbar ${isDarkMode ? "dark-navbar" : ""}`}>
            <div className="logo" onClick={() => setActivePage("home")}>
                Watch<span>Store</span>
            </div>
            <ul className="nav-links">
                <li onClick={() => setActivePage("home")}>Home</li>
                <li onClick={() => setActivePage("shop")}>Shop</li>
                <li onClick={() => setActivePage("about")}>About</li>
                <li onClick={() => setActivePage("contact")}>Contact</li>
            </ul>
            <button className="theme-toggle" onClick={toggleTheme}>
                {isDarkMode ? "☀️ Light Mode" : "🌙 Dark Mode"}
            </button>
        </nav>
    );
};

export default Navbar;
