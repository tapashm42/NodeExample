// var rect = {
//     perimeter: (x,y) => (2*(x+y)),
//     area: (x,y) => (x*y)
// }
var rect = require('./reactangle');

function solveReact(l,b) {
    console.log("Solving for reactangle with length = " + l + " and breadth= " + b);
    if (l <= 0 || b <= 0) {
        console.log("Not a proper length = " + l + " and breadth= " + b);
    }
    else {
        console.log("Area = "+ rect.area(l,b));
        console.log("Perimeter = "+ rect.perimeter(l,b) );
    }
}

solveReact(-2,-5)
solveReact(4,5)
solveReact(0,4)


// var square = require('./square');

// function calArea() {
// console.log('Area is ' + square.area(4))
// }

// calArea();