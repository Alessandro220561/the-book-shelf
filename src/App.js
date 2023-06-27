import React, { useEffect, useState } from "react";
import NavBar from "./NavBar";
import BookForm from "./BookForm";
import { Route, Switch } from "react-router-dom/cjs/react-router-dom.min";
import BookSearch from "./BookSearch";
import FavoriteBooks from "./FavoriteBooks";
import Home from "./Home";
import BooksCollection from "./BooksCollection";


function App() {
  const [books, setBooks] = useState([]);
  const [titleSearch, setTitleSearch] = useState('');
  const [favoriteBooks, setFavoriteBooks] = useState([]);

    useEffect(() => {
      fetch('http://localhost:3000/books')
          .then(response => response.json())
              .then(bookData => setBooks(bookData))
  }, [])

  const addToFavorites = (book) => {
    setFavoriteBooks((prevFavoriteBooks) => [...prevFavoriteBooks, book]);
  };

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
    <Route path="/favorites">
      <FavoriteBooks favoriteBooks={ favoriteBooks } />
    </Route>
    <Route exact path="/">
      <Home />
    </Route>
  </Switch>
</div>
  );
}

export default App;


