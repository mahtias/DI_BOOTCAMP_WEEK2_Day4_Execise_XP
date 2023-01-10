// Part I : function with no parameters
//1 Create a function called infoAboutMe() that takes no parameter.
//2 The function should console.log a sentence about you (ie. your name, age, hobbies ect…).
function infoAboutMe() {
    console.log("My name is Lordwin, 27 years old,");
}
//3 Call the function
infoAboutMe();

// Part II : function with three parameters
/* 1 Create a function called infoAboutPerson(personName, personAge, personFavoriteColor)
 that takes 3 parameters.*/
/* 2 The function should console.log a sentence about the person (ie. “You name is …, 
    you are .. years old, your favorite color is …”) */
function infoAboutPerson(personName, personAge, personFavoriteColor) {
    console.log("You name is " + personName + ", you are " + personAge + " years old, your favorite color is " + personFavoriteColor);
}

//3  Call the function twice with the following arguments:
infoAboutPerson("David", 45, "blue");
infoAboutPerson("Josh", 12, "yellow");


// Exercise 2 : Tips

//1 Create a function named calculator() that takes no parameter.

//2 Inside the function, use prompt to ask John for the amount of the bill.
function calculator() {

    let userNumber = prompt("Please enter the amount of the Bill !!");
    //3 Here are the rules
    if (userNumber < 50) {
        //If the bill is less than $50, tip 20%.
        let final = parseInt(userNumber) * 0.2 + parseInt(userNumber);
        console.log("tip " + userNumber * 0.2 + " and final bill " + final);
    } else if (userNumber > 50 || userNumber <= 200) {
        //If the bill is between $50 and $200, tip 15%.
        let final = parseInt(userNumber) * 0.15 + parseInt(userNumber);
        console.log("tip " + userNumber * 0.15 + " and final bill " + final);
    } else {
        //If the bill is more than $200, tip 10%.//
        let final = parseInt(userNumber) * 0.2 + parseInt(userNumber);
        console.log("tip " + userNumber * 0.1 + " and final bill " + final);
    }
}
//5 Call the calculator() function.

calculator();




// Exercise 3 : Find The Numbers Divisible By 23
// Bonus done
function isDivisible(divisor) {
    let sum = 0;
    for (let index = 0; index < 500; index++) {
        if (index % divisor == 0) {
            console.log(index);
            sum += index;
        }

    }
    console.log(sum);
}
isDivisible(3);
isDivisible(45);



//Exercise 4 : Shopping List

//1 Add the stock and prices objects to your js file. 
const stock = {
    "banana": 6,
    "apple": 0,
    "pear": 12,
    "orange": 32,
    "blueberry": 1
}

const prices = {
    "banana": 4,
    "apple": 2,
    "pear": 1,
    "orange": 1.5,
    "blueberry": 10
}

//2 Create an array called shoppingList 
let shoppingList = ["banana", "orange", "apple"];

// Create a function called myBill() that takes no parameters.
function myBill() {
    let priceTotal = 0;
    for (let indexShopping = 0; indexShopping < shoppingList.length; indexShopping++) {
        if (!!stock[shoppingList[indexShopping]]) {
            priceTotal += prices[shoppingList[indexShopping]]
        }
    }
    return "The total price is : " + priceTotal;

}


//5 Call the myBill() function.
myBill();
console.log(myBill());






// Exercise 5 : What’s In My Wallet ?


/* 1 Create a function named changeEnough(itemPrice, 
amountOfChange) that receives two arguments : */
/* In the function, determine whether or not you can afford the item */
function changeEnough(itemPrice, amountOfChange) {
    let sum = 0.25 * amountOfChange[0] +
        0.1 * amountOfChange[1] +
        0.05 * amountOfChange[2] +
        0.01 * amountOfChange[3]

    return sum >= itemPrice
}
// 3. Change format is [quarters, dimes, nickel, penny]
// 4. Illutsration
console.log(`For itemPrice: 14.11 and change: [2,100,0,0], changeEnough ? : ${changeEnough(14.11, [2, 100, 0, 0])}`)
console.log(`For itemPrice: 0.75 and change: [0,0,20,5], changeEnough ? : ${changeEnough(0.75, [0, 0, 20, 5])}`)






// Exercise 6 : Vacations Costs

// 1. Define a function called hotelCost(). 
// The hotel costs $140 per night. The function should return the total price of the hotel. 
function hotelCost(nightNight) {
    return nightNight * 140
}

// 2. Define a function called planeRideCost().
// The function should return a different price depending on the location.
function planeRideCost(destination) {
    let prices = {
        london: 183,
        paris: 220,
        other: 300
    }

    return prices.hasOwnProperty(destination.toLowerCase()) ?
        prices[destination.toLowerCase()] :
        prices.other
}

// 3. Define a function called rentalCarCost().
// It should ask the user for the number of days they would like to rent the car. 
function rentalCarCost(numberOfDays) {
    let total = numberOfDays * 40
    if (numberOfDays > 10){
        total -= total * 5 / 100
    }
    return total
}

// 4. Define a function called totalVacationCost() that returns the total cost of the user’s vacation by calling the 3 functions that you created above.
// 5. Call the function totalVacationCost()
// 6. Bonus: Instead of using a prompt inside the 3 first functions, only use a prompt inside the totalVacationCost() function. You need to change the 3 first functions, accordingly.
(function totalVacationCost() {
    // User input number of nights
    let input,
    nightNight = 0,
        destination = "",
        numberOfDays = 0

    do {
        input = prompt("How many nights would you like to stay in the hotel?")
        if (!isNaN(input))
        nightNight = Number(input)
    } while (nightNight === 0)
    // User input destination
    do {
        input = prompt("What is your destination?")
        if (null !== input && /^\w+(\s?\w?)*$/.test(input))
            destination = input.trim()
    } while (destination === "")
    // User input number of days
    do {
        input = prompt("How many days would you like to rent the car?")
        if (!isNaN(input))
            numberOfDays = Number(input)
    } while (numberOfDays === 0)

    console.log(`Number of nights: ${nightNight} / Hotel costs: ${hotelCost(nightNight)}`)
    console.log(`Destination: ${destination} / Plan ride costs: ${planeRideCost(destination)}`)
    console.log(`Number of Days: ${numberOfDays} / Car rental costs: ${rentalCarCost(numberOfDays)}`)
    console.log(`Total vacation cost: ${(hotelCost(nightNight) + planeRideCost(destination) + rentalCarCost(numberOfDays))}`)
})()