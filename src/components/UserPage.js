import React, { Component } from 'react'
import *  as ROUTES from '../constants/routes';
import { Redirect } from 'react-router-dom';

export default class UserPage extends Component {

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
                                <h1 className="new-display-4">Welcome {this.props.users[this.state.loggedUserIndex].user}</h1>
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
                                <button className="link-style" onClick={() => this.goToAvailableCompletedSurveys('available')}>Available Surveys</button>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-12">
                                <button className="link-style" onClick={() => this.goToAvailableCompletedSurveys('completed')}>Completed Surveys</button>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-12">
                                <button className="link-style" onClick={() => this.changePathToGo(ROUTES.COUPONPAGE)}>Coupons awards</button>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-12">
                                <h3 className="sub-header">User Info</h3>
                            </div>
                        </div>
                        <div className="row">
                            <div style={{ paddingBottom: "10px" }} className="col-12">
                                <button className="link-style" onClick={() => this.changePathToGo(ROUTES.USER_INFO)}>Edit User Info</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }

    changePathToGo = (newPath) => {
        this.setState({ path: newPath, changePage: true });
    }

    goToAvailableCompletedSurveys = (whereToGo) => {
        if (whereToGo === 'available')
            localStorage.setItem('whereToGo', 'available');
        else
            localStorage.setItem('whereToGo', 'completed');

        this.changePathToGo(ROUTES.ALLSURVEYS);

    }



    doRedirect = () => {
        if (this.state.changePage)
            return <Redirect to={this.state.path} />
    }
}
