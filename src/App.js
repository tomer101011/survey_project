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
import './cssFiles/loginPage.css';
import './cssFiles/userPage.css';
import './cssFiles/surveyPage.css';
import './cssFiles/createPageStyle.css';
import './cssFiles/editSurveysStyle.css';
import *  as ROUTES from './constants/routes';
import { User, Survey, Question } from './classes/classes.js';
import 'bootstrap/dist/css/bootstrap.min.css';


export default class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      users: [
        new User('tomer', 'Tomer', 'Steiner', '1234', 'aaaa@gmail.com', 'User'),
        new User('ram', 'Ram', 'Maian', '4321', 'bbbb@walla.com', 'User'),
        new User('jon', 'Jon', 'Snow', '1111', 'cccc@gmail.com', 'Admin')
      ],

      surveys: [
        new Survey(0, 'bla bla', 'Bedroom',
          [new Question('are this better?', ['one', 'two', 'three']),
          new Question('bb', ['a', 'b', 'c']),
          new Question('ccc', ['d', 'e', 'f'])])
        ,
        new Survey(1, 'ma ma', 'Bathroom',
          [new Question('is this good?', ['four', 'five', 'six'])])
        ,
        new Survey(2, 'na na', 'Bedroom',
          [new Question('What is this?', ['seven', 'eight', 'nine']),
          new Question('bb', ['4', '5', '6']),
          new Question('ccc', ['1', '2', '3'])])
      ],

      categories: ['Bedroom', 'Bathroom']
    }
  }

  updateUser = (indexUser, userName, firstName, lastName, mail) => {
    let tempUsers = this.state.users;
    tempUsers[indexUser].user = userName;
    tempUsers[indexUser].firstName = firstName;
    tempUsers[indexUser].lastName = lastName;
    tempUsers[indexUser].mail = mail;
    this.setState({ users: tempUsers });
  }

  pushCompletedSurvey = (checkedSurvey, loggedUserIndex, indexSurvey) => {
    let tempUsers = this.state.users;
    tempUsers[loggedUserIndex].completedSurveys.push({ indexOfSurvey: indexSurvey, resultSurvey: checkedSurvey, couponRedeemed: false });
    this.setState({ users: tempUsers });
  }

  findSurveyIdInCompletedArr = (surveyId) => {
    let loggedUserIndex = localStorage.getItem('loggedUserIndex');
    for (let i = 0; i < this.state.users[loggedUserIndex].completedSurveys.length; i++)
      if (this.state.users[loggedUserIndex].completedSurveys[i].indexOfSurvey === surveyId)
        return i;
    return -1;
  }

  addNewCategory = (newCategory) => {
    let tempCategories = this.state.categories;
    tempCategories.push(newCategory);
    this.setState({ categories: tempCategories });
  }

  addSurvey = (survey) => {
    let tempSurveys = this.state.surveys;
    tempSurveys.push(survey);
    this.setState({ surveys: tempSurveys });
  }

  render() {
    return (
      <div>
        <Router>

          <Switch>
            <Route exact path={ROUTES.LOGIN} render={(props) => <LoginPage {...props} users={this.state.users} />} />
            <Route exact path={ROUTES.USER} render={(props) => <UserPage {...props} users={this.state.users} />} />
            <Route exact path={ROUTES.USER_INFO} render={(props) => <UserInfo {...props} users={this.state.users} updateUser={this.updateUser} />} />
            <Route exact path={ROUTES.ALLSURVEYS} render={(props) => <AllSurveysPage {...props} users={this.state.users} surveys={this.state.surveys} categories={this.state.categories} findSurveyIdInCompletedArr={this.findSurveyIdInCompletedArr} />} />
            <Route exact path={ROUTES.SURVEYPAGE} render={(props) => <SurveyPage {...props} users={this.state.users} surveys={this.state.surveys} pushCompletedSurvey={this.pushCompletedSurvey} findSurveyIdInCompletedArr={this.findSurveyIdInCompletedArr} />} />
            <Route exact path={ROUTES.COUPONPAGE} render={(props) => <CouponPage {...props} users={this.state.users} />} />
            <Route exact path={ROUTES.ADMIN} render={(props) => <AdminPage {...props} users={this.state.users} />} />
            <Route exact path={ROUTES.NEW_CATEGORY} render={(props) => <NewCategory {...props} addNewCategory={this.addNewCategory} />} />
            <Route exact path={ROUTES.ADMIN_EDIT_USERS} render={(props) => <AdminEditUsers {...props} users={this.state.users} updateUser={this.updateUser} />} />
            <Route exact path={ROUTES.CREATESURVEY} render={(props) => <CreateSurveyPage {...props} surveys={this.state.surveys} categories={this.state.categories} addSurvey={this.addSurvey} />} />
            <Route exact path={ROUTES.EDITSURVEY} render={(props) => <EditSurveyPage {...props} surveys={this.state.surveys} categories={this.state.categories} />} />
          </Switch>

        </Router>
      </div>
    )
  }
}
