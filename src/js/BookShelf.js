import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Category from './Category.js';

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

const BookShelf = (props) => {
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