import React from "react";

const BookSearch = ({ titleSearch, setTitleSearch }) => {


    return (
        <div>
            <label htmlFor="search">Search By Title:</label>
            <input
            type="text"
            id="search"
            placehoder="Type a book title to search..."
            value={ titleSearch }
            onChange={(e) => setTitleSearch(e.target.value)}
            />
        </div>
    );
};

export default BookSearch;