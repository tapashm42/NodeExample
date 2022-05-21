// var rect = {
//     perimeter: (x,y) => (2*(x+y)),
//     area: (x,y) => (x*y)
// }
const reactangle = require('./reactangle');
var rect = require('./reactangle');

function solveReact(l,b) {
    console.log("Solving for reactangle with length = " + l + " and breadth= " + b);
    rect(l,b, (err, reactangle) => {
        if (err) {
            console.log('Error: '+ err.message);
        }
    else {
        console.log("Area = "+ reactangle.area());
        console.log("Perimeter = "+ reactangle.perimeter());
    }
});
}

solveReact(-2,-5)
solveReact(4,5)
solveReact(0,4)


// var square = require('./square');

// function calArea() {
// console.log('Area is ' + square.area(4))
// }

// calArea();