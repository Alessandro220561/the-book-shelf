import React from "react";

const BookSearch = ({ titleSearch, setTitleSearch }) => {


    return (
        <div className="searchbar">
            <label htmlFor="search">Search By Title:</label>
            <input
            type="text"
            id="search"
            placeholder="Type a book title to search..."
            value={ titleSearch }
            onChange={(e) => setTitleSearch(e.target.value)}
            />
        </div>
    );
};

export default BookSearch;