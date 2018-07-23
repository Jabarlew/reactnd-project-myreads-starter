import React from 'react';
import Book from './book';
import { getAll, update } from '../BooksAPI';


class Shelf extends React.Component {
    state = {
        books: [],
    }

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

    componentDidMount() {
        this.getBooks();
    }

    render() {
        return (
            <div>
                <div className="bookshelf">
                    <h2 className="bookshelf-title">Currently Reading</h2>
                    <div className="bookshelf-books">
                    <ol className="books-grid">
                        {this.state.books.filter(book => { return book.shelf === "currentlyReading" }).map((book, index) =>
                        <Book book={book} key={index} updateShelf={this.updateShelf} />
                        )}
                    </ol>
                    </div>
                </div>
                <div className="bookshelf">
                    <h2 className="bookshelf-title">Want to Read</h2>
                    <div className="bookshelf-books">
                    <ol className="books-grid">
                        {this.state.books.filter(book => { return book.shelf === "wantToRead" }).map((book, index) =>
                        <Book book={book} key={index} updateShelf={this.updateShelf} />
                        )}
                    </ol>
                    </div>
                </div>
                <div className="bookshelf">
                    <h2 className="bookshelf-title">Read</h2>
                    <div className="bookshelf-books">
                    <ol className="books-grid">
                        {this.state.books.filter(book => { return book.shelf === "read" }).map((book, index) =>
                        <Book book={book} key={index} updateShelf={this.updateShelf} />
                        )}
                    </ol>
                    </div>
                </div>
            </div>
        )
    }
}







export default Shelf;