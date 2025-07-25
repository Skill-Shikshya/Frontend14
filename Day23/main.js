let elementName = document.getElementById("name");
let paraClass = document.getElementsByClassName("p1");
let paraTag = document.querySelector(".p1");
let paraTagAll = document.querySelectorAll(".p1");

console.log(elementName);
console.log(paraClass);
console.log(paraTag);
console.log(paraTagAll);
let newpara = "<p class='p1'>This is new paragraph</p>";
document.body.innerHTML += newpara;
console.log("this is updated by className", paraClass);
console.log("this is updated by querySelector", paraTagAll);
console.log(elementName.textContent);

document.getElementById("name").addEventListener("click", () => {
  console.log("Element clicked! " + elementName.textContent);
  elementName.textContent = "This is updated by querySelector";
});

console.log(document.getElementById("inputField").value);

// document.getElementById("inputField").addEventListener("click", () => {
//   alert
// });

// Callback function example
function printText(callback) {
  let element = document.getElementById("name");
  console.log(element.textContent);
  callback(element);
  console.log("print after callback!");
}

function updateText(ele) {
  ele.textContent = "This is updated by callback function";
  console.log(ele.textContent);
}

printText(updateText);
