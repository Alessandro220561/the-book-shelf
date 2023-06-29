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

  //console.log(books)
  
  const addToFavorites = (book) => {
    //console.log(book)
      const updatedBook = {...book, favorite: true};

      fetch(`http://localhost:3000/books/${book.id}`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(updatedBook)
      })
      .then(response => response.json())
      .then(updatedBookData => setFavoriteBooks([...favoriteBooks, updatedBookData]))
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

// if (updatedBookData.favorite) {
//   setFavoriteBooks([...favoriteBooks, updatedBookData]);
// } else {
//   const updatedFavoriteBooks = favoriteBooks.filter(b => b.id !== updatedBookData.id);
//   setFavoriteBooks(updatedFavoriteBooks);
// }
// });
