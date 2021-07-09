Objects and Arrays Practice
This is practice to help you with Objects and arrays. There are no test associated with these exercises, so you will need to test them manually.
1))  Create a function called removeDuplicates that accepts an array of strings and returns the array with all duplicate elements filtered out.

    function removeDuplicates(arrayOfStrings){
    return[...new Set(arrayOfStrings)]

}



function removeDuplicates(arrayStrings)
var uniqueString=[];

for(let i=0, i < arrayOfStrings.length; i++){
    if(uniqueStrings.includes(arrayOfStrings[i])){

    }else{
        uniqueStrings.push(arrayOFStrings[i])
    }
}
return uniqueStrings
}

    Examples

// Should return the following
["bob","squid","samantha"]

removeDuplicates(["tilda","tilda"]);
// Should return the following
["tilda"]

removeDuplicates(["2016-02-13","1994-12-21","2016-02-13","2016-02-13","2005-11-29"]);
// Should return the following
["1994-12-21","2016-02-13","2005-11-29"]
Create a function called max that accepts an array of numbers and returns the largest number from that array.
    Examples

2))Create a function called max that accepts an array of numbers and returns the largest number from that array.

Or


function max(array){
    return Math.max(...array);
}
console.log(max([4,34,193,2,345,46,0]));

function max(largestnum){
    var largestNumber;
    if(i===0){
        largestNumber=largestnum[i]
    }
    for(var i=0; i<largestnum.length;i++){
        largestNumber=largestnum[i];
    }
    return largestnum
}

Or
function max(arrayOfNumbers){
arrayOfNumbers.foreach(function (number){

}
// // Should return the following
// 345
//
// max([-34,83,21,38,-2039,3.2]);
// // Should return the following
// 83
//
// max([54.5,2,34,-93]);
// // Should return the following
54.5
3))Create a function called mostOccuringNumber that accepts an array of numbers and returns the number that occurs the most within that array.

function mostOccuringNumber(){
    var counts=[];
    //1.count the # of times each number occurs
        for (let i = 0; i < numbers.length; i++) {
            var aNumber = numbers[i];
            if (cunts[aNumber === undefined]) {
                counts[aNumber] = 1;
                {
                else
                    {
                        counts[aNumber]++  // gives access to counts element at index "aNumber"
                    }

                }
                console.log(counts);


// 2. scan through the associative array and keep track of the value with the highest count
            }
            var maxCount=0;
            var winningNumber="";
            for(const countsKey in ocunts){
            // console.log("the counts element at countkeys" + countsKey + "is tally of" + counts[countskey]);
                var currentCount= counts[countsKey];
                // when current count is > maxCount, we have a winner so far
                if(currentCount > maxCount){
                    maxCount=currenCount;
                    winningNumber=countsKey;
                }
            }
            return winningNumber;
        }

    Examples
mostOccuringNumber([8,93,28,8,27,-62,32,8,-62]);
// Should return the following
8

mostOccuringNumber([8,93,-62.0,28,27,-62,32,8,-62]);
// Should return the following
-62

mostOccuringNumber([73.5,8,0,-3,3.50,8.25,3.50]);
// Should return the following
3.5
4))Create a function called whoIsPassing that accepts an array of objects, where each object is a student's name and class average (from 0 to 100). Your function will return an array of objects where each object is a student's name and whether he/she is passing. Note that a class average of 60 and higher is passing.
    Examples
var students = [
    {
        name: "Phill Rundy",
        classAverage: 53
    },
    {
        name: "Samuel Moore",
        classAverage: 71
    },
    {
        name: "Mark Tendly",
        classAverage: 84
    },
    {
        name: "Dough Mosh",
        classAverage: 87
    },
    {
        name: "Bran Thomb",
        classAverage: 93
    },
    {
        name: "Mario Yushi",
        classAverage: 82
    },
    {
        name: "Nathan Skywalker",
        classAverage: 52
    }
]

    function whoIsPassing(students){
    var passingResults=[];

    for(var i=0; i < students.length; i++){

        if(arrayOfStudents[i].classAverage >=60){
            passingResults.push(
                name: arrayOfStudents[i].name,
                passing: true

            )

        }else{
            //isfailing
            passingResults.push(
                name: arrayOfStudents[i].name,
                passing: false
        }
        }

    }
}
return passingResults;
}




whoIsPassing(students);
// Should return the following
[
    {
        name: "Phill Rundy",
        passing: false
    },
    {
        name: "Samuel Moore",
        passing: true
    },
    {
        name: "Mark Tendly",
        passing: true
    },
    {
        name: "Dough Mosh",
        passing: true
    },
    {
        name: "Bran Thomb",
        passing: true
    },
    {
        name: "Mario Yushi",
        passing: true
    },
    {
        name: "Nathan Skywalker",
        passing: false
    }
]
5))Create a function called dateStringToObject that accepts a date in the following string format "YYYY-MM-DD" and returns an object that contains month, day, and year properties.

 function dateStringToObject(str){
  var splitstr=str.split("-");
   return {month: splitstr[1], day: splitstr[2], year: splitstr[0]};







    Examples
dateStringToObject("2016-2-13");
// Should return the following
{month: 2, day: 13, year: 2016}

dateStringToObject("2005-11-29");
// Should return the following
{month: 11, day: 29, year: 2005}

dateStringToObject("1994-12-21");
// Should return the following
{month: 12, day: 21, year: 1994}
6))Create a function called reverseString that that accepts a string and returns a string with the characters in reverse order.
    Examples


    function reverseString(str){
    var newstring= str.split("");
    var splitstr=newstring.reverse();
    var jstr=splitstr.join("")
        return jstr;
}
}

function reverseString(str){

    return str.split("").reverse().join("");
}


reverseString("squid");
// Should return the following
"diuqs"

reverseString("tilda");
// Should return the following
"adlit"

reverseString("2016-02-13");
// Should return the following
"31-21-6102"
7))Create a function called numberInfo that accepts a number and returns an object with the properties isPositive, isEven, isZero. The properties should either be true or false based on if the parameter meets the criteria.

   function numberInfo(number){
    var isNumberPostive =(number>0);
    var isEvenNum= (number % 2 === 0);
    var isNumberZero= (number === 0);


    return{
        isPositive: isNumberPostive,
            isEven: isEvenNum,
        isZero: isNumberZero
    }

}


function numberInfo(number){
    // var isNumberPostive =(number>0);
    // var isEvenNum= (number % 2 === 0);
    // var isNumberZero= (number === 0);


    return{
        isPositive: (number>0),
        isEven: (number % 2 === 0),
        isZero: (number === 0)
    }

}




    Examples
numberInfo(-1);
// Should return the following
{
    isPositive: false,
        isEven: false,
    isZero: false
}

numberInfo(6);
// Should return the following
{
    isPositive: true,
        isEven: true,
    isZero: false
}

numberInfo(0);
// Should return the following
{
    isPositive: false,
        isEven: true,
    isZero: true
}