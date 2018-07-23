import React from 'react';
import Book from './book';
import {search} from '../BooksAPI';
import { Link } from 'react-router-dom';


class Search extends React.Component {
  state = {
    searchBooks: [],
    query: 'eeeey',
  }

  searchBook = () =>  {
    search(query).then((res) => {
      this.setState({
        searchBooks: res
      })
    })

  }

  handleQueryChange = (event) => {
    this.setState({ query: event.taget.value });
  }

    render() {
        return (
            <div className="search-books">
            <div className="search-books-bar">
              <a className="close-search" onClick={() => this.setState({ showSearchPage: false })}>Close</a>
              <div className="search-books-input-wrapper">

                <input type="text" placeholder="Search by title or author" value={this.state.query} onChange={this.handleQueryChange} />

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