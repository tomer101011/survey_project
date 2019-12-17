import React, { Component } from 'react'
import *  as ROUTES from '../constants/routes';
import { Redirect } from 'react-router-dom';

export default class EditSurveyPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            category: "All Categories",
            questionArr: [],
            surveyIndexSelected: -1,
            path: "",
            changePage: false
        }
    }
    render() {
        return (
            <div className="container">
                {this.doRedirect()}
                <div id="EditSurveyBox" className="row loginSheet">
                    <div className="col-12">
                        <div className="row">
                            <div style={{ textAlign: "left" }} className="col-12">
                                <button id="disc-style" className="link-style" onClick={() => this.changePathToGo(ROUTES.ADMIN)}>Go Back</button>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-12">
                                <h1 className="new-display-4">Edit Surveys</h1>
                            </div>
                        </div>
                        <div className="row">

                            <div className="col-7">
                                {this.loadSelectedSurveyName()}
                                {this.loadSurveyData()}
                            </div>

                            <div className="col-5">
                                <div className="row">
                                    <div className="col-12">
                                        {this.loadCategories()}
                                    </div>
                                </div>
                                {this.loadSurveysNames(this.state.category).map(survey => { return survey })}
                            </div>
                        </div>
                        {this.addUpdateButton()}
                    </div>
                </div>
            </div>
        )
    }

    //add buttons to the screen if the user selected a survey to edit
    addUpdateButton = () => {
        if (this.state.surveyIndexSelected !== -1)
            return (
                <div className="row">
                    <div className="col-12">
                        <div className="btn-group" role="group" aria-label="Basic example">
                            <button onClick={() => this.updateSurvey()} className="btn btn-info">Update Survey</button>
                            <button onClick={() => this.deleteSurvey()} className="btn btn-danger">Delete</button>
                        </div>
                    </div>
                </div>
            );

    }

    //update the survey
    updateSurvey = () => {
        //all inputs have placeholders to the original survey inputs
        //if the admin doesn't want to update certain inputs
        //then he can leave them blank and the placeholder value will be taken instead
        let tempSurvey = this.props.surveys[this.state.surveyIndexSelected];

        let tempSurveyName = document.getElementById('nameOfSurvey').value;

        //if the new survey name is not blank, then the new survey name will be taken
        if (tempSurveyName !== '')
            tempSurvey.name = tempSurveyName;

        //walk through all questions
        for (let i = 0; i < this.props.surveys[this.state.surveyIndexSelected].questions.length; i++) {
            let tempQuestionName = document.getElementById('a' + i).value;

            //if the new question name is not blank, then the new question name will be taken
            if (tempQuestionName !== '')
                tempSurvey.questions[i].question = tempQuestionName;

            //walk through all answers of a question
            for (let j = 0; j < this.props.surveys[this.state.surveyIndexSelected].questions[i].answers.length; j++) {
                let tempAnswerName = document.getElementById('a' + i + j).value;

                //if the new answer name is not blank, then the new answer name will be taken
                if (tempAnswerName !== '')
                    tempSurvey.questions[i].answers[j] = tempAnswerName;
            }
        }

        //update the survey
        this.props.updateSurvey(tempSurvey, this.state.surveyIndexSelected);

        //change states back to default so the admin can update/delete another survey
        this.setState({ questionArr: [], surveyIndexSelected: -1 })
        alert("Survey updated successfully!");
    }

    //delete a survey
    deleteSurvey = () => {
        if (window.confirm('Do you want to delete the survey?')) {
            this.props.deleteSurvey(this.state.surveyIndexSelected);
            //change states back to default so the admin can update/delete another survey
            this.setState({ questionArr: [], surveyIndexSelected: -1 });
        }
    }

    //return a div that contains the name of the survey
    loadSelectedSurveyName = () => {
        if (this.state.surveyIndexSelected !== -1)
            return (
                <div className="row">
                    <div className="col-12">
                        <input id="nameOfSurvey" className="nameStyle" placeholder={this.props.surveys[this.state.surveyIndexSelected].name} />
                    </div>
                </div>
            );
    }

    //load questions to questionArr HTML array state
    loadQuestionsToArr = (surveyIndex) => {
        let tempQuestionsArr = [];

        //walk through all questions of the selected survey
        for (let i = 0; i < this.props.surveys[surveyIndex].questions.length; i++) {
            //answers array HTML that contains rows of answers
            let tempAnswersArr = [];

            //walk through all answers of the question
            for (let j = 0; j < this.props.surveys[surveyIndex].questions[i].answers.length; j++) {
                let answer = this.props.surveys[surveyIndex].questions[i].answers[j];
                tempAnswersArr.push(
                    <div key={j} className="row">
                        <div className="col-12 heightInput">
                            <input id={"a" + i + j} type="text" placeholder={answer} className="answerStyle" />
                        </div>
                    </div>
                );
            }
            let question = this.props.surveys[surveyIndex].questions[i].question;
            tempQuestionsArr.push(
                <div key={i}>
                    <div className="row">
                        <div className="col-12">
                            <input id={"a" + i} type="text" placeholder={question} className="questionStyle" />
                        </div>
                    </div>
                    {tempAnswersArr.map(ans => { return ans })}
                </div>
            );
        }
        //clear inputs of previous selected survey
        this.clearInputs();
        this.setState({ questionArr: tempQuestionsArr, surveyIndexSelected: surveyIndex });
    }

    //clear all inputs
    clearInputs = () => {
        let inputs = document.getElementsByTagName('input');
        for (let i = 0; i < inputs.length; i++) {
            inputs[i].value = '';
        }
    }

    //load surveys to the screen
    loadSurveyData = () => {
        //if no survey selected then a message will be shown
        if (this.state.surveyIndexSelected === -1)
            return (<h1 className="header-style marginText">Choose a survey to edit</h1>);

        //else show the built survey HTML to the screen
        else return this.state.questionArr.map(question => { return question });
    }

    //load survey names links to the screen
    loadSurveysNames = (category) => {
        let surveysArr = [];
        for (let i = 0; i < this.props.surveys.length; i++) {
            //if the survey is not deleted
            if (!this.props.surveys[i].deleted) {
                if (category === 'All Categories')
                    this.pushNewLinkToSurveysArr(surveysArr, i);

                //show survey name link of a chosen category
                else if (this.props.surveys[i].category === category)
                    this.pushNewLinkToSurveysArr(surveysArr, i);
            }
        }
        return surveysArr;
    }

    //push to surveyArr HTML a survey name link
    pushNewLinkToSurveysArr = (surveysArr, surveyIndex) => {
        surveysArr.push(
            <div key={surveyIndex} className="row">
                <div className="col-12">
                    <button onClick={() => this.loadQuestionsToArr(surveyIndex)} className="link-style" >{this.props.surveys[surveyIndex].name}</button>
                </div>
            </div>
        );
    }

    //load categories to dropdown
    loadCategories = () => {
        return (
            <select id="category" onChange={() => this.searchSurveyByCategory()}>
                <option>All Categories</option>
                {this.props.categories.map((categ, i) => { return <option key={i}>{categ}</option> })}
            </select>
        );
    }

    //change category state to chosen dropdown category and render again to load survey name links
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
}
