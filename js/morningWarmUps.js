// TODO: Create a function named countSpaces that accepts a string and returns the total number of spaces in the string.

function countingSpaces ()
    var spaces=0;
if(typeof str!=='string') {
    return false;
}

    for (let i =0;i<str.length;i++){
        if(str[i+++""]){
            spaces++;
        }
    }
    return spaces;
}

var result = count spaces('love j lj js');
console.log(result);


I was not able to do the problems. I need practice on this.







// TODO: Add validation to function above, if the argument pass is not a string it should return false.


// July 6th 2021
// TODO: Create a function named capitalizeAllNames that accepts an array of strings and returns the array
//  with all of its elements capitalized.
// Example:  capitalizeAllNames(["bob","Seth","TOFU","Toyota"]) ---- returns ----> ["BOB","SETH","TOFU","TOYOTA"]

function capitalizeAllNames (str)
{

    var arrayUpper = str.toUpperCase();
    return arrayUpper;
}



// TODO: Create a function named capitalizeFirstLetter that accepts an array of strings and
//  returns the array with all of the first letters in
//  each string being capitalized while having the rest of the
//  string lowercase look at the example below for reference.
// Example:  capitalizeFirstLetter(["bob","Seth","TOFU","Toyota"]) ---- returns ---->
// ["Bob","Seth","Tofu","Toyota"]

// function capitalizeFirstLetter(str){
//    let str= str.toLowerCase().split("")
//     for(let i=0; i<str.length;i++){
//         str[i]=str[i][0].toUpperCase() + str[i].slice(1)
//     }
//     return str.join("")
// }

function capitalizeFirstLetter(string){
return string.charAt(0).toUpperCase() + string.slice(1);
}
return capitalizeFirstLetter(this.firstName) + " " + caplitalizeFirstLetter(this.lastName);
}
}

// July 7th 2021
// TODO: Create a method on the object down below named getFullName that when called returns the users full name using the "this" key term.
// Example: personOne.getFullName() ---- returns ----> "silvia floopertan"

personOne.getFullName(){
    console.log('Her full name is - ' + personOne.FirstName + personOne.LastName)
}
var personOne = {
    firstName: "silvia",
    lastName: "floopertan",
    ageInYears: 34,
    heightInInches: 65
}
// TODO: Create a method on the object down below named getNicelyFormattedFullName that when called returns the
//  users full name with both first letters in the names being capitalized look at example down below for more reference.
// Example: personOne.getNicelyFormattedFullName() ---- returns ----> "Dan Valdarez"

personOne.getNicelyFormattedFullName()
var firstName;
var lastName
var personTwo = {
    firstName: "dan",
    lastName: "valdarez",
    ageInYears: 61,
    heightInInches: 73
}
// TODO: Create a method on the object below that gives us the behavior that the example implies.
// Example: personThree.intro() ---- returns ----> "Hello, My name is Arlene Martinez and I am 25 years old"
var personThree = {
    firstName: "arlene",
    lastName: "martinez",
    ageInYears: 25,
    heightInInches: 62
}

// July 8th 2021
// Part 1
// TODO: Create a function that takes an array of strings and returns an array of objects
//  where each object has 2 properties: originalString and countOfLetters
// Example: input: ["hello", "dave"]
//          returns: [
//                    { "originalString":"hello", lengthOfOriginalString:5 },
//                    { "originalString":"dave", lengthOfOriginalString:4 }
//                   ]
function arrayStings(arg1,arg2){
    var arg1= array.from(arg1);
    var arg2=array.from(arg2);
    var larg1=arg1.length();
    var larg2= arg2.length();
    return arg1 + "count is" + larg1 + "and" + arg2 +"count is" + larg2;
}

function stringsToObjects(arrayStrings) {
    var arrayobjects=[]
    for (var x = 0; x < arrayStrings.length; x ==) {
        // console.log({ originalString:arrayStrings[i] lengthOfOriginalString:arrayStrings[i].length},)
        arrayObjects.push({ originalString:arrayStrings[i] lengthOfOriginalString:arrayStrings[i].length},)


    }
    return arrayobjects;
}
// arrayOfStringsToObjects(["hello","dave"])
console.log(arrayOfStringsToObjects(["hello","dave"]))


// Part 2
// TODO: Create a function that takes the array of objects from PART 1
//  and returns a string of all of the originalStrings concatenated with spaces in between
// Example: input: [
//                    { "originalString":"hello", lengthOfOriginalString:5 },
//                    { "originalString":"dave", lengthOfOriginalString:4 }
//                  ]
//          returns: "hello dave"




function arrayOfObjectsToString(arrayOfObjectsParam){
    var results=[];

    arrayOfObjects.forEach(function(singleobject){
        results.push(object.originalString)
    })
// console.log(results.join(" "))
    return results.join(" ")
}
console.log(arrayOfObjectsToStrings(arrayOfObjects))

//Create a function named getTallUsers that accepts an array of objects. The objects in the array will be in the same format
//  as PersonOne, PersonTwo, and PersonThree. The functions job is to return an array of users that have heightInInches equal to or greater than 65.
var people = [personOne,personTwo,personThree];
// Example: getTallUsers(people)
// ---- returns ----> [{firstName: "silvia", lastName: "floopertan", ageInYears: 34, heightInInches: 65},
//
people.for


// TODO: Create a function named getTallUsers that accepts an array of objects. The objects in the array will be in the same format
//  as PersonOne, PersonTwo, and PersonThree. The functions job is to return an array of users that have heightInInches equal to or greater than 65.
var people = [personOne,personTwo,personThree];

function getTallUsers(arrayOfObjects){
    var tallUsers=[];

    for (let i = 0; i < arrayOfObjects.length; i++) {
     var currentUser=arrayOfObjects[i];
     var currentUserHeight=currentUser.heightInInches;

     if(currentUserHeight >= 65){
         tallUsers.push(currentUser)
     }
    }
return tallUsers;
}
// Example: getTallUsers(people)
// ---- returns ----> [{firstName: "silvia", lastName: "floopertan", ageInYears: 34, heightInInches: 65},
//                     {firstName: "dan", lastName: "valdarez", ageInYears: 61, heightInInches: 73}]