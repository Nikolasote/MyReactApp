import React from "react"
import '../main.css'

function MovieDetails(props) {


    return (
        <li>
            <h3>{props.voteCount}</h3>
        </li>
    )
}

export default MovieDetails
