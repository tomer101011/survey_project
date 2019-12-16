import React, { Component } from 'react'
import *  as ROUTES from '../constants/routes';
import { Redirect } from 'react-router-dom';

export default class AssignCategories extends Component {
    constructor(props) {
        super(props);
        this.state = {
            dropSelectedUser: "Choose User",
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

    addAssignButton = () => {
        if (this.state.dropSelectedUser !== 'Choose User')
            return (<button style={{ marginTop: "10px" }} onClick={() => this.assignCategories()} className="btn btn-info">Assign Categories</button>);
    }

    assignCategories = () => {
        let tempCategoriesArr = [];
        for (let i = 0; i < this.props.categories.length; i++) {
            if (document.getElementById('c' + i).checked)
                tempCategoriesArr.push(document.getElementById('n' + i).innerHTML);
        }
        let indexSelectedUser = this.props.findUserbyUserName(this.state.dropSelectedUser);
        this.props.updateAssignedCategories(tempCategoriesArr, indexSelectedUser);
        alert('User assigned new categories successfully!');
    }

    loadCategories = () => {
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

    addCategories = () => {
        let categoriesArr = [];
        for (let i = 0; i < this.props.categories.length; i++) {
            categoriesArr.push(
                <tr key={i}>
                    <td className="padding-table"><input id={"c" + i} type="checkbox" /></td>
                    <td><h4 id={"n" + i} className="autoBr">{this.props.categories[i]}</h4></td>
                </tr>
            );
        }
        return categoriesArr;
    }

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

    setDropSelectedUser = () => {
        if (this.state.dropSelectedUser !== 'Choose User')
            this.clearCheckboxes();

        this.setState({ dropSelectedUser: document.getElementById("usersDropdown").value });
    }

    doRedirect = () => {
        if (this.state.changePage)
            return <Redirect to={this.state.path} />
    }

    changePathToGo = (newPath) => {
        this.setState({ path: newPath, changePage: true });
    }
}
