


"use strict";

    // create a circle object
    var circle;
    circle = {
        radius: 3,

        getArea: function () {
            // TODO: complete this method
            // hint: area = pi * radius^2

            let area = Math.PI * Math.pow(this.radius, 2);
            return area;
        },


        logInfo: function (dorounding) {
            // TODO: complete this method.

            // If doRounding is true, round the result to the nearest integer.
            // Otherwise, output the complete value
            let area = this.getArea();
            if (dorounding) {
                console.log("Area of a circle with radius: " + this.radius + ", is: " + Math.round(area));
            }
        }





            // log info about the circle
            console.log("Raw circle information");
            circle.logInfo(false);
            console.log("Circle information rounded to the nearest whole number");
            circle.logInfo(true);

            console.log("=======================================================");
            // TODO: Change the radius of the circle to 5.

            // log info about the circle
            console.log("Raw circle information");
            circle.logInfo(false);
            console.log("Circle information rounded to the nearest whole number");
            circle.logInfo(true);

            console.log(circle.getArea());


