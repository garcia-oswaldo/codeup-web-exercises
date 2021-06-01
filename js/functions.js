"use strict";

/**
 * TODO:
 * Create a function called 'sayHello' that takes a parameter 'name'.
 * When called, the function should return a message that says hello to the passed in name.
 *
 * Example
 * > sayHello("codeup") // returns "Hello, codeup!"
 */
function sayHello (name)
{return "Hello" + " " + name;
}

/**
 * TODO:
 * Call the function 'sayHello' and pass your name as a string literal argument.
 * Store the result of the function call in a variable named 'helloMessage'.
 *
 * console.log 'helloMessage' to check your work
 **/
var helloMessage = sayHello("ozzy");
    console.log(helloMessage);

    /**
    SO WHAT CONFUSED ME IS THAT WE HAVE THE FUNCTION BUT CALL IT OUTSIDE OF THE FUNCTION. I THINK AN
    EXPLANATION OF WHAT IT MEANS TO CALL A FUNCTION WOULD HELP.

   1. DO VARIABLES NEED TO BE INSIDE THE FUNCTION?
   2. COULD THIS CODE BEEN INSIDE THE FUNCTION ?

     **/
/**
 * TODO:
 * Store your name as a string in a variable named 'myName', and pass that
 * variable to the 'sayHello' function. You should see the same output in the
 * console.
 **/
var myName = "Ozzy";
sayHello(myName);
console.log(helloMessage);

// Don't modify the following line, it generates a random number between 1 and 3
// and stores it in a variable named random
var random = Math.floor((Math.random() * 3) + 1);

/**
 * TODO:
 * Create a function called 'isTwo' that takes a number as a parameter.
 * The function should return a boolean value based on whether or not the passed
 * number is the number 2.
 *
 * Example
 * > isTwo(1) // returns false
 * > isTwo(2) // returns true
 * > isTwo(3) // returns false
 *
 * Call the function 'isTwo' passing the variable 'random' as a argument.
 *
 * console.log *outside of the function* to check your work (you should see a
 * different result everytime you refresh the page if you are using the random
 * number)
 */
function isTwo(Number){
  if (Number ===2){
  return true;}
  else if (Number === 1){
      return false;}
  else if ( Number === 3){
      return false;}
} isTwo(random);
console.log(random + " is the number 2 is a " + isTwo(random) + " statment.")

/**
 * TODO:
 * Create a function named 'calculateTip' to calculate a tip on a bill at a
 * restaurant. The function should accept a tip percentage and the total of the
 * bill, and return the amount to tip
 *
 * Examples:
 * > calculateTip(0.20, 20) // returns 4
 * > calculateTip(0.25, 25.50) // returns 6.375
 * > calculateTip(0.15, 33.42) // returns 5.013
 */

function calculateTip(){
    var billTotal=33.42
    var tipPercent=0.15
    return billTotal*tipPercent;
}
 console.log(calculateTip())
/**
 * TODO:
 * Use prompt and alert in combination with your calculateTip function to
 * prompt the user for the bill total and a percentage they would like to tip,
 * then display the dollar amount they should tip
 */
function tipCalculation (){
    var num1,num2,

    num1 =prompt("What is your bill total?");
    num2 =prompt("What is the tip you want to give?");
    var tip= (num1*num2);
    var actualTip=tip.toFixed(2);
    alert("This is the total tip: "+ actualTip);
}tipCalculation();



/**
 * TODO:
 * Create a function named `applyDiscount`. This function should accept a price
 * (before a discount is applied), and a discount percentage (a number between 0
 * and 1). It should return the result of applying the discount to the original
 * price.
 *
 * Example:
 * > var originalPrice = 100;
 * > var dicountPercent = .2; // 20%
 * > applyDiscount(originalPrice, dicountPercent) // 80
 *
 * > applyDiscount(45.99, 0.12) // 40.4712
 */

function applyDiscount (num1,num2) {
    var originalPrice=45.99;
    var discountPercentage=.12;
    var discountedPrice;
    var discount = originalPrice * discountPercentage;
    discountedPrice = originalPrice - discount;
    alert("Your price with discount is: " + discountedPrice.toFixed(2));

}applyDiscount();




