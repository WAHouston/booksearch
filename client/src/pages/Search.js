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
        API.saveBook(this.state.books[bookID])
        .then(() => {
            console.log(this.state.books[bookID].title)
        })
        .catch(err => {
            console.log(err)
        })
    }

    render(){
        return (
            <div>
                <SearchBar />
                <Results label="Results">
                    {this.state.books.map((book, index) => {
                        return <Book bookSave={this.bookSave} info={book} key={index} bookID={index} />
                    })}
                </Results>
            </div>
        )
    }
}

export default Search