import React from 'react';
import { Route } from 'react-router-dom';
import './App.css';
import SearchContainer from './SearchContainer.js';
import BookShelf from './BookShelf.js';
import * as BooksAPI from './utils/BooksAPI.js';

class BooksApp extends React.Component {
  state = {
    books: []
  }

  componentDidMount() {
    BooksAPI.getAll()
      .then((books) => {
        this.setState(() => ({
          books
        }));
      });
  }

  shelfChange = (book, newShelf) => {
    
    const tmpBook = this.state.books.find(b => b.id === book.id);

    BooksAPI.update(book, newShelf)
      .then((response) => {
        if (!response.error){

          if (!tmpBook) {
            book.shelf = newShelf;
            this.setState((current) => ({
              books: current.books.concat(book)
            }));
          } else {
            this.setState((current) => ({
              books: current.books.map(b => ( 
                    b.id === book.id ? ({...b, shelf: newShelf}) : b
              ))
            }));
          }
        }
      });
  }

  render() {
    return (
      <div className="app">
        <Route exact path='/' render={() =>(
            <BookShelf books={this.state.books} onShelfChange={this.shelfChange} />
          )} 
        />

        <Route path='/search' render={() => (
            <SearchContainer books={this.state.books} onShelfChange={this.shelfChange} />
          )} 
        />
      </div>
    )
  }
}

export default BooksApp
