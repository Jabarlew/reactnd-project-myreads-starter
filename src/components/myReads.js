import React from 'react';
import Shelf from './bookShelf';
import { Link } from 'react-router-dom';

const MyReads = (props) => {
    return(
        <div className="list-books">
        <div className="list-books-title">
          <h1>MyReads</h1>
        </div>
        <div className="list-books-content">
          <Shelf />
        </div>
        <div className="open-search">
          <Link to="/search">Add a book</ Link>
        </div>
      </div>
    )
}

export default MyReads;