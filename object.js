// membuat Object
let person1 = {
  name: "Skilvul",
  age: 1,
  isVerified: true,
};

const person2 = {
  name: "Impact Byte",
  age: 3,
  isVerified: true,
};

// membuat Object 2
let car = {
  color: ["merah", "jingga", "kuning"],
  engine: undefined,
  // jika ingin memberikan nilai key ada spasi
  "total ban": 4,
};
console.log(car);
// panggil variable di dalam property
console.log(car.color);
// panggil varable dengan bracket notation
// console.log(car.total ban) // tidak bisa
// cara benar untuk panggil variable dengan key ada spasinya
console.log(car["total ban"]);

// updating object

let car = {
  color: ["merah", "jingga", "kuning"],
  engine: undefined,
  // jika ingin memberikan nilai key ada spasi
  "total ban": 4,
};
console.log(car);
car.engine = "5000cc";
console.log(car);

car.plat = "b 1234 abc";
console.log(car);
// di object masih bisa update nilai/value dengan const

// jika menggunakan const tidak bisa merombak seluruh value
car = {
  velg: "17 inch",
};

console.log(car);
