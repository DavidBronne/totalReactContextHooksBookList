import React, {useContext} from 'react'
import {BookContext} from '../contexts/BookContext'

const Navbar = () => {

    const {books} = useContext(BookContext)
    console.log('books :>> ', books);

    return (
        <div className='navbar'>
            <h1>Eliot's Library</h1>
            <p>You have {books.length} books ot read</p>
        </div>
    );
}
 
export default Navbar;
