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
    return upper;
}



// TODO: Create a function named capitalizeFirstLetter that accepts an array of strings and
//  returns the array with all of the first letters in
//  each string being capitalized while having the rest of the
//  string lowercase look at the example below for reference.
// Example:  capitalizeFirstLetter(["bob","Seth","TOFU","Toyota"]) ---- returns ---->
// ["Bob","Seth","Tofu","Toyota"]

function capitalizeFirstLetter(str){
   let str= str.toLowerCase().split("")
    for(let i=0; i<str.length;i++){
        str[i]=str[i][0].toUpperCase() + str[i].slice(1)
    }
    return str.join("")
}