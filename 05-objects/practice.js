// Day 5 - Practice
// objects + destructuring + spread

// Q1 - create an object for a book with title, author, year
let book = {
  title: "JS Basics",
  author: "some author",
  year: 2024,
};
console.log(book);

// Q2 - add a new property "genre" to the book
book.genre = "programming";
console.log(book);

// Q3 - loop through the book object and print all key-value pairs
for (let key in book) {
  console.log(key, ":", book[key]);
}

// Q4 - get all keys and values as separate arrays
console.log(Object.keys(book));
console.log(Object.values(book));

// Q5 - destructure title and author out of the book object
let { title, author } = book;
console.log(title, author);

// Q6 - object with a method that uses "this"
let rectangle = {
  width: 10,
  height: 5,
  area() {
    return this.width * this.height;
  },
};
console.log(rectangle.area());

// Q7 - nested object, access a deeply nested value
let company = {
  name: "TechCorp",
  address: {
    city: "Pune",
    building: {
      floor: 3,
    },
  },
};
console.log(company.address.building.floor);

// Q8 - destructure a nested value directly
let {
  address: {
    building: { floor },
  },
} = company;
console.log("destructured floor:", floor);

// Q9 - merge two objects using spread, second one should override duplicate keys
let defaults = { theme: "light", fontSize: 14 };
let userPrefs = { fontSize: 18 };
let finalSettings = { ...defaults, ...userPrefs };
console.log(finalSettings); // fontSize should be 18, theme stays light

// Q10 - copy an array and object properly (not just referencing)
let arr = [1, 2, 3];
let arrCopy = [...arr];
arrCopy.push(4);
console.log(arr, arrCopy);

let objOriginal = { x: 10 };
let objCopy = { ...objOriginal };
objCopy.x = 999;
console.log(objOriginal, objCopy);

// Q11 - function using object destructuring as parameters
function printCar({ brand, model }) {
  console.log(`${brand} ${model}`);
}
printCar({ brand: "Toyota", model: "Corolla", year: 2022 }); // year gets ignored, thats fine

// Q12 - array destructuring with rest to separate first item from the rest
let scores = [100, 80, 90, 70];
let [topScore, ...otherScores] = scores;
console.log("top:", topScore, "others:", otherScores);