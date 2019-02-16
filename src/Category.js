import React, { Component } from 'react';
import Book from './Book.js';

class Category extends Component {
    render () {
        const { books, onShelfChange } = this.props;
        return (
            <div className="bookshelf">
                <h2 className="bookshelf-title">{this.props.categoryName}</h2>
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
}

export default Category;