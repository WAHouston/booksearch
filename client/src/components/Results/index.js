import React from "react"


function Results (props) {
    return (
        <div>
            <h4>{props.label}</h4>
            {props.children}
        </div>
    )
}

export default Results