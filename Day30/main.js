console.log("this is Day 30");

function OutterFn() {
  let count = 1;

  return function InnerFn() {
    count++;
    console.log(count);
  };
}

function erasedFn() {
  let counting = 1;
  console.log("this is counting", counting);
}

let CallFn = OutterFn();
debugger;
erasedFn();
CallFn();
CallFn();
CallFn();
erasedFn();
