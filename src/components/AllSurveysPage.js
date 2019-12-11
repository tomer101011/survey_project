import React, { Component } from 'react'
import *  as ROUTES from '../constants/routes';
import { Redirect } from 'react-router-dom';

export default class AllSurveysPage extends Component {

    constructor(props) {
        super(props);
        this.state = {
            category: "All Categories",
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
                        {this.loadSurveys(this.state.category).map(survey => { return survey })}
                    </div>
                </div>
            </div>
        )
    }

    loadCategories = () => {
        return (
            <select id="category" onChange={() => this.searchSurveyByCategory()}>
                <option >All Categories</option>
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

    loadSurveys = (category) => {
        let surveysArr = [];
        let whereToLoad = localStorage.getItem('whereToGo');
        if (whereToLoad === 'available') {
            for (let i = 0; i < this.props.surveys.length; i++) {
                if (this.props.findSurveyIdInCompletedArr(this.props.surveys[i].id) === -1) {
                    if (category === 'All Categories')
                        this.pushNewLinkToSurveysArr(surveysArr, i);

                    else if (this.props.surveys[i].category === category)
                        this.pushNewLinkToSurveysArr(surveysArr, i);

                }
            }
        }
        else {
            for (let i = 0; i < this.props.surveys.length; i++) {
                if (this.props.findSurveyIdInCompletedArr(this.props.surveys[i].id) !== -1) {
                    if (category === 'All Categories')
                        this.pushNewLinkToSurveysArr(surveysArr, i);

                    else if (this.props.surveys[i].category === category)
                        this.pushNewLinkToSurveysArr(surveysArr, i);

                }
            }
        }
        return surveysArr;
    }
}
