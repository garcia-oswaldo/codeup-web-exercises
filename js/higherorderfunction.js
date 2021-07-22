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