// const personBio = {
//   name: "Muhammadziyo",
//   surname: "Bahodirjonov",
//   dateOfBirth: "2008.31.05",
//   country: "Uzbekistan",
// };

// function hello(obj) {
//   console.log(`Salom! Mening ismim ${personBio.name}`);
// }

// hello(personBio);

// Homework

// Quyidagi massivdagi barcha odamlarni yoshlarining o’rtacha qiymatini chiqaruvchi getAverageAge(arr) nomli funksiya yozing.

// Input: const people = [
//   { name: "Abdulaziz", age: 33 },
//   { name: "Erkin", age: 22 },
//   { name: "Temur", age: 34 },
//   { name: "Sardor", age: 20 },
// ];
// Output: 27.25

// 4

function getAverageAge(arr) {
  let ages = 0;
  for (let i = 0; i < arr.length; i++) {
    ages += arr[i].age;
  }
  return ages / arr.length;
}

const people = [
  { name: "Abdulaziz", age: 33 },
  { name: "Erkin", age: 22 },
  { name: "Temur", age: 34 },
  { name: "Sardor", age: 20 },
];

console.log(getAverageAge(people));

// Massiv ichidagi har bir objectga isMarried nomli property qo’shilsin. Agar object yoshi 25 dan kichi bo’lsa isMarried ga false, aks holda true qiymat o’zlashtirilsin.

// 	Output: [
//   { name: "Abdulaziz", age: 33, isMarried: true},
//   { name: "Erkin", age: 22, isMarried: false },
//   { name: "Temur", age: 34, isMarried: true },
//   { name: "Sardor", age: 20, isMarried: false },
// ];

function getAverageAgeMarried(arr, age) {
  const obj = [];
  for (let i = 0; i < arr.length; i++) {
    arr[i].age > age ? (arr[i].isMarried = true) : (arr[i].isMarried = false);
    obj.push(arr[i]);
  }
  return obj;
}

const people2 = [
  { name: "Abdulaziz", age: 33 },
  { name: "Erkin", age: 22 },
  { name: "Temur", age: 34 },
  { name: "Sardor", age: 20 },
];

console.log(getAverageAgeMarried(people2, 25));

// Quyidagi objectlardan tuzilgan massiv ichidagi yoshi eng katta va yoshi eng kichik bo’lgan insonning ismlarini qaytaruvchi getNameMaxMinAge(arr) nomli funksiya yozing. (for)
// Output: ["Temur", "Sardor"]

function getNameMaxMinAge(arr) {
  let minAge = arr[0].age;
  let maxAge = arr[0].age;

  for (let i = 1; i < arr.length; i++) {
    if (arr[i].age < minAge) {
      minAge = arr[i].age;
    }
    if (arr[i].age > maxAge) {
      maxAge = arr[i].age;
    }
  }

  return [maxAge, minAge];
}

const people3 = [
  { name: "Abdulaziz", age: 33 },
  { name: "Erkin", age: 22 },
  { name: "Temur", age: 34 },
  { name: "Sardor", age: 20 },
];

console.log(getNameMaxMinAge(people3));

// Objectda turli xil kalitlar bir xil qiymatlarga ega, kalitlari o'sha qiymatlardan iborat shunday object tuzingki, bu objectning qiymatlari massiv ko'rinishidagi eski objectning kalitlarlaridan iborat bo'lsin.

// Input: {1: 20, 2: 30, 3: 20, 4: 40, 5: 30, 6: 50, 7: 40, 8: 20}
// Output: {20: [1, 3, 8], 30: [2, 5], 40: [4, 7]: 50: [6]}

const input = { 1: 20, 2: 30, 3: 20, 4: 40, 5: 30, 6: 50, 7: 40, 8: 20 };
const output = {};

for (let key in input) {
  const qiymat = input[key];
  if (!output[qiymat]) {
    output[qiymat] = [];
  }
  output[qiymat].push(Number(key));
}

console.log(output);

