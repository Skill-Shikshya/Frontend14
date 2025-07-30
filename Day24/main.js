function changeText() {
  console.log("This is inside changeText function");
  let helloVar = document.getElementById("hello");
  helloVar.style.color = "blue";
  console.log("inside a function", helloVar);
}

document.addEventListener("DOMContentLoaded", () => {
  let helloVar = document.getElementById("hello").textContent;
  console.log("inside", helloVar);
  console.log("DOM fully loaded and parsed");
});

console.log("outside", document.getElementById("hello"));
console.log("This is outside the DOMContentLoaded event");

document.getElementById("hello").addEventListener("click", (e) => {
  //   e.target.style.color = "green";
  e.target.classList.add("active");
});
