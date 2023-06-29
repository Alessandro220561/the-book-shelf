import React from "react";

const BookSearch = ({ titleSearch, setTitleSearch }) => {


    return (
        <div className="searchbar">
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