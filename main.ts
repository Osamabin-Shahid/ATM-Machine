#! /usr/bin/env node

import inquirer from "inquirer";

let balance = 100000;
let pinCode: number = 1234;

console.log("Welcome to Bank Of Osama");

const pinAns = await inquirer.prompt([
  {
    name: "pinAnss",
    type: "number",
    message: "Please enter your Four digit pin",
  },
]);
if (pinAns.pinAnss === pinCode) {
  console.log("You entered a correct pin");

  let option = await inquirer.prompt([
    {
      name: "options",
      type: "list",
      message: "Select one of the option to perform transaction",
      choices: ["fastCash", "Deposit", "withDraw", "balanceInquiry"],
    },
  ]);
  if (pinAns.pinAnss === pinCode) {
    console.log(option.options);
  }
  if (option.options === "fastCash") {
    let fastCashh = await inquirer.prompt([
      {
        name: "amount",
        type: "list",
        message: "How much value do you want to withdraw",
        choices: ["1000", "5000", "10000", "500"],
      },
    ]);

    console.log(`Your current balance is : ${balance - fastCashh.amount}`);
  } else if (option.options === "Deposit") {
    let depositAmountt = await inquirer.prompt([
      {
        name: "Depositamount",
        type: "number",
        message: "How much amount do you want to deposit",
      },
    ]);

    console.log(
      `Your current balance is : ${balance + depositAmountt.Depositamount}`
    );
  } else if (option.options === "withDraw") {
    let withDraw = await inquirer.prompt([
      {
        name: "withdrawl",
        type: "number",
        message: "How much do you want to withdraw",
      },
    ]);
    console.log(balance - withDraw.withdrawl);
  } else if (option.options === "balanceInquiry") {
    console.log("Your account balance is : ", balance);
  }
} else {
  console.log("Your pin is incorrect");
}
