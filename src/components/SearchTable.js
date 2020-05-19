import React from "react"
import '../main.css'
import InsertForm from "./InsertForm"
import MovieItem from "./MovieItem"

class SearchTable extends React.Component {
    constructor() {
        super()
        this.state = {
            isloading: true,
            userInput: "",
            namesList: [],
            movieDetails: {},
            showDetails: false,
            error: null
        }
        this.handleSearchInput = this.handleSearchInput.bind(this)
        this.outputNamesList = this.outputNamesList.bind(this)
        //this.outputMovieDetails = this.outputMovieDetails.bind(this)

    }

    handleSearchInput(event) {
        const input = event.target.value.replace(/\s+/g, '+').toLowerCase()
        this.setState({
            userInput: input
        })
    }

    outputNamesList(event) {
        //console.log(this.state.isloading)
        event.preventDefault()
        const queryString = "https://cors-anywhere.herokuapp.com/https://tastedive.com/api/similar?k=368207-Universi-YVVZ2Q9P&q=" + this.state.userInput + "&type=movies&limit=3&info=1"
        console.log(queryString)
        fetch(queryString).then(response => response.json())
            .then(data => {
                this.setState(
                    {
                        namesList: data.Similar.Results
                    })
            })
    }


    render() {

        if (this.state.error) {
            return <p style={{ color: "red" }}>{this.state.error.message}</p>
        }

        const movieNames = this.state.namesList.map(item => {
            return <MovieItem key={item.yID} item={item} />
        })

        return (
            <div className="row">
                <InsertForm handleChange={this.handleSearchInput} handleSubmit={this.outputNamesList} input={this.state.userInput} />
                <div className="col-12 mt-3">
                    <h2 className="text-center">Recommended Movies</h2>
                </div>
                <div>
                    {movieNames}
                </div>
            </div>

        )
    }
}

export default SearchTable