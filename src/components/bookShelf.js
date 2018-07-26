import React from 'react';
import Book from './book';


class Shelf extends React.Component {
    render() {
        return (
            <div>
                <div className="bookshelf">
                    <h2 className="bookshelf-title">Currently Reading</h2>
                    <div className="bookshelf-books">
                        <ol className="books-grid">
                            {this.props.books.filter(book => { return book.shelf === "currentlyReading" }).map((book, index) =>
                                <Book book={book} key={index} updateShelf={this.props.updateShelf} />
                            )}
                        </ol>
                    </div>
                </div>
                <div className="bookshelf">
                    <h2 className="bookshelf-title">Want to Read</h2>
                    <div className="bookshelf-books">
                        <ol className="books-grid">
                            {this.props.books.filter(book => { return book.shelf === "wantToRead" }).map((book, index) =>
                                <Book book={book} key={index} updateShelf={this.props.updateShelf} />
                            )}
                        </ol>
                    </div>
                </div>
                <div className="bookshelf">
                    <h2 className="bookshelf-title">Read</h2>
                    <div className="bookshelf-books">
                        <ol className="books-grid">
                            {this.props.books.filter(book => { return book.shelf === "read" }).map((book, index) =>
                                <Book book={book} key={index} updateShelf={this.props.updateShelf} />
                            )}
                        </ol>
                    </div>
                </div>
            </div>
        )
    }
}







export default Shelf;