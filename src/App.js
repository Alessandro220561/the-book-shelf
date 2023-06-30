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
 //const [favoriteBooks, setFavoriteBooks] = useState([]);
  
  
  useEffect(() => {
    fetch('http://localhost:3000/books')
    .then(response => response.json())
    .then(bookData => setBooks(bookData))
  }, []);

  //console.log(books)
  
  // const addToFavorites = (book) => {
  //   //console.log(book)
  //   const updatedBooks = books.map(item => {
  //     if (item.id === book.id) {
  //       return { ...item, favorite: !item.favorite };
  //     }
  //     return item;
  //   });
  

  //     fetch(`http://localhost:3000/books/${book.id}`, {
  //       method: 'PATCH',
  //       headers: {
  //         'Content-Type': 'application/json'
  //       },
  //       body: JSON.stringify({ favorite: true})
  //     })
  //     .then(response => response.json())
  //     .then(updatedBookData => {
  //       setBooks(updatedBooks)
  //       setFavoriteBooks([...favoriteBooks, updatedBookData])     
  //   })
  // }

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

