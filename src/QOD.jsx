// Default V2 theme
import 'survey-core/defaultV2.min.css';
import { Model } from 'survey-core';
import { Survey } from 'survey-react-ui';

export default function () {
    const questions = [{
                type: "radiogroup",
                name: "question1",
                title: "What should you do before handling any animal at the petstore?",
                choices: [
                    "Wash your hands", "Wear gloves", "Eat snacks", "None of the above"
                ],
                correctAnswer: "Wash your hands"
            },
            {
                type: "radiogroup",
                name: "question2",
                title: "Which of the following is NOT a recommended practice when handling small animals?",
                choices: [
                    "Holding them gently but firmly", "Letting them run loose on the floor", "Keeping them away from your face", "Avoiding sudden movements"
                ],
                correctAnswer: "Letting them run loose on the floor"
            },
            {
                type: "radiogroup",
                name: "question3",
                title: "When selecting a toy for your pet, what should you consider?",
                choices: [
                    "Size and age", "Bright colours and loud sounds", "Complexity and difficulty", "All of the Above"
                ],
                correctAnswer: "All of the Above"
            },
            {
                type: "radiogroup",
                name: "question4",
                title: "Which of the following is an essential item to have before bringing home a new pet?",
                choices: [
                    "A pet carrier", "A leash and collar (depending on the animal)", "Food and water dish", "All of the Above"
                ],
                correctAnswer: "All of the Above"
            },
            {
                type: "radiogroup",
                name: "question5",
                title: "What should you do if you notice signs of illness in an animal at a pet store?",
                choices: [
                    "Inform a staff member", "Ignore it", "Wait to see if it gets better on its own", "Take the animal home and treat it yourself"
                ],
                correctAnswer: "Inform a staff member"
            },
            {
                type: "radiogroup",
                name: "question6",
                title: "Which of the following is a potential hazard when visiting a pet store?",
                choices: [
                    "Escaped animals", "Slippery floors", "Allergens", "All of the Above"
                ],
                correctAnswer: "All of the Above"
            },
            {
                type: "radiogroup",
                name: "question7",
                title: "What should you do if you witness another customer mishandling an animal at the pet store?",
                choices: [
                    "Confront the customer", "Inform a staff member", "Ignore it and mind your own business", "Take a video and post it online"
                ],
                correctAnswer: "Inform a staff member"
            },
            {
                type: "radiogroup",
                name: "question8",
                title: "What should you do if you are unsure about how to properly care for a specific pet at the store?",
                choices: [
                    "Guess and figure it out later", "Ask a staff member for guidance", "Trust your instincts", "Buy the pet anyways"
                ],
                correctAnswer: "Ask a staff member for guidance"
            },
            {
                type: "radiogroup",
                name: "question9",
                title: "When purchasing a new cage, what should you consider?",
                choices: [
                    "Size and ventilation", "Colour and design", "Price only", "None of the above"
                ],
                correctAnswer: "Size and ventilation"
            },
            {
                type: "radiogroup",
                name: "question10",
                title: "What should you do if you accidentally break something while browsing at the petstore?",
                choices: [
                    "Pretend it didn't happen and walk away", "Alert a staff member", "Quickly leave the area", "Blame it on someone else"
                ],
                correctAnswer: "Alert a staff member"
            },
            ];
    const nQuestion = Math.floor((Math.random() * questions.length));
    const surveyJson = {
        title: "Petstore Safety and Precautions",
        showCorrectAnswer: "always",
        showProgressBar: "bottom",
        firstPageIsStarted: true,
        startSurveyText: "Start Quiz",
        pages: [{
            elements: [{
                type: "html",
                html: "You are about to start a quiz on Petstore Safety and Precautions. <br>You will have 30 seconds for every question and 60 seconds to end the quiz.<br>Enter your name below and click <b>Start Quiz</b> to begin."
            }, {
                type: "text",
                name: "username",
                titleLocation: "hidden",
                isRequired: true
            }]
        }, {
            elements: [questions[nQuestion]]
        }]
    };
    const survey = new Model(surveyJson);

    survey.onComplete.add(function (sender) {
        var questions = sender.getAllQuestions();
        for (var i = 0; i < questions.length; i++) {
            var question = questions[i];
            var correctAnswer = question.correctAnswer;
            var userAnswer = question.value;
            var questionTitle = question.title;
            console.log("Question: " + questionTitle);
            console.log("Correct Answer: " + correctAnswer);
            console.log("User Answer: " + userAnswer);
        }
    });

    return <Survey model={survey} />;
}