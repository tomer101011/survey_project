import React, { Component } from 'react'
import './App.css';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import LoginPage from './components/LoginPage';
import UserPage from './components/UserPage';
import UserInfo from './components/UserInfo';
import AllSurveysPage from './components/AllSurveysPage';
import SurveyPage from './components/SurveyPage';
import CouponPage from './components/CouponPage';
import AdminPage from './components/AdminPage';
import NewCategory from './components/NewCategory';
import AdminEditUsers from './components/AdminEditUsers';
import EditSurveyPage from './components/EditSurveyPage';
import CreateSurveyPage from './components/CreateSurveyPage';
import AssignCategories from './components/AssignCategories';
import './cssFiles/loginPage.css';
import './cssFiles/userPage.css';
import './cssFiles/surveyPage.css';
import './cssFiles/createPageStyle.css';
import './cssFiles/editSurveysStyle.css';
import './cssFiles/assignCategoriesStyle.css';
import *  as ROUTES from './constants/routes';
import { User, Survey, Question } from './classes/classes.js';
import 'bootstrap/dist/css/bootstrap.min.css';


export default class App extends Component {

  constructor(props) {
    super(props);

    //all the users, surveys, categories
    this.state = {
      users: [
        new User('tomer', 'Tomer', 'Steiner', '1234', 'aaaa@gmail.com', 'User', ['Music', 'Sport']),
        new User('ram', 'Ram', 'Maian', '4321', 'bbbb@walla.com', 'User', ['Music', 'Sport']),
        new User('jon', 'Jon', 'Snow', '1111', 'cccc@gmail.com', 'Admin', ['Music', 'Sport'])
      ],

      surveys: [
        new Survey(0, 'Basketball', 'Sport',
          [new Question('Do you like this sport?', ['Very much', 'I do but not a lot', 'Not at all']),
          new Question('Do you know the rules?', ['Yes', 'No']),
          new Question('Would you recommend someone to watch a game?', ['Yes I would', 'Maybe', 'No I wouldn\'t'])])
        ,
        new Survey(1, 'Queen band', 'Music',
          [new Question('Do you know their songs?', ['I know every song they made', 'I know some but not all', 'I am not familiar with their songs'])])
        ,
        new Survey(2, 'Music in general', 'Music',
          [new Question('Do you hear music often?', ['Every time', 'Sometimes', 'Rarely']),
          new Question('Are you proficient in the music industry', ['Yep, I am', 'Nope, I am not']),
          new Question('In what types of headphones do you like to hear music?', ['In ear', 'On ear', 'Around ear'])])
      ],

      categories: ['Music', 'Sport']
    }
  }

  //get a categories array and update the assigned categories of a user to that array
  updateAssignedCategories = (tempCategoriesArr, indexSelectedUser) => {
    let tempUsers = this.state.users;
    tempUsers[indexSelectedUser].assignedCategories = tempCategoriesArr;
    this.setState({ users: tempUsers });
  }

  //get the updated survey and the index of the survey you want to update to and update it
  updateSurvey = (updatedSurvey, surveyIndex) => {
    let tempSurveys = this.state.surveys;
    tempSurveys[surveyIndex] = updatedSurvey;
    this.setState({ surveys: tempSurveys });
  }

  //get a survey index and the delete it
  deleteSurvey = (surveyIndex) => {
    let tempSurveys = this.state.surveys;
    tempSurveys[surveyIndex].deleted = true;
    this.setState({ surveys: tempSurveys });
  }

  //update a user
  updateUser = (indexUser, userName, firstName, lastName, mail) => {
    let tempUsers = this.state.users;
    tempUsers[indexUser].user = userName;
    tempUsers[indexUser].firstName = firstName;
    tempUsers[indexUser].lastName = lastName;
    tempUsers[indexUser].mail = mail;
    this.setState({ users: tempUsers });
  }

