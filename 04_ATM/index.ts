import inquirer from "inquirer";

console.log(`Welcome, Please SignUp FOR CLI BANK to proceed !\n`);

const signup = await inquirer.prompt([
  {
    name: "username",
    type: "string",
    message: "Enter your username: ",
  },
  {
    name: "password",
    type: "string",
    message: "Enter your password: ",
  },
]);

console.log(`\nSignUp Successfull\n`);
console.log(`Please Signin To Proceed further !\n`);
const signin = await inquirer.prompt([
  {
    name: "username",
    type: "string",
    message: "Please enter your Username: ",
  },
  {
    name: "password",
    type: "string",
    message: "Please enter your Password: ",
  },
]);

const regUser = signup;
let isRunning = false;
if (
  signin.username === regUser.userName ||
  signin.password === regUser.password
) {
  console.log("\nLogin Successfully !\n");
  isRunning = true;
} else {
  console.log("Incorrect Username OR Password !");
}

let balance = 1000;

while (isRunning !== false)
{
  let ATM = await inquirer.prompt([
    {
      type: "list",
      name: "choice",
      message: "What would you like to do?",
      choices: ["Check Balance", "Withdraw Money", "Deposit Money", "Exit"],
    },
  ]);

  if (ATM.choice === "Check Balance")
  {
    console.log(`Your Current Balance is ${balance}`);
  }

  else if (ATM.choice === "Withdraw Money")
  {
    const drawAmount = await inquirer.prompt([
      {
        name: "amount",
        type: "number",
        message: "Please enter the amount to withdraw: ",
      },
    ]);
    if(drawAmount.amount <= balance)
    {
      console.log(`Your Previous Balance was ${balance}`);
      balance = Number(balance - drawAmount.amount);
      console.log(`Your New Balance is ${balance}`);
    }
    else if(balance == 0)
    {
      console.log("your broke. try depositing a amount");
    }
    else
    {
      console.log("Insufficient Amount!");
    }
  }

  else if (ATM.choice === "Deposit Money")
  {
    const addAmount = await inquirer.prompt([
      {
        name: "amount",
        type: "number",
        message: "Please enter the amount to deposit: ",
      },
    ]);
    balance = Number(balance + addAmount.amount);
    console.log(`Your New Balance is ${balance}`);
  }

  else if (ATM.choice === "Exit")
  {
    isRunning=false
  }

  else
  {
    console.log("Invalid Input");
  }
}