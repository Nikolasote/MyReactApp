import React from "react"
import '../main.css'
import MovieDetails from "./MovieDetails"

class MovieItem extends React.Component {

    constructor() {
        super()
        this.state = {
            movieDetails: {},
            showDetails: false
        }
        this.outputMovieDetails = this.outputMovieDetails.bind(this)
    }

    outputMovieDetails(id) {
        console.log(id);
        const queryName = this.props.item.Name.replace(/\s+/g, '+').toLowerCase()
        console.log(queryName)
        const queryString = "https://api.themoviedb.org/3/search/movie?api_key=7f56aa4b166f9fa04cd8266612e312b4&language=en-US&query=" + queryName + "&page=1&include_adult=false"
        fetch(queryString).then(response => response.json())
            .then(data => {
                this.setState(
                    {
                        movieDetails: data.results[0],
                        showDetails: true
                    })
                console.log(this.state.movieDetails)
            })
    }

    render() {
        return (
            <div>
                <h3>{this.props.item.Name}</h3>
                <label>
                    <input className="form-check-input" type="checkbox" checked={this.state.showDetails} name="showDetails" value={this.state.showDetails} onChange={() => this.outputMovieDetails(this.props.item.yID)} />
                show details
            </label>
                {this.state.showDetails && <MovieDetails details={this.state.movieDetails} />}
            </div>
        )
    }


}

export default MovieItem

