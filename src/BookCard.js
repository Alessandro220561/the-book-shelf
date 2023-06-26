import React, { useState } from "react";

const BookCard = ({ book }) => {
    const [isFavorite, setIsFavorite] = useState(false)

    const handleOnClick = () => {
        setIsFavorite(!isFavorite)
    }

    return (
        <li className="card">
            <img src={book.image} alt={book.title}/>
            <h3>{book.title}</h3>
            <h4>Author: {book.author}</h4>
            <p>Publisher: {book.publisher}</p>
            <p>Price: ${book.price}</p>
            {isFavorite ?
            (<button onClick={handleOnClick}>🌟</button>)   
            :
            (<button onClick={handleOnClick}>☆</button>)    
            }
        </li>
    )

};

export default BookCard;

