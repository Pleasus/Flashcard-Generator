// define a variable that accesses info from the ClozeCard and BasicCard files
var ClozeCard = require('./ClozeCard');
var BasicCard = require('./BasicCard');

// Define a variable that requires inquirer for this JS file
var inquirer = require('inquirer');

// Define a variable that requires fs so that the file system can be utilized
var fs = require('fs');

//define a function to append the log.txt file with card info
function appendCard (cardEntry) {
fs.appendFile('log.txt', cardEntry, function (error) {
if (error) {
  console.log(error);
  }
});
};


//inquirer prompt that asks the user how they want to begin creating cards
inquirer.prompt([
{
    type: "list",
    name: "flashCardType",
    message: "What type of flash card would you like to create?",
    choices: ["Basic", "ClozeCard"]
},

// inquirer function that runs after the user input
]).then(function (answers) {

//define a variable that is the kind the user chose
  var answer = answers.flashCardType;
  console.log(answer);

  // if/else to decide whether to run the newBasic or the newCloze function
  if (answer === "Basic"){
    newBasic();
  }
  else if (answer === "ClozeCard"){
    newCloze();
  }
});

// function used to house the inquirer prompt and the action to append the txt file
function newBasic(){

  //inquirer prompt used to create a basic card
  inquirer.prompt([
  {
      type: "input",
      name: "basicQuestion",
      message: "What question would you like to ask?",
    },
    {
      type: "input",
      name: "basicAnswer",
      message: "What is the answer to your question?",
      },

  ]).then(function (basicResponse) {
  
  // variables defined by user input
  var basicQuestion = process.argv[2];
  var basicAnswer = process.argv[3];
  var myBasicCard = new BasicCard (basicResponse.basicQuestion,basicResponse.basicAnswer);
  myBasicCard.printInfo();

  // append log.txt file with the user input info
  appendCard("Front: " + myBasicCard.front + "\r\n\r\n");
  appendCard("Back: " + myBasicCard.back + "\r\n\r\n");
  })
};

//function used to house the inquirer prompt and the action to append the txt file
function newCloze(){
  inquirer.prompt([
  {
      type: "input",
      name: "text",
      message: "Enter a statement for the front of the cloze card (include answer)",
    },
    {
      type: "input",
      name: "cloze",
      message: "What is the word or phrase you want blanked out?",
    },

  //create cloze card based on response
  ]).then(function (clozeResponse) {

  // variables defined by user input
  var text = process.argv[2];
  var cloze = process.argv[3];
  var myClozeCard = new ClozeCard (clozeResponse.text,clozeResponse.cloze);
  myClozeCard.printInfo();

  // append log.txt file with the user input info
  appendCard("Front: " + myClozeCard.cloze + "\r\n\r\n");
  appendCard("Back: " + myClozeCard.partial + "\r\n\r\n");
  })
};