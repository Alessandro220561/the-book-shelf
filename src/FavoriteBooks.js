import React from "react";
import BookCard from "./BookCard";

const FavoriteBooks = ({ favoriteBooks }) => {
    if (!favoriteBooks || favoriteBooks.length === 0) {
      return (
        <div>
          <h1>Favorite Books</h1>
          <p>No favorite books found.</p>
        </div>
      );
    }
  
    return (
      <div>
        <h1>Favorite Books</h1>
        <ul>
          {favoriteBooks.map((book) => (
            <li key={book.id}>{book.title}</li>
          ))}
        </ul>
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