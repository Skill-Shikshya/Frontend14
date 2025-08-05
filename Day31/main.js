console.log("This is Recursion");

function SelfCallingFn(n) {
  if (n < 1) {
    return 1;
  }
  console.log(n);
  return SelfCallingFn(n - 1);
}
debugger;
let x = SelfCallingFn(5);
console.log("this is x: ", x);

function storeThisinLocal(name, value) {
  localStorage.setItem(name, JSON.stringify(value));
  console.log("this value has been saved in the localStorage");
}

storeThisinLocal("key", "value");
storeThisinLocal("name", "Ram");
storeThisinLocal("intro", { name: "Ram", age: "11" });

function storeThisinSession(name, value) {
  sessionStorage.setItem(name, value);
  console.log("this value has been saved in the sessionStorage");
}

storeThisinSession("name", "Sita");

console.log(localStorage.getItem("key"));
