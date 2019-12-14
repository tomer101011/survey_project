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

    loadSurveys = () => {
        let surveysArr = this.addSurveys();
        if (surveysArr.length === 0) {
            return (
                <div className="row">
                    <div className="col-12">
                        <h1 className="header-style">No surveys to show</h1>
                    </div>
                </div>
            );
        }
        else
            return surveysArr.map(survey => { return survey });
    }

    loadCategories = () => {
        return (
            <select id="category" onChange={() => this.searchSurveyByCategory()}>
                <option>All Categories</option>
                {this.props.categories.map((categ, i) => { return <option key={i}>{categ}</option> })}
            </select>
        );
    }

    searchSurveyByCategory = () => {
        let inputCategory = document.getElementById("category").value;
        this.setState({ category: inputCategory });
    }

    changePathToGo = (newPath) => {
        this.setState({ path: newPath, changePage: true });
    }

    doRedirect = () => {
        if (this.state.changePage)
            return <Redirect to={this.state.path} />
    }

    changeHeader = () => {
        if (localStorage.getItem('whereToGo') === 'available')
            return (<h1 className="new-display-4">Available Surveys</h1>);

        return (<h1 className="new-display-4">Completed Surveys</h1>);
    }

    showSurvey = (indexOfSurvey) => {
        localStorage.setItem('indexOfSurvey', indexOfSurvey);
        this.changePathToGo(ROUTES.SURVEYPAGE);
    }

    pushNewLinkToSurveysArr = (surveysArr, surveyIndex) => {
        surveysArr.push(
            <div key={surveyIndex} className="row">
                <div className="col-12">
                    <button onClick={() => this.showSurvey(surveyIndex)} className="link-style" >{this.props.surveys[surveyIndex].name}</button>
                </div>
            </div>
        );
    }

    addSurveys = () => {
        let surveysArr = [];
        let whereToLoad = localStorage.getItem('whereToGo');
        if (whereToLoad === 'available') {
            for (let i = 0; i < this.props.surveys.length; i++) {
                if (this.props.findSurveyIdInCompletedArr(this.props.surveys[i].id) === -1) {
                    if (this.state.category === 'All Categories')
                        this.pushNewLinkToSurveysArr(surveysArr, i);

                    else if (this.props.surveys[i].category === this.state.category)
                        this.pushNewLinkToSurveysArr(surveysArr, i);

                }
            }
        }
        else {
            let userCompletedSurveys = this.props.users[this.state.loggedUserIndex].completedSurveys;
            for (let i = 0; i < userCompletedSurveys.length; i++) {
                if (this.state.category === 'All Categories')
                    this.pushNewLinkToSurveysArr(surveysArr, userCompletedSurveys[i].indexOfSurvey);

                else if (this.props.surveys[i].category === this.state.category)
                    this.pushNewLinkToSurveysArr(surveysArr, userCompletedSurveys[i].indexOfSurvey);


            }
        }
        return surveysArr;
    }
}
