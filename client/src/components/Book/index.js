import React from "react"

function Book (props) {
    let {title, authors, image, description, link} = props.info

    return (
        <div>
            <h4>{title}</h4>
            <a href={link} target="_blank" rel="noopener noreferrer"><button type="button">View</button></a>
            <button type="button" onClick={() => props.handleClick(props.bookID)}>{props.buttonLabel}</button>
            <h5>{authors.join(", ")}</h5>
            <img src={image} alt={title}></img>
            <p>{description}</p>
        </div>
    )
}

export default Book