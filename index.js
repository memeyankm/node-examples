// var rect = {
//     perimeter: (x, y) => (2*(x+y)),
//    area: (x, y) => (x*y)
// };

var rect = require('./rectangle');

function solveRect(l,b) {
    console.log("solving for rectangle with l = " + l + " and b = " + b);

    rect(l, b, (err, rectangle) => {
        if (err) {
            console.log("error:", err.message);
        }
        else {
            console.log("area of the rectangle of dimensions l = " + l + " and b = " + b + " is " + rectangle.area());
            console.log("perimeter of the rectangle of dimensions l = " + l + " and b = " + b + " is " + rectangle.perimeter());
        }
    });
    console.log("this statement after the call to rect()");

    //if ( l<=0 || b<=0) {
    //console.log("rectangle dimensions should be greater than zero: l=" + l + "and b=" + b);
    //}
    //else {
    //    console.log("the area of the rectangle is" + rect.area(l, b));
    //    console.log("the perimeter of the rectanfgle is" + rect.perimeter(l, b));
    //}
}

solveRect(2, 4);
solveRect(6, 9);
solveRect(0, 5);
solveRect(-3, 5);
