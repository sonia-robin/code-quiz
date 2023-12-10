// Global variables

// hide element - I have .hide class in css

// A start button that when clicked a timer starts and the first question appears. 

// Questions contain buttons for each answer. (button style is in css)

// Create questions using DOM
// Questions will be ordered lists
// create using document.createElement(ol)
// ol.createElement(li)
// createElement(button)
    // store answers in array of objects
    // use a for loop
// .textContent = "..."
// .appendChild(tag)

var timerEl = document.querySelector(".timer"); //do I need it?
var timeEl = document.querySelector("#time");
var timeLeft = 0; 
var startScreen = document.querySelector("#start-screen");
var endScreen = document.querySelector("#end-screen");
var startBttn = document.querySelector("#start");
var questionsEl = document.querySelector("#questions")
var questionTitle = document.querySelector("#question-title");
var questionChoices = document.querySelector("#choices");
var questionIndex = 0;


// Timer function //FUNCTIONS AS EXPECTED
function timer(){
    timeLeft = 75;
    //setInterval() method to call a function to be executed every 1000 milliseconds
    var timerInterval = setInterval(function(){
        timeLeft--;
        timeEl.textContent = timeLeft;
        // clear interval when the time left reaches 0
        if(timeLeft === 0){
            clearInterval(timerInterval)
            endScreen.setAttribute("class", "")
        }
    }, 1000);
}

// add an event listener to the start button, event = click, function
startBttn.addEventListener("click", function(){
    // timer function called
    timer();
    // hide start screen
    startScreen.setAttribute("class", "hide");
    // unhide questions div
    questionsEl.setAttribute("class", "");
    // display the first question
    //function display question called
    displayQuestion()    
});
 


// function to display first question - .textContent
function displayQuestion(){
    questionTitle.textContent = questions[questionIndex].question;
    console.log(questionTitle);
    // display choices in buttons
} 


//function to display next question
// function nextQuestion(){

// }



// If the answer clicked was incorrect then subtract time from the clock minus 10 seconds

// add sounds for correct and wrong answers
// display correct or wrong after answering, under a line in the next question
    // function to display a message and a break line, only for around 2-3 seconds
    // look at client side storage 04 stu    

// The quiz should end when all questions are answered or the timer reaches 0.

// When the game ends, it should display their score and give the user the ability to save their initials and their score
// use local storage