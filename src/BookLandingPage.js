import React from "react";
import BooksCollection from "./BooksCollection";
import BookForm from "./BookForm";
import BookSearch from "./BookSearch";

const BookLandingPage = () => {
    return (
        <div>
            <BooksCollection />
            <BookForm />
            <BookSearch />
        </div>
    )
};

export default BookLandingPage;

//initial fetch request to db.json