  //change the completed survey of a user to checkedSurvey(the one the function gets)
  pushCompletedSurvey = (checkedSurvey, loggedUserIndex, indexSurvey) => {
    let tempUsers = this.state.users;
    tempUsers[loggedUserIndex].completedSurveys.push({ indexOfSurvey: indexSurvey, resultSurvey: checkedSurvey, couponRedeemed: false });
    this.setState({ users: tempUsers });
  }

  //return the index of a user given his user name or '-1' if not found
  findUserbyUserName = (userName) => {
    for (let i = 0; i < this.state.users.length; i++)
      if (this.state.users[i].user === userName)
        return i;
    return -1;
  }

  //return the index of a survey given his survey id or '-1' if the survey not found
  findSurveyIdInCompletedArr = (surveyId) => {
    let loggedUserIndex = localStorage.getItem('loggedUserIndex');
    for (let i = 0; i < this.state.users[loggedUserIndex].completedSurveys.length; i++)
      if (this.state.users[loggedUserIndex].completedSurveys[i].indexOfSurvey === surveyId)
        return i;
    return -1;
  }

  //add a new category to categories array
  addNewCategory = (newCategory) => {
    let tempCategories = this.state.categories;
    tempCategories.push(newCategory);
    this.setState({ categories: tempCategories });
  }

  //add a new survey to surveys array
  addSurvey = (survey) => {
    let tempSurveys = this.state.surveys;
    tempSurveys.push(survey);
    this.setState({ surveys: tempSurveys });
  }

  render() {
    return (
      <div>
        <Router>

          {/* all routing pages */}
          <Switch>
            <Route exact path={ROUTES.LOGIN} render={(props) => <LoginPage {...props} users={this.state.users} />} />
            <Route exact path={ROUTES.USER} render={(props) => <UserPage {...props} users={this.state.users} />} />
            <Route exact path={ROUTES.USER_INFO} render={(props) => <UserInfo {...props} users={this.state.users} updateUser={this.updateUser} />} />
            <Route exact path={ROUTES.ALLSURVEYS} render={(props) => <AllSurveysPage {...props} users={this.state.users} surveys={this.state.surveys} categories={this.state.categories} findSurveyIdInCompletedArr={this.findSurveyIdInCompletedArr} />} />
            <Route exact path={ROUTES.SURVEYPAGE} render={(props) => <SurveyPage {...props} users={this.state.users} surveys={this.state.surveys} pushCompletedSurvey={this.pushCompletedSurvey} findSurveyIdInCompletedArr={this.findSurveyIdInCompletedArr} />} />
            <Route exact path={ROUTES.COUPONPAGE} render={(props) => <CouponPage {...props} users={this.state.users} />} />
            <Route exact path={ROUTES.ADMIN} render={(props) => <AdminPage {...props} users={this.state.users} />} />
            <Route exact path={ROUTES.NEW_CATEGORY} render={(props) => <NewCategory {...props} addNewCategory={this.addNewCategory} />} />
            <Route exact path={ROUTES.ADMIN_EDIT_USERS} render={(props) => <AdminEditUsers {...props} users={this.state.users} updateUser={this.updateUser} findUserbyUserName={this.findUserbyUserName} />} />
            <Route exact path={ROUTES.CREATESURVEY} render={(props) => <CreateSurveyPage {...props} surveys={this.state.surveys} categories={this.state.categories} addSurvey={this.addSurvey} />} />
            <Route exact path={ROUTES.EDITSURVEY} render={(props) => <EditSurveyPage {...props} surveys={this.state.surveys} categories={this.state.categories} deleteSurvey={this.deleteSurvey} updateSurvey={this.updateSurvey} />} />
            <Route exact path={ROUTES.ASSIGN_CATEGORIES} render={(props) => <AssignCategories {...props} users={this.state.users} categories={this.state.categories} findUserbyUserName={this.findUserbyUserName} updateAssignedCategories={this.updateAssignedCategories} />} />
          </Switch>

        </Router>
      </div>
    )
  }
}
