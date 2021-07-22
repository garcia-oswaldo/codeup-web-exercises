let numbers=[1,2,3,4,5,6,7,8,9,10];

const users = [
    {name:"walter", job:"CEO"},
    {name:"bill", job:"intern"},
    {name:"joe", job:"workerB"},
    {name:"mike", job:"WorkerA"},
    {name:"walter", job:"intern"},
]
const higherManagementUsers=users.filter(function(user){
});
users.filter(function(user){

    if (user.job === "CEO"){

    return true
    }else {
    return false
    }
})

const filteredNumbers = numbers.filter(function(singleNumber){

    if(singleNumber>5){

        return true
    }else{
        return false
    }
})
console.log(filteredNumbers);

const interns=users.filter(function(user){
    return user.job==='intern'
})
                                               'workerB'
const workers= users.filter(user => user.job==='intern')

console.log(higherManagementUsers);
console.log(interns);
console.log(workers);

numbers.map(function(number){
    return number *2;

})

console.log(numbers.map(function(number){
    return number *2;

}));


const workersDetails = [
    {name:"walter", job:"CEO", pay:12},
    {name:"bill", job:"intern", pay:10},
    {name:"joe", job:"workerB", pay:11},
    {name:"mike", job:"WorkerA", pay:9},
    {name:"walter", job:"intern", pay:9},
]

console.log(workersDetails.map(function(worker){
    worker.pay*=1.05;
    return worker
}))

// numbers.map(num=> ({bob: num/2}));

console.log(workersDetails.map(function(worker){
    worker.pay*=1.05;
    return worker
}))

//REDUCE
let total=0
for(let i=0; i<numbers.length; i++){

    total+= numbers[i]
    console.log(total);
}

const sum=numbers.reduce((currentTotal,currentNumber)=>{

    return currentTotal + currentNumber;
},0)





// console.log("reduce",sum);


//
// const sum = numbers.reduce((accumulation, currentNumber) => {
//     return accumulation + currentNumber;
// }, 0);


