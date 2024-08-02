#! /usr/bin/env node

import inquirer from "inquirer";

let mybalance = 20000; //dollars
let mypin = 1126;

 let pinnumber = await inquirer.prompt(
    [
        {
            name: "pin",
            message : "Enter your pin number",
            type : "number",

        }
    ]
);
if(pinnumber.pin === mypin) {
    console.log("correct pin number!");
    
    let operationAns= await inquirer.prompt(
        [
            {
                name: "operation",
                message : " please select option",
                type : "list",
                choices: ["withdraw","check balance"]
            }
        ]
    );
    if(operationAns.operation === "withdraw" ) {
        let amountAns = await inquirer.prompt(
            [
                {
                    name: "amount",
                    message: "Enter your amount",
                    type: "number",

                },
            ]
        );
        if( amountAns.amount <= mybalance ) {
            console.log(`your remaining balance is : ${mybalance} - ${amountAns.amount} =`, mybalance - amountAns.amount);
    } else if(amountAns.amount >= mybalance) {
        console.log("insufficient balance");
        
    }
        } else if(operationAns.operation === "check balance") {
        console.log("your balance is:", mybalance);
        
        } else {
            console.log("please enter correct pin !!!");
            
        }
    }
    



else  {
    console.log("wrong pin number!");
}