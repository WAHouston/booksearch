import React, { Component } from "react"
import "./style.css"

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
            <div className="searchBox">
                <h4 className="searchBoxTitle">Book Search</h4>
                <form className="searchForm">
                    Book
                    <br />
                    <input className="searchField" type="text" name="search-term" onChange={this.handleChange} value={this.state.searchTerm} />
                    <input className="searchButton" type="button" value="Search" onClick={() => {this.props.bookSearch(this.state.searchTerm)}} />
                </form>
            </div>
        )
    }
}

export default SearchBar