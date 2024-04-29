"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const inquirer_1 = __importDefault(require("inquirer"));
console.clear();
let phrase = await inquirer_1.default.prompt([
    {
        type: "input",
        name: "phrase",
        message: "Enter your Phrase : "
    }
]);
let words = phrase.phrase.trim();
// console.log(words);
function wordCounter(str) {
    return str.split(' ').filter(function (n) { return n != ''; }).length;
}
let totalWords = wordCounter(words);
console.log(`TOTAL WORDS = ${totalWords}`);
