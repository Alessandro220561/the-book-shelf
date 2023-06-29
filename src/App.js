import React, { useEffect, useState } from "react";
import { Route, Switch } from "react-router-dom/cjs/react-router-dom.min";
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
  const [favoriteBooks, setFavoriteBooks] = useState([]);
  
  
  useEffect(() => {
    fetch('http://localhost:3000/books')
    .then(response => response.json())
    .then(bookData => setBooks(bookData))
  }, []);

  //console.log(books)
  
  const addToFavorites = (book) => {
    //console.log(book)
    const updatedBooks = books.map(item => {
      if (item.id === book.id) {
        return { ...item, favorite: !item.favorite };
      }
      return item;
    });
  

      fetch(`http://localhost:3000/books/${book.id}`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ favorite: true})
      })
      .then(response => response.json())
      .then(updatedBookData => {
        setBooks(updatedBooks)
        setFavoriteBooks([...favoriteBooks, updatedBookData])     
    })
  }
  

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
      />
    </Route>
    <Route 
      path="/add-book"
    >
      <BookForm 
        books={ books } 
        setBooks={ setBooks } 
      />
    </Route>
    <Route 
      path='/favorites'
    >
      <FavoriteBooks 
        favoriteBooks={ favoriteBooks }
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

