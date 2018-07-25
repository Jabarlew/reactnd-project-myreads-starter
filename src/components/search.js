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
    if (this.state.query.length < 2) {
      this.setState({
        searchBooks: []
      })
      return
    }
    search(this.state.query).then((res) => {
      if(res){
        this.setState({
          searchBooks: res
        })
      }
    })
  }

  handleQueryChange = (event) => {
    this.setState({ query: event.target.value }, this.searchBook);
  }


  updateShelf = (book, target) => {
    update(book, target.value).then(() => {
      alert(`"${book.title}" added to ${target.options[target.selectedIndex].text}`);
    });
  }
  

    render() {
      console.log(this.state.searchBooks)
      return (
            <div className="search-books">
            <div className="search-books-bar">
                <Link className="close-search" to="/">Close</ Link>
              <div className="search-books-input-wrapper">

                <input 
                  type="text" 
                  placeholder="Search by title or author" 
                  value={this.state.query} 
                  onChange={this.handleQueryChange}
                />

              </div>
            </div>
            <div className="search-books-results">
            <ol className="books-grid">
                {this.state.searchBooks.length > 0 ? (
                  this.state.searchBooks.map((book, i) => (
                  book.authors && book.imageLinks && book.title && <Book book={book} key={i} updateShelf={this.updateShelf} />
                  ))
                ) :  <div/>  }
              </ol>
            </div>
          </div>
        )
    }
}

export default Search;