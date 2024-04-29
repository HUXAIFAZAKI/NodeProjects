import inquirer from "inquirer";
class Person {
    name;
    personality = "Mystery";
    constructor(name, personality) {
        this.name = name;
        this.personality = personality;
    }
    askQuestion(answer) {
        if (answer == 1) {
            this.personality = 'Extrovert';
            console.log(`You are an ${this.personality} person `);
        }
        else {
            this.personality = 'Introvert';
            console.log(`You are an ${this.personality} person `);
        }
    }
}
let isRunning = true;
async function userInput() {
    const answer = await inquirer.prompt([
        {
            type: "string",
            name: "inputName",
            message: "Enter Your Name: \n"
        },
        {
            type: "number",
            name: "inputNum",
            message: "Type 1 if you like to talk to others OR Type 2 if you dont like to talk with others: \n",
        }
    ]);
    if (answer.inputNum != 1 || answer.inputNum != 2 || isNaN(answer.inputNum)) {
        console.log('Invalid number. Assuming you write 2');
        answer.inputNum = 2;
    }
    let myPerson = new Person(answer.inputName, answer.inputNum);
    console.log('===============================================================================');
    console.log(`Your name is '${myPerson.name}' and Your personality is ${myPerson.personality}`);
    myPerson.askQuestion(answer.inputNum);
    console.log('===============================================================================');
    if (myPerson.personality == 'Extrovert') {
        console.log('🗣️ Extrovert Extroverts, on the other hand, gain energy from social interaction and thrive in large groups.\n They are typically outgoing, talkative, and enjoy being the center of attention.');
    }
    else if (myPerson.personality == 'Introvert') {
        console.log('🧠 Introvert Introverts are individuals who primarily gain energy from spending time alone or in small groups.\n They tend to be more reflective, reserved, and enjoy solitary activities like reading or writing');
    }
    console.log('===============================================================================');
}
console.clear();
await userInput();
