import React, { Component } from 'react';
import Book from './Book.js';

class SearchBooks extends Component {

    render() {
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
}

export default SearchBooks;