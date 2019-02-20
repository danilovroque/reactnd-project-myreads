import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { Debounce } from 'react-throttle';
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

    

    /**
     * @description Função utilizada para limpar o estado 'books'
     */
    clearBooks = () => {
        this.setState(() => ({
            books: []
        }));
    }

    /**
     * @description Função utilizada para fazer a busca por novos livros. Essa função utiliza a API BooksAPI.
     * @param {string} value - Texto a ser considerado na busca
     */
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

    /**
     * @description Função que lida com a alteração no texto no input de busca.
     * @param {event} event - Evento que chama a função.
     */
    handleTextChange = (event) => {
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
                        <Debounce time='1' handler='onChange'>
                            <input type="text" placeholder="Search by title or author" 
                                onChange={(event) => this.handleTextChange(event)}/>
                        </Debounce>
                    </div>
                </div>

                <SearchBooks books={this.state.books} onShelfChange={this.props.onShelfChange} />
          </div>
        )
    }
}

export default SearchContainer;