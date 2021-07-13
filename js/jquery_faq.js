"use strict"

$(document).ready(function() {
    alert("hello");
    $('dd').addClass('invisible')

    $('#push').click(function(event) {
        event.preventDefault();
        $('dd').toggleClass('invisible');
    });
});