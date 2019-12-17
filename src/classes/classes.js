export class User {
    user;// user name
    firstName;
    lastName;
    password;
    mail;
    role;//user type: User or Admin
    completedSurveys = []; // Ids of completed surveys
    assignedCategories = [];// assigned categories names array

    constructor(user, firstName, lastName, password, mail, role, assignedCategories) {
        this.user = user;
        this.firstName = firstName;
        this.lastName = lastName;
        this.password = password;
        this.mail = mail;
        this.role = role;
        this.assignedCategories = assignedCategories;
    }
}

export class Survey {
    id;
    name;
    category;
    deleted;
    questions = [];

    constructor(id, name, category, questions) {
        this.id = id;
        this.name = name;
        this.category = category;
        this.questions = questions;
        this.deleted = false;
    }
}

export class Question {
    question;
    answers = [];

    constructor(question, answers) {
        this.question = question;
        this.answers = answers;
    }
}