import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import './App.css';
import MyReads from './components/myReads';
import Search from './components/search';
import { getAll, update } from './BooksAPI';

class BooksApp extends React.Component {
  state = {
    books: [],
  };

  updateShelf = (book, target) => {
    update(book, target.value).then(() => {
      this.getBooks();
    })
  }

  getBooks = () => {
    getAll().then((res) => {
      this.setState({
        books: res
      });
    });
  }
 
  componentDidMount = () => {
    this.getBooks();
    console.log(this.props.myBooks)
  }

  render() {
    return (
      <div className="app">
        <BrowserRouter>
          <div>
            <Route path="/" render={() => (
              <MyReads books={this.state.books} updateShelf={this.updateShelf} />
            )} exact />

            <Route path="/search" render={() => (
              <Search myBooks={this.state.books} getBooks={this.getBooks} />
            )} />
          </div>
        </ BrowserRouter>
      </div>
    )
  }
}

export default BooksApp;
