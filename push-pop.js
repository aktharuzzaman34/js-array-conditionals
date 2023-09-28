var numbers = [78, 45, 98, 45];
// use push to add element to an array as the last element array
// numbers.push(63);
// console.log(numbers);
var friends = ["balam", "kalam", "salam"];
friends.push("foysal", "salman", "rofiq");
// console.log(friends);

// use pop to get last element
console.log(numbers);
// numbers.pop();
var element = numbers.pop();
console.log(numbers);
console.log(element);

// Remove fast emelemts of an Array
var fruits = ['Banana', 'Orange', 'Apple', 'Mango'];
fruits.shift();
console.log(fruits);
fruits.unshift('Grape', 'Pineapple');
console.log(fruits);