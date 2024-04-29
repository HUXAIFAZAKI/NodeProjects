import inquirer from "inquirer";

console.clear()
console.log("PAKISTAN QUIZ -v1")
console.log("Lets Start")

let correctAnswers = 0;
let incorrectAnswers = 0;
let passingRatio = 0;

let answer = await inquirer.prompt([
    {
        type: "list",
        name: "question",
        message: "What's the national sport of Pakistan?",
        choices: ["cricket",
         "Arguing over chai",
          "Scootering in Karachi traffic "]
    }
])
if(answer.question == "cricket"){
    correctAnswers++;
}
else{
    incorrectAnswers++
}

let answer2 = await inquirer.prompt([
    {
        type: "list",
        name: "question",
        message: "Which have more Population : ",
        choices: ["Punjab","Sindh","Khyber Pakhtunkhwa "]
    }
])
if(answer2.question == "Punjab"){
    correctAnswers++;
}
else{
    incorrectAnswers++
}

let answer3 = await inquirer.prompt([
    {
        type: "list",
        name: "question",
        message: 'What is the national language of Pakistan?',
        choices: ["English","Urdu","Punjabi"]
    }
])
if(answer3.question == "Urdu"){
    correctAnswers++;
}
else{
    incorrectAnswers++
}
let answer4 = await inquirer.prompt([
    {
        type: "list",
        name: "question",
        message: "The most Pakistani thing to do?",
        choices: ["Climb Mount K2",
         "Eat biryani with bare hands",
         "Debate best city food"]
    }
])
if(answer4.question == "Debate best city food"){
    correctAnswers++
}
else{
    incorrectAnswers++
}
let answer5 = await inquirer.prompt([
    {
        type: "list",
        name: "question",
        message: "What's not the breakfast of Pakistan?",
        choices: ["Eggs and toast", "Paratha and chai", "Haleem"]
    }
])
if(answer5.question == "Haleem"){
    correctAnswers++
}
else{
    incorrectAnswers++
}
let answer6 = await inquirer.prompt([
    {
        type: "list",
        name: "question",
        message: "Which of the following is a traditional Pakistani musical instrument?",
        choices: ["Sitar", "Tabla", "Didgeridoo"]
    }
])
if(answer6.question == "Sitar"){
    correctAnswers++
}
else{
    incorrectAnswers++
}
passingRatio = (correctAnswers/6) * 100;
console.log(`Your correct answers are:${correctAnswers} and pass the quiz with ${passingRatio}%`)
console.log(`Your incorrect answers are:${incorrectAnswers}`)