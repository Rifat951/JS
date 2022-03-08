function output() {
  return "true";
}

// one way

let a = output();
console.log(a);

// another way
console.log(output());

// we are assinging the output into a variable then printing out
let val = output;
console.log(val());

function testtwo() {
  return function () {
    console.log("output two...");
  };
}

let testout = testtwo();
testout();

//get the string

function str() {
  return function () {
    return "string val";
  };
}

// it will go str -- > retrun --- > return.
console.log(str()());
