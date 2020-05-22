import React from "react"
import '../main.css'

class InsertForm extends React.Component {


    render() {
        return (
            <div className="col-12">
                <p id="description" className="text-center">Insert the title of a movie that you like
                        and we will recommend you similar movies based on your input.</p>
                <form className="form-inline justify-content-center" onSubmit={this.props.handleSubmit}>
                    <input className="text-center" id="text-input" type="text" placeholder="Enter movie title" onChange={this.props.handleChange}></input>
                </form>
            </div>
        )
    }
}

export default InsertForm