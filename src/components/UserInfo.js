import React, { Component } from 'react'
import *  as ROUTES from '../constants/routes';
import { Redirect } from 'react-router-dom';

export default class UserInfo extends Component {

    constructor(props) {
        super(props);
        this.state = {
            userName: this.props.users[window.localStorage.getItem("loggedUserIndex")].user,
            firstName: this.props.users[window.localStorage.getItem("loggedUserIndex")].firstName,
            lastName: this.props.users[window.localStorage.getItem("loggedUserIndex")].lastName,
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
                                <input id="userName" onChange={this.setUserName} defaultValue={this.state.userName} className="inputStyle" type="text" placeholder="User Name" />
                            </div>
                        </div>
                        <div className="row margin-top">
                            <div className="col-12">
                                <input id="firstName" onChange={this.setFirstName} defaultValue={this.state.firstName} className="inputStyle" type="text" placeholder="First Name" />
                            </div>
                        </div>
                        <div className="row margin-top">
                            <div className="col-12">
                                <input id="lastName" onChange={this.setLastName} defaultValue={this.state.lastName} className="inputStyle" type="text" placeholder="Last Name" />
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-12">
                                <input id="mail" onChange={this.setMail} defaultValue={this.state.mail} className="inputStyle" type="text" placeholder="Mail" />
                            </div>
                        </div>
                        <div className="row margin-bottom">
                            <div className="col-12">
                                <button onClick={() => this.updateUser()} className="btn btn-info buttonStyleWidth">Update Your Info</button>
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

    setFirstName = (e) => {
        this.setState({ firstName: e.target.value });
    }

    setLastName = (e) => {
        this.setState({ lastName: e.target.value });
    }

    setMail = (e) => {
        this.setState({ mail: e.target.value });
    }

    areInputsBlank = () => {
        let someAreBlank = false;

        if (this.state.userName === '') {
            document.getElementById("userName").style.border = "2px solid red";
            someAreBlank = true;
        }
        else
            document.getElementById("userName").style.border = "none";

        if (this.state.firstName === '') {
            document.getElementById("firstName").style.border = "2px solid red";
            someAreBlank = true;
        }
        else
            document.getElementById("firstName").style.border = "none";

        if (this.state.lastName === '') {
            document.getElementById("lastName").style.border = "2px solid red";
            someAreBlank = true;
        }
        else
            document.getElementById("lastName").style.border = "none";

        if (this.state.mail === '') {
            document.getElementById("mail").style.border = "2px solid red";
            someAreBlank = true;
        }
        else
            document.getElementById("mail").style.border = "none";

        return someAreBlank;
    }

    updateUser = () => {
        if (!this.areInputsBlank()) {
            this.props.updateUser(this.state.userName, this.state.firstName, this.state.lastName, this.state.mail);
            alert("User info changed successfully!");
            this.setState({ done: true });
        }
    }
}
