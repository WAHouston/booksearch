import React from "react"
import "./style.css"


function Results (props) {
    return (
        <div className="resultsBox">
            <h4 className="resultsTitle">{props.label}</h4>
            {props.children}
        </div>
    )
}

export default Results