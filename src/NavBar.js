import React from "react";
import { NavLink } from "react-router-dom/cjs/react-router-dom.min";

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
                to="/my-collection"
                exact
                activeClassName="active"
            >
                My Books
            </NavLink>
            <NavLink
                to="/add-book"
                exact
                activeClassName="active"
            >
                Add Your Book
            </NavLink>
            <NavLink
                to="/favorites"
                exact
                activeClassName="active"
            >
                Favorite Books
            </NavLink>
        </nav>
    )
};

export default NavBar;