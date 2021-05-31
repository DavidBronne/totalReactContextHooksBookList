import React, {useContext, useState} from 'react';
import {BookContext} from '../contexts/BookContext'

const BookForm = () => {
    const {dispatch} = useContext(BookContext)
    const [title, setTitle] = useState()
    const [author, setAuthor] = useState()

    const hanldeSubmit = (e) => {
        e.preventDefault()
        dispatch({type:'ADD_BOOK', book: {title:title,author:author}})
        setTitle('');
        setAuthor("")
    }
    
    return (
        <form onSubmit={hanldeSubmit} >
            <input type="text" required placeholder='title' value={title} onChange={(e)=>setTitle(e.target.value)}/>
            <input type="text" required placeholder='Author' value={author} onChange={(e)=>setAuthor(e.target.value)}/>
            <input type='submit' value='add Book'/>
        </form>
    );
}
 
export default BookForm;