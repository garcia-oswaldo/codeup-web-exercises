

(function(){
    "use strict";

    /**
     *
     * Create an array of 4 people's names and store it in a variable called
     * 'names'.
     */


    let names = ["bob", "jim", "larry", "sandra",];

   
    /**
     * TODO:
     * Create a log statement that will log the number of elements in the names
     * array.
     */
    console.log(names.length);
    console.log("");
    /**
     * TODO:
     * Create log statements that will print each of the names individually by
     * accessing each element's index.
     */
    console.log(names[0]);
    console.log(names[1]);
    console.log(names[2]);
    console.log(names[3]);
    console.log("");
    /**
     * TODO:
     * Write some code that uses a for loop to log every item in the names
     * array.
     */
   for(let i=0; i<names.length; i++){
        console.log(names[i]);
    }
    /**
     * Refactor your above code to use a `forEach` loop
     */

       names.forEach(function(names) {
              console.log(" here are the names" + names);
           
       })



 /**
  * TODO:
  console.log('Here is a lovely shape: ' + shape + '.'); * Create the following three functions,
  each will accept an array and
   ); * return an an element from it
     * - first: returns the first item in the array
     * - second: returns the second item in the array
     * - last: returns the last item in the array
     *
     * Example:
     *  > first([1, 2, 3, 4, 5]) // returns 1
     *  > second([1, 2, 3, 4, 5]) // returns 2
     *  > last([1, 2, 3, 4, 5]) // return 5
     */

        function firstArray(array){
            return array [0];
 }
          console.log (firstArray([1, 2, 3, 4, 5]));

        function secondArray(array){
            return array[1];
        }
        console.log (secondArray([1, 2, 3, 4, 5]))

    function thirdArray(array){
        return array[4];                         
    }
    console.log (thirdArray([1, 2, 3, 4, 5]))
                                                         




})();
