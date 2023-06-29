import React, { useEffect, useState } from "react";

const BookCard = ({ book, addToFavorites }) => {
    const [isFavorite, setIsFavorite] = useState(false)

    useEffect(() => {
        setIsFavorite(book.favorite)
    }, [book.favorite])

    const handleOnClick = () => {
        setIsFavorite(!isFavorite)
        addToFavorites(book)
    }

    return (
        <div className="book-card">
        <img className="book-image" src={book.image} alt={book.title}/>
        <h3>{book.title}</h3>
        <h4>Author: {book.author}</h4>
                <p>Publisher: {book.publisher}</p>
                <p>Price: ${book.price}</p>
                {isFavorite ?
                (<button onClick={handleOnClick}>🌟</button>)   
                :
                (<button onClick={handleOnClick}>☆</button>)    
                }
    </div>
    
    )

};

export default BookCard;


// <li className="book-card">
// <img src={book.image} alt={book.title}/>
// <h3>{book.title}</h3>
// <h4>Author: {book.author}</h4>
// <p>Publisher: {book.publisher}</p>
// <p>Price: ${book.price}</p>
// {isFavorite ?
// (<button onClick={handleOnClick}>🌟</button>)   
// :
// (<button onClick={handleOnClick}>☆</button>)    
// }
// </li>