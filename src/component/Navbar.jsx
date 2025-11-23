import React, { useState } from "react";
import "./navbar.css";
import logo from "../assets/logo.webp";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import BulkOrder from "./pages/BulkOrder";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [openPopup, setOpenPopup] = useState(false); // <-- POPUP STATE

  const closeMenu = () => setMenuOpen(false);

  return (
    <>
      <motion.nav
        className="navbar"
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <div className="nav-container">

          {/* Logo */}
          <motion.div className="logo" whileHover={{ scale: 1.05 }}>
            <Link to="/" onClick={closeMenu}>
              <img src={logo} alt="Nutrofill Logo" />
            </Link>
          </motion.div>

          {/* Nav Links */}
          <ul className={`nav-links ${menuOpen ? "open" : ""}`}>
            <li><Link to="/" onClick={closeMenu}>Home</Link></li>
            <li><Link to="/products" onClick={closeMenu}>Products</Link></li>
            <li><Link to="/about" onClick={closeMenu}>About</Link></li>
            <li><Link to="/contact" onClick={closeMenu}>Contact</Link></li>

            {/* ⭐ Bulk Order Button */}
            <li>
              <button
                className="bulk-btn"
                onClick={() => setOpenPopup(true)}
              >
                Bulk Order
              </button>
            </li>
          </ul>

          {/* Hamburger */}
          <motion.div
            className="menu-toggle"
            onClick={() => setMenuOpen(!menuOpen)}
            whileTap={{ scale: 0.8 }}
          >
            <div className={`bar ${menuOpen ? "open" : ""}`}></div>
            <div className={`bar ${menuOpen ? "open" : ""}`}></div>
            <div className={`bar ${menuOpen ? "open" : ""}`}></div>
          </motion.div>
        </div>
      </motion.nav>

      {/* ⭐ POPUP COMPONENT */}
      <BulkOrder open={openPopup} onClose={() => setOpenPopup(false)} />
    </>
  );
};

export default Navbar;
