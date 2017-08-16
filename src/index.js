var add = require('./add');
var multiply = require('./multiply');

var x = 5;
var y = 13;

console.log(x + ' + ' + y + ' = ' + add(x, y));
console.log(x + ' × ' + y + ' = ' + multiply(x, y));