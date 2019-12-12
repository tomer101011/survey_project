import React, { Component } from 'react'
import *  as ROUTES from '../constants/routes';
import { Redirect } from 'react-router-dom';

export default class AdminPage extends Component {

    constructor(props) {
        super(props);
        this.state = {
            loggedUserIndex: localStorage.getItem('loggedUserIndex'),
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
                            <div style={{ textAlign: "left" }} className="col-6">
                                <button id="disc-style" className="link-style" onClick={() => this.changePathToGo(ROUTES.LOGIN)}>Disconnect</button>
                            </div>
                            <div style={{ textAlign: "right" }} className="col-6">
                                <h1 className="header-style style-role">{this.props.users[this.state.loggedUserIndex].role}</h1>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-12">
                                <h1 className="new-display-4">Welcome {this.props.users[this.state.loggedUserIndex].firstName} {this.props.users[this.state.loggedUserIndex].lastName}</h1>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-12">
                                <h1 className="header-style">What would you like to do:</h1>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-12">
                                <h3 className="sub-header">Surveys</h3>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-12">
                                <button className="link-style" onClick={() => 1}>Create New Survey</button>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-12">
                                <button className="link-style" onClick={() => 2}>Edit Survey</button>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-12">
                                <button className="link-style" onClick={() => 3}>Delete Survey</button>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-12">
                                <h3 className="sub-header">Users</h3>
                            </div>
                        </div>
                        <div className="row">
                            <div style={{ paddingBottom: "10px" }} className="col-12">
                                <button className="link-style" onClick={() => 4}>Edit Users</button>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-12">
                                <h3 className="sub-header">Categories</h3>
                            </div>
                        </div>
                        <div className="row">
                            <div style={{ paddingBottom: "10px" }} className="col-12">
                                <button className="link-style" onClick={() => this.changePathToGo(ROUTES.NEW_CATEGORY)}>Add New Category</button>
                            </div>
                        </div>
                        <div className="row">
                            <div style={{ paddingBottom: "10px" }} className="col-12">
                                <button className="link-style" onClick={() => 6}>All Categories</button>
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
