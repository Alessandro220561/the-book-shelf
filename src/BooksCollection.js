import React, { useState } from "react";
import BookCard from "./BookCard";

const BooksCollection = ({ books, titleSearch, addToFavorites, removeFromFavorites  }) => {

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
        addToFavorites={ addToFavorites }
        removeFromFavorites={ removeFromFavorites }
    />
))

        
    return (
        <div className="books-list">{booksToList}</div>
    )

};

export default BooksCollection;

