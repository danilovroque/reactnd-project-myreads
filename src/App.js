import React from 'react';
import { Route, Link } from 'react-router-dom';
import './App.css';
import SearchBook from './SearchBook.js';
import ListCategories from './ListCategories.js';
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

  render() {
    console.log(this.state.books);
    return (
      <div className="app">
        <Route exact path='/' render={() =>(
            <ListCategories books={this.state.books} />
          )} 
        />

        <Route path='/search' component={SearchBook} />
      </div>
    )
  }
}

export default BooksApp
