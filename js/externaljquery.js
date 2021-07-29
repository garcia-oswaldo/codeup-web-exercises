        "use strict"

        $(document).ready(function(){
            var h1=$("#h1")
                console.log(h1)

            alert("the Dom is finished loading")
        $('h1','p','ul')
            console.log('h1','p','ul')
        $('#p1')
            console.log('#p1')

        $('#list1').html()
            console.log($('#list1, li'))

        alert($('#p1').html())
            // $('#p1,#p2').html('vatos locos forever') this changes html in p1,p2
            $('#p1,#p2').html()
            console.log($('#p1,#p2').html())})
            //logs what is in the html on p1,p2

            //Second exercise

            // // Class Selectors
            // //
            // // Remove your custom jQuery code from previous exercises.
            // //
            // //     Update your code so that at least 3 different elements have the same class named codeup.
            // //
            // //     Using jQuery, create a border around all elements with the class codeup that is 1 pixel wide and red.
            // $('.codeup').css('border-style', 'solid');
            // //     Remove the class from one of the elements. Refresh and test that the border has been removed.
            // //
            // //     Give another element an id of codeup. Does this element get a border now?

        //     $('*').css('font-size', '70px');
        // console.log('li');
        //
        //     $('h1,p,li').css('border-style', 'solid');
        //     alert("h1 has changed")
        //


            //review with sly....
        //
        //     // Use jQuery to select an element by the id. Alert the contents of the element.
        //         alert($('#main-heaader).html()');
        //
        //     // Use the same id on 2 elements. How does this change the jQuery selection?
        //
        //         $('#main-header''.css('background-color','red'))
        //
        //     // Using jQuery, create a border around all elements with the class codeup that is 1 pixel wide and red.
        //
        //         $('codeup').css('border','solid 1px red';)
        //
        //     $('li').css('font-size','20px');
        //
        //     // Using jQuery, set the font-size of all li elements to 20px.
        //     $('*').css('font-size', '70px');
        //     console.log('li');
        //
        //     // Craft selectors that highlight all the h1, p, and li elements.
        //     $('h1').css('border-style', 'solid');
        //     $('p').css('border-style', 'solid');
        //     $('h1,p,li').css('background-color', 'yellow');
        //     $('li').css('border-style', 'solid');
        //     alert($('h1').html());


            // Mark class on JQuery july 12th
            // $("#codeup1").click(function(event){
            //     alert("codeup1 clicked");
            // });
            //
            // $("#codeup2").dblclick(function(event){
            //     alert("codeup2 double-clicked");
            // })
            // $("#codeup3").hover(function(event) {
            //     console.log('hoverin for codeup3');
            //     $(this).css('background-color','black')
            //     $(this).css('color','#ffffff')
            // }, function(event){
            //     console.log("hover out for codeup3")
            //     $(this).css('background-color','white')
            //     $(this).css('color','#000000')
            //
            //     $('#codeup3').hover(hoverIn, hoverOut);
            //     $('#codeup2').hover(hoverIn, hoverOut);
            // })




                // Add jQuery code that will change the background color of an h1 element when clicked.
                //
                //  $("h1").click(function(event){
                //      $(this).css('background-color', '#FFFF00');
                //   });
                // Make all paragraphs have a font size of 18px when they are double clicked.
            //     $("p").dblclick(function(event){
            //     $(this).css('font-size', '78px');
            // });
                // Set all li text color to red when the mouse is hovering; reset to black when it is not.
            // $("li").hover(function(event) {
            //
            //        $(this).css('color','#FF0000')
            //    }, function(event){
            //        $(this).css('color','#000000')
            //
        //     //      });
        //     $('#textfield').keydown(function() {
        //         // alert('A key was pushed down!');
        //     }
        //     $('#textfield').keydown(doKeyDown);
        //         console.log('akey was pressede');
        //     });
        //
        // $('#textfield').keyup(function() {
        //     alert('a key was released!');
        // });
    //     var allKeysPress="";
    //     $(document).ready(function(){
    //
    // function keyPressEventHandler(event){
    //     console.log(event)
    //     allKeysPress +=event.key;
    //     var didKeySeq = (allKeysPress.includes("ArrowUpArrowUpArrowDownArrowDownArrowLeftArrowRightArrowLeftArrowRightbaEnter"))
    //     if(didKeySeq){
    //         allKeysPress="";
    //         $('.codeup').css('border-style', 'solid');
    //
    //     }
    // }
    // $(document).keydown(keyPressEventHandler);
    //
    // });
    //
