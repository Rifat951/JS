function hello(){

    console.log("------------");
    console.log("mofoooo");
    console.log("------------");
}


let a = hello; // this works as a reference
a(); // works as the function invoke

let b = hello(); // invoke directly by assigning



function nametest(name){

    console.log("hello.. " + name);
}

nametest('testname');

let str = nametest('testname2');


// perform operations


function calculate(amount){

    let sum = amount * 3.1416;
    return sum;
}

let amountofsum = calculate(3);
console.log(amountofsum);