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