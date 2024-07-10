console.log("careful writer ends every declarative sentence with a period");

alert("Welcome to our website");
var first_name = "Jaweria";
console.log(first_name);
var last_name = 'Khan';
console.log(last_name);

var number = 2021
console.log(number);
var text = "It is invented in 1845";
console.log(text);

var name = "Jaweria";
var email = "Jaweria@gmail.com";
var dateofBirth = 2004;
console.log(name + "   " + email + "   " + dateofBirth);
console.log(email);
console.log(dateofBirth);
let a = 12;
let b = 20;
let result = a + b;
console.log(" The sum of two number is : " + (a + b));
let username = prompt("your name is?")
console.log(username);

let number1 = +prompt("enter your number" ,92);
let number2 = +prompt("enter your second number");
console.log(number1 * number2);

let x = 21;
x += 4;
x = x % 4;
console.log(x);

let y = 12;
let z = 18;
console.log(y!==z);

let mode = "dark";
if (mode == "dark") {
    color = "red";
}
console.log(color);

let age = +prompt("Enter your age");
if (age > 18) {
    console.log("You are eligible for voting");
}
else{
    console.log("You are not eligible for voting");
}
let number = +prompt("Enter your number");
if(number % 2 == 0){
    console.log(number, "is a even number");
}
else{
    console.log(number, "is a odd number");
}
let age = +prompt("Enter your age");
if (age < 18) {
    console.log("junior");
}
else if(age > 60){
    console.log("senior");
}
else{
    console.log("middle");
}
// let weight = +prompt("Enter weight");
// let time = +prompt("Enter time");

// if (weight > 300 && time < 6 ) {

//     //!(444 > 300 || 4 < 6)
//     alert("Come to our tryout!");
// }
// else{
//     alert("Come to our cookout!");
// }


// let x = 10;
// let y = 5;

// if (x > 5) {
//     if (y > 2) {
//         console.log("Both x and y are greater than their respective thresholds.");
//     } else {
//         console.log("x is greater than 5, but y is not greater than 2.");
//     }
// } else {
//     console.log("x is not greater than 5, so the inner condition is not checked.");
// }

// let temperature = 15;
// let isSunny = true;

// if(temperature > 25){
//   console.log("It's hot outside!");

//   if(isSunny){
//       console.log("Don't forget to wear sunscreen.");
//   }
//   else{
//     console.log("You might still want to wear sunscreen.");
//   }
// }
// else if(temperature >= 15 && temperature <= 25){
//     console.log("It's a pleasant day.");
//   if(isSunny){
//     console.log("Enjoy the sunshine!");
//   }
//   else{
//     console.log("Even if it's cloudy, it's still nice outside.");
// }
// }
// else{
//     console.log("It's a bit chilly.");
//     if (isSunny) {
//         console.log("Don't be fooled by the sun, it's still cool.");
//     } else {
//         console.log("It might be cloudy, so bring a jacket just in case.");
//     }
// }


 
var textpara = (" " + "Pizza" + "\n" + " " + "Pizz" + "\n" + " " + "Piz" + "\n" + " " + "Pi" + "\n"  + " " +  "P");
 
alert(textpara);

alert("“▬▬▬▬▬▬▬▬▬ஜ۩۞۩ஜ▬▬▬▬▬▬▬▬▬”");


var email = "My email adress is : Jaweria@gmail.com";
alert(email);


var book = " I am trying to learn from the book A smarter way to learn JavaScript.";

alert(book);

var username = "John Doe";
alert(username);

var message = "Hello World";
alert(message);
let student = []
console.log(student);

let studentname = ["Jiya","Hamna","Maryam"]
console.log(studentname);

let num = [15,16,40,12]
console.log(num);

let boleanarray = [true,false]
console.log(boleanarray);

let mixedarray = ["Jiya",21,"True",50,"Karachi"]
console.log(mixedarray);

const studentName =["hamna","Jaweria","Maryam"];
const studentScore =[ 389,778,562];
let total = 800;
const percentage1 = studentScore[0]/total*100;
const percentage2 = studentScore[1]/total*100;
const percentage3 = studentScore[2]/total*100;
document.write("<p>score of"+" "+ studentName[0]+ " "+ "is "+studentScore[0]+"."+" "+"percentage:" +percentage1+"</p>");
document.write("<p>score of"+" "+ studentName[1]+ " "+ "is"+" "+studentScore[1]+"."+" "+"percentage:" +percentage2+"</p>");
document.write("<p>score of"+" "+ studentName[2]+ " "+ "is "+studentScore[2]+"."+" "+"percentage:" +percentage3+"</p>");

