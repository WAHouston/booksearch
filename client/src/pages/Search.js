import React, { Component } from "react"
import SearchBar from "../components/SearchBar"
import Book from "../components/Book"
import Results from "../components/Results"
import API from "../utils/API"

class Search extends Component {
    state = {
        books: []
    }

    bookSave = bookID => {
        console.log(this.state.books[bookID])
        API.saveBook(this.state.books[bookID])
        .then(() => {
            console.log(this.state.books[bookID].title)
        })
        .catch(err => {
            console.log(err)
        })
    }

    bookSearch = searchTerm => {
        API.searchBook(searchTerm)
        .then(info => {
            let booksArray = info.data.map(bookStuff => {
                let book = bookStuff.volumeInfo
                return {
                    title: book.title,
                    authors: book.authors,
                    description: book.description,
                    image: book.imageLinks.thumbnail,
                    link: book.infoLink
                }
            })
            this.setState({
                books: booksArray
            })
        })
    }

    render(){
        return (
            <div>
                <SearchBar bookSearch={this.bookSearch}/>
                <Results label="Results">
                    {this.state.books.map((book, index) => {
                        return <Book handleClick={this.bookSave} info={book} key={index} bookID={index} buttonLabel="Save" />
                    })}
                </Results>
            </div>
        )
    }
}

export default Search