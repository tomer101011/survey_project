import React, { Component } from 'react'
import *  as ROUTES from '../constants/routes';
import { Redirect } from 'react-router-dom';

export default class AssignCategories extends Component {
    constructor(props) {
        super(props);
        this.state = {
            path: "",
            changePage: false
        }
    }

    render() {
        return (
            <div className="container">
                {this.doRedirect()}
                <div id="box" className="row loginSheet">
                    <div className="col-12">
                        <div className="row">
                            <div style={{ textAlign: "left" }} className="col-12">
                                <button id="disc-style" className="link-style" onClick={() => this.changePathToGo(ROUTES.ADMIN)}>Go Back</button>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-12">
                                <h1 className="new-display-4">Assign Categories</h1>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }

    doRedirect = () => {
        if (this.state.changePage)
            return <Redirect to={this.state.path} />
    }

    changePathToGo = (newPath) => {
        this.setState({ path: newPath, changePage: true });
    }
}
