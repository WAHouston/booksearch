import React, { Component } from "react"
import Book from "../components/Book"
import Results from "../components/Results"
import API from "../utils/API";

class Saved extends Component {
    state = {
        books: []
    }

    componentDidMount(){
        API.getBooks()
        .then(info => {
            this.setState({
                books: info.data
            })
        })
        .catch(err => {
            console.log(err)
        })
    }

    bookDelete = (bookID) => {
        API.deleteBook(bookID)
        .then(() => {
            this.setState({
                books: this.state.books.filter(book => {
                    return book._id !== bookID
                })
            })
        })
    }

    render(){
        return (
            <div>
                <Results label="Saved Books">
                    {this.state.books.map((book, index) => {
                        return <Book handleClick={this.bookDelete} info={book} key={index} bookID={book._id} buttonLabel="Delete" />
                    })}
                </Results>
            </div>
        )
    }
}

export default Saved