let a = [1, 2, 3, 4, 5];
let str = ["a", "b", "test"];
console.log(a[0]);
console.log(str[2]);
console.log(a);
console.log(str);

// node can store multiple datatypes

let list = [1, "a", true];
console.log(list);

// check the lenght of array

console.log(str.length);

// add the element at the end of array

a.push(88);
console.log(a);

// remove the last element of array
a.pop(a[5]);

// array.pop() in general will remove the last element
a.pop();
console.log(a);
