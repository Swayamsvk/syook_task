import React, { useContext } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  return (
    <div className="navbar">
      <nav>
        <div className="logo">Q</div>
        <div className="nav-wrapper">
          <ul className="menu-area">
            <li>
              <Link to="/">Login</Link>
            </li>
            <li>
              <Link to="/tabone">Tabone</Link>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
