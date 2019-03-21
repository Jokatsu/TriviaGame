//make an object to hold all the questions and the cards
//display the questions and answers to the player can click them
//make an on click function so players can select an answer
//if the answer is wrong or right or time runs out the question goes next 
//
$(document).ready(function () {

function randomNumber(min,max){
  return Math.floor((Math.random() * (max-min)) + min);  
}

var questions = [
    {
        question: "Who was the Greek god of war?",
        answers: ["Odin", "Zeus", "Ares", "Heracles"],
        correctAnswer: "Ares",
    },

    {
        question: "Which chemical element is diamond made of?",
        answers: ["Carbon", "Silicon", "Coal", "Diamond"],
        correctAnswer:"Carbon",
    },

    {
        question: "Which part of the body produces insulin?",
        answers:["Pancreas", "Liver", "Kidneys", "Pituitary Gland"],
        correctAnswer:"Pancreas", 
    },

    {
        question:"What is the official language of Brazil?",
        answers:["Spanish", "Portuguese", "Brazilian", "Latin"],
        correctAnswer:"Portuguese",
    },

    {
        question:"What is the currency of India?",
        answers:["Indian Dollars", "Sheckles", "Karshapanas", "Rupees"],
        correctAnswer:"Rupees"
    },

    {
        question:"In a standar pack of cards, which king does not have a moustache?",
        answers:["King of Hearts", "King of Spades", "King of Clubs", "King of Diamonds"],
        correctAnswer:"King of Hearts", 
    }, 

    {
        question:"What is the capital of New York?",
        answers:["Boston", "Albany", "New York", "Brooklyn"],
        correctAnswer:"Albany", 
    },

    {
        question:"The first atomic bomb test split an atom of which fissionable element?",
        answers:["Uranium", "Hydrogen", "Plutonium", "Atomicium"],
        correctAnswer:"Plutonium", 
    },

    {
        question:"How many dots are on a Pac-Man board?", 
        answers:["350","240","127", "100"], 
        correctAnswer:"240"
    },

    {
        question:'What hindu god was known as "The Destroyer"',
        answers:["Ganesha",]
    }



];

var selectedQuestion=questions[randomNumber(0,questions.length)];
var selectedAnswer;
var usedQuestions=[];
var rightAnswer=selectedQuestion.correctAnswer; 
console.log(selectedQuestion); 
console.log(rightAnswer); 
for(var i=0; i<selectedQuestion.answers.length;i++){
$("#salad").append("<p>"+selectedQuestion.answers[i]+"</p>"); 
}
});