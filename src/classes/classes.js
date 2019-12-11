export class User {
    user;
    password;
    mail;
    role;
    completedSurveys = []; // Ids of completed surveys

    constructor(user, password, mail, role) {
        this.user = user;
        this.password = password;
        this.mail = mail;
        this.role = role;
    }
}

export class Survey {
    id;
    name;
    category;
    questions = [];

    constructor(id, name, category, questions) {
        this.id = id;
        this.name = name;
        this.category = category;
        this.questions = questions;
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