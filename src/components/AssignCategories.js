import React, { Component } from 'react'
import *  as ROUTES from '../constants/routes';
import { Redirect } from 'react-router-dom';

export default class AssignCategories extends Component {
    constructor(props) {
        super(props);
        this.state = {
            dropSelectedUser: "Choose User",//dropdown selected user
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
                        <div style={{ paddingBottom: "12px" }} className="row">
                            <div className="col-12">
                                {this.loadUsersDropdown()}
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-12">
                                {this.loadCategories()}
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-12">
                                {this.addAssignButton()}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }

    //Show button only if the admin selected a user
    addAssignButton = () => {
        if (this.state.dropSelectedUser !== 'Choose User')
            return (<button style={{ marginTop: "10px" }} onClick={() => this.assignCategories()} className="btn btn-info">Assign Categories to {this.state.dropSelectedUser}</button>);
    }

    //Assign categories to the chosen user
    assignCategories = () => {
        //temp category names array
        let tempCategoriesArr = [];

        //go through all of the categories
        for (let i = 0; i < this.props.categories.length; i++) {
            //if the corresponding checkbox is checked, then push to array the name of the category
            if (document.getElementById('c' + i).checked)
                tempCategoriesArr.push(document.getElementById('n' + i).innerHTML);
        }

        //find the index of the user based on the chosen user name
        let indexSelectedUser = this.props.findUserbyUserName(this.state.dropSelectedUser);

        //update the user's assigned categories the new categories
        this.props.updateAssignedCategories(tempCategoriesArr, indexSelectedUser);
        alert('Assigned new categories to ' + this.state.dropSelectedUser + ' successfully!');
    }

    //load categories with checkbox to the screen
    loadCategories = () => {
        //if the admin didn't choose any user, then a message will be shown
        if (this.state.dropSelectedUser === 'Choose User')
            return (<h1 className="header-style">Choose a user to assign categories</h1>);

        else
            return (
                <table className="mx-auto">
                    <tbody>
                        {this.addCategories().map(categ => { return categ })}
                    </tbody>
                </table>

            );
    }

    //return an HTML array that has all categories with checkbox
    addCategories = () => {
        let categoriesArr = [];
        for (let i = 0; i < this.props.categories.length; i++) {
            categoriesArr.push(
                <tr key={i}>
                    <td className="padding-table pad-checkbox"><input id={"c" + i} type="checkbox" /></td>
                    <td><h4 id={"n" + i} className="autoBr">{this.props.categories[i]}</h4></td>
                </tr>
            );
        }
        return categoriesArr;
    }

    //load the dropdown with all users except the admin
    loadUsersDropdown = () => {

        let usersOnlyArr = this.props.users.filter((person) => person.role === 'User');
        return (
            <select id="usersDropdown" onChange={() => this.setDropSelectedUser()}>
                <option hidden>Choose User</option>
                {usersOnlyArr.map((person, i) => { return <option key={i}>{person.user}</option> })}
            </select>
        );
    }

    clearCheckboxes = () => {
        for (let i = 0; i < this.props.categories.length; i++)
            document.getElementById("c" + i).checked = false;
    }

    //get the chosen user and put it in a state
    setDropSelectedUser = () => {
        if (this.state.dropSelectedUser !== 'Choose User')
            this.clearCheckboxes();

        this.setState({ dropSelectedUser: document.getElementById("usersDropdown").value });
    }

    //redirect to another page
    doRedirect = () => {
        if (this.state.changePage)
            return <Redirect to={this.state.path} />
    }

    changePathToGo = (newPath) => {
        this.setState({ path: newPath, changePage: true });
    }
}
