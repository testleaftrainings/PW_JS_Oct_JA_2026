//Count occurrence of each character

// let str ="HHello Team";

// const occurance = new Map();

// console.log(occurance); //Map(0) {}

// for(const x of str){  // here ch is declared with const to hold the first charcter of the string

// console.log(x)

// occurance.set(x,(occurance.get(x)||0)+1) 

// First Iteration : when occurance variable is empty : occurance.set(H,1) //{H=>1}
// Second iteration : when occurnace variable is holding {H=>1} and the outout will be ccurance.get(char)==>1 
// note : the output of occurance.get(char) is undefined then 0 is returned then we add with "1" and gets added to 1 returns 2

// }      

//console.log(occurance)
/* {
H=>1
e=>2
l=>2
} */


/* Output :

Map(8) {
  'H' => 2,
  'e' => 2,
  'l' => 2,
  'o' => 1,
  ' ' => 1,
  'T' => 1,
  'a' => 1,
  'm' => 1
}*/



let str2 ="HHello Team";

let strArray = str2.split("") // ["H","H","e","l","l","o", ,"T","e","a","m"]

const occurance2 = new Map();

for (let index = 0; index < strArray.length; index++) {

    occurance2.set(strArray[index],(occurance2.get(strArray[index])||0)+1)     
    
}

console.log(occurance2)

/* Output :

Map(8) {
  'H' => 2,
  'e' => 2,
  'l' => 2,
  'o' => 1,
  ' ' => 1,
  'T' => 1,
  'a' => 1,
  'm' => 1
}*/