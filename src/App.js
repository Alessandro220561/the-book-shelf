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
  const [isFavorite, setIsFavorite] = useState(false)
  
  useEffect(() => {
    fetch('http://localhost:3000/books')
    .then(response => response.json())
    .then(bookData => setBooks(bookData))
  }, []);
  
  const addToFavorites = (book) => {
      const updatedBook = {...book, favorite: !isFavorite};

      fetch(`http://localhost:3000/books/${book.id}`, {
        method: 'PATCH',
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(updatedBook)
      })
        .then(response => response.json())
        .then(addFavoriteBook => setFavoriteBooks([...favoriteBooks, addFavoriteBook]))   

  }

  return (
    <div>
  <NavBar />
  <BookSearch titleSearch={ titleSearch } setTitleSearch={ setTitleSearch }/>
  <Switch>
    <Route exact path="/my-collection" >
      <BooksCollection 
        books={ books } 
        titleSearch={ titleSearch } 
        addToFavorites={ addToFavorites } 
        isFavorite={ isFavorite } 
        setIsFavorite={ setIsFavorite }
      />
    </Route>
    <Route path="/add-book">
      <BookForm 
        books={ books } 
        setBooks={ setBooks } 
      />
    </Route>
    <Route path='/favorites'>
      <FavoriteBooks 
        favoriteBooks={ favoriteBooks }
      />
    </Route>
    <Route exact path="/">
      <Home />
    </Route>
  </Switch>
</div>
  );
}

export default App;


