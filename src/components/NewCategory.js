import React, { Component } from 'react'
import *  as ROUTES from '../constants/routes';
import { Redirect } from 'react-router-dom';

export default class NewCategory extends Component {

    constructor(props) {
        super(props);
        this.state = {
            newCategory: '',
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
                                <h1 className="new-display-4">Add New Category</h1>
                            </div>
                        </div>
                        <div className="row margin-top">
                            <div className="col-12">
                                <input id="categoryName" style={{ width: "50%" }} onChange={this.setCategoryName} className="inputStyle" type="text" placeholder="Category Name" />
                            </div>
                        </div>
                        <div className="row margin-bottom">
                            <div className="col-12">
                                <button style={{ width: "50%" }} onClick={() => this.addNewCategory()} className="btn btn-info buttonStyleWidth aaa">Add New Category</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }

    areInputsBlank = () => {
        let someAreBlank = false;

        if (this.state.newCategory === '') {
            document.getElementById("categoryName").style.border = "2px solid red";
            someAreBlank = true;
        }
        else
            document.getElementById("categoryName").style.border = "none";

        return someAreBlank;
    }

    addNewCategory = () => {
        if (!this.areInputsBlank()) {
            this.props.addNewCategory(this.state.newCategory);
            alert("New Category added!");
            this.changePathToGo(ROUTES.ADMIN);
        }
    }

    setCategoryName = (e) => {
        this.setState({ newCategory: e.target.value });
    }

    doRedirect = () => {
        if (this.state.changePage)
            return <Redirect to={this.state.path} />
    }

    changePathToGo = (newPath) => {
        this.setState({ path: newPath, changePage: true });
    }
}
