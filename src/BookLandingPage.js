import React, { useEffect, useState } from "react";
import BooksCollection from "./BooksCollection";
import BookForm from "./BookForm";
import BookSearch from "./BookSearch";

const BookLandingPage = () => {
    const [books, setBooks] = useState([]);

    useEffect(() => {
        fetch('http://localhost:3000/books')
            .then(response => response.json())
                .then(bookData => setBooks(bookData))
    }, [])

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