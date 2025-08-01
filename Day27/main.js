// class Dog {
//   constructor(callback) {
//     console.log("this ran");
//     callback();
//   }

//   then(callback) {
//     callback();
//   }

//   catch(callback) {
//     callback();
//   }
// }

// let tommy = new Dog(() => {
//   console.log("this is from the callback!");
// });

// tommy.then((e) => console.log("hello this is from dog then"));
// tommy.catch(() => console.log("this is catch"));

let newPromise = new Promise((a, reject) => {
  let c = false;
  //setTimeout(()=>{}, 1000);
  setTimeout(() => {
    if (c) {
      a("this has resolved!");
    } else {
      reject("this has been rejected");
    }
  }, 2000);
});

newPromise
  .then((r) => {
    return new Promise((res) =>
      setTimeout(() => {
        console.log("this is from first");
        res("First resolved");
      }, 2000)
    );
  })
  .then((g) => {
    return new Promise((res) =>
      setTimeout(() => {
        console.log("this is from second");
        res("First resolved");
      }, 2000)
    );
  })
  .catch((p) => console.log("this is catch: ", p))
  .finally(() =>
    setTimeout(() => {
      console.log("this is from finally!");
    }, 2000)
  );

//async await

function timer(time = 2000, name) {
  return new Promise((res) =>
    setTimeout(() => {
      console.log("this is from:", name);
      res("First resolved");
    }, time)
  );
}

async function callSomething() {
  try {
    let first = await newPromise;
    if (!first.ok) {
      throw new Error("this has errored");
    }
    console.log("inside async fn:", first);

    await timer(2000, "this second inside callSmething");
    console.log("timer called");
  } catch (e) {
    console.log("catched inside the callSomething: ", e);
  }
}

callSomething();

setTimeout(() => console.log("this has to run first outside"), 100);

console.log("this is second");
