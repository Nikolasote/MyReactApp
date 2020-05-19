import React from "react"
import '../main.css'

function MovieDetails(props) {


    return (
        <div>
            <h3>Vote Average: {props.details.vote_average}</h3>
        </div>
    )
}

export default MovieDetails
