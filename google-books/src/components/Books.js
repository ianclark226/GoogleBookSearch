import React, {Component } from 'react';
import SearchArea from '../SearchArea';
import request from 'superagent';
import BookList from './BookList';


class Books extends Component {
    constructor(props) {
        super(props);
            this.state = {
                books: [],
                searchField: '',
                sort: ''
            
        }
    }

    searchBook = () => {
        e.preventDefault();
        request
        .get("http://www.googleapis.com/books/v1/volumes")
        .query({ q: this.searchField })
        .then((data) => {
            const cleanData = this.cleanData(data)
            this.setState({ books: [...data.body.items ]})
        })
    }

    handleSearch = (e) => {
        this.setState({ searchField: e.target.value })
    }

    handleSort = (e) => {
        console.log(e.taget.value);
        this.setState({ sort: e.target.value})
    }

    cleanData = (e) => {
        const cleanData = data.body.items.map((book) => {
            if(book.volumeInfo.hasOwnProperty('publishedDate') === false) {
            book.volumeInfo['publishedDate'] = '0000';
            }
            else if (book.volumeInfo.hasOwnProperty('imageLinks')  ===false) {
                book.volumeInfo['imageLinks'] = {thumbnail};

            }

            return book;
        

        })

        return cleanData;
    }
    render() {
        const sortedBooks = this.state.books.sort((a,b) => {
            if(this.state.sort === 'Newest') {
                return parseInt(b.volumeInfo.publishedDate.substring(0,4)) - (a.volumeInfo.publishedDate.substring(0,4))
            }
            if(this.state.sort === 'Oldest') {
                return parseInt(b.volumeInfo.publishedDate.substring(0,4)) - (a.volumeInfo.publishedDate.substring(0,4))
            }
        })
        return (
            <div>
                <SearchArea searchBook={this.searchBook} handleSearch={this.handleSearch} handleSort={this.handleSort} />
                <BookList books={sortedBooks}/>
            </div>
        );
    }
}

export default Books;