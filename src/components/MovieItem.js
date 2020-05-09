import React from "react"
import '../main.css'

function MovieItem(props) {


    return (
        <li>
            <h3>{props.item.Name}</h3>
        </li>
    )
}

export default MovieItem

