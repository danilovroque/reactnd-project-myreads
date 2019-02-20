import React from 'react';
import PropTypes from 'prop-types';

const Book = (props) => {

    /**
     * @description Função utilizada para chamar o método onShelfChange localizado nas props
     * @param {object} book - Livro a ser atualizado
     * @param {string} newShelf - Nova estante onde o livro estará localizado
     */
    const handleShelfChange = (book, newShelf) => {
        props.onShelfChange(book, newShelf);
    }

    const { book } = props;
    return (
        <div className="book">
            <div className="book-top">
                <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: !!book.imageLinks && ( `url("${book.imageLinks.smallThumbnail}")` ) }}></div>
                <div className="book-shelf-changer">
                    <select value={book.shelf} onChange={(event) => handleShelfChange(book, event.target.value)}>
                        <option value="move" disabled>Move to...</option>
                        <option value="currentlyReading">Currently Reading</option>
                        <option value="wantToRead">Want to Read</option>
                        <option value="read">Read</option>
                        <option value="none">None</option>
                    </select>
                </div>
            </div>
            <div className="book-title">{book.title}</div>
            <div className="book-authors">{book.authors && (book.authors.map(author => (
                <p key={author}>{author}</p>
            )))}</div>
        </div>
    )
    
}

Book.propTypes = {
    book: PropTypes.object.isRequired,
    onShelfChange: PropTypes.func.isRequired
}

export default Book;