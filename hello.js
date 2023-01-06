// Data Types
/*
undefined: Something that is yet to be defined
symbol = immutable primitive value that is unique
number is a number
 */
//var can be anything
var myName = "Varun Parbhakar"

// Declaring Variables
// var: this can be used anywhere in the program, like a global varibale?
// let: this is only visible in the scope of the program or a method
// const: variable that will not change, something static

var v = "Hey";
let test2 = "testing"
const testing3 = "test3"

//Printing stuff in the console/terminal
console.log(test2)

var a = "Hey Man what is going on";
var b = 7
console.log(a + b)

//Incrementing
var myVar = 0;
myVar++;

//Escape Character "\"
var s = "Hey man my name is \"Varun Parbhakar\"."
var g = 'Hey man my name is "Varun Parbhakar".' // This is much better no escaping you can also use "`"


//Length of the string
var testLengthString = 'Varun Parbhakar';
var myLength = testLengthString.length;

var firstLetter = testLengthString[0]
// var lastLetter = testLengthString[testLengthString.length-1]
// console.log(lastLetter)

//Arrays
var myArray = ["John", 7, 2.3];// Kind of like python
var nestedArray = [["Varun ", 2, 2.3], ["Vardaan", 7, 2.3]];

console.log((myArray)) //This has colors
console.log(JSON.stringify(myArray)) // This is just a string representation of the array

// There is stack like properties to the Arrays
myArray.push("Jesus");
myArray.push(["Jesus, J, 7"]);
var el = myArray.pop();

//Removing the first element of the array like a queue
myArray.shift();
myArray.unshift("Jesus"); // This will add an element to the beginning of the array


//Functions like methods

function myFunction() {
    console.log("YO YO");
}

function myFunction2(a, b) {
    console.log("YO YO");
}
function myFunction3(a, b) {
    console.log("YO YO");
    return 7;
}
myFunction();

/*
    Global variable need to be defined outside the methods at the very top
    When we dont put "var" to a variable in a function then it automatically becomes global
    Local and global variables can coexist, and in a function a local variable with the same name as global
    will take precedence
 */

//If statements

if(true) {
    console.log("Printing from if");
} else if (false) {
    console.log("Printing from elseif");
} else {
    console.log("Printing from else");
}
//Comparision

//3 === 3 T
//3 === "3" F
// 3 == "3" T, The double equals converts the datatype if they are differnet, hence string 3 turns into number 3
// 3 != "3", Traditional
// 3 !== "3", Strict
// && Typical And
// || Typical Or
console.log(3 == "3")

//Building Objects
var dogObject = {
    "name": "Josh", "legs": 4, "tails": 2, "Friends": 0
};
var nameOfTheObject = dogObject.name
// You can also use the name of the property

var dogNameProperty = dogObject["name"]

//Adding new properties to objects
dogObject.newProperty = "IDK new Property" //Same thing
dogObject["newProperty"] = "IDK new Property" //Same thing

//Deleting property

delete dogObject.newProperty

//Checking for property
dogObject.hasOwnProperty("propertyName")//Returns true or false