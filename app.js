// const person = {
//   userName: "Bob",
//   age: 30,
//   favouriteColour: "Red",
//   sayHello: function (name) {
//     console.log(`Hello ${name}!`);
//   },
// };

// person.sayHello("Bruce");

// Returning Values

const person = {
  userName: "Bob",
  age: 30,
  favouriteColour: "Red",
  getAge: function () {
    return person.age;
  },
};

const age = person.getAge();

console.log(age);

const car = {
  make: "Toyota",
  model: "Yaris",
  colour: "White",
  advert: function () {
    return `This ${this.colour} ${this.make} ${this.model} could be yours!`;
  },
};

console.log(car.advert());

const book = {
  title: "The Secret History",
  author: "Donna Tartt",
  numberOfPages: "550 pages",
  advert: function () {
    return `This book is called ${this.title} by ${this.author} and is ${this.numberOfPages} long!`;
  },
};

console.log(book.advert());
