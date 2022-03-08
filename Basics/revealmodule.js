let counter = (function () {
  let count = 0;

  function print(message) {
    console.log(`${message}  ${count}`);
  }
  function getcount() {
    return count;
  }

  function setcount(value) {
    count = value;
  }

  function increment() {
    count = count + 1;
    print("After increment : ");
  }
  function resetcount() {
    print("Before reset ");
    count = 0;
    print("After reset ");
  }

  // revealing the function by including them as a property

  return {
    get: getcount,
    set: setcount,
    inc: increment,
    reset: resetcount,
  };
})();

counter.set(2);
counter.get();
counter.inc();
counter.reset();
