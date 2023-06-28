import React from "react";
import BookCard from "./BookCard";

const FavoriteBooks = ({ favoriteBooks }) => {
    if (!favoriteBooks) {
        return null;
    }
    
    return (
        <div className="favorite-books">
      <h2>Favorite Books</h2>
      {favoriteBooks.length === 0 ? (
        <p>No favorite books yet.</p>
      ) : (
        <ul>
          {favoriteBooks.map(book => (
    <BookCard 
        key={book.id}
        book={book}
        title={book.title}
        author={book.author}
        publisher={book.publisher}
        price={book.price}
        image={book.image}
    />
))}
        </ul>
      )}
    </div>
    );
  };

export default FavoriteBooks;

// const FavoriteBooks = ({ favoriteBooks }) => {
//     return (
//         <div>
//             <h1>Favorite Books</h1>
//             <ul>
//         {favoriteBooks.map((book) => (
//           <li key={book.id}>{book.title}</li>
//         ))}
//       </ul>
//         </div>
//     )
// };