import React, {createContext, useState} from 'react';

export const BookContext = createContext()

const BookContextProvider = (props) => {

    const [books, setBooks] = useState([
        {title: 'name of the wind', author: 'patrick rothfuss', id: 1},
        {title: 'the final empire', author: 'brandon sanderson', id: 2}
    ])
    
    const addBook = (title, author) => {
        setBooks([
            ...books,
            {title:title, author:author}
        ])
    }
    const deleteBook = (id) => {
        setBooks(
            books.filter( book => {
                return (book.id !== id)
            })
        )
    }
    
    return (
        <BookContext.Provider value={{books, addBook, deleteBook}}>
            {props.children}
        </BookContext.Provider>
    );
}
 
export default BookContextProvider;