import React from 'react';
import { Link } from 'react-router-dom';
import Category from './Category.js';
import PropTypes from 'prop-types';

const categories = [
    {
        'id': 'currentlyReading',
        'name': 'Currently Reading'
    }, 
    {
        'id': 'wantToRead',
        'name': 'Want to Read'
    }, 
    {
        'id': 'read',
        'name': 'Read'
    }
];

const BookShelf = () => {
    const { books, onShelfChange } = props; 
    
    return (
        <div className="list-books">
            <div className="list-books-content">
                <div className="list-books-title">
                    <h1>MyReads</h1>
                </div>
                <div>
                    {categories.map((category) => (
                        <Category categoryName={category.name} key={category.id}
                            onShelfChange={onShelfChange} books={
                            books.filter(b => b.shelf === category.id)
                        } />
                    ))}
                </div>
                <div className="open-search">
                    <Link to='/search'>Add a book</Link>
                </div>
            </div>
        </div>
    )
    
}

BookShelf.propTypes = {
    books: PropTypes.array.isRequired,
    onShelfChange: PropTypes.func.isRequired
}

export default BookShelf;