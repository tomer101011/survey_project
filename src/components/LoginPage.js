import React, { Component } from 'react'
import *  as ROUTES from '../constants/routes';
import { Redirect } from 'react-router-dom';

export default class LoginPage extends Component {

    constructor(props) {
        super(props);
        this.state = {
            userName: '',
            password: '',
            path: "",
            isLoggedIn: false
        }
    }

    render() {
        return (
            <div className="container">
                {this.redirectToUserPage()}
                <div id="box" className="row loginSheet">
                    <div className="col-12">
                        <div className="row">
                            <div className="col-12">
                                <h1 className="new-display-4">Login Page</h1>
                            </div>
                        </div>
                        {/* <div className="row">
                            <div className="col-12">
                                <img onClick={() => this.login()} className="img-style" title="Login" src={require(`../pictures/surveyPic.jpg`)} alt="" />
                            </div>
                        </div> */}
                        <div className="row margin-top">
                            <div className="col-12">
                                <input id="userName" onChange={this.setUserName} className="inputStyle" type="text" placeholder="User Name" />
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-12">
                                <input id="password" onChange={this.setPassword} className="inputStyle" type="password" placeholder="Password" />
                            </div>
                        </div>
                        <div className="row margin-bottom">
                            <div className="col-12">
                                <button onClick={() => this.login()} className="btn btn-success buttonStyleWidth">Login</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }

    setUserName = (e) => {
        this.setState({ userName: e.target.value });
    }

    setPassword = (e) => {
        this.setState({ password: e.target.value });
    }

    redirectToUserPage = () => {
        if (this.state.isLoggedIn)
            return <Redirect to={this.state.path} />
    }

    areInputsBlank = () => {
        let someAreBlank = false;

        if (this.state.userName === '') {
            document.getElementById("userName").style.border = "2px solid red";
            someAreBlank = true;
        }
        else
            document.getElementById("userName").style.border = "none";

        if (this.state.password === '') {
            document.getElementById("password").style.border = "2px solid red";
            someAreBlank = true;
        }
        else
            document.getElementById("password").style.border = "none";

        return someAreBlank;
    }

    login = () => {
        if (!this.areInputsBlank()) {
            let foundUserIndex = this.findUser();
            let whereToGo = '';
            if (foundUserIndex !== -1) {
                if (this.props.users[foundUserIndex].role === 'User')
                    whereToGo = ROUTES.USER;
                else
                    whereToGo = ROUTES.ADMIN;

                localStorage.setItem('loggedUserIndex', foundUserIndex);
                this.setState({ path: whereToGo, isLoggedIn: true });
            }
            else
                alert('User name or password are incorrect');
        }

    }
    findUser = () => {
        let usersArr = this.props.users;
        for (let i = 0; i < usersArr.length; i++) {
            if (this.state.userName === usersArr[i].user && this.state.password === usersArr[i].password)
                return i;
        }
        return -1;
    }

}
