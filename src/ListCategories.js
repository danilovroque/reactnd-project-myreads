import React, { Component } from 'react';
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

class ListCategories extends Component {
    render () {
        const { books } = this.props; 
        
        return (
            <div className="list-books-content">
                <div>
                    {categories.map((category) => (
                        <Category categoryName={category.name} key={category.id} books={
                            books.filter(b => b.shelf === category.id)
                        } />
                    ))}
                </div>
            </div>
        )
    }
}

export default ListCategories;