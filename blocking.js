//le java face
//link to node's file system libraray

var fs = require('fs');

// open and read food list
var food = fs.readFileSync('Food.txt', 'utf8');
//print it
console.log('FOOD:');
console.log(food);

//open and read Drink list
var drink = fs.readFileSync('Drinks.txt', 'utf8');

//print it
console.log('DRINKS:');
console.log(drink);