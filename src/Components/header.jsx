import React from 'react'
import { Link, useLocation } from "react-router-dom";
import "../Styles/header.css";

const Header = () => {
    const activeLocation = useLocation().pathname;
  return (
    <header className="navber">

      <div className="menuContainer">
                        <Link to="/" className="Image">
                            <img
                            />
                            Image
                        </Link>    

                        <Link class="links"
                            to="/"
                            className={activeLocation === "/" ? "menuActive" : ""}
                        >
                            Home
                        </Link>

                        {/* <Link class="links"
                            to="/about"
                            className={activeLocation === "/products" ? "menuActive" : ""}
                        >
                            About
                        </Link> */}

                        <Link class="links"
                            to="/contact"
                            className={activeLocation === "/contact" ? "menuActive" : ""}
                        >
                            Contact Us
                        </Link>

                        <Link class="links"
                            to="/worker"
                            className={activeLocation === "/worker" ? "menuActive" : ""}
                        >
                            Reviews
                        </Link>

                        <Link class="links"
                            to="/cards"
                            className={activeLocation === "/cards" ? "menuActive" : ""}
                        >
                            Login
                        </Link>

                        <Link class="links"
                            to="/cards"
                            className={activeLocation === "/cards" ? "menuActive" : ""}
                        >
                            Profile
                        </Link>
        </div>
    </header>
  )
}

export default Header