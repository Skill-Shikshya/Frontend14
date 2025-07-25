let Myname = [1, 9, 3, 4, 5];

Myname.forEach((e) => {
  console.log(e);
});

for (let i = 0; i <= 4; i = i + 1) {
  print(Myname[i]);
}

function print(i) {
  console.log("this is inside the function", i);
}
