"use strict"

$(document).ready(function() {

    alert("hello");
    // adds class invisible to dd;
    $('dd').addClass('invisible')
    //css addeded invisible
    //add clickevent to toggle invisible
    $('#push').click(function(event) {
        event.preventDefault();
        //toggle method invisible
        $('dd').toggleClass('invisible');
    });
    $('dt').click(function(){
        $(this).css('background-color', 'yellow')
});
});

