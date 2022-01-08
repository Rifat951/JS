/* let car = {
    make : 'benz',
    modle : 'c-class',
    year : 2016,
    getprice : function(){
        return 12000;
    },
    printdesc : function(){
        console.log(this.make + ' '+this.modle+' '+this.year+' '+'has ' +this.getprice());
    }
    // under the first curly braces are object
    // we put the object into the var
};

// this refers to the way a function is called

car.printdesc(); */


/* function first(){
    return this;
}

console.log(first() === global); 


//usage of strict method

function second(){
    'use strict';
    return this;
}

console.log(second() === global); 
console.log(second() === undefined); */

/* 
let myObject = { value : 'My Object'};

// value is set to global object
globalThis.value = 'Global object';

function third (name){
    return this.value + name;
}
console.log(third());
console.log(third.call(myObject));
console.log(myObject.value);

//concat something with object value

console.log(third.call(myObject, 'neko'));
console.log(third.apply(myObject, ['meow'])); */



function fifth(){
    console.log(this.firstname + ' ' + this.lastname);
}

let customer1 = {
    firstname : ' bob',
    lastname : ' meow'
}
let customer2 = {
    firstname : ' boby',
    lastname : ' meowy'
}


console.log(customer1.firstname + " " + customer1.lastname);
console.log(customer2.firstname + " " + customer2.lastname);