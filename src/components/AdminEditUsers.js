import React, { Component } from 'react'
import *  as ROUTES from '../constants/routes';
import { Redirect } from 'react-router-dom';

export default class AdminEditUsers extends Component {

    constructor(props) {
        super(props);
        this.state = {
            userIndex: -1,
            userName: '',
            firstName: '',
            lastName: '',
            mail: '',
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
                                <h1 className="new-display-4">Edit Users</h1>
                            </div>
                        </div>
                        <div style={{ paddingBottom: "12px" }} className="row">
                            <div className="col-12">
                                {this.loadUsersDropdown()}
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-12">
                                <input id="userName" onChange={this.setUserName} defaultValue={this.state.userName} className="inputStyle" type="text" placeholder="User Name" />
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-12">
                                <input id="firstName" onChange={this.setFirstName} defaultValue={this.state.firstName} className="inputStyle" type="text" placeholder="First Name" />
                            </div>
                        </div>
                        <div className="row">
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
                                <button onClick={() => this.updateUser()} className="btn btn-info buttonStyleWidth">Update User</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }

    //load to dropdown the user names (not first names)
    loadUsersDropdown = () => {
        return (
            <select id="usersDropdown" onChange={() => this.loadUserInfo()}>
                <option hidden>Choose User</option>
                {this.props.users.map((person, i) => { return <option key={i}>{person.user}</option> })}
            </select>
        );
    }

    //set the index of the chosen user from dropdown and then load the user to inputs
    loadUserInfo = () => {
        let userName = document.getElementById("usersDropdown").value;
        this.setState({ userIndex: this.props.findUserbyUserName(userName) }, () => this.addDataToUserInfo());
    }

    //load the info of a user to input tags based on the dropdown value
    addDataToUserInfo = () => {
        let tempUserName = this.props.users[this.state.userIndex].user;
        let tempFirstName = this.props.users[this.state.userIndex].firstName;
        let tempLastName = this.props.users[this.state.userIndex].lastName;
        let tempMail = this.props.users[this.state.userIndex].mail;

        document.getElementById("userName").value = tempUserName;
        document.getElementById("firstName").value = tempFirstName;
        document.getElementById("lastName").value = tempLastName;
        document.getElementById("mail").value = tempMail;

        document.getElementById("userName").style.border = "none";
        document.getElementById("firstName").style.border = "none";
        document.getElementById("lastName").style.border = "none";
        document.getElementById("mail").style.border = "none";

        this.setState({ userName: tempUserName, firstName: tempFirstName, lastName: tempLastName, mail: tempMail });
    }

    //update the user info based on input values
    updateUser = () => {
        if (document.getElementById("usersDropdown").value === "Choose User")
            alert("You need to choose a user");

        //if the inputs are not blank, then update user
        else if (!this.areInputsBlank()) {
            this.props.updateUser(this.state.userIndex, this.state.userName, this.state.firstName, this.state.lastName, this.state.mail);
            alert("User info changed successfully!");
        }
    }

    //redirect to another page
    doRedirect = () => {
        if (this.state.changePage)
            return <Redirect to={this.state.path} />
    }

    changePathToGo = (newPath) => {
        this.setState({ path: newPath, changePage: true });
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

    //check if the inputs are blank and if they are mark them with red border
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
}
