let x: number | string | string[]; // we can select datatype we OR

let y: 10 | 20 | "hi" = "hi"; // only these 3 values are allowed

let arr: number[] = [1, 2, 3];
 
let arr2: (number | string)[] = [12, 2, 3, "string"]; // this array will accept both the values number and string

let tuple: [string, number, boolean] = ["string", 1, false];

type UserObj = {
  name: string;
  age: number;
  college?: string;
};

type studentObj = {
  rollNumber: number;
};

type studentUser = UserObj & studentObj;

const student: studentUser = {
  name: "prince",
  rollNumber: 10,
  age: 22,
  college: "String",
};

const obj: {
  // this is type define inline , but what if we need two objects of this same types;
  name: string;
  age: number;
  college?: string;
} = {
  name: "Prince",
  age: 22,
};

const obj2: UserObj = {
  name: "Vasvi",
  age: 21,
};

function sum (x : number , y : number) : number {
  return x+y
}