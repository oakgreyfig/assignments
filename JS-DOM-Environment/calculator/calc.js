const readline = require("readline-sync")

function add (x,y) {
    return x+y;
}
console.log(add(2, 3))
console.log(add(-1, 1))
console.log(add(1, 1, 1)) 

// shows that the third input doesn't have anything to the equatuion. output is 2 not 3// 



function multiplyNumbers(x,y){
    return x*y;
}
var z = multiplyNumbers(4,30);

console.log(multiplyNumbers(3,40))


//works with putting the numbers in by how do I do something diferent? //

function divideTwoNumbers (number1,number2) {
    return number1/number2
}

console.log(divideTwoNumbers(3,400))
console.log(divideTwoNumbers(10,5))
console.log(divideTwoNumbers(4,6482))
console.log(divideTwoNumbers(400,3.9999))

//works with console log and stacic outputs are correct// 


//diff between two numbers


function getDifference (a,b) {
    return Math.abs(a-b)
}

console.log(getDifference(400,3))