// //for loops
// console.log("Hello World");
// console.log("Hello World");
// console.log("Hello World");
// console.log("Hello World");
// console.log("Hello World");


// for(let i = 0;i < 10; i++){
//     console.log("Hello World");
// }
// for(let i = 14;i < 141; i = i + 14){
//     console.log(i);
// }
// for(let i = 24;i < 241; i = i + 24){
//     console.log(i);
// }


// let cleanestcities = ["Cheyenne","Santa fe","Tucson","Great falls","Honolulu"]
// let citytocheck = "Great falls";
// for (let i = 0; i <= 4; i++) {
//    if (citytocheck === cleanestcities[3]) {
//       alert("It's one of the cleanest cities");
//    }
//    else{
//       alert("It's not one of the cleanest cities");
//    }  
// }




// // question 7
// let qulificationInPakistan = [ "SSC","HSC","BCS","BCOM","MS","BBA","MA","MBBS"];
// document.write("<h2>Qualification</h2>");
// document.write("<ol>");
// for (let i = 0; i <= 7; i++) {
//     document.write("<li>"+qulificationInPakistan[i]+"</li>");
// }

// Initialize an array with color names. Display the array
// elements in your browser.
// a. Ask the user what color he/she wants to add to the
// beginning & add that color to the beginning of the array.
// Display the updated array in your browser.
// b. Ask the user what color he/she wants to add to the end
// & add that color to the end of the array. Display the
// updated array in your browser.

// c. Add two more color to the beginning of the array.
// Display the updated array in your browser.
// d. Delete the first color in the array. Display the updated
// array in your browser.
// e. Delete the last color in the array. Display the updated
// array in your browser.

// let colorName = ["red","green","pink","orange","black","yellow","white"];
// document.write("orignal array is" + colorName + "<br>");
// let add = prompt("select a color you want");
// colorName.unshift(add);
// document.write("Updatedv Array is: " + colorName);


// //a
// var colorToAdd = prompt("What color would you like to add to the beginning?");
// var colorsArray = ["red", "green", "blue"];
// colorsArray.unshift(colorToAdd);
// document.write("Updated array: " + colorsArray);

// //b
// var colorToAdd = prompt("What color would you like to add to the end?");
// var colorsArray = ["red", "green", "blue"];
// colorsArray.push(colorToAdd);
// document.write("Updated array: " + colorsArray);


// let fruits = ["apple","banana","mango","orange","strawberry"];
// document.write(fruits[0] + "apple");
// document.write(fruits[1] + "banana");
// document.write(fruits[2] + "mango");
// document.write(fruits[3] + "orange");
// document.write(fruits[4] + "strawberry");



// document.write("counting")
// for (let i = 1; i < array.length; i++) {
//     const element = array[i];
    
// }


// let country = "Pakistan";
// console.log(country.indexOf('a'));


// let firstName = prompt("Enter your firstName");
// // var firstChar = firstName.slice(0,1);
// var firstChar = firstName.charAt(0)
// console.log(firstChar);


// let text = "HELLO WORLD";
// let letter = text.charAt(text.length-4);
// console.log(letter);           


// let text = "Visit Microsoft";
// let result = text.replace("Microsoft",567);

// let text = "Mr Blue has a blue house and a blue car";
// let result = text.replace(/blue/g, "red");
// console.log(result);


// var scoreAvg = Math.round(8.0678347);
// console.log(scoreAvg);


// function myfunction() {
//     console.log("Hello World");
//     console.log("Jaweria Arshad")
// }
// myfunction();
// myfunction();
// myfunction();
// myfunction();

// function itfunction(a,b) { //Parameter
//     console.log(a*b);
// }
// itfunction(4,7);
// itfunction(12,45);//Argument
// itfunction(2,8);
// itfunction(6,10);
// itfunction(2,"hello");

// function sum(x,y){
//     s = x + y
//     return s
// }
// let value = sum(67,89)
// console.log(value);


//  function sum(x,y){  //local variable scope
//     s = x + y;
//     console.log("before");
//      return s;
//      console.log("after");
// }
// console.log(sum(23,59));


// function tellTime() {
// var now = new Date();
//  var theHr = now.getHours();
//  var theMin = now.getMinutes();
//  alert("Current time: "+ theHr + ":" + theMin);
// }
// tellTime();


