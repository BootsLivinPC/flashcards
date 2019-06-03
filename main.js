let question = document.getElementById('content q');
let answer = document.getElementById('content a');
var questions = ["Test Questions1", "Test Question2"];
var answers = ["Test Answers1", "Test Answer2"];

//



function getAnswer() {
for (var i = 0; i < answers.length; i++) {
  answer.innerHTML = answers[0]
  console.log(answers[i]);
}
}
function getQuestion() {
for (var i = 0; i < questions.length; i++) {
  question.innerHTML = questions[0]
  console.log(questions[i]);
}
}


console.log(getAnswer());
console.log(getQuestion());



