import React, { Component } from 'react'
import *  as ROUTES from '../constants/routes';
import { Redirect } from 'react-router-dom';

export default class AllSurveysPage extends Component {

    constructor(props) {
        super(props);
        this.state = {
            category: "All Categories",
            loggedUserIndex: Number(localStorage.getItem('loggedUserIndex')),
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
                                <button id="disc-style" className="link-style" onClick={() => this.changePathToGo(ROUTES.USER)}>Go Back</button>
                            </div>
                            <div style={{ textAlign: "right" }} className="col-6">
                                {this.loadCategories()}
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-12">
                                {this.changeHeader()}
                            </div>
                        </div>
                        {this.loadSurveys()}
                    </div>
                </div>
            </div>
        )
    }

    //load links of surveys names to screen
    loadSurveys = () => {
        //get an array that contains HTML of each survey that is available to user or completed by user 
        let surveysArr = this.addSurveys();
        //if it is empty then show a message
        if (surveysArr.length === 0) {
            return (
                <div className="row">
                    <div className="col-12">
                        <h1 className="header-style">No surveys to show</h1>
                    </div>
                </div>
            );
        }
        //else show to the screen the links of survey names available/completed
        else
            return surveysArr.map(survey => { return survey });
    }

    //load categories to dropdown
    loadCategories = () => {
        let chosenCategoriesArr = [];
        //if the user wants to see available surveys then show him only the categories assigned to him
        if (localStorage.getItem('whereToGo') === 'available')
            chosenCategoriesArr = this.props.users[this.state.loggedUserIndex].assignedCategories;

        //else show him all the categories because maybe he completed a survey
        //of categories he no longer has access to
        else
            chosenCategoriesArr = this.props.categories;

        return (
            <select id="category" onChange={() => this.searchSurveyByCategory()}>
                <option>All Categories</option>
                {chosenCategoriesArr.map((categ, i) => { return <option key={i}>{categ}</option> })}
            </select>
        );
    }

    //set the category state to the one the user chose and render again so surveys will load
    searchSurveyByCategory = () => {
        let inputCategory = document.getElementById("category").value;
        this.setState({ category: inputCategory });
    }

    //redirect to another page
    doRedirect = () => {
        if (this.state.changePage)
            return <Redirect to={this.state.path} />
    }

    changePathToGo = (newPath) => {
        this.setState({ path: newPath, changePage: true });
    }

    //change header of page based on whether the user wanted to see availabe surveys or completed ones
    changeHeader = () => {
        if (localStorage.getItem('whereToGo') === 'available')
            return (<h1 className="new-display-4">Available Surveys</h1>);

        return (<h1 className="new-display-4">Completed Surveys</h1>);
    }

    //Go to survey page
    showSurvey = (indexOfSurvey) => {
        localStorage.setItem('indexOfSurvey', indexOfSurvey);
        this.changePathToGo(ROUTES.SURVEYPAGE);
    }

    //get the array of surveys (HTML) and push another survey link to it
    pushNewLinkToSurveysArr = (surveysArr, surveyIndex) => {
        surveysArr.push(
            <div key={surveyIndex} className="row">
                <div className="col-12">
                    <button onClick={() => this.showSurvey(surveyIndex)} className="link-style" >{this.props.surveys[surveyIndex].name}</button>
                </div>
            </div>
        );
    }

    //return true if the category of a survey is in assigned categories array of the user
    findCategSurvInAssigned = (indexSurvey) => {
        for (let i = 0; i < this.props.users[this.state.loggedUserIndex].assignedCategories.length; i++)
            if (this.props.users[this.state.loggedUserIndex].assignedCategories[i] === this.props.surveys[indexSurvey].category)
                return true;

        return false;
    }

    //return survey array (HTML) based on whether the user want to see available or completed surveys
    addSurveys = () => {
        let surveysArr = [];
        let whereToLoad = localStorage.getItem('whereToGo');

        //if the user want to see available surveys
        if (whereToLoad === 'available') {
            for (let i = 0; i < this.props.surveys.length; i++) {
                //if the survey is not deleted and it is not completed by the user
                if (!this.props.surveys[i].deleted &&
                    this.props.findSurveyIdInCompletedArr(this.props.surveys[i].id) === -1) {

                    //if the dropdown value is "All Categories"
                    //and the category of the survey is in the user assigned categories
                    if (this.state.category === 'All Categories' && this.findCategSurvInAssigned(i)) {
                        this.pushNewLinkToSurveysArr(surveysArr, i);
                    }

                    //else a specific category was chosen
                    else if (this.props.surveys[i].category === this.state.category)
                        this.pushNewLinkToSurveysArr(surveysArr, i);
                }
            }
        }

        //the user want to see completed surveys
        else {
            let userCompletedSurveys = this.props.users[this.state.loggedUserIndex].completedSurveys;
            for (let i = 0; i < userCompletedSurveys.length; i++) {
                //if you want all the completed surveys
                if (this.state.category === 'All Categories')
                    this.pushNewLinkToSurveysArr(surveysArr, userCompletedSurveys[i].indexOfSurvey);

                //else a specific category was chosen
                else if (this.props.surveys[userCompletedSurveys[i].indexOfSurvey].category === this.state.category)
                    this.pushNewLinkToSurveysArr(surveysArr, userCompletedSurveys[i].indexOfSurvey);
            }
        }
        return surveysArr;
    }
}
