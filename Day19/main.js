class Person {
  constructor(name, age) {
    console.log("Hi I am being created!");
    this.name = name;
    this.age = age;
  }

  run() {
    console.log("I am running");
  }

  eat() {
    console.log("I eat");
  }
}

class arr extends Array {
  constructor(name, age, eyeColor) {
    super(name, age);
    this.eyeColor = eyeColor;
  }

  talk() {
    console.log("I talk");
  }
}

let me = new Bibek("bibek", 1);
me.run = function () {
  console.log("this is different running!");
};
me.run();
me.eat();
me.talk();
