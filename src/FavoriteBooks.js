import React from "react";
import BookCard from "./BookCard";

const FavoriteBooks = ({ favoriteBooks, removeFromFavorites }) => {
  return (
    <div className="favorite-books">
      <h2>Favorite Books</h2>
      {favoriteBooks.length === 0 ? (
        <p>No favorite books yet.</p>
      ) : (
        <ul>
          {favoriteBooks.map((book) => (
            <BookCard
              key={book.id}
              book={book}
              title={book.title}
              author={book.author}
              publisher={book.publisher}
              price={book.price}
              image={book.image}
              removeFromFavorites={removeFromFavorites}
            />
          ))}
        </ul>
      )}
    </div>
  );
};

export default FavoriteBooks;
