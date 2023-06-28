import React, { useEffect, useState } from "react";
import NavBar from "./NavBar";
import BookForm from "./BookForm";
import { Route, Switch } from "react-router-dom/cjs/react-router-dom.min";
import BookSearch from "./BookSearch";
import Home from "./Home";
import BooksCollection from "./BooksCollection";
import "./index.css";
import FavoriteBooks from "./FavoriteBooks";


function App() {
  const [books, setBooks] = useState([]);
  const [titleSearch, setTitleSearch] = useState('');
  const [favoriteBooks, setFavoriteBooks] = useState([]);

  
  
  useEffect(() => {
    fetch('http://localhost:3000/books')
    .then(response => response.json())
    .then(bookData => setBooks(bookData))
  }, []);
  
  const addToFavorites = (book) => {
      const updatedBook = {...book, favorite: true};
      setFavoriteBooks([...favoriteBooks, updatedBook])
  }

  return (
    <div>
  <NavBar />
  <BookSearch titleSearch={ titleSearch } setTitleSearch={ setTitleSearch }/>
  <Switch>
    <Route exact path="/store" >
      <BooksCollection books={ books } titleSearch={ titleSearch } addToFavorites={ addToFavorites }/>
    </Route>
    <Route path="/sell">
      <BookForm books={ books } setBooks={ setBooks } />
    </Route>
    <Route path='/favorite'>
      <FavoriteBooks favoriteBooks={ favoriteBooks }/>
    </Route>
    <Route exact path="/">
      <Home />
    </Route>
  </Switch>
</div>
  );
}

export default App;


