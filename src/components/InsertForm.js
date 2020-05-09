import React from "react"
import '../main.css'

class InsertForm extends React.Component {


    render() {
        return (
            <div>
                <form onSubmit={this.props.handleSubmit}>
                    <input type="text" placeholder="Enter a movie you like" onChange={this.props.handleChange}></input>
                    <button>See Recommendations</button>
                </form>
            </div>
        )
    }
}

export default InsertForm