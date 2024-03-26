#! usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
 let myBalance= 100000;
 let myPin:number=4444;
 console.log(chalk.bgBlueBright.whiteBright.bold("\t\t Welcome To Kanwal Bilal Bank ATM \t\t"));
 console.log(chalk.redBright("****************************************************************"));

 let userId= await inquirer.prompt(
    [
        {
            name:"userPin",
            type:"number",
            message:"Please Enter Your Pin: "
        }
    ]);
    if (userId.userPin == myPin) {
        console.log(chalk.bgGrey.greenBright("Congratulations!Your Pin is Correct"));
    }
    else {
        console.log(chalk.redBright.bgWhiteBright("Oops!You have enter a wrong Pin"));
    };
    let transactionType = await inquirer.prompt(
        [
            {
                name:"operation",
                type:"list",
                message:"Please Select Transaction Type: ",
                choices:["Withdrawal" , "Fast Cash" , "Check Balance"]
            }
        ]
    );
    if (transactionType.operation === "Withdrawal") {
        let amountCash = await inquirer.prompt(
            [
                {
                    name:"amount",
                    type:"number",
                    message:"Please Enter Your Amount"
                }
            ]
        );
        if (amountCash.amount <= myBalance) {
        myBalance -= amountCash.amount;
        console.log(chalk.bgWhite.bold.redBright(`Your Remaining Balance is ${myBalance}`));
    }
    else {
        console.log(chalk.blackBright.bold.bgCyan("Sorry!Your Balance is Insufficient"));
    }
}
    else if (transactionType.operation === "Fast Cash") {
        let fastCash = await inquirer.prompt(
            [
                {
                    name:"cash",
                    type:"list",
                    message:"Please Select AnyOne Option: ",
                    choices:["2000" , "5000" , "10000" , "20000"]
                }
            ]
        )
        myBalance -= fastCash.cash;
        console.log(chalk.bgBlueBright.bold.italic.underline(`Your Remaining Balance is: ${myBalance}`));
    }
    else {
        console.log(chalk.yellowBright.bold.underline(`Your Current Balance is: ${myBalance}`));
    }