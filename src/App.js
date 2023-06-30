import React, { useEffect, useState } from "react";
import { Route, Switch, useHistory } from "react-router-dom";
import NavBar from "./NavBar";
import BookForm from "./BookForm";
import BookSearch from "./BookSearch";
import Home from "./Home";
import BooksCollection from "./BooksCollection";
import FavoriteBooks from "./FavoriteBooks";
import "./index.css";



function App() {
  const [books, setBooks] = useState([]);
  const [titleSearch, setTitleSearch] = useState('');

  const history = useHistory();
  
  useEffect(() => {
    fetch('http://localhost:3000/books')
    .then(response => response.json())
    .then(bookData => setBooks(bookData))
  }, []);

  const addToFavorites = (book) => {
    if(!book.favorite) {
      const updatedBook = { ...book, favorite: true};
      updateFavoriteStatus(updatedBook)
    }
  };

  const removeFromFavorites = (book) => {
    if (book.favorite) {
      const updatedBook = { ...book, favorite: false};
      updateFavoriteStatus(updatedBook)
    }
  };

  const updateFavoriteStatus = (updatedBook) => {
    fetch(`http://localhost:3000/books/${updatedBook.id}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({favorite: updatedBook.favorite})
    })
    .then(response => response.json())
    .then(updatedBookData => {
      const updatedBooks = books.map(book => {
        if(book.id === updatedBook.id) {
          return updatedBookData
        }
        return book;
      });
      setBooks(updatedBooks)
    })
  }

  const favoriteBooks = books.filter(book => book.favorite)

  const handleAddBook = (newBookData) => {
    setBooks([...books, newBookData]);
    history.push("/my-collection");
  };

  return (
    <div>
  <NavBar />
  <BookSearch 
    titleSearch={ titleSearch } 
    setTitleSearch={ setTitleSearch }
  />
  <Switch>
    <Route 
      exact 
      path="/my-collection" 
    >
      <BooksCollection 
        books={ books } 
        titleSearch={ titleSearch } 
        addToFavorites={ addToFavorites } 
        removeFromFavorites={ removeFromFavorites }
      />
    </Route>
    <Route 
      path="/add-book"
    >
      <BookForm 
        books={ books } 
        setBooks={ setBooks } 
        handleAddBook={ handleAddBook }
      />
    </Route>
    <Route 
      path='/favorites'
    >
      <FavoriteBooks 
        favoriteBooks={ favoriteBooks }
        removeFromFavorites={ removeFromFavorites }
      />
    </Route>
    <Route 
      exact 
      path="/"
    >
      <Home />
    </Route>
  </Switch>
</div>
  );
}

export default App;

