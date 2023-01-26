// // Activity 1 and stretch:
// let name = "Catherine";
// let age ="22";
// let favouriteColour = "green";

// console.log(`Hi, my name is ${name}. I am ${age} and my favourite colour is ${favouriteColour}.`);

// age = "23"
// favouriteColour = "blue"

// console.log(`Hi, my name is ${name}. I am ${age} and my favourite colour is ${favouriteColour}.`);




// // Activity 2 + stretch:
// let breakfast = "avocado toast"
// let lunch = "a chicken wrap"
// let dinner = "lasagne"

// console.log(`Today I ate ${breakfast} for breakfast, ${lunch} for lunch, and ${dinner} for dinner.`)

// breakfast = "porridge"
// lunch = "noodles"
// dinner = "spaghetti"

// console.log(`Tomorrow I will eat ${breakfast} for breakfast, ${lunch} for lunch, and ${dinner} for dinner.`)





// // First attempt, activity 3:
// const myBirthdate = new Date(2000, 11, 21); // my birthdate
// const today = new Date(2023, 01, 16) // today's date
// let daysUntilMyBirthday = today-myBirthdate // sum of today - my birthdate in milliseconds.
// daysUntilMyBirthday*=0.000000011574/26.2 // sum of above times by how many days are in a millisecond divided by the difference between today and my birthday in years.
// daysUntilMyBirthday = Math.ceil(daysUntilMyBirthday); //rounding down 
// console.log(`It is ${daysUntilMyBirthday} days until my birthday!`); // string interpolation showing days until my birthday.



// // John's explanation of how to do the calculator (activity 3):
// const todaysDate = new Date().getTime();

// const birthday = new Date("21-Nov-2023").getTime();

// let timeUntilBDay = birthday - todaysDate;

// console.log( ` ${Math.floor( timeUntilBDay/(1000 * 60 * 60 * 24) )} days until my birthday!` )



// Activity 4: