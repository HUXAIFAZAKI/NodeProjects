"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const inquirer_1 = __importDefault(require("inquirer"));
let isRunning = true;
console.clear();
console.log("Welcome to CLI Currency Convertor (May 2024)\n");
while (isRunning) {
    let answer = await inquirer_1.default.prompt([
        {
            type: "number",
            name: "amount",
            message: "Enter your amount (In Rupees) : ",
        },
        {
            type: "list",
            name: "convertTo",
            message: "Please indicate the currency for conversion.",
            choices: [
                "US Dollars",
                "Pounds",
                "Euro",
                "Indian Ruppes",
                "UAE Dirham",
                "Japanese Yen",
                "Convert All"
            ],
        },
    ]);
    let currencyDesired = answer.convertTo;
    if (currencyDesired === "US Dollars") {
        console.log("The amount in US Dollars is:" + answer.amount * 0.0036 + " Dollars");
    }
    else if (currencyDesired === "Pounds") {
        console.log("The amount in Pounds is:" + answer.amount * 0.0029 + " Pounds");
    }
    else if (currencyDesired === "Euro") {
        console.log("The amount in Euro is:" + answer.amount * 0.0033 + " Euros");
    }
    else if (currencyDesired === "Indian Ruppes") {
        console.log("The amount in Indian Ruppes is is:" + answer.amount * 0.3 + " Ruppes");
    }
    else if (currencyDesired === "UAE Dirham") {
        console.log("The amount in UAE Dirhams is:" + answer.amount * 0.013 + " Dirhams");
    }
    else if (currencyDesired === "Japanese Yen") {
        console.log("The amount in Japanese Yen is:" + answer.amount * 0.54 + " Yen");
    }
    else if (currencyDesired === "Convert All") {
        console.log(`All conversion of ${answer.amount}PKR are as follow :-`);
        const allConv = {
            USDollar: {
                to: answer.amount * 0.0036
            },
            Pound: {
                to: answer.amount * 0.0029
            },
            Euro: {
                to: answer.amount * 0.0033
            },
            IndianRuppes: {
                to: answer.amount * 0.30
            },
            UAEDirham: {
                to: answer.amount * 0.0013
            },
            JapanesYen: {
                to: answer.amount * 0.054
            }
        };
        console.table(allConv);
    }
    let exit = await inquirer_1.default.prompt([
        {
            type: "list",
            name: "option",
            message: "What would you like to do?",
            choices: ["Exit", "Continue"],
        },
    ]);
    if (exit.option == "Exit") {
        let sureExit = await inquirer_1.default.prompt([
            {
                type: "list",
                name: "option",
                message: "Are you sure you want to exit?",
                choices: ["Yes", "No"],
            }
        ]);
        if (sureExit.option == "Yes") {
            console.log("Thanks for using CLI Currency Convertor -v1.0");
            console.log("Made by Huzaifa");
            isRunning = false;
            process.exit(1);
        }
        else {
            console.clear();
            isRunning = true;
        }
    }
    else {
        console.clear();
        isRunning = true;
    }
}
