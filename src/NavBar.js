import React from "react";
import { NavLink } from "react-router-dom/cjs/react-router-dom.min";

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
        <nav className="navbar"> 
            <NavLink
                to='/'
                exact
            >
                Home
            </NavLink>
            <NavLink 
                to="/store"
                exact
                activeClassName="active"
            >
                Book Store
            </NavLink>
            <NavLink
                to="/sell"
                exact
                activeClassName="active"
            >
                Sell Your Book
            </NavLink>
            <NavLink
                to="/favorite"
                exact
                activeClassName="active"
            >
                Favorite Books
            </NavLink>
        </nav>
    )
};

export default NavBar;