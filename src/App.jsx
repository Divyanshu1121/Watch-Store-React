import React, { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./components/Home";
import Shop from "./components/Shop";
import About from "./components/About";
import Contact from "./components/Contact";
import "./index.css";

function App() {
  const [activePage, setActivePage] = useState("home");
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    if (isDarkMode) {
      document.body.classList.add("dark-mode");
    } else {
      document.body.classList.remove("dark-mode");
    }
  }, [isDarkMode]);

  const toggleTheme = () => {
    setIsDarkMode((prevMode) => !prevMode);
  };

  return (
    <div className={`app ${isDarkMode ? "dark" : "light"}`}>
      <Navbar setActivePage={setActivePage} toggleTheme={toggleTheme} isDarkMode={isDarkMode} />
      {activePage === "home" && <Home />}
      {activePage === "shop" && <Shop />}
      {activePage === "about" && <About />}
      {activePage === "contact" && <Contact />}
      <Footer />
    </div>
  );
}

export default App;
