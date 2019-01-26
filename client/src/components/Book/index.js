import React from "react"
import "./style.css"

function Book (props) {
    let {title, authors, image, description, link} = props.info

    return (
        <div className="bookBox">
            <h4 className="bookTitle">{title}</h4>
            <a href={link} target="_blank" rel="noopener noreferrer"><button type="button" className="viewBtn">View</button></a>
            <button type="button" onClick={() => props.handleClick(props.bookID)} className="variableBtn">{props.buttonLabel}</button>
            <h5 className="bookAuthors">{authors.join(", ")}</h5>
            <img src={image} alt={title}></img>
            <p>{description}</p>
        </div>
    )
}

export default Book