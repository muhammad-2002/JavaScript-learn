// Task-01: 
 // You went to the supermarket to buy some oranges and apples. Calculate how much money the shopkeeper will return.

// Input:
// The first line of the input is the taka you have. The second line is the cost of 1 kg of oranges and 1 kg of apples.

const myTaka =1000;
const Apple = 500;
const orange = 300;
const ReturnTaka=myTaka -(Apple + orange);
console.log(ReturnTaka);

// Task-2
// Write a program to calculate the average marks of Mathematics, Biology, Chemistry, Physics, and Bangla of a student.

// Input:
// The first line of the input is the marks of the five subjects mentioned above, respectively.

// Output:
// Print the result in 2 decimal places.

const Mathematics =70;
const Biology =50;
const Chemistry =78;
const Physics =44;
const Bangla =50;

const avrageMark= ((Mathematics+Biology+Chemistry+Physics+Bangla)/5);
console.log(avrageMark.toFixed(2))


// Task-3
// What will be the result of the following codes:

var a = isNaN(‘11’);

var a = isNaN(2-10);

// Explain your answers.
var a = isNaN(2-10);
console.log(a)
const b = isNaN('11');
console.log(b)
