//Q.1 Count the occurrences.

console.log("Question:1");

let input = "Hello! How are you doing bro.";

const wordCount = () => {
   const words = input.split(" ");

   const wordsCount = new Map();

   for (let word of words) {
      const count = wordsCount.get(word) || 0;
      wordsCount.set(word, count + 1);
   }
   return wordsCount;
};

let result = wordCount(input);

for (let [word, count] of result) {
   console.log(word + "-->" + count);
}

// //+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// Q.2 Only unique items are allowed.
console.log(`\n`);
console.log("Question:2");

const removeDuplicate = () => {
   const newSet = new Set(inputTwo);
   return newSet;
};

let inputTwo = [1, 2, 3, 9, 9, 8, 7, 5, 2, 1, 2, 4, 5, 6, 7, 8];

const uniqueElement = removeDuplicate(inputTwo);
console.log(uniqueElement);

//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// Q.3 Swap the values.
console.log(`\n`);
console.log("Question:3");

const swapedValue = (x, y) => {
   [x, y] = [y, x];
   return [x, y];
};

const resultSwapValue = swapedValue((x = 20), (y = 50));

console.log(resultSwapValue);

//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// Q.4 Access random elements.
console.log(`\n`);
console.log("Question:4");

let myArrayOne = [1, 2, 3, 4, 5];
const accessRandomElement = () => {
   let [first, second, , , last] = myArrayOne;
   return [first, second, last];
};

const newArray = accessRandomElement(myArrayOne);

console.log(newArray);

//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// Q.5 Min and max values.
console.log(`\n`);
console.log("Question:5");

let myArrayFour = [5, 7, 54, 74, 2, 58, 4];

const findMaxMinNumber = () => {
   return { Max: Math.max(...myArrayFour), Min: Math.min(...myArrayFour) };
};

const resultMaxMin = findMaxMinNumber(myArrayFour);
console.log(resultMaxMin);


// Q.6 Nested Objects.
console.log(`\n`);
console.log("Question:6");

const person = {
   name: "Mithun",
   age: 21,
   address: {
      street: "BB, Block, Industrial Area",
      city: "Sector 62, Noida",
      state: "Utter Pradesh",
   },
};

const extractData = () => {
   const {
      name,
      address: { street },
   } = person;
   return { Name: name, Street: street };
};

const resultPersoneData = extractData();

console.log(resultPersoneData);
