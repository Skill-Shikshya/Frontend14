//CallBackFn(hiFn);
// newFn(); //ERROR

function CallBackFn(callback) {
  console.log("Hi there");
  callback(byeFn); //this is callback inside callback
}

function hiFn(callback) {
  console.log("this is HiFn");
  callback(); //this will call bye fn
}

function byeFn() {
  console.log("this is byeFn");
}

let newFn = function () {
  console.log("this is newFn");
};

//newFn(); //Success

//Promise Starts

let newPromise = new Promise((res, rej) => {
  let x = true;
  if (x) {
    res("this has successfully resolved");
  } else {
    rej("this is rejected");
  }
});

newPromise
  .then((e) => {
    console.log("inside then " + e);
    return e;
  })
  .then((e) => {
    console.log("this is second fn", e);
    return e;
  })
  .catch((e) => console.log("catch", e))
  .finally(() => console.log("this is finally "));
