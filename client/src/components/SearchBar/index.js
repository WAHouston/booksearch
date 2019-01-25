import React from "react"

function SearchBar() {
    return (
        <div>
            <h4>Book Search</h4>
            <form>
                Book
                <br></br>
                <input type="text" name="search-term"></input>
                <input type="submit" value="Submit"></input>
            </form>
        </div>
    )
}

export default SearchBar