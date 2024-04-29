import { log } from "console"
import inquirer from "inquirer"

const answer = await inquirer.prompt(
[
    {type: "number",name: "numberOne",message: "Enter your First number"},
    {type: "number",name: "numberTwo",message: "Enter your Second number"},
    {
        type: "list",
        name: "operator",
        choices: ["Addition (+)","Subtraction (-)","Multiplication (*)","Division (/)"],
        message: "Select your opertor"
    }
]
)

// console.log(answer)

if(answer.operator === "Addition (+)")
{
    console.log(`Output : ${answer.numberOne + answer.numberTwo}`)
}
else if(answer.operator === "Subtraction (-)")
{
    console.log(`Output : ${answer.numberOne - answer.numberTwo}`)
}
else if(answer.operator === "Multiplication (*)")
{
    console.log(`Output : ${answer.numberOne * answer.numberTwo}`)
}
else if(answer.operator === "Division (/)")
{
    console.log(`Output : ${answer.numberOne / answer.numberTwo}`)
}
else
{
    console.log("invalid input");
}