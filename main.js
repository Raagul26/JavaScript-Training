console.log("\n$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$ SESSION - 1 $$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$\n")
// single line comment

/* 
This is a
multiline comment
*/

// variable declaration - var, let, const
console.log("variable declaration :-")

"use strict"
var a = 100
a = 324
console.log(a)

let b = 123
b = 234
console.log(b)

const c = 871
// c=324
console.log(c)

// let num =12   cannot redeclare a variable created using let keyword
console.log(num)
var num = 123     // can be redeclared
console.log(num)
var num = 21
console.log(num)

// Primitive datatypes
console.log("\nPrimitive datatypes :-")

var num = 100
console.log("Integer : " + num)

var decimal = 21.52
console.log("Float : " + decimal)

var text = "JavaScript"
console.log("String : " + text)

var boolean = true
console.log("Boolean : " + boolean)

var noValue
console.log("Undefined : " + noValue)

var nullValue = null
console.log("Null : " + nullValue)

// Object
console.log("\nObject :-")

car = {
    name: "BMW",
    model: "520d",
    weight: 950,
    color: "red"
}

console.log(car)

newCar = car
newCar.color = "green"
console.log(newCar)

console.log("\n$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$ SESSION - 2 $$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$\n")

// Operators
console.log("\nOperators :-")

// Arithmetic Operator
console.log("\tArithmetic Operator")
a = 10
console.log(10 + 20)
console.log(30 - 10)
console.log(10 * 2)
console.log(10 / 2)
console.log(15 % 2)
console.log(10 ** 2)
console.log(a++) // 10
console.log(a--) // 11
console.log(++a) // 11
console.log(--a) // 10

// Comparison Operator
console.log("\tComparison Operator")
var num1 = 30
var num2 = "30"
console.log(num1 == num2)
console.log(num1 != num2)
console.log(num1 === num2)
console.log(num1 !== num2)
console.log(num1 > num2)
console.log(num1 < num2)
console.log(num1 >= num2)
console.log(num1 <= num2)

// Assignment Operator
console.log("\tAssignment operator")
a = 100
console.log(a)
a += 10
console.log(a)
a -= 5
console.log(a)
a *= 2
console.log(a)
a /= 2
console.log(a)
a %= 2
console.log(a)
a **= 2
console.log(a)

// Conditional Operator
console.log("\tConditional Operator")
var greater = (a > b) ? a : b
console.log(greater)

// Logical Operator
console.log("\tLogical Operator")
console.log(10 && 20)
console.log(20 || 10)
console.log(!10)

// Typeof Operator
console.log("\tTypeof Operator")
console.log(typeof 100)
console.log(typeof "hello")
console.log(typeof true)
console.log(typeof null)
console.log(typeof undefined)

// Conditional Statements
console.log("\n\tConditional Statements")
var age = 10
if (age >= 18 && age <= 50)
    console.log("Ticket Price : Rs.250")
else if (age > 50)
    console.log("Ticket Price : Rs.150")
else
    console.log("Ticket price : Rs.100")

// Looping Statements
console.log("\n\tLooping Statements")

console.log("For loop")
for (var i=0;i<=10;i++)
    console.log(i)

console.log("While loop")
var i=0
while(i<=5)
{
    console.log(i)
    i++
}

console.log("Do while loop")
i=5
do{
    console.log(i)
    i++
}while(i>10);

console.log("Switch case")
i=5
switch(i)
{
    case 0:
        console.log("0")
        break
    case 1:
        console.log("1")
        break
    case 2:
        console.log("2")
        break
    default:
        console.log("-")
}

// Array
arr = [1,2,3,4.5,'a','b',"hello",true,null,undefined]
console.log("Loop through an array using for loop")
for (i=0;i<arr.length;i++)
{
    console.log(arr[i])
}

console.log("Loop through an array using for of loop")
for (i of arr)
{
    console.log(i)
}

// Loop control
console.log("\n\tLoop control")

console.log("Break")
for(i=1;i<=10;i++)
{
    if(i==5)
    {
        break
    }
    console.log(i)
}

console.log("Continue")
i=10
while(i>2)
{
    i--
    if(i==5)
    {
        continue
    }
    console.log(i)
}

// Dialog boxes
age = prompt("Enter Your Age : ")
confirm("Is entered age correct?")
alert("Entered Age Is "+age)
