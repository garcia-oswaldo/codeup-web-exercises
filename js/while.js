/*
var value=2;
while (value < 65537) {
  console.log (value);
  value = value + value;
}

/*Note: set var value
      while condition
      console log before incrementing
      increment loop*/

// var num1=5;
// while(num1<200){
//   console.log("this is the number: " + num1);
//   num1= num1+num1;
// }


let totalSold = 0;

do {
  let conesBought = Math.ceil(Math.random() * (5 - 1) + 1);

  if ((totalSold + conesBought) > totalCanSell) {
    console.log("I'm sorry, I can't sell " + conesBought);
    continue;
  }
  console.log("My customer bought" + conesBought);
  totalSold = totalSold + conesBought;
  console.log("I've sold this many " + totalSold);

} while (totalSold < totalCanSell);