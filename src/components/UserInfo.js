import React, { Component } from 'react'
import *  as ROUTES from '../constants/routes';
import { Redirect } from 'react-router-dom';

export default class UserInfo extends Component {

    constructor(props) {
        super(props);
        this.state = {
            userName: this.props.users[window.localStorage.getItem("loggedUserIndex")].user,
            mail: this.props.users[window.localStorage.getItem("loggedUserIndex")].mail,
            loggedUserIndex: window.localStorage.getItem("loggedUserIndex"),
            done: false
        }
    }

    render() {
        return (
            <div className="container">
                {this.redirectToUserPage()}
                <div id="box" className="row loginSheet">
                    <div className="col-12">
                        <div className="row">
                            <div style={{ textAlign: "left" }} className="col-12">
                                <button id="disc-style" className="link-style" onClick={() => this.setState({ done: true })}>Go Back</button>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-12">
                                <h1 className="new-display-4">Edit User Info</h1>
                            </div>
                        </div>
                        <div className="row margin-top">
                            <div className="col-12">
                                <input onChange={this.setUserName} defaultValue={this.props.users[this.state.loggedUserIndex].user} className="inputStyle" type="text" placeholder="User Name" />
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-12">
                                <input onChange={this.setMail} defaultValue={this.props.users[this.state.loggedUserIndex].mail} className="inputStyle" type="text" placeholder="Mail" />
                            </div>
                        </div>
                        <div className="row margin-bottom">
                            <div className="col-12">
                                <button onClick={() => this.updateUser()} className="btn btn-primary buttonStyleWidth">Update Your Info</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }

    redirectToUserPage = () => {
        if (this.state.done)
            return <Redirect to={ROUTES.USER} />
    }

    setUserName = (e) => {
        this.setState({ userName: e.target.value });
    }

    setMail = (e) => {
        this.setState({ mail: e.target.value });
    }

    setDefaultInputs = () => {
        this.setState({
            userName: this.props.users[this.state.loggedUserIndex].user,
            mail: this.props.users[this.state.loggedUserIndex].mail
        });
    }

    updateUser = () => {
        if (this.state.userName === "" || this.state.mail === "")
            alert('User name or mail are blank');

        else {
            this.props.updateUser(this.state.userName, this.state.mail);
            this.setState({ done: true });
        }
    }
}
