// JavaScript Document

var fs = require('fs');

//nwo the food

var food = fs.readFile('Food.txt', 'utf8', function(err, food) {
	console.log(food + '\n');
		console.log('DRINKS:');
});

console.log('FOOD:');

//DRANK

var drink = fs.readFile('Drinks.txt', 'utf8', function(err, drink) {
	console.log(drink);
});

