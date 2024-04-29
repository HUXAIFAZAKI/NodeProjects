"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const inquirer_1 = __importDefault(require("inquirer"));
let tasks = [];
while (true) {
    let answer = await inquirer_1.default.prompt([
        {
            type: "list",
            name: "action",
            message: "Choose an action:",
            choices: ["Add task", "Remove task", "List tasks", "Exit"],
        }
    ]);
    if (answer.action == "Add task") {
        let addtask = await inquirer_1.default.prompt([
            {
                type: "input",
                name: "task",
                message: "Whad would you like to add : ",
            },
        ]);
        tasks.push(addtask.task);
        continue;
    }
    else if (answer.action == "Remove task") {
        let removetask = await inquirer_1.default.prompt([
            {
                type: "list",
                name: "task",
                message: "Whad would you like to remove : ",
                choices: tasks.map((task, index) => ({ name: `${index + 1}. ${task}`, value: index }))
            },
        ]);
        tasks.splice(removetask.task, 1);
    }
    else if (answer.action == "List tasks") {
        if (tasks.length != 0) {
            tasks.forEach((task, index) => {
                console.log(`${index + 1}. ${task}`);
            });
        }
        else {
            console.log(`No Task!`);
        }
    }
    else if (answer.action == "Exit") {
        process.exit();
    }
}
