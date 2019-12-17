import React, { Component } from 'react'
import { Survey, Question } from '../classes/classes.js';
import *  as ROUTES from '../constants/routes';
import { Redirect } from 'react-router-dom';

export default class CreateSurveyPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            surveyName: "",
            questionName: "",
            answerName: "",
            questionArr: [],
            answerArr: [],
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
                                <h1 className="new-display-4">Create New Survey</h1>
                            </div>
                        </div>
                        <div style={{ paddingBottom: "15px" }} className="row">
                            <div className="col-12">
                                {this.loadCategories()}
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-12">
                                <input id="surveyName" className="inputStyle" onChange={this.setSurveyName} type="text" placeholder="Survey Name" />
                            </div>
                        </div>
                        <hr />
                        <div className="row margin-bottom">
                            <div className="col-12">
                                <div className="input-group">
                                    <input id="questionName" type="text" className="form-control" onChange={this.setQuestion} placeholder="Add Question" aria-label="Input group example" aria-describedby="btnGroupAddon2" />
                                    <button onClick={() => this.addQuestion()} id="addQuestion" className="btn btn-success">+</button>
                                </div>
                            </div>
                        </div>
                        <div className="row margin-bottom">
                            <div className="col-12">
                                <div className="input-group">
                                    <input id="answerName" type="text" className="form-control" onChange={this.setAnswer} placeholder="Add Answers to Question" aria-label="Input group example" aria-describedby="btnGroupAddon2" />
                                    <button onClick={() => this.addAnswer()} id="addAnswer" className="btn btn-success">+</button>
                                </div>
                            </div>
                        </div>
                        <div className="row margin-bottom">
                            <div className="col-12">
                                <button onClick={() => this.submitSurvey()} className="btn btn-info buttonStyleWidth">Submit Survey</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }

    //add the new survey
    submitSurvey = () => {
        //if the survey name input is blank
        if (this.state.surveyName === '')
            document.getElementById("surveyName").style.border = "2px solid red";

        else {
            document.getElementById("surveyName").style.border = "none";
            let category = document.getElementById("category").value;

            //if the admin didn't choose a category
            if (category === "Choose Category")
                alert("You need to choose a category");

            //if the admin didn't add any questions
            else if (this.state.questionArr.length === 0)
                alert("You didn't add any questions to the survey");

            //the admin chose a category and added question/s that has answers already
            //No need to check here if the questions have answers because it will be checked on addQuestion function
            else {
                let newSurveyId;
                if (this.props.length === 0)
                    newSurveyId = 0;
                else
                    newSurveyId = this.props.surveys[this.props.surveys.length - 1].id + 1;

                let survey = new Survey(newSurveyId, this.state.surveyName, category, this.state.questionArr);
                this.props.addSurvey(survey);
                document.getElementById("surveyName").value = "";
                alert("Survey added successfully!");

                //change states to default ones so the admin can add more surveys
                this.setState({ surveyName: "", questionArr: [] });
            }

        }
    }

    //add question to the questions array
    addQuestion = () => {
        //if the question name input is blank
        if (this.state.questionName === '')
            document.getElementById("questionName").style.border = "2px solid red";

        else {
            document.getElementById("questionName").style.border = "1px solid #ced4da";

            //if the admin added less then 2 answers to the question
            if (this.state.answerArr.length <= 1)
                alert("You need to add minimum 2 answers to the question");

            //else the admin added 2 answers or more to the question
            else {
                let question = new Question(this.state.questionName, this.state.answerArr);
                let tempQuestionArr = this.state.questionArr;
                tempQuestionArr.push(question);
                document.getElementById("questionName").value = "";
                alert("Question added with answers!")
                //set the states of answers array and question name back to default to add more questions
                this.setState({ questionArr: tempQuestionArr, questionName: "", answerArr: [] });
            }
        }
    }

    //add answer to the answer array
    addAnswer = () => {
        //if the answer name input is blank
        if (this.state.answerName === '')
            document.getElementById("answerName").style.border = "2px solid red";

        //else push the answer to answer array
        else {
            document.getElementById("answerName").style.border = "none";
            let tempAnswerArr = this.state.answerArr;
            tempAnswerArr.push(this.state.answerName);
            document.getElementById("answerName").value = "";
            alert("Answer added!");
            //set the state of answer name back to default to add more answers;
            this.setState({ answerArr: tempAnswerArr, answerName: "" });
        }
    }

    //load categories to dropdown
    loadCategories = () => {
        return (
            <select id="category">
                <option hidden>Choose Category</option>
                {this.props.categories.map((categ, i) => { return <option key={i}>{categ}</option> })}
            </select>
        );
    }

    setSurveyName = (e) => {
        this.setState({ surveyName: e.target.value });
    }

    setQuestion = (e) => {
        this.setState({ questionName: e.target.value });
    }

    setAnswer = (e) => {
        this.setState({ answerName: e.target.value });
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
