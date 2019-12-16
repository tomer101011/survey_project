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

    addUpdateButton = () => {
        if (this.state.questionArr.length !== 0)
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

    updateSurvey = () => {
        let tempSurvey = this.props.surveys[this.state.surveyIndexSelected];

        let tempSurveyName = document.getElementById('nameOfSurvey').value;
        if (tempSurveyName !== '')
            tempSurvey.name = tempSurveyName;

        for (let i = 0; i < this.props.surveys[this.state.surveyIndexSelected].questions.length; i++) {
            let tempQuestionName = document.getElementById('a' + i).value;
            if (tempQuestionName !== '')
                tempSurvey.questions[i].question = tempQuestionName;

            for (let j = 0; j < this.props.surveys[this.state.surveyIndexSelected].questions[i].answers.length; j++) {
                let tempAnswerName = document.getElementById('a' + i + j).value;
                if (tempAnswerName !== '')
                    tempSurvey.questions[i].answers[j] = tempAnswerName;
            }
        }
        this.props.updateSurvey(tempSurvey, this.state.surveyIndexSelected);
        this.setState({ questionArr: [], surveyIndexSelected: -1 })
        alert("Survey updated successfully!");
    }

    deleteSurvey = () => {
        if (window.confirm('Do you want to delete the survey?')) {
            this.props.deleteSurvey(this.state.surveyIndexSelected);
            this.setState({ questionArr: [], surveyIndexSelected: -1 });
        }
    }

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

    loadQuestionsToArr = (surveyIndex) => {
        let tempQuestionsArr = [];
        for (let i = 0; i < this.props.surveys[surveyIndex].questions.length; i++) {
            let tempAnswersArr = [];

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
        this.clearInputs();
        this.setState({ questionArr: tempQuestionsArr, surveyIndexSelected: surveyIndex });
    }

    clearInputs = () => {
        let inputs = document.getElementsByTagName('input');
        for (let i = 0; i < inputs.length; i++) {
            inputs[i].value = '';
        }
    }

    loadSurveyData = () => {
        if (this.state.questionArr.length === 0)
            return (<h1 className="header-style marginText">Choose a survey to edit</h1>);

        else return this.state.questionArr.map(question => { return question });
    }

    loadSurveysNames = (category) => {
        let surveysArr = [];
        for (let i = 0; i < this.props.surveys.length; i++) {
            if (!this.props.surveys[i].deleted) {
                if (category === 'All Categories')
                    this.pushNewLinkToSurveysArr(surveysArr, i);

                else if (this.props.surveys[i].category === category)
                    this.pushNewLinkToSurveysArr(surveysArr, i);
            }
        }
        return surveysArr;
    }

    pushNewLinkToSurveysArr = (surveysArr, surveyIndex) => {
        surveysArr.push(
            <div key={surveyIndex} className="row">
                <div className="col-12">
                    <button onClick={() => this.loadQuestionsToArr(surveyIndex)} className="link-style" >{this.props.surveys[surveyIndex].name}</button>
                </div>
            </div>
        );
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
}
