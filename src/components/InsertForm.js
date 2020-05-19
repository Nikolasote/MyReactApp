import React from "react"
import '../main.css'

class InsertForm extends React.Component {


    render() {
        return (
            <div className="col-12">
                <div className="row justify-content-center">
                    <div className="col-12 col-lg-6">
                        <p>Insert the title of a movie that you like
                    and we will recommend you similar movies.</p>
                    </div>
                    <form onSubmit={this.props.handleSubmit}>
                        <div className="input-group col-12 col-lg6">
                            <div>
                                <input className="form-control" type="text" placeholder="Enter movie title" onChange={this.props.handleChange}></input>
                            </div>
                            <div className="input-group-append">
                                <button className="btn btn-primary" type="submit">
                                    Explore
                                </button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        )
    }
}

export default InsertForm