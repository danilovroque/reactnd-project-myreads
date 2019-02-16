import React from 'react';
import PropTypes from 'prop-types';
import Book from './Book.js';

const Category = (props) => {
    const { books, onShelfChange, categoryName } = props;
    return (
        <div className="bookshelf">
            <h2 className="bookshelf-title">{categoryName}</h2>
            <div className="bookshelf-books">
                <ol className="books-grid"> 
                    {
                        books.map(book => (
                            <li key={book.id}>
                                <Book book={book} onShelfChange={onShelfChange} />
                            </li>
                        ))
                    }
                </ol>
            </div>
        </div>
    )
}

Category.propTypes = {
    books: PropTypes.array.isRequired,
    onShelfChange: PropTypes.func.isRequired,
    categoryName: PropTypes.string.isRequired
}

export default Category;