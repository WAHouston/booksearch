import React from "react"

function Book (props) {
    let {title, author, image, description, link} = props.info

    return (
        <h4>{title}</h4>
        <button></button>
        <button></button>
        <h5>{author}</h5>
        <img src={image}></img>
        <p>{description}</p>
        <a href={link}>{link}</a>
    )
}