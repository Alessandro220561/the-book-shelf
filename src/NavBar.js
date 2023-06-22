import React from "react";
import { NavLink } from "react-router-dom";

const linkStyles = {
    display: "inline-block",
    width: "50px",
    padding: "12px",
    margin: "0 6px 6px",
    background: "brown",
    textDecoration: "none",
    color: "white",
}

const NavBar = () => {
    return (
        <div className="navbar"> 
            <NavLink 
                to="/"
                exact
                style={linkStyles}
                activeStyle={{
                    background: "red"
                    }}
            >
                Book Store
            </NavLink>
            <NavLink
                to="/Sell"
                exact
                style={linkStyles}
                activeStyle={{
                    background: "red"
                }}
            >
                Sell Your Book
            </NavLink>
        </div>
    )
};

export default NavBar;