import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import * as BooksAPI from '../utils/BooksAPI.js';
import SearchBooks from './SearchBooks.js';

class SearchContainer extends Component {

    static propTypes = {
        books: PropTypes.array.isRequired,
        onShelfChange: PropTypes.func.isRequired
    }

    isComponentMonted = false;

    componentDidMount() {
        this.isComponentMonted = true;
    }

    state = {
        textValue: '',
        books: []
    }

    clearBooks = () => {
        this.setState(() => ({
            books: []
        }));
    }

    searchBooks = (value) => {
        BooksAPI.search(value)
            .then((response) => {
                if (this.state.textValue !== '') {

                    if (response.error) {
                        this.clearBooks();
                    } else {
                        this.setState(() => ({
                            books: response.map(r => {
                                const tmpBook = this.props.books.find(b => r.id === b.id);
                                return !tmpBook ? ({...r, shelf: 'none'}) : tmpBook;
                            })
                        }));
                    }
                } else {
                    this.clearBooks();
                }
                
            });           
    }

    handleTextChange (event) {
        const value = event.target.value;

        this.setState(() => ({
            textValue: value
        }));

        

        if (value)
            this.searchBooks(value);
        else
            this.clearBooks();
    }

    render () {
        return (
            <div className="search-books">
                <div className="search-books-bar">
                
                <Link to='/' className='close-search'>Close</Link>
                    <div className="search-books-input-wrapper">
                        <input type="text" placeholder="Search by title or author" 
                            value={this.state.textValue} onChange={(event) => this.handleTextChange(event)}/>
                    </div>
                </div>

                <SearchBooks books={this.state.books} onShelfChange={this.props.onShelfChange} />    
          </div>
        )
    }
}

export default SearchContainer;