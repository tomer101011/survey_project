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

    addClearGoBackButtons = () => {
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

    addSubmitButton = () => {
        if (localStorage.getItem('whereToGo') === 'available')
            return (
                <div className="row margin-bottom">
                    <div className="col-12">
                        <button onClick={() => this.submitSurvey()} style={{ width: "15%" }} className="btn btn-info">Submit</button>
                    </div>
                </div>
            )
    }

    submitSurvey = () => {
        let resultSurvey = [];
        let someQuestionsNotFilled = false;
        for (let i = 0; i < this.props.surveys[this.state.indexOfSurvey].questions.length && !someQuestionsNotFilled; i++) {
            let foundCheckedAns = false;
            for (let j = 0; j < this.props.surveys[this.state.indexOfSurvey].questions[i].answers.length && !foundCheckedAns; j++) {
                if (document.getElementById('a' + i + j).checked) {
                    resultSurvey.push(j);
                    foundCheckedAns = true;
                }
            }
            if (!foundCheckedAns) {
                alert('Some of the questions were not filled');
                someQuestionsNotFilled = true;
            }
        }
        if (!someQuestionsNotFilled) {
            this.props.pushCompletedSurvey(resultSurvey, this.state.loggedUserIndex, this.state.indexOfSurvey);
            alert('Thank you for filling the survey!');
            this.changePathToGo(ROUTES.ALLSURVEYS);
        }
    }

    clearSurvey = () => {
        for (let i = 0; i < this.props.surveys[this.state.indexOfSurvey].questions.length; i++)
            for (let j = 0; j < this.props.surveys[this.state.indexOfSurvey].questions[i].answers.length; j++)
                document.getElementById("a" + i + j).checked = false;
    }

    changePathToGo = (newPath) => {
        this.setState({ path: newPath, changePage: true });
    }

    doRedirect = () => {
        if (this.state.changePage)
            return <Redirect to={this.state.path} />
    }

    addRadioButton = (indexQue, indexAns) => {
        let isSurveyCompletedType = localStorage.getItem('whereToGo');
        if (isSurveyCompletedType === 'completed') {
            let completedArrayIndex = this.props.findSurveyIdInCompletedArr(this.state.indexOfSurvey);
            if (this.props.users[this.state.loggedUserIndex].completedSurveys[completedArrayIndex].resultSurvey[indexQue] === indexAns)
                return (<input type="radio" checked disabled name={"a" + indexQue} id={"a" + indexQue + indexAns} />);

            else return (<input type="radio" disabled name={"a" + indexQue} id={"a" + indexQue + indexAns} />);

        }
        else {
            return (<input type="radio" name={"a" + indexQue} id={"a" + indexQue + indexAns} />);
        }
    }

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
