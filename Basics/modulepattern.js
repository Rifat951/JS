//var stands for global varibale
// let works more like a local variable

var obj = (function () {
  let count = 0;

  function printmsg(message) {
    console.log(message + count);
  }

  return {
    // val : count, // not clear over here
    // // it might return the number of count ?

    set: function (value) {
      count = value;
    },

    get: function () {
      return count;
    },

    increment: function () {
      count = count + 1;
      printmsg("After increment.. ");
    },
    // val returns the count and increment

    //do a reset function

    reset: function () {
      printmsg("Before Reset : ");
      count = 0;
      printmsg("After Reset  : ");
    },
  };
})();

// obj.increment();
// obj.increment();

// obj.reset();

obj.set(2);
obj.increment();
console.log(obj.get());
obj.reset();
