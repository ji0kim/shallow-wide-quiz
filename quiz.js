// const { questions } = require("./questions");
// import questions from "./questions";
let i = getRandojmInt(3);
const questions = [
  {
    question:
      "1- Which of the following retains the information its storing when the power to the system is turned off?",
    options: ["CPU", "ROM", "RAM", "DIMM"],
    answer: "ROM",
    isUsed: false,
  },
  {
    question:
      "2-A network of computers and other devices that is confined to a relatively small space is called?",
    options: [
      " Wide Area Network",
      "Local Area Network",
      "Global Network",
      "Peer-to-Peer Network",
    ],
    answer: "Local Area Network",
    isUsed: false,
  },
  {
    question:
      "3-Every computer connected to the Internet is identified by a unique four-part string, known as",
    options: ["IP address", "Host name", "Domain name", "None of the above"],
    answer: "IP address",
    isUsed: false,
  },
];
function getRandomInt(max) {
  if (questions[i].isUsed === true) {
    return;
  } else {
    let i = Math.floor(Math.random() * max);
    return i;
  }
}

let score = 0;
function getAnswer(button) {
  if (button === questions[i].answer) {
    score++;
    document.querySelector("#result").innerText = "Correct, next question";
    // ask new question?
    if (
      confirm("Congratulations, that was correct. Click OK for next question")
    ) {
      chooseQuestion();
    }
  } else if (button !== true) {
    document.querySelector("#result").innerText = "You lose, GAME OVER";
  }
}

function chooseQuestion() {
  const i = getRandomInt(3);
  number = i;
  const questionTemplate = `
<h2>${questions[i].question}</h2>
    <div id="answer">
      
    <button
        type="submit"
        id="${questions[i].options[0]}"
        onclick="getAnswer(value)"
        value="${questions[i].options[0]}"
      >
      ${questions[i].options[0]}
      </button>

      <button
        type="submit"
        id="${questions[i].options[1]}"
        onclick="getAnswer(value)"
        value="${questions[i].options[1]}"
      >
      ${questions[i].options[1]}
      </button>

      <button
        type="submit"
        id="${questions[i].options[2]}"
        onclick="getAnswer(value)"
        value="${questions[i].options[2]}"
      >
      ${questions[i].options[2]}
      </button>

      <button
        type="submit"
        id="${questions[i].options[3]}"
        onclick="getAnswer(value)"
        value="${questions[i].options[3]}"
      >
      ${questions[i].options[3]}
      </button>

    </div>
`;
  questions[i].isUsed = true;

  const questionBox = document.getElementById("questionBox");
  questionBox.innerHTML = questionTemplate;
}
