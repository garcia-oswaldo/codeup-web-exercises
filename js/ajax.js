"use strict"
//
// $.ajax('data/stuff.json').done(function(data, status, jqXhr) {
//     alert("AJAX call completed successfully!");
//     console.log("Request status: " + status);
//     console.log("Data returned from server:");
//     console.log(data);

$.ajax("https://api.github.com/users/garcia-oswaldo/events?per_page=100")
    .done(function(data){
        console.log(data)
    })
    .fail(function(jqXhr, status, error) {
        alert("There was an error! Check the console for details");
        console.log("Response status: " + status);
        console.log("Error object: " + error);
}).always(function(){
    alert('Ajax reqeust has finished')
})

//$.ajax("/some-url")
//     .done(onSuccess)
//     .fail(onFail)
//     .always(stopLoadingAnimation);