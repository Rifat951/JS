/* let name = 'bob';
console.log(`hi ${name}`);

let setance = `asddddddddddddd
     asdasssssssssss.
     asdasddddddddddddd`;

console.log(setance);
 */


function getReasonCount(){
    return 1;
}

let interpolation = `Give me ${(getReasonCount() == 1)?'one good reason' : 'a few reasons'} to try this`;

console.log(interpolation);