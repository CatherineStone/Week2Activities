// // Opening challenge, Ticket Machine:

// let age = 53

// if (age <18) {
//     console.log ("The cost of your ticket is £8.")
// }
// else if (age >60){
//     console.log ("The cost of your ticket is £7.50.")
// }
// else {
//     console.log("The cost of your ticket is £10.95")
// }


// const pressGrindBeans = () => {
//     console.log("Grinding for 20 seconds");
// }

// pressGrindBeans();


// let coffeeIsGrinding = false;

// const pressGrindBeans = () => {
//     if (coffeeIsGrinding) {
//         console.log("Stopping the grind.");
//         coffeeIsGrinding = false;
// }  else {
//     console.log("Grinding is about to begin");
//     coffeeIsGrinding = true;
// }
// }

// pressGrindBeans();
// pressGrindBeans();
// pressGrindBeans();

// const cashWithdrawal = (amount, accnum) => {
//     console.log(`Withdrawing £${amount} from account ${accnum}.`);
// }

// cashWithdrawal(100, 17543);
// cashWithdrawal(2000, 87096);
// cashWithdrawal(5, 4359);



// const favColor = (color) => {
//     console.log(`My favourite color is ${color}.`);
// }

// favColor("green")
// favColor("red")
// favColor("purple") 





// // Activity 1:
// const factorial = (n) => {
//     if ((n === 0) || (n === 1)) {
//         return 1;
//     } else {
//         return (n * factorial(n-1));
//     }
// }

// console.log(factorial(33));




// Activity 2:
// let orderCount = 0;

// const takeOrder = (topping, sauce) => {
//     console.log(`Pizza with ${topping} and ${sauce} sauce.`);
//     orderCount++;
// }

// takeOrder("pineapple", "pesto");




// // Activity 3:
// let pin = 2465
// let balance = 200

// const withdrawAmount = (withdrawAmount, pin) => {
//     if (withdrawAmount <= balance && pin === 2465) {       // // Can't seem to get === true to work on this line.
//         console.log(`£${withdrawAmount} will be debited from your account.`);
//      } else {
//         console.log(`Your request has been declined. Insufficient funds or wrong pin entered.`)
//     }
// }

// withdrawAmount(20, 2465);
