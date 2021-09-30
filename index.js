var readLineSync = require('readline-sync');
const chalk = require("chalk");

// hex code :- #66CDAA for mediumaquamarine
// hex code :- #00BFFF for deepskyblue
// red is the same chalk.red("text")

//input (take a value and store it in userName)
var userName=readLineSync.question("What is your name ?");

console.log(chalk.hex("#00BFFF")("Hello",userName+",","Welcome to the quiz - 'Do you know Mehul?'"));
console.log(chalk.hex("#00BFFF")("Let's Begin with the Quiz shall we?"))

//global variable score
var score = 0;

//questions (objects) (key:value) and 
//questions list
var questions=[{
  question:"1) Where do I live? :-",
  answer:"Delhi",
},{
  question:"2) What is my favourite sport? :-",
  answer:"Football",
},{
  question:"3) Do I have any pets? :-",
  answer:"Yes",
},{
  question:"4) Whay is my favorite season? :-",
  answer:"Spring",
},{
  question:"5) What is my favorite ice cream flavor? :-",
  answer:"Vanilla",
}]

//high scores
var highScores=[{
  name:"Mehul",
  score:5,
},{
  name:"Sumit",
  score:3,
}]
//play function
function play(question,answer) {
  userAns=readLineSync.question(question);
  if (userAns.toUpperCase()===answer.toUpperCase()){
    console.log(chalk.hex("#66CDAA")("Correct !"));
    score=score+1
  }else{
    console.log(chalk.red("Wrong !"));
    score=score-1
  }
  console.log("Score:",score)
  console.log(chalk.hex("#00BFFF")("=============================="))
}

//for loop
for (i=0;i<questions.length;i=i+1) {
  var ques = questions[i].question
  var ans =  questions[i].answer
  play(ques,ans)
}

console.log(chalk.hex("#00BFFF")(userName,"your final score is :-",score));
if (score===highScores[0].score){
  console.log(chalk.hex("#00BFFF")("Congrats you have tied for the first place "));
  console.log(chalk.hex("#00BFFF")("Send me a screenshot of your replies on discord and I will update the highscores"));
}else if (score===highScores[1].score){
  console.log(chalk.hex("#00BFFF")("Congrats you have tied for the second place "));
  console.log(chalk.hex("#00BFFF")("Send me a screenshot of your replies on discord and I will update the highscores"));
}else{
  
}
console.log(chalk.hex("#00BFFF")("Thank you for playing :)"));
