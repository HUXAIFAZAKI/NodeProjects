import inquirer from "inquirer";

console.log("+++++++++++++++++++");
console.log("WELCOME TO CLI BANK");
console.log("+++++++++++++++++++");

class BankAccount {
  balance: number;
  firstName: string;
  lastName: string;
  gender: string;
  age: number;
  mobileNumber: number;
  accountNumber: string;

  constructor(
    balance: number,
    firstName: string,
    lastName: string,
    gender: string,
    age: number,
    mobileNumber: number,
    accountNumber: string
  ) {
    this.balance = balance;
    this.firstName = firstName;
    this.lastName = lastName;
    this.gender = gender;
    this.age = age;
    this.mobileNumber = mobileNumber;
    this.accountNumber = accountNumber;
  }

  credit(amount: number) {
    if (amount > 0) {
      this.balance = this.balance + amount;
      if (amount > 100) {
        this.balance -= 1;
      }
      console.log("Your amount has been credited successfully");
    }
  }

  withdraw(amount: number) {
    if (this.balance >= amount) {
      this.balance -= amount;
      console.log(`Withdraw $${amount} successful. New balance: ${this.balance}`);
    } else {
      console.log("Insufficient funds!");
    }
  }

  getBalance() {
    console.log(`Current balance: ${this.balance}`);
  }

  accountInfo() {
    console.log(`Name : ${this.firstName} ${this.lastName}\nGender : ${this.gender}\nAge : ${this.age}\nMobile Number : ${this.mobileNumber}\nAccount Balance : ${this.accountNumber}`);
  }
}

async function createAccount() {
  let accountInfo = await inquirer.prompt([
    {
      type: "input",
      name: "firstName",
      message: "Enter your first name:",
    },
    {
      type: "input",
      name: "lastName",
      message: "Enter your last name:",
    },
    {
      type: "input",
      name: "mobileNumber",
      message: "Enter your phone number:",
    },
    {
      type: "list",
      name: "gender",
      message: "Select your gender:",
      choices: ["Male", "Female", "Other"],
    },
    {
      type: "number",
      name: "age",
      message: "Enter your age:",
    },
  ]);

  let Balance = await inquirer.prompt([
    {
      type: "number",
      name: "balance",
      message: "Enter initial balance:",
    },
  ]);

  return new BankAccount(
    Balance.balance,
    accountInfo.firstName,
    accountInfo.lastName,
    accountInfo.gender,
    accountInfo.age,
    accountInfo.mobileNumber,
    accountInfo.accountNumber
  );
}

let account = await createAccount();
let isRunning = true;
console.log("+++++++++++++++++++");
console.log(
  "You successfully created your account.\nWhat would you like to do ?"
);
console.log("+++++++++++++++++++");
while (isRunning) {
  let answer = await inquirer.prompt([
    {
      type: "list",
      name: "action",
      message: "What would you like to do?",
      choices: [
        "Credit",
        "Debit",
        "Check Balance",
        "Check Account Info",
        "Exit",
      ],
    },
  ]);

  if (answer.action == "Credit") {
    let credit = await inquirer.prompt([
      {
        type: "number",
        name: "creditAmount",
        message: "Enter amount to credit:",
      },
    ]);
    account.credit(credit.creditAmount);
  } else if (answer.action == "Debit") {
    let withdraw = await inquirer.prompt([
      {
        type: "number",
        name: "withdrawAmount",
        message: "Enter amount to credit:",
      },
    ]);
    account.withdraw(withdraw.withdrawAmount);
  } else if (answer.action == "Check Balance") {
    account.getBalance();
  } else if (answer.action == "Exit") {
    console.log("Exiting Bank...");
    isRunning = false;
  } else if (answer.action == "Check Account Info") {
    account.accountInfo();
  } else {
    console.log("Invalid Action");
  }
}