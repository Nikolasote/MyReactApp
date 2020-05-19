import React from "react"
import '../main.css'

function Header(props) {
    return (
        <div className="row d-flex">
            <div className="col-sm-8">
                <h1>The Movie Recommender</h1>
            </div>
            <div className="ml-auto col-sm-4">
                <a href="https://tastedive.com/">powered by TasteDive and TMDB</a>
            </div>
        </div>

    )
}

export default Header