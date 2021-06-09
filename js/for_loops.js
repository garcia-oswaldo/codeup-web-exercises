/*alert("it is working")*/
/*Show Multiplication by 7**/
/*function showMultiplicationTable (x) {
    for (let y = 0; y<10; y++)
        console.log(x + " x " + y + "=" + (x * y));
}showMultiplicationTable(7);

**/

function randomNumber() {

    for (let Num = 0; Num <10; Num++) {
        var ranNum = Math.ceil(Math.random() * 100) + 10;
        if (ranNum % 2 === 0)

        {
            console.log(" This number is even " + ranNum);
        }else{
            console.log(" This number is odd " + ranNum);
        }
    }
    }
      randomNumber();


/**
function tree(){
    for (let x=4; x<10; x++){
        var number="";
        number=x;
        for( let y = 1; y<x;y++){
            number=number+x.toString();
        }
        console.log(number.toString() );

    }
}
tree();
**/

/**
for (let i=100; i>0; i=i-3){
    let answer = i;
    if (answer < i){
        answer;
    }
    console.log(i);
}
**/