// function  fahrenheitToCelsius(fahrenheit){
//     return (5/9) * (fahrenheit-32);
// }
// console.log(fahrenheitToCelsius());


// let text = "Outside: " + typeof carName;
// document.getElementById("demo1").innerHTML = text;
// function myFunction() {
//     let carName = "Volvo";
//     let text = "Inside: " + typeof carName + " " + carName; 
//     document.getElementById("demo2").innerHTML = text;
//   }
//   myFunction();


// function square(a) {
//     return a * a;
// }
// console.log(square(6));
// console.log(square(4));
// console.log(square(2));
// console.log(square(8));


// function factorial(n) {
//     if (n === 0 || n === 1) {
//         return 1;
//     } else {
//         return n * factorial(n-1);
//     }
// }
// console.log(factorial(1));
// console.log(factorial(2));
// console.log(factorial(3));
// console.log(factorial(4));
// console.log(factorial(5));
// console.log(factorial(6));
// console.log(factorial(7));
// console.log(factorial(8));
// console.log(factorial(9));
// console.log(factorial(10));

// //Answer:2
// let firstName = prompt("Enter first name:")
// let lastName = prompt("Enter last name:")
// function greets(firstName,lastName) {
//     console.log("Wellcome" + " " + firstName + " " + lastName);
// }
// greets(firstName,lastName);


// //Answer:3
// let a = +prompt("Enter a number:");
// let b = +prompt("Enter a number:");
// function sum(a, b) {
//     return a + b;
// }
// console.log(sum(a, b));


// //Answer:4
// let num1 = +prompt("Enter the first number");
// let operator = prompt("Enter your operator (+, -, *, /)");
// let num2 = +prompt("Enter the second number");

// function calculator(num1, operator, num2) {
//     let result;

//     if (operator === "+") {
//         result = num1 + num2;
//     } else if (operator === "-") {
//         result = num1 - num2;
//     } else if (operator === "*") {
//         result = num1 * num2;
//     } else if (operator === "/") {
//         if (num2 !== 0) {
//             result = num1 / num2;
//         } else {
//             return "Cannot divide by zero";
//         }
//     } else {
//         return "Invalid operator";
//     }

//     return `${num1} ${operator} ${num2} = ${result}`;
// }

// // Calling the calculator function and displaying the result
// document.write(calculator(num1, operator, num2));


// //Anawer:5
// function square(a) {
//     return a * a;
//   }
//  console.log(square(4));


// //Answer:9
//  function areaofrectangle(width, height) {

//     return "Area of Rectangle is:"+  width * height;
// }
// console.log(areaofrectangle(6,8));
// console.log(areaofrectangle(4,7));


// //Answer:14
// function circumference(radius) {
//     const pi = Math.PI;
//     let circumference = 2 * pi * radius;
//     console.log(`The circumference is ${circumference.toFixed(2)}`);
// }
// let radius = 5;
// circumference(radius);


// //Answer:
// let start_number = +prompt("Enter a start number");
// let end_number = +prompt("Enter a end number");
// function count(start_number, end_number){
//     if(start_number > end_number){
//         for(let i = start_number; i>end_number; i--)
//             document.write(i + "<br>")
        
//     }
//     else if(start_number <= end_number){
//         for(let i = start_number; i<=end_number; i++)
//             document.write(i + "<br>")
//     }
//     else if(start_number === end_number){
//         document.write("both are equal")
//     }
// }
// count(start_number,end_number);


// //while loop
// let n = +prompt("Enter the value of n")
// let i = 0
// while (i<=n) {    //n = 13 i = 0
//     document.write("<br>" + i)
//     i++;
// }


// //Answer:1
// let sum = 0;
// let num = 1;
// while (num<=100) {
//     sum += num;
//     num++
// }
// document.write("sum of 1 to 100:" + sum)


// //Answer:2
// let number = 6;
// let factorial = 1;
// while (number>0) {
//     factorial = factorial * number;
//     number--;
// }
// document.write("factorial of a number is:" + factorial)


// //Answe:3
// let num = []
// let i = 1;
// while (evennumber.length<10) {
//     if (i%2===0) {
//         evennumber.push(i)
//     }
// }
// document.write("the fisrt even number is:" + evennumber)


//Answer:4
let userinput;
let password = "javascript123";
while (userinput!==password) {
    userinput = prompt("Enter your password");
}
document.write("Access Granted")


