// Lesson practice:

// let coffeeOrder = [
//     "Alex - cortado",
//     "Ben - cortado",
//     "Charlie - Whatever's new" 
// ];

// // coffeeOrder[1] = "Ann - Vanilla latte"

// coffeeOrder.pop
// console.log(coffeeOrder)

// let favouriteSongs = [
//     "Lose Yourself",
//     "Numb",
//     "The End"
// ];
// favouriteSongs.push(
//     "Hey There Delilah",
//     "Rap God"
// );

// favouriteSongs.splice(3,1)

// console.log(favouriteSongs)


// let favDrinks = [
//     "Tea",
//     "Coffee",
//     "Water"
// ]

// for(let i = 0; i < favDrinks.length; i++){

//         console.log(favDrinks[i])
// }





// // Activity 1:

// let favFilms = ["Spiderman", "The Avengers", "Monsters Inc", "Ratatouille", "The Greatest Showman"];

// favFilms.push("A Star is Born", "Dumbo")

// for (let i = 0; i < favFilms.length; i++) {
//     console.log(favFilms[i])
// };




// // Activity 2:
// for (let randomNum = 0; randomNum < 6; randomNum++) {
//     console.log(Math.floor(Math.random(randomNum)*50+1))
// }




// Activity 3:
// for (let counter=0; counter<10; counter++) {
//     console.log(counter);
// }

// for (let counter=9; counter>=0; counter--) {
//     console.log(counter);
// }




// // Activity 4:
// let films = ["Dumbo", "Ratatouille", "Pinocchio", "Monster's Inc"];
// for (let i = 0; i < films.length; i++) {
//     console.log(films[i])
// } if (films[2] === "Ghostbusters") {
//     console.log("Yay it's Ghostbusters!")
// } else {
//     console.log("Boo! We want Ghostbusters!")
// }




// // Activity 5:
// for (let randomNum = 0; randomNum < 6; randomNum++) {
//     let randomNum = Math.ceil(Math.random()*30)
//          if (randomNum%7===0) 
//     console.log(`${randomNum} is divisible by 7.`) 
//     else 
//         console.log(`${randomNum} is not divisible by 7.`)
// }




// // Activity 6:
// let bobsFollowers = ["Emma", "Tina", "Sally", "Rob"]
// let hannahsFollowers = ["Sophie", "Ben", "Tina", "Emma"]
// let mutualFollowers = []

// for (let i = 0; i < bobsFollowers.length; i++) {
//     for (let j = 0; j < hannahsFollowers.length; j++) {
//         if (bobsFollowers[i] === hannahsFollowers[j]) {
//         mutualFollowers.push(bobsFollowers[i]);
//     }
// }
// }
// console.log(`Bob and Hannah's mutual followers are: ${mutualFollowers}`);




// // Activity 7: 
// // Loop that prints 1, 2 and 3:
// for (let counterOne = 1; counterOne < 4, counterOne++) {
//     console.log(counterOne);
// }

// //While loop that prints 1, 2 and 3:
// let counterTwo = 1;
// while (counterTwo < 4) {
//     console.log(counterTwo);
//     counterTwo++
// }

// // // Do...while loop that prints 0123:
// let countString = ""
// let i = 0

// do {
//     countString = countString + i;
//     i++;
// } while (i <4);
// console.log(countString)

// A loop repeats an action until a specific condiiton is met, 
// and is used to automate processes in order to make scaleable, manageable programs.

// A while loop is used when we don't know in advance how many times the loop should run.

// A do... while loop says to do a task once and then keep doing it until a specified condition is no longer met.