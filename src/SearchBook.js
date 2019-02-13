import React, { Component } from 'react';

class SearchBook extends Component {
    state = {
        textValue: ''
    }

    handleTextChange (event) {
        const value = event.target.value;
        this.setState(() => ({
            textValue: value
        }));
    }

    render () {
        return (
            <div className="search-books">
                <div className="search-books-bar">
                <button className="close-search" onClick={this.props.onReturn}>Close</button>
                    <div className="search-books-input-wrapper">
                        {/*
                        <button className="close-search" onClick={() => this.setState({ showSearchPage: false })}>Close</button>
                        NOTES: The search from BooksAPI is limited to a particular set of search terms.
                        You can find these search terms here:
                        https://github.com/udacity/reactnd-project-myreads-starter/blob/master/SEARCH_TERMS.md

                        However, remember that the BooksAPI.search method DOES search by title or author. So, don't worry if
                        you don't find a specific author or title. Every search is limited by search terms.
                        */}
                        <input type="text" placeholder="Search by title or author" value={this.state.textValue} onChange={(event) => this.handleTextChange(event)}/>

                    </div>
                </div>
                <div className="search-books-results">
                    <ol className="books-grid"></ol>
                </div>
          </div>
        )
    }
}

export default SearchBook;