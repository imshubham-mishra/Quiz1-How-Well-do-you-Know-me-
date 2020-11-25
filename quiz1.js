
const chalk = require('chalk');
console.log(chalk.bold.red("Hii!  Welcome to How well do you know me game... ;)"))
var readline=require('readline-sync');
var score=0;
var userName=readline.question(chalk.bold.blueBright("What is your name?"));
console.log(chalk.bold.yellowBright("Welcome "+ userName ));
console.log(chalk.bold.cyanBright("Note!!you just have to enter your choice if the options are given."))
function play(question,answer){
  var userAns=readline.question(question);
  if(userAns.toLowerCase()===answer)
  {
    console.log(chalk.bgRedBright("WOW! "+userName+"!! You are Right!!!"))
    score=score+1
  }
  else{
    console.log(chalk.bgRedBright("sorry, you are wrong :(("));
  }
  console.log(chalk.bold.bgYellow("CURRENT SCORE : " ,score));
  console.log("==========================================");
}
var questions=[{
  question:chalk.bold.green("(1)What is my Hometown? \n(a)Uttar Pradesh\n(b)Hyderabad\n(c)Delhi\n(d)Bangalore\n"),
  answer:"a"
},
{
  question:chalk.bold.green("(2)Where do i work?\n"),
  answer:"capgemini"
},
{
question:chalk.bold.green("(3)I was Graduated from which University?\n"),
  answer:'jntuh'
},
{
  question:chalk.bold.green("(4)Who is my favorite villian character?\n(a)Gabbar\n(b)Thanos\n(c)Joker\n"),
  answer:"c"
},
{
  question:chalk.bold.green("(5)Am i coffee person or Tea person?\n") ,
  answer:"tea"
}
]
for(var i=0;i<questions.length;i++)
{
  var currentQuestion=questions[i];
  play(currentQuestion.question,currentQuestion.answer)
}
console.log(chalk.bold.red("YAY!!GAME OVER and your final score is ",+score+ " out of 5"))
console.log(chalk.bold.green("Thank you for playing this game...Please do share a screenshot of your final score."));

