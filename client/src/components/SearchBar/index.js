import React, { Component } from "react"

class SearchBar extends Component {
    constructor(props){
        super(props)
        this.state={
            searchTerm: ""
        }
    }

    handleChange = event => {
        this.setState({
            searchTerm: event.target.value
        })
    }

    render() {
        return (
            <div>
                <h4>Book Search</h4>
                <form>
                    Book
                    <br />
                    <input type="text" name="search-term" onChange={this.handleChange} value={this.state.searchTerm} />
                    <input type="button" value="Search" onClick={() => {this.props.bookSearch(this.state.searchTerm)}} />
                </form>
            </div>
        )
    }
}

export default SearchBar