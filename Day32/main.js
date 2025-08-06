console.log("This is Day 32");

function SetCookie(name, value, daysToLive) {
  let date = new Date();
  date.setTime(date.getTime() + daysToLive * 24 * 60 * 60 * 1000);
  console.log(date.toUTCString());
  let keyValue =
    name + "=" + value + ";expires=" + date.toUTCString() + ";path=/";
  console.log(keyValue);
  document.cookie = keyValue;
}

// SetCookie("age", "11", 7);

function getCookie(name) {
  const cookieString = document.cookie;
  const cookies = cookieString.split("; ");

  for (let i = 0; i < cookies.length; i++) {
    const cookie = cookies[i];

    const [cookieName, cookieValue] = cookie.split("=");
    console.log("cookieName", cookieName);
    console.log("cookieValue", cookieValue);

    if (cookieName === name) {
      // Decode the URI component
      return decodeURIComponent(cookieValue);
    }
  }
  return null; // Return null if the cookie is not found
}
// const username = getCookie("age");
// console.log("decoded cookie value", username);

// let iter = {
//   count: 0,
//   next() {
//     return {
//       value: ++this.count,
//       done: this.count <= 3,
//     };
//   },
//   [Symbol.iterator]() {
//     return this;
//   },
// };

// console.log(iter.next());
// console.log(iter.next());
// console.log(iter.next());
// console.log(iter.next());

// let next = iter.next();
// while (next.done) {
//   console.log(next.value);
//   next = iter.next();
// }

// let arr = Array.from(iter);
// console.log(arr);

let iter = {
  count: 0,
  next() {
    return {
      value: ++this.count,
      // The condition should be `this.count > 3` to make the last call's done property true
      done: this.count > 3,
    };
  },
  [Symbol.iterator]() {
    return this;
  },
};

// for (const val of iter) {
//   console.log(val);
// }

function* Generator() {
  yield 1;
  yield 2;
  yield 3;
}

// let myGenerator = Generator();
// console.log(myGenerator.next());
// console.log(myGenerator.next());
// console.log(myGenerator.next());
// console.log(myGenerator.next());

let newSet = new Set([1, 6]);
newSet.add(2);
newSet.add(3);
console.log(newSet.size);

let newMap = new Map();

// Adding key-value pairs
newMap.set("name", "Alice");
newMap.set(1, "one");
newMap.set(1, "Two");
let objKey = { id: 123 };
newMap.set(objKey, "a specific object");
newMap.set({ id: 123 }, "THis is new Obj");
newMap;

console.log(newMap.get("name")); // Output: "Alice"
console.log(newMap.get(1)); // Output: "one"
console.log(newMap.has("name")); // Output: true
console.log(newMap.size); // Output: 3

// Iterating over the map
for (const [key, value] of newMap) {
  console.log(`${key}: ${value}`);
}
console.log(newMap.values());
console.log(newMap.keys());
// Output:
// name: Alice
// 1: one
// [object Object]: a specific object
