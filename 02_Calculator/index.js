"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const inquirer_1 = __importDefault(require("inquirer"));
const answer = await inquirer_1.default.prompt([
    { type: "number", name: "numberOne", message: "Enter your First number" },
    { type: "number", name: "numberTwo", message: "Enter your Second number" },
    {
        type: "list",
        name: "operator",
        choices: ["Addition (+)", "Subtraction (-)", "Multiplication (*)", "Division (/)"],
        message: "Select your opertor"
    }
]);
// console.log(answer)
if (answer.operator === "Addition (+)") {
    console.log(`Output : ${answer.numberOne + answer.numberTwo}`);
}
else if (answer.operator === "Subtraction (-)") {
    console.log(`Output : ${answer.numberOne - answer.numberTwo}`);
}
else if (answer.operator === "Multiplication (*)") {
    console.log(`Output : ${answer.numberOne * answer.numberTwo}`);
}
else if (answer.operator === "Division (/)") {
    console.log(`Output : ${answer.numberOne / answer.numberTwo}`);
}
else {
    console.log("invalid input");
}
