import inquirer from "inquirer";

const num = await inquirer.prompt([
  {
    name: "minNum",
    type: "number",
    message: "Enter Minimum Number : ",
  },
  {
    name: "maxNum",
    type: "number",
    message: "Enter Maximum Number: ",
  },
  {
    name: "Difficulty",
    type: "list",
    message: "Select your desired difficulty: ",
    choices: ["Easy", "Medium", "Hard"],
  },
]);

function genNum():number
{
  const min = num.minNum;
  const max = num.maxNum;
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

const ranNum = genNum();
let guesses = 0;

if (num.Difficulty === "Easy") {
  guesses = 10;
} else if (num.Difficulty === "Medium") {
  guesses = 5;
} else if (num.Difficulty === "Hard") {
  guesses = 3;
}

while (guesses !== 0) {
  console.log(`You Have ${guesses} guesses left!`);

  const guess = await inquirer.prompt([
    {
      name: "userNum",
      type: "number",
      message: "Enter your guess : ",
    },
  ]);
  if (guess.userNum === ranNum) {
    console.log("You Successfully Guessed The Number!");
    break;
  } else if (guess.userNum > ranNum) {
    console.log("Try Guesssing A Smaller Num!");
  } else if (guess.userNum < ranNum) {
    console.log("Try Guesssing A Larger Num!");
  }
  guesses--;
}

if(guesses === 0)
{
    console.log("You Ran Out Of Guesses!");
}