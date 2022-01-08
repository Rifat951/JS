

let pattern = /xyz/;
 
console.log(pattern);
console.log(typeof pattern);


let val = 'This is xyz test';

console.log(pattern.test(val));



console.log(val.replace(pattern, 'just replace'));


console.log(val.match(pattern));

let mathcpattern = val.match(pattern);
console.log(mathcpattern.index);
console.log(val.match(pattern).index); // both of these have the same results

// search zip code regex in the search engine