// Ikkita object berilgan ularning ba'zi kalitlari bir xil. Bir xil kalitlaridan iborat bo'lmagan yangi object hosil qiling.

// Input: obj1 = { a: 3, b: 10, c: 5, d: 7 };
// obj2 = { a: 10, d: 4, e: 6, f: 15 };
// Output: obj = {b: 10, c: 5, e: 6, f: 15};

const obj1 = { a: 3, b: 10, c: 5, d: 7 };
const obj2 = { a: 10, d: 4, e: 6, f: 15 };
const obj = {};

for (let key in obj1) {
  if (!(key in obj2)) {
    obj[key] = obj1[key];
  }
}

for (let key in obj2) {
  if (!(key in obj1)) {
    obj[key] = obj2[key];
  }
}

console.log(obj);

// Quyidagi objectni outputdagi ko'rinishda chiqaring. (toString, join)

// Input:
// const me = {
//   firstName: "Abdulaziz",
//   lastName: "Toshpulatov",
//   age: 23,
//   languages: ["js", "python", "c++", "nodejs"],
//   friends: ["Jamshid", "Abbos", "Jalol", "Mar'uf"],
// };
// Output:
// firstName: Abdulaziz
// lastName: Toshpulatov
// age: 23
// languages: js,python,c++,nodejs
// friends: Jamshid+Abbos+Jalol+Mar'uf

const me = {
  firstName: "Abdulaziz",
  lastName: "Toshpulatov",
  age: 23,
  languages: ["js", "python", "c++", "nodejs"],
  friends: ["Jamshid", "Abbos", "Jalol", "Mar'uf"],
};

console.log(`firstName: ${me.firstName}`);
console.log(`lastName: ${me.lastName}`);
console.log(`age: ${me.age}`);
console.log(`languages: ${me.languages.join(",")}`);
console.log(`friends: ${me.friends.join("+")}`);

// Kalitlari 1 dan n gacha bo’lganlar sonlarga, qiymatlari esa o’sha sonlarning kvatratiga teng object hosil qiling. (for)

// Input: 5
// Output: {1: 1, 2: 4, 3: 9, 4: 16, 5: 25}

const n = 5;
const daraja = {};

for (let i = 1; i <= n; i++) {
  daraja[i] = i * i;
}

console.log(daraja);

// 2-misoldan hosil bo’lgan objectning kalitlari va qiymatlari yig’indisini toping. (Object.keys(), Object.values())
const n2 = 5;
const daraja2 = {};

for (let i = 1; i <= n2; i++) {
  daraja[i] = i * i;
}

const obj3 = { 1: 1, 2: 4, 3: 9, 4: 16, 5: 25 };
const keysSum = Object.keys(obj3).reduce((sum, key) => sum + Number(key), 0);
const valuesSum = Object.values(obj3).reduce((sum, value) => sum + value, 0);
const totalSum = keysSum + valuesSum;

console.log(totalSum);

// Stringlar massivi berilgan. Shunday object hosil qilingki, o’sha objectning kalitlari massiv elementlaridan va qiymatlari esa ularning uzunligidan iborat bo’lsin. (for)

const strings = ["Abdulaziz", "Safarmurod", "O’rol", "Jahongir"];
const uzunlik = {};

for (let str of strings) {
  uzunlik[str] = str.length;
}

console.log(uzunlik);

// Shunday object berilganki, uning kalitlari mahsulotlardan va qiymatlari esa ularning narxlaridan tuzilgan. Barcha mahsulot qancha turishini toping. (Object.values())

// Input: {"Apelsin": 10000, "Olma": 12000, "Mandarin": 8000, "Banan": 20000}
// Output: 50000

const maxsulotlar = {
  Apelsin: 10000,
  Olma: 12000,
  Mandarin: 8000,
  Banan: 20000,
};
let jamiNarx = 0;

for (let key in maxsulotlar) {
  jamiNarx += maxsulotlar[key];
}

console.log(jamiNarx);
