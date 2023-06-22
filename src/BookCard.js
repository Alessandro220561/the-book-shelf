import React from "react";

const BookCard = ({ book }) => {

    return (
        <li className="card">
            <img src={book.image} alt={book.title}/>
            <h3>{book.title}</h3>
            <h4>{book.author}</h4>
            <p>{book.publisher}</p>
            <p>Price : $22.99</p>
        </li>
    )

};

export default BookCard;