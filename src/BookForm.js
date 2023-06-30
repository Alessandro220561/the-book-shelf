import React, { useState } from "react";



const BookForm = ({ handleAddBook }) => {

    const [newBook, setNewBook] = useState({
        title: "",
        author: "",
        publisher: "",
        price: 0,
        image: ""
    })

    

    const handleSubmit = (e) => {
        e.preventDefault();

          fetch('http://localhost:3000/books', {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(newBook)
            })
                .then(response => response.json())
                    .then(newBookData => {
                        handleAddBook(newBookData)
                    })
           
    };

    return (
        <div className="book-form-container">
            <h1>Add Your Books</h1>
            <form onSubmit={ handleSubmit }>
                <input type="text" placeholder="title" value={newBook.title} onChange={(e) => setNewBook({...newBook, title: e.target.value})}/>
                <input type="text" placeholder="author" value={newBook.author} onChange={(e) => setNewBook({...newBook, author: e.target.value})}/>                
                <input type="text" placeholder="publisher" value={newBook.publisher} onChange={(e) => setNewBook({...newBook, publisher: e.target.value})}/>
                {/* <input type="number" placeholder="price" value={newBook.price} onChange={(e) => setNewBook({...newBook, price: e.target.value})}/> */}
                <input type="text" placeholder="image" value={newBook.image} onChange={(e) => setNewBook({...newBook, image: e.target.value})}/>
                <input type="submit" value="Add" />
            </form>
        </div>
    )
};

export default BookForm;

