import React from 'react';
import PropTypes from 'prop-types';
import Book from './Book.js';

const SearchBooks = () => {

    const { books, onShelfChange } = this.props;
    return (  
        <div className="search-books-results">
            <ol className="books-grid">
                {books.length <= 0 ? (
                    <p>Nenhum resultado encontrado</p> 
                ) : (books.map(book => (
                    <li key={book.id}>
                        <Book book={book} onShelfChange={onShelfChange} />
                    </li>
                )))}
            </ol>
        </div>
    )
}

SearchBooks.propTypes = {
    books: PropTypes.array.isRequired,
    onShelfChange: PropTypes.func.isRequired
}

export default SearchBooks;