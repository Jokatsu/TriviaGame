//make an object to hold all the questions and the cards
//display the questions and answers to the player can click them
//make an on click function so players can select an answer
//if the answer is wrong or right or time runs out the question goes next 
//
$(document).ready(function () {

    var questions = [
        {
            question: "Who was the Greek god of war?",
            answers: ["Odin", "Zeus", "Ares", "Heracles"],
            correctAnswer: "Ares",
            used: false,
        },

        {
            question: "Which chemical element is diamond made of?",
            answers: ["Carbon", "Silicon", "Coal", "Diamond"],
            correctAnswer: "Carbon",
            used: false,
        },

        {
            question: "Which part of the body produces insulin?",
            answers: ["Pancreas", "Liver", "Kidneys", "Pituitary Gland"],
            correctAnswer: "Pancreas",
            used: false,
        },

        {
            question: "What is the official language of Brazil?",
            answers: ["Spanish", "Portuguese", "Brazilian", "Latin"],
            correctAnswer: "Portuguese",
            used: false,
        },

        {
            question: "What is the currency of India?",
            answers: ["Indian Dollars", "Sheckles", "Karshapanas", "Rupees"],
            correctAnswer: "Rupees",
            used: false,
        },

        {
            question: "In a standar pack of cards, which king does not have a moustache?",
            answers: ["King of Hearts", "King of Spades", "King of Clubs", "King of Diamonds"],
            correctAnswer: "King of Hearts",
            used: false,
        },

        {
            question: "What is the capital of New York?",
            answers: ["Boston", "Albany", "New York", "Brooklyn"],
            correctAnswer: "Albany",
            used: false,
        },

        {
            question: "The first atomic bomb test split an atom of which fissionable element?",
            answers: ["Uranium", "Hydrogen", "Plutonium", "Atomicium"],
            correctAnswer: "Plutonium",
            used: false,
        },

        {
            question: "How many dots are on a Pac-Man board?",
            answers: ["350", "240", "127", "100"],
            correctAnswer: "240",
            used: false,
        },

        {
            question: 'What hindu god was known as "The Destroyer"',
            answers: ["Ganesha", "Brahman", "Krishna", "Shiva"],
            correctAnswer: "Shiva",
            used: false,
        }



    ];
    var answered = false;
    var currentQuestion = 0;
    var time = 15;
    var correct = 0;
    var incorrect = 0;
    var interval;

    $("#start").on("click", function () {
        $("#playScreen").show();
        $("#start").hide();

        displayQuestions();


    });

    $("#reset").on("click", function () {
        $("#correctAnswers").empty();
        $("#incorrectAnswers").empty();
        $("#results").hide();
        $("#timer").show();
        correct = 0;
        incorrect = 0;
        currentQuestion = 0;

        displayQuestions();

        $("#playScreen").show();


    });






    function timer() {
        time = 15;
        clearInterval(interval);
        interval = setInterval(countDown, 1000);
        
        function countDown() {
            if (time < 1 && answered === false) {

                noTime();





            }

            if (time > 0 && answered === false) {
                time--;
                $("#countdownNum").text(time);
            }

            
        }


    }

    function empty() {
        $("#question").empty();
        $("#salad").empty();
    };


    function noTime() {
        console.log(currentQuestion);
        empty();
        answered = true;
        incorrect++; 
        $("#timer").hide();
        $(correctOrNot).empty(); 
        $(correctOrNot).show();
        $("#correctOrNot").append("<div id='correctText' <p>" + "Ran Out Of Time! The answer was "+questions[currentQuestion].correctAnswer + "</p></div>");
        setTimeout(function () {
            displayQuestions();
        }, 3000);



        incorrect++;
        console.log(incorrect);

    };


    function displayQuestions() {
        timer();
        $("#timer").show();
        $("#correctOrNot").hide(); 
        if (currentQuestion < questions.length) {

            var selectedQuestion = questions[currentQuestion]
            $("#question").text(selectedQuestion.question);
            for (var i = 0; i < selectedQuestion.answers.length; i++) {
                $("#salad").append("<input type='button' class= 'clickB' value='" + selectedQuestion.answers[i] + "'/>");


            }
            currentQuestion++;
            answered = false;

            $("input.clickB").on("click", function () {
                empty();
                answered = true;
                $("#timer").hide();
                console.log("WORKING");
                checker($(this).attr("value"));

                setTimeout(function () {
                    displayQuestions();
                }, 3000);


            });
        } else {
            gameEnd();
        }
    }


    function checker(val) {
        console.log(val);

        var selectedQuestion = questions[currentQuestion - 1];
        console.log(selectedQuestion.correctAnswer);
        if (val === selectedQuestion.correctAnswer) {
            correct++;
            console.log("correct: " + correct);
            correctRW(1);

        } else {
            incorrect++;
            console.log("incorrect: " + incorrect);
            correctRW(0);

        }
        
        function correctRW(check) {
            if (check === 1) {
                $(correctOrNot).empty(); 
                $(correctOrNot).show(); 
                $("#correctOrNot").append("<div id='correctText' <p>" + "Correct! The answer was " + selectedQuestion.correctAnswer + "</p></div>"); 
            } else{
                $(correctOrNot).empty(); 
                $(correctOrNot).show();
                $("#correctOrNot").append("<div id='correctText' <p>" + "Incorrect! The answer was " + selectedQuestion.correctAnswer + "</p></div>");
            }
        }

    };



    function gameEnd() {
        clearInterval(interval);
        $("#timer").hide();
        empty();
        $("#results").show();
        $("#correctAnswers").append("<p> You got " + correct + " answers correct</p>");
        $("#incorrectAnswers").append("<p> You got " + incorrect + " answers incorrect.</p>");


    };
});