// store my age
let myAge = 40;

// early years with value of 2
let earlyYears = 2;

// early years multiplied by 10.
earlyYears *= 10.5;

// value myAge sub5tracting 2
let laterYears = myAge - 2;

// multiplying later years by 4
laterYears *= 4;

// adding early years with later years to get valure of age in dog years
let myAgeInDogYears = earlyYears + laterYears;

const myName = 'David'.toLowerCase();

// Writing a sentence with string interpolation to explain how old I am in dog years
console.log(`My name is ${myName}. I am ${myAge} years old in human years which is ${myAgeInDogYears} years old in dog years.`);
