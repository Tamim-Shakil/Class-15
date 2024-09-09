//***************************************Question 01***********************************
let X = 20;
let Y = 10;

if (X > Y) {
  console.log("Maxnumber = X");
} else {
  console.log("Maxnumber = Y");
}

//**************************************Question 02************************************
let checkNumber1 = 1;
let checkNumber2 = -1;
let checkNumber = 0;
if (checkNumber1 > 0) {
  console.log("The number is positive.");
} else if (checkNumber2 < 0) {
  console.log("The number is negative.");
} else {
  console.log("The number is zero.");
}

//****************************************Question 03**********************************
let num = 50;
if (num % 10 === 0) {
  console.log("The number is divisible by 10.");
} else {
  console.log("The number is not divisible by 10.");
}

//*****************************************Question 04*********************************
let number = 40;
if (number % 2 === 0) {
  console.log("The number is even.");
} else {
  console.log("The number is odd");
}

//******************************************Question 05********************************
let isAlphabet = "a";
let uppercaseChar = isAlphabet.toUpperCase();

if (uppercaseChar >= "A" && uppercaseChar <= "Z") {
  console.log("True");
} else {
  console.log("False");
}

//*******************************************Question 06*******************************
let temperature = 30;

if (temperature >= 30) {
  console.log("It's hot!");
} else if (temperature <= 25) {
  console.log("It's cold.");
} else {
  console.log("It's normal.");
}

//******************************************Question 07********************************
let num1 = 200;
let num2 = 2000;
let num3 = 100;

if (num1 > num2) {
  if (num1 > num3) {
    console.log("Number 1 is bigger");
  } else {
    console.log("Number 3 is bigger");
  }
} else {
  if (num2 > num3) {
    console.log("Number 2 is bigger");
  } else {
    console.log("Number 3 is bigger");
  }
}

//*****************************************Question 08*********************************
let x = 20;
if (x % 2 === 0) {
  console.log("Even Number");
} else {
  console.log("Odd Number");
}

//********************************************Question 09******************************
let numOne = 35;
let numTwo = 40;

if (numOne > 30 && numTwo > 30) {
  console.log("Both numOne and numTwo are greater than 30.");
} else {
  console.log("At least one of numOne and numTwo is not greater than 30.");
}

//**********************************************Question 10****************************
let age = 19;

if (age >= 13 && age <= 19) {
  console.log("Teenager");
} else {
  console.log("Not a teenager");
}

//*******************************************************ENDS****************************************************
