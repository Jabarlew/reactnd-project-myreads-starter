import React from 'react';
import Book from './book';
import {update, search} from 'react-router-dom';
import { Link } from 'react-router-dom';

class Search extends React.Component {
  state = {
    bookSearch : []
  }

  
  
    render() {
        return (
            <div className="search-books">
            <div className="search-books-bar">
              <a className="close-search" onClick={() => this.setState({ showSearchPage: false })}>Close</a>
              <div className="search-books-input-wrapper">

                <input type="text" placeholder="Search by title or author"/>

              </div>
            </div>
            <div className="search-books-results">
              <ol className="books-grid"></ol>
            </div>
          </div>
        )
    }
}

export default Search;
