/*alert("hello it worked")*/

/*for(var index =0; index <=50;index++){
        if(index %2==0){
            continue;
        }
    console.log("This is an odd number," + index)
}*/

/*
for ()  is actually incrementing number by 1 starting at zero. It then checks number if it is even if it is it wil
it will go back up and check for even again, if it is odd it will do console.log then go back up and start again.
 */
var oddnumber;
oddnumber=prompt("what is your number:" + oddnumber);
for(var index =0; index <=50;index++) {

    if (index === Number(oddnumber)) {
        console.log("yike you missed " + oddnumber);
        continue;
    }
    if (index % 2 !== 0) {
        console.log("This is an odd number," + index);
    }
}

/* do this as a dowhile loop






