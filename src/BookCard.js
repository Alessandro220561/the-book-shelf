import React, { useEffect, useState } from "react";

const BookCard = ({ book, addToFavorites, removeFromFavorites }) => {

    const handleOnClick = () => {
       if (book.favorite) {
        removeFromFavorites(book)
       } else {
        addToFavorites(book)
       }
    }

    return (
      <div className="book-card">
        <img className="book-image" src={book.image} alt={book.title}/>
        <h3>{book.title}</h3>
        <h4>Author: {book.author}</h4>
            <p>Publisher: {book.publisher}</p>
               {book.favorite ? (<button onClick={handleOnClick}>🌟</button>) : (<button onClick={handleOnClick}>☆</button>)}
       </div>   
    )
};

export default BookCard;


