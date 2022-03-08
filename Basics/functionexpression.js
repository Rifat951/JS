//functions can take functions as input parameters

setTimeout(function () {
  console.log("waited 2 seconds");
}, 2000);

//invoke functons directly just bu using parenthesis

(function output() {
  console.log("Display the output ... ");
})(); // by putting () and using (); we can directly invoke it

//invoke functions by using timeouts
let counter = 0;

function test() {
  setTimeout(function () {
    console.log("Test timeout ... " + counter++);
    //recursive call
    test();
  }, 2000);
}

test();

//prese crtl + c to break the loop
