import React from 'react';
import Book from './book';
import {search, update } from '../BooksAPI';
import { Link } from 'react-router-dom';


class Search extends React.Component {
  state = {
    searchBooks: [],
    query: ''
  }

  searchBook = () =>  {
    search(this.state.query).then((res) => {
      this.setState({
        searchBooks: res
      })
    })

  }

  handleQueryChange = (event) => {
    this.setState({ query: event.target.value });
  }



    render() {
        return (
            <div className="search-books">
            <div className="search-books-bar">
                <Link className="close-search" to="/">Close</ Link>
              <div className="search-books-input-wrapper">

                <input type="text" placeholder="Search by title or author" value={this.state.query} onChange={this.handleQueryChange} />

              </div>
            </div>
            <div className="search-books-results">
              <ol className="books-grid">

              </ol>
            </div>
          </div>
        )
    }
}

export default Search;