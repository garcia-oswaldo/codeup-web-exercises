

// Create a file named map-filter-reduce.js in your js directory and copy the users data below into it.

// Use .filter to create an array of user objects where each user object has at least 3 languages in the languages array.

// Use .map to create an array of strings where each element is a user's email address

// Use .reduce to get the total years of experience from the list of users. Once you get the total of years you can use
// the result to calculate the average.

// Use .reduce to get the longest email from the list of users.

// Use .reduce to get the list of user's names in a single string. Example: ' +
// 'Your instructors are: ryan, luis, zach, fernando, justin.


var users = [
    {
        id: 1,
        name: 'ryan',
        email: 'ryan@codeup.com',
        languages: ['clojure', 'javascript'],
        yearsOfExperience: 5
    },
    {
        id: 2,
        name: 'luis',
        email: 'luis@codeup.com',
        languages: ['java', 'scala', 'php'],
        yearsOfExperience: 6
    },
    {
        id: 3,
        name: 'zach',
        email: 'zach@codeup.com',
        languages: ['javascript', 'bash'],
        yearsOfExperience: 7
    },
    {
        id: 4,
        name: 'fernando',
        email: 'fernando@codeup.com',
        languages: ['java', 'php', 'sql'],
        yearsOfExperience: 8
    },
    {
        id: 5,
        name: 'justin',
        email: 'justin@codeup.com',
        languages: ['html', 'css', 'javascript', 'php'],
        yearsOfExperience: 9
    }
];



// var filteredUser = users.filter(function(user) {
//     return user.languages.length>=3;
// });

let atLeastThreeLangs =users.filter(function(user){
return user.languages.length >= 3;

})
console.log(atLeastThreeLangs);

// var filteredUser = users.filter(user => user.languages.length >= 3)
// console.log(filteredUser);
//  // [2, 4, 6, 8, 10]



// Use .map to create an array of strings where each element is a user's email address
var mapUser = users.map(function(user) {
    return user.email;
});
console.log(mapUser);



const reduceUsers= users.reduce((accumulator, yearsOfExperience) => {
    return accumulator + yearsOfExperience;
}, 0);

console.log(reduceUsers);

// Use .reduce to get the total years of experience from the list of users. Once you get the total of years you can use
// the result to calculate the average.


let totalYearsExp =users.reduce(function(accumulator, user){
 return accumulator + user.yearsOfExperience;

}, 0);
console.log(totalYearsExp);
// Use .reduce to get the longest email from the list of users.

let averageExp=totalYearsExp/users.length;
console.log(averageExp);

// Use .reduce to get the longest email from the list of users.

let longestEmail=users.reduce(function(currentLongest,user){
  if(user.email.length> currentLongest.email.length){
      return user;
  } else{
      return currentLongest;
  }
}, users[0]);
console.log(longestEmail.email);

// Use .reduce to get the list of user's names in a single string. Example: ' +
// 'Your instructors are: ryan, luis, zach, fernando, justin.

let nameString=users.reduce(function(accumulator,user){
    if(accumulator === ''){
        return "your instructors re " + user.name    }
    else {
        return accumulator + ',' + user.name
    }
}, '')

console.log(nameString + ",");


let concatLangs=users.reduce(function(accumulator,user){
    return accumulator.concat(user.languages);

},[]);
console.log(concatLangs);

// let uniqueLangs=concatLangs.reduce(function(accumulator,currentValue){
//     if(accumulator.indexOf(currentValue) === -1){
//         accumulator.push(currentValue);
//     }
//         return accumulator;
//
// }, [])
// console.log(uniqueLangs);

let uniqueLangs=concatLangs.reduce(function(accumulator,currentValue){
    if(accumulator.includes(currentValue)){
        return accumulator;
    }else {
     accumulator.push(currentValue);
     return accumulator;
    }
}, [])
console.log(uniqueLangs);