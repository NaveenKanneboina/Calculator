
// <----------------------------------------------- Script for Prime Number ----------------------------------------->
var number;
number = document.getElementById("prime").value;
document.getElementById("prime").addEventListener("change", Prime);

function Prime() {
  number = document.getElementById("prime").value;
}

// <--------- when submit button clicked ---------------->
document.getElementById("primeButton").onclick = function() {
  console.log(number);
  if (number > 1) {
    if( number == 2){
      document.getElementById("primeResult").innerText="Prime Number 👍";
    }
    else{
        for (let i = 2; i < number; i++) {
          if (number % i == 0) {
            document.getElementById("primeResult").innerText="Not Prime Number 😐"
            break;
          }
          else{
            document.getElementById("primeResult").innerText="Prime Number 👍"
          }
        }
      }
  }
  else if(number == 1){
    document.getElementById("primeResult").innerText="Neither Prime nor Composite 🤘"
  }
  else{
    document.getElementById("primeResult").innerText="Invalid Number 😡 Enter valid number"
  }
}



// <--------------------------------------- Script for Calculator Operations ---------------------------------------->

var a=0;
var b;
var operator = null;
var result;

// <----------- on clicking nnumber button ----------->
for(var i=0;i<=9;i++){
  document.getElementById(i).onclick = function() {
    if(a==0){
      a=this.id
    }else{
      a=a+this.id
    }
    document.getElementById("demo").innerHTML = a;
    console.log(a)
  }
}

// <---------- on clicking opertions button ----------->
for(var i=10;i<=14;i++){
  document.getElementById(i).onclick = function() {
    if(a!=0 && operator== null){
      b=a;
      a=0;
      operator=this.value
      if(operator=="power"){
        document.getElementById("history").innerHTML = b;
        document.getElementById("demo").innerHTML = a;
      }
      else{
        document.getElementById("history").innerHTML = b + operator;
        document.getElementById("demo").innerHTML = a;
      }
    }
  }
}

// ------ on clicking AC (clear) button ----------->
document.getElementById("X").onclick = function(){
  a=0;
  b=0;
  operator=null
  document.getElementById("history").innerHTML = "";
  document.getElementById("demo").innerHTML = a;
}

// <-- on clicking Square (x * x)Operation button ------>
document.getElementById("square").onclick = function(){
  if(a!= 0){
    a = a*a
    document.getElementById("demo").innerHTML = a ;
  }
}

// <----- on clicking  of  (1/n) Operation button ------>
document.getElementById("1/x").onclick = function(){
  if(a!= 0){
    a = 1/a
    document.getElementById("demo").innerHTML = a ;
  }
}

// <----- on clicking  of  result (=) button -------->
document.getElementById("=").onclick = function(){

  document.getElementById("history").innerHTML = "";
  switch(operator){
    case "+": 
    a=parseFloat(b)+parseFloat(a);
    document.getElementById("demo").innerHTML =a 
    break;
    case "-": 
    a=parseFloat(b)-parseFloat(a);
    document.getElementById("demo").innerHTML =a 
    break;
    case "*": 
    a=parseFloat(b)*parseFloat(a);
    document.getElementById("demo").innerHTML =a 
    break;
    case "/": 
    a=parseFloat(b)/parseFloat(a);
    document.getElementById("demo").innerHTML =a 
    break;
    case "power":
    a=Math.pow(parseInt(b),parseInt(a));
    document.getElementById("demo").innerHTML =a 
    break;
}
operator=null;
// b=0 
}

// <------------------------------------------ Script for the Palindrome Operation ---------------------------------->

var input;

input = document.getElementById("palin").value;
document.getElementById("palin").addEventListener("change", Palindrome);

function Palindrome() {
  input = document.getElementById("palin").value;
}

//<-------------------------------- Method 1------------------------------->
// <------------------------ Script for the Palindrome Operation using for loop----------------->


// document.getElementById("palinButton").onclick = function() {
  
//   const length = input.length;

//   if(input == ""){
//     document.getElementById("palinResult").innerText="Enter Text"
//   }
//   else{
//     for (let i = 0; i < length / 2; i++) {
//       if (input[i] !== input[length - 1 - i]) {
//         document.getElementById("palinResult").innerText="Not a palindrome"
//       }
//       else{
//         document.getElementById("palinResult").innerText="Palindrome"
//       }
//     }
//   }
// }


//<-------------------------------- Method 2------------------------------->
// // <------------------- Script for the Palindrome Operation By reversing the given input ----------------->

document.getElementById("palinButton").onclick = function() {
  
  const length = input.length;
  var reverseInput = "";

  for (let i = length - 1; i >= 0; i--) {
    reverseInput += input[i];
  }

  if(input == ""){
    document.getElementById("palinResult").innerText="Invalid Input 😡"
  }
  else if(input == reverseInput){
    document.getElementById("palinResult").innerText="palindrome 👍"
  }
  else{
    document.getElementById("palinResult").innerText="Not a Palindrome 😐"
  }
}



//<-------------------------------- Method 3------------------------------->
// // <------------------- Script for the Palindrome Operation using bulid in methods ----------------->

// document.getElementById("palinButton").onclick = function() {
  
//   // <--------- converting input  to reverseinput ------------->
//   const reverseinput= input.split('').reverse().join('');

//   if(input == ""){
//     document.getElementById("palinResult").innerText="Enter Text"
//   }
//   else if(input == reverseinput) {
//     document.getElementById("palinResult").innerText="Palindrome"
//   }
//   else {
//     document.getElementById("palinResult").innerText="Not a palindrome"
//   }
// }






// // <------------------- Script for the Palindrome Operation using bulid in methods ----------------->


// document.getElementById("palinButton").onclick = function() {
  
//   // <----- converting input to array ------->
//   const array = input.split('');
//   console.log(arrayValues)
  
//   // <---reversing array and assigning to new variable ----->
//   const reverseArray = array.reverse();
//   console.log(reverseArrayValues)
  
//   // <------ converting reverse array to reverseinput -------->
//   const reverseinput = reverseArray.join('');
//   console.log(reverseinput)
  
//   if(input == ""){
//     document.getElementById("palinResult").innerText="Enter Text"
//   }
  
//   // <--- checking reverse array is equal to orignal input ----->
//   else if(input == reverseinput) {
//     document.getElementById("palinResult").innerText="Palindrome"
//   }
//   else {
//     document.getElementById("palinResult").innerText="Not a palindrome"
//   }
// }