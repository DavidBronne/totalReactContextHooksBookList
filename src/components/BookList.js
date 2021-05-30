import {useContext} from 'react';
import {BookContext} from '../contexts/BookContext'
import BookDetails from './BookDetails'

const BookList = () => {
    const {books} = useContext(BookContext)
    return books.length ? (
        <ul className='book-list'>
            {
                books.map( book => {
                    return(

                    <BookDetails book = {book} key={book.id}/>
                    )
                }) 
            }
         </ul>
    ) : (
        <div className="empty">No books left, it s time to get out</div>
    )
}
 
export default BookList;