let startButton = document.querySelector(".startButton");
let questionNumberText = document.querySelector(".questionNumberText");
let questionText = document.querySelector(".questionText");
let startButtonDiv = document.querySelector(".startButtonDiv");
let button1 = document.querySelector("#option1");
let button2 = document.querySelector("#option2");
let button3 = document.querySelector("#option3");
let button4 = document.querySelector("#option4");
let optionsDiv = document.querySelector(".optionsDiv");
let questionImage = document.querySelector(".questionImage");
let questionNumber = 0;
let questionsRight = 0;
const questionsList = ["Let's start easy, back at the formal, how did we get there?",
                       "One of our very first outings together! What did we do on this day?",
                       "This one's pretty obvious, where are you?",
                       "Christmas Eve 2022! What are we doing?",
                       "Possibly a hard one! What day was this photo taken?",
                       "The first alphabet date! We are at a park while we wait for the next activity, what is it?", "Time for B dates! What does the B stand for here?", "Festival time! What does the B stand for here?", "Another B activity!? This one was a stretch! What was it?", "An exciting day! Where are we going?", "We're in the Gold Coast! What are we sitting on?", "Last one! How much do I love you?"];
const imageList = ["q1.jpg", "q2.jpg",
"q3.jpg",
"q6.jpg", "q5.jpg", "gfdsfgddgfgfd.jpg", "dasfdsghhjhjhj.jpg", "dsagdsfgfdgh.jpg", "hfd.jpg", "adsafdsaaf.jpg", "dsfggdf.jpg",
"q4.jpg"];
const endImage = "gameeendphoto.jpg";
const answersList = [["option1", 0],
                     ["option2", 1],
                     ["option4", 3],
                     ["option4", 3],
                     ["option2", 1],
                     ["option4", 3],
                     ["option1", 0],
                     ["option3", 2],
                     ["option2", 1],
                     ["option1", 0],
                     ["option4", 3],
                     ["option4", 3]];
const optionsLists = [["By Boat!", "A Limo, Duh!", "Private Jet!", "We Walked!"],
                     ["Arcade!", "Escape Room!", "Cat Cafe!", "Ice Skating!"],
                     ["The Zoo!", "A Safari!", "Escape Room!", "Cat Cafe!"],
                      ["Ice Skating!", "Escape Room!", "Roller Skating!", "Roller Blading!"],
                      ["Anniversary!", "Valentine's Day!", "Your Birthday!", "My Birthday!"],
                      ["Aquarium!", "Arcade!", "Afternoon Tea!", "Asian Cuisine!"],
                      ["Boat!", "Beauty!", "Being in Love!", "Basketball!"],
                      ["Bowling!", "Basketball!", "Bumper Cars!", "Beer Pong!"],
                      ["Best Day!", "Big Tree!", "Being Together!", "Bowling!"],
                     ["Skz Concert!", "Arcade!", "Escape Room!", "Keshi Concert!"],
                     ["A Spider!", "A Toad!", "A Chair!", "A Frog!"], ["A Little :(", "Quite a Bit!", "A Lot!", "More than Anything!"]];
let totalQuestions = questionsList.length;
let gameOver = false;


function startGame() {
  if (gameOver === true) {
    startButtonDiv.classList.add("hiderClass");
  optionsDiv.classList.add("hiderClass");
  } else {
  startButtonDiv.classList.add("hiderClass");
  optionsDiv.classList.remove("hiderClass");
  }
}
function endGame() {
  gameOver = true;
  questionImage.src = endImage;
  questionNumberText.style.color = "#B4C5E4";
  startButtonDiv.classList.add("hiderClass");
  optionsDiv.classList.add("hiderClass");
  questionNumberText.textContent = "You Got " + questionsRight.toString() + " Out of " + totalQuestions.toString() + "! Good Job!";
  questionText.textContent = "I Love You!!";
}
function nextQuestion() {
  if (questionNumber >= totalQuestions) {
    endGame();
    return;
  }
  questionNumberText.style.color = "#B4C5E4";
  questionNumber++;
  questionNumberText.textContent = "Question " + questionNumber.toString();
  questionText.textContent = questionsList[questionNumber-1];
  questionImage.src = imageList[questionNumber-1]
  button1.textContent = optionsLists[questionNumber-1][0];
  button2.textContent = optionsLists[questionNumber-1][1];
  button3.textContent = optionsLists[questionNumber-1][2];
  button4.textContent = optionsLists[questionNumber-1][3];
}
function checkAnswer(e) {
  if (e.target.id === answersList[questionNumber-1][0]) {
    questionText.textContent = "";
    questionNumberText.style.color = "green";
    questionNumberText.textContent = "Correct!";
    questionsRight++;
  
  } else if (e.target.id === "option1" || e.target.id === "option2" || e.target.id === "option3" || e.target.id === "option4"){
    questionText.textContent = "The answer was: " + optionsLists[questionNumber-1][answersList[questionNumber-1][1]]
    questionNumberText.textContent = "Incorrect!";
    questionNumberText.style.color = "red";
  }
  if (e.target.id === "option1" || e.target.id === "option2" || e.target.id === "option3" || e.target.id === "option4") {
    startButtonDiv.classList.remove("hiderClass");
    optionsDiv.classList.add("hiderClass");
    if (questionNumber === totalQuestions) {
      startButton.textContent = "Finish Quiz!"
    } else {
    startButton.textContent = "Next Question";
    }
  }
}

optionsDiv.onclick = checkAnswer;







