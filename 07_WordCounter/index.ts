import inquirer from "inquirer";

console.clear()
let phrase = await inquirer.prompt
(
    [
        {
            type:"input",
            name:"phrase",
            message:"Enter your Phrase : "
        }
    ]
)
let words = phrase.phrase.trim();

// console.log(words);

function wordCounter(str:string)
{
    return str.split(' ').filter(function(n) { return n != '' }).length;
}

let totalWords = wordCounter(words)
console.log(`TOTAL WORDS = ${totalWords}`)