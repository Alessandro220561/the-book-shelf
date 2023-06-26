import React from "react";
import { NavLink } from "react-router-dom/cjs/react-router-dom.min";
import "./styles/NavStyle.css";

//  const linkStyles = {
//     display: "inline",
//     padding: "8px",
//     background: "#dddddd"
//  }

//  const activeLinkStyles = {
//      background: "#555",
//      color: "white"
//  }

    // const linkStyles = {
    //     listStyleType: "none",
    //     display: "inline",
    //     margin: "0",
    //     padding: "0",
    //     overflow: "hidden",
    //     backgroundColor: "yellow",
        
    // }

    // const activeLinkStyles = {
    //     backgroundColor: "#04AA6D"
    // }

const NavBar = () => {
    return (
        <nav> 
            <NavLink 
                to="/"
                exact
                activeClassName="active"
            >
                Book Store
            </NavLink>
            <NavLink
                to="/Sell"
                exact
                activeClassName="active"
            >
                Sell Your Book
            </NavLink>
            <NavLink
                to="/Search"
                exact
                activeClassName="active"
            >
                Search For Books
            </NavLink>
        </nav>
    )
};

export default NavBar;