import React from "react";
import BookCard from "./BookCard";

const BooksCollection = ({ books, titleSearch }) => {

    const booksToList = books.filter(book => {
        if(titleSearch === '') return true
        return book.title.toLowerCase().includes(titleSearch.toLowerCase())
    })
    .map(book => (
        <BookCard 
            key={book.id}
            book={book}
            title={book.title}
            author={book.author}
            publisher={book.publisher}
            price={book.price}
            image={book.image}
        />
    ))
        
    return (
        <ul className="books-list">{booksToList}</ul>
    )

};

export default BooksCollection;