import React, { Component } from 'react'
import *  as ROUTES from '../constants/routes';
import { Redirect } from 'react-router-dom';

export default class SurveyPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            indexOfSurvey: Number(localStorage.getItem('indexOfSurvey')),
            loggedUserIndex: Number(localStorage.getItem('loggedUserIndex')),
            path: "",
            changePage: false
        }
    }

    render() {
        return (
            <div className="container">
                {this.doRedirect()}
                <div id="boxSurvey" className="row loginSheet">
                    <div className="col-12">
                        {this.addClearGoBackButtons()}
                        <div className="row">
                            <div className="col-12">
                                <h1 className="new-display-4">{this.props.surveys[this.state.indexOfSurvey].name}</h1>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-12">
                                <table className="mx-auto">
                                    <tbody>
                                        {this.loadSurvey().map(que => { return que })}
                                    </tbody>
                                </table>
                            </div>
                        </div>

                        {this.addSubmitButton()}
                    </div>
                </div>
            </div>
        )
    }

    //add a clear survey and go back buttons to the top page
    addClearGoBackButtons = () => {

        //if the user want to fill the survey, then add both buttons
        if (localStorage.getItem('whereToGo') === 'available')
            return (
                <div className="row">
                    <div style={{ textAlign: "left" }} className="col-6">
                        <button id="disc-style" className="link-style" onClick={() => this.changePathToGo(ROUTES.ALLSURVEYS)}>Go Back</button>
                    </div>
                    <div style={{ textAlign: "right" }} className="col-6">
                        <button id="disc-style" className="link-style" onClick={() => this.clearSurvey()}>Clear Survey</button>
                    </div>
                </div>
            )
        //else the user want to watch the completed survey so add only the go back button
        else {
            return (
                <div className="row">
                    <div style={{ textAlign: "left" }} className="col-12">
                        <button id="disc-style" className="link-style" onClick={() => this.changePathToGo(ROUTES.ALLSURVEYS)}>Go Back</button>
                    </div>
                </div>
            )
        }
    }

    //add submit survey button only if the user want to fill the survey
    addSubmitButton = () => {
        if (localStorage.getItem('whereToGo') === 'available')
            return (
                <div className="row margin-bottom">
                    <div className="col-12">
                        <button onClick={() => this.submitSurvey()} style={{ width: "15%" }} className="btn btn-info">Submit Survey</button>
                    </div>
                </div>
            )
    }

    //submit and survey and save it
    submitSurvey = () => {
        //resultSurvey array is an array that has the indexes of all checked answers
        //index 'i' of the array is the question index and it's value is the checked answer index
        let resultSurvey = [];
        let someQuestionsNotFilled = false;
        //walk through all questions and their corresponding answers and push them to resultSurvey array
        for (let i = 0; i < this.props.surveys[this.state.indexOfSurvey].questions.length && !someQuestionsNotFilled; i++) {
            let foundCheckedAns = false;
            for (let j = 0; j < this.props.surveys[this.state.indexOfSurvey].questions[i].answers.length && !foundCheckedAns; j++) {
                if (document.getElementById('a' + i + j).checked) {
                    resultSurvey.push(j);
                    //found the check answer so move on to the next question
                    foundCheckedAns = true;
                }
            }
            //if the user happened to forget to answer a question
            if (!foundCheckedAns) {
                alert('Some of the questions were not filled');
                someQuestionsNotFilled = true;
            }
        }
        //if all questions were filled
        if (!someQuestionsNotFilled) {
            this.props.pushCompletedSurvey(resultSurvey, this.state.loggedUserIndex, this.state.indexOfSurvey);
            alert('Thank you for filling the survey!');
            this.changePathToGo(ROUTES.ALLSURVEYS);
        }
    }

    //clear the survey
    clearSurvey = () => {
        for (let i = 0; i < this.props.surveys[this.state.indexOfSurvey].questions.length; i++)
            for (let j = 0; j < this.props.surveys[this.state.indexOfSurvey].questions[i].answers.length; j++)
                document.getElementById("a" + i + j).checked = false;
    }

    //redirect to another page
    doRedirect = () => {
        if (this.state.changePage)
            return <Redirect to={this.state.path} />
    }

    changePathToGo = (newPath) => {
        this.setState({ path: newPath, changePage: true });
    }

    //add radion buttons of answers to the screen
    //also check the state of a radio if the user want to see the completed survey
    //the function gets the index of an answer( indexQue = i, indexAns = j)
    addRadioButton = (indexQue, indexAns) => {
        let isSurveyCompletedType = localStorage.getItem('whereToGo');

        //if the user want to see the completed survey
        if (isSurveyCompletedType === 'completed') {
            let completedArrayIndex = this.props.findSurveyIdInCompletedArr(this.state.indexOfSurvey);

            //if the answer is checked
            //resultSurvey[indexQue] is the index of the answer marked for question in indexQue
            if (this.props.users[this.state.loggedUserIndex].completedSurveys[completedArrayIndex].resultSurvey[indexQue] === indexAns)
                return (<input type="radio" checked disabled name={"a" + indexQue} id={"a" + indexQue + indexAns} />);

            else return (<input type="radio" disabled name={"a" + indexQue} id={"a" + indexQue + indexAns} />);

        }
        //else the user want to fill a survey so add radio buttons that are not checked
        else {
            return (<input type="radio" name={"a" + indexQue} id={"a" + indexQue + indexAns} />);
        }
    }

    //load survey to the screen
    //return a question HTML array with the answers
    loadSurvey = () => {
        let questionsArr = [];
        for (let i = 0; i < this.props.surveys[this.state.indexOfSurvey].questions.length; i++) {
            let answersArr = [];
            for (let j = 0; j < this.props.surveys[this.state.indexOfSurvey].questions[i].answers.length; j++) {
                answersArr.push(
                    <tr key={j}>
                        <td className="padding-table"> {this.addRadioButton(i, j)}</td>
                        <td><h4 className="autoBr">{this.props.surveys[this.state.indexOfSurvey].questions[i].answers[j]}</h4></td>
                    </tr>
                );
            }
            questionsArr.push(
                <tr key={i}>
                    <td>
                        <table className="mx-auto">
                            <tbody>
                                <tr>
                                    <td><h3 className="sub-header autoBr">{this.props.surveys[this.state.indexOfSurvey].questions[i].question}</h3></td>
                                </tr>
                            </tbody>
                        </table>
                        <table className="mx-auto">
                            <tbody>
                                {answersArr.map(ans => { return ans })}
                            </tbody>
                        </table>
                    </td>
                </tr>

            );
        }
        return questionsArr;
    }
}
