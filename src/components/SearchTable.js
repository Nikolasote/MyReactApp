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
            detailsList: [],
            error: null
        }
        this.handleSearchInput = this.handleSearchInput.bind(this)
        this.outputNamesList = this.outputNamesList.bind(this)

    }

    handleSearchInput(event) {
        const input = event.target.value.replace(/\s+/g, '+').toLowerCase()
        this.setState({
            userInput: input
        })
        console.log(this.state.userInput)
    }

    async outputNamesList(event) {
        console.log(this.state.isloading)
        event.preventDefault()
        const queryString = "https://cors-anywhere.herokuapp.com/https://tastedive.com/api/similar?k=368207-Universi-YVVZ2Q9P&q=" + this.state.userInput + "&type=movies&limit=3&info=0"
        console.log(queryString)
        fetch(queryString)
            .then(response => response.json())
            .then(data => {
                const movieList = data.Similar.Results
                this.setState(
                    {
                        namesList: movieList
                    })
            })
            .then(() => {
                this.state.namesList.forEach(element => console.log(element.Name))
            })

    }



    render() {

        if (this.state.error) {
            return <p style={{ color: "red" }}>{this.state.error.message}</p>
        }

        const movieNames = this.state.namesList.map(name => {
            return <MovieItem key={name.yID} item={name} />
        })

        return (
            <div>
                <InsertForm handleChange={this.handleSearchInput} input={this.state.userInput} handleSubmit={this.outputNamesList} />
                <h2>Your recommended movies:</h2>
                <ul>
                    {movieNames}
                </ul>
            </div >
        )
    }
}

export default SearchTable