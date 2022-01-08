 let a, b, c, d, e;

 let name = ['acas', 'asdas', 'qweqw', 'qaxza', 'neko'];

/*  [b,c,a,d,e] = name;

console.log(a);
 */


let others;
// make sure it has 3 dots
[a, b, ...others] = name;

console.log(a);
console.log(b);

// we put a/b separately and others in an array
console.log(others);



// instead of calling with object, we can call it directly with variables

let year, model;
({make, year, model} = {
    make : 'none',
    model : 'who knows',
    year : 'unknown'
});

console.log(make +' '+year+' '+model);
