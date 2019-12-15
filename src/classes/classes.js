export class User {
    user;
    firstName;
    lastName;
    password;
    mail;
    role;
    completedSurveys = []; // Ids of completed surveys

    constructor(user, firstName, lastName, password, mail, role) {
        this.user = user;
        this.firstName = firstName;
        this.lastName = lastName;
        this.password = password;
        this.mail = mail;
        this.role = role;
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