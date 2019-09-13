import React from "react";
import { Link } from "react-router-dom";
import "./style.css";

function Navbar() {
    return (
        <nav className-="navbar navbar-expand-lg navbar-light bg-light">
            <Link className="navbar-brand" to="/">
                AppName
            </Link>
            <div>
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <Link
                            to="/"
                            className={
                                window.location.pathname === "/" || window.location.pathname === "/profile"
                                    ? "nav-link active"
                                    : "nav-link"
                            }
                        >
                            
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link
                            to="/workout"
                            className={
                                window.location.pathname === "/workout"
                                    ? "nav-link active"
                                    : "nav-link"
                            }
                        >
                            Workout
                                </Link>
                    </li>
                    <li className="nav-item">
                        <Link
                            to="/nutrition"
                            className={
                                window.location.pathname === "/nutrition"
                                ? "nav-link active"
                                : "nav-link"
                            }
                        >
                            Nutrition
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link
                            to="/profile"
                            className={
                                window.location.pathname === "/profile"
                                ? "nav-link active"
                                : "nav-link"
                            }
                        >
                            Profile
                        </Link>
                    </li>
                </ul>
            </div>
        </nav>
            )
}

export default Navbar;