let car = {
  make: "benz",
  modle: "c-class",
  year: 2016,
  getprice: function () {
    return 12000;
  },
  printdesc: function () {
    console.log(
      this.make +
        " " +
        this.modle +
        " " +
        this.year +
        " " +
        "has " +
        this.getprice()
    );
  },
  // under the first curly braces are object
  // we put the object into the var
};

// . --> property access operator

car.printdesc();
console.log(car.year);

// to access a property array element can be used
console.log(car["year"]);
// this doesnt work
console.log(car[2]);

// another way to declare and print object

let testcar = {};
testcar.carmake = "toyota";
console.log(testcar.carmake);

// merge multiple objects together

let a = {
  property: {
    b: {
      c: "test test",
    },
  },
};

console.log(a.property.b.c);

// array of objects
// known as a graph of objects

let carlot = [
  { year: 2016, make: "benz", model: "s-class" },
  { year: 2016, make: "bmw", model: "320i" },
  { year: 2016, make: "toyota", model: "crown" },
];

// it can be iterated and print

for (let i = 0; i < carlot.length; i++) {
  console.log(carlot[i]);
}

// system that can contain the data of employees

let contact = {
  employees: [{ firstname: "test", contact: ["0001", "0002"] }],
  customers: [{ firstname: "dontknow", contact: ["0003", "0005"] }],
};

// it can be iterated using loop
//console.log(contact.customers[0]);

for (let i = 0; i < contact.customers.length; i++) {
  console.log(contact.customers[i]);
}
