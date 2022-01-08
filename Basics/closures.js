// pass by reference

function ello(name){
    return function(){
        console.log('hello ' + name);
    }
}

let neko = ello('neko');

neko();