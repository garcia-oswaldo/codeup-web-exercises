"use strict"
console.log('hello');
// Handle An API Promise
// *******1.Create a file named promises.js inside of your js directory and link it to an HTML file of your choice.
//
// *******2.    Generate a Personal Access Token for the GitHub API.
//
// *******3.    We will use this so that we don't get rate limited when talking to the GitHub API.
// You can add the token to your requests like this:
//
//
// ********4.fetch(url, {headers: {'Authorization': 'token YOUR_TOKEN_HERE'}})
// *********5.Create a function that accepts a GitHub username, and returns a promise that resolves returning just the date of the last commit that user made. Reference the github api documentation to achieve this.
//
//    Create Your Own Promise
//   6.Write a function named wait that accepts a number as a parameter, and returns a promise that resolves after the passed number of milliseconds.
//
//
// wait(1000).then(() => console.log('You\'ll see this after 1 second'));
// wait(3000).then(() => console.log('You\'ll see this after 3 seconds'));
// 1. As a bonus make sure the promise resolves with the milliseconds in return, so you can make the console log message more dynamic.

fetch('https://api.github.com/users/garcia-oswaldo/events/public', {headers:
        {'Authorization':'token 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'}})
    .then(function(response){
         console.log(response);
          return response.json();

//     //1. make the fetch call to github
    //2. return json () promise  return fetch ('https://api.github.com/users/garcia-oswaldo/events', {headers:{'Authorization':'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'}})
        // .then(function(response) {            });

 }).then(function (jsonData){
     console.log(jsonData[0].created_at);
     console.log(jsonData[4].created_at);
});


const wait = new Promise((resolve, reject) => {
    setTimeout(() => {
        if (Math.random() > 0.5) {
            resolve('It worked');
        } else {
            reject('this failed');
        }
    }, 1500);
});

console.log(wait); // a pending promise
//
// function wait(numberMili){
//     return new Promise(resolve, reject) => {
//         setTimeout(() => {
//             resolve(numberMili);
//         ), numberMili);
//     });
// }
//
// myPromise.then(() => console.log('resolved!'));
// myPromise.catch(() => console.log('rejected!'));