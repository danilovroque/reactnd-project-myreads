import React from 'react';
import Book from './Book.js';

const Category = () => {
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

export default Category;