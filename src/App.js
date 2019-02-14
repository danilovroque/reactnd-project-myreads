import React from 'react';
import { Route } from 'react-router-dom';
import './App.css';
import SearchContainer from './SearchContainer.js';
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
    return (
      <div className="app">
        <Route exact path='/' render={() =>(
            <ListCategories books={this.state.books} />
          )} 
        />

        <Route path='/search' component={SearchContainer} />
      </div>
    )
  }
}

export default BooksApp
