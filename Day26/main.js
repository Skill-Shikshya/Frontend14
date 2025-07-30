function CreateElement(type, content, id = "") {
  let elemt = document.createElement(type);
  elemt.textContent = content;
  elemt.className = "hello";
  if (id != "") {
    elemt.id = id;
  }
  document.body.appendChild(elemt);
}

CreateElement("h1", "Hello H1 from JS");
CreateElement("div", "Hello div from JS");
CreateElement("p", "Hello p from JS", "ptag");
CreateElement("h6", "Hello H6 from JS");

console.log("this is p", document.getElementById("ptag"));
console.log("this is all hello", document.querySelectorAll("#ptag"));

// document.getElementById("ptag").style.color = "blue";
//add the className with js
document.getElementById("ptag").classList.add("active");

function run() {
  document.getElementById("p2tag").style.backgroundColor = "red";
}

document.getElementById("p3tag").addEventListener("click", (e) => {
  console.log("Event", e);
  console.log("Target", e.target);
  e.target.style.color = "pink";
  e.target.classList.remove("hello");
  e.target.classList.add("bye");
});
