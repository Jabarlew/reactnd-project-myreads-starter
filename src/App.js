import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import './App.css';
import MyReads from './components/myReads';
import Search from './components/search';


class BooksApp extends React.Component {
  render() {
    return (
      <div className="app">
        <BrowserRouter>
          <div>
            <Route path="/" component={MyReads} exact />
            <Route path="/search" component={Search} />
          </div>
        </ BrowserRouter>
      </div>
    )
  }
}

export default BooksApp;
