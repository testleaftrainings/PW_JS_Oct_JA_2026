//Strings are immutable in JS


// let eName = "Ravi"; // we cannot change the value of the string variable str cause strings are immutable in JavaScript. However, we can create a new string by concatenating the original string with another string.

// eName = eName+" R"

// console.log(eName); // Output: Ravi R

//Objects are non-primitive datttypes and mutable in JS

// const eName = "Ravi"; 
// eName ="Hari"// we can change the value of the object variable eName cause objects are mutable in JavaScript.

const obj = {
    name: "Ravi",
    age: 25,
}

console.log(obj.name); // Output: Ravi
console.log(obj.age);  // Output: 25

obj.name = "Hari";

console.log(obj.name); // Output: Hari

/* COnclusion:

const declaration in strings are no reassignabe
Whereas, const declaration in objects are reassignabe/mutable */


console.log(null == undefined); //true



/* **********JS CODE********** */

let str ='Order ID: #12345-Confirmed'; // string datatype

const orderDetails = str.split('#');
console.log(orderDetails); // Output: ['Order ID: ', '12345-Confirmed'] // [0,1]

const orderId = orderDetails[1]
console.log(orderId)

const orderNum = orderId.split("-")
console.log(orderNum[0]) //12345


//4. 

let value = 'Hello World'

console.log(value.slice(1))

//5. 

let senten = 'Automation testing playwrightJS JS'

let word = senten.split(" ")

console.log(word) //[ 'Automation', 'testing', 'playwrightJS', 'JS' ]

let longest = ""

for(let i=0; i<word.length;i++){
if(word[i].length>longest.length){ // 10>0 // 2>12

    longest=word[i] // playwrightJS
}
}

console.log(longest)


/* 
Oth Iteration

longest = "" 

1st Iteration:
Automation > "" // 10>0  // if condition was true hence longest got assigned woth Automation

longest = Automation

2nd Iteration :
testing>Automation //7>10 => false hence comes out of the if block and longest value not changed

3rd Iteration :
playwrightJS>Automation // 12>10 => true


*/


//Example as to how to retreive the count of each word

// //1. Automation

// word[0] //Automation
// const char = word[1].split("");
// console.log(char)

// /* [
//   'A', 'u', 't', 'o',
//   'm', 'a', 't', 'i',
//   'o', 'n'
// ] */
// console.log(char.length) //10

// //2. testing

// word[1] //Automation
// const char1 = word[1].split("");
// console.log(char1)

// /* [
//   'A', 'u', 't', 'o',
//   'm', 'a', 't', 'i',
//   'o', 'n'
// ] */
// console.log(char1.length) //10