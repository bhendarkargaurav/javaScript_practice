//Array and Object

//basic array;
const arr = [1, 2, 3, 4, 5];

//basic array methods:
// arr.push(6); //add
// arr.pop(); //remove
// arr.map(n => n*2);
// arr.filter(n => n%2==0)


const colour= ["red", "blue", "pink"];
const [first, second] = colour;
console.log(first);
console.log(second);


// Spreed Operatot(...);
// e.g
const arr1 = [1, 2, 3];
const arr2 = [...arr1];
console.log(arr1);
console.log(arr2);

arr2.push(4);
console.log(arr2);


//add new elements
const elements = [2, 3, 4];
const newElement = [1, ...elements, 5];
console.log(newElement);


//merge element;
const frountend = ["HTML", "CSS"];
const backend = ["Node", "mongo"];
const fullstack = [...frountend, ...backend];
console.log(fullstack);



//Home work

const users = [
  { id: 1, name: "Gaurav", age: 24 },
  { id: 2, name: "Ankit", age: 22 },
  { id: 3, name: "Rahul", age: 26 },
];

//Create a new array with { name, age } only

const nameageList = users.map(({name, age}) => ({
    name, 
    age
}));
console.log(nameageList);


// increase age by 1

const updatesage = users.map(user => ({
    ...user,
    age: user.age+1
}))
console.log(updatesage)



// find user by ankit name
const ankitName = users.find(user => user.name === "Ankit");
console.log(ankitName);