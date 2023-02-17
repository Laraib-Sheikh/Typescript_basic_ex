let myname = "John";
let age = 30;
let height = 180;
let fruits = ["apple", "banana", "orange"];

// Tests for equality and inequality with strings
console.log("Is myname equal to 'John'? I predict true.");
console.log(myname == "John");

console.log("Is mymyname not equal to 'john'? I predict true.");
console.log(myname != "john");

console.log("Is myname equal to 'jane'? I predict false.");
console.log(myname == "jane");

console.log("Is myname not equal to 'John'? I predict false.");
console.log(myname != "John");

// Tests using the lower case function
console.log("Is myname in lower case? I predict false.");
console.log(myname.toLowerCase() == myname);

console.log("Is myname in upper case? I predict false.");
console.log(myname.toUpperCase() == myname);

console.log("Is 'JOHN' in upper case? I predict true.");
console.log(myname.toUpperCase() == "JOHN");

// Numerical tests
console.log("Is age greater than 20? I predict true.");
console.log(age > 20);

console.log("Is height less than 200? I predict true.");
console.log(height < 200);

console.log("Is age greater than or equal to 30? I predict true.");
console.log(age >= 30);

console.log("Is height less than or equal to 180? I predict true.");
console.log(height <= 180);

console.log("Is age not equal to 25? I predict true.");
console.log(age != 25);

console.log("Is height equal to 170? I predict false.");
console.log(height == 170);

// Tests using "and" and "or" operators
console.log("Is age greater than 25 and less than 35? I predict true.");
console.log(age > 25 && age < 35);

console.log("Is age greater than 25 or height greater than 200? I predict true.");
console.log(age > 25 || height > 200);

console.log("Is age greater than 35 and height greater than 200? I predict false.");
console.log(age > 35 && height > 200);

// Test whether an item is in an array
console.log("Is 'banana' in the fruits array? I predict true.");
console.log(fruits.includes("banana"));

console.log("Is 'grape' in the fruits array? I predict false.");
console.log(fruits.includes("grape"));

// Test whether an item is not in an array
console.log("Is 'pear' not in the fruits array? I predict true.");
console.log(!fruits.includes("pear"));

console.log("Is 'apple' not in the fruits array? I predict false.");
console.log(!fruits.includes("apple"));
