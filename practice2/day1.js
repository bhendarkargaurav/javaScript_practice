// let vs const
let age = 25;
console.log("age is", age);
age = 26;
console.log("age2 is", age);
// we can reasign values in let;

const name = "Gaurav";
console.log("name is", name);
// name = "ankit";
// console.log("name2 is", name); //error

//but object properties can change in const
const user = {name: "Gaurav"};
user.name = "ankit";
console.log("name2 is", user.name);



//normal function vs arrow function:
//normal function
function multiple(a, b) {
    return a*b;
}
console.log(multiple(3, 2));


// arroe function
const add = (a,b) => (a+b);
console.log(add(4,5));


//Home work
function fullname(firstname, lastname){
    return firstname +" "+ lastname
}
console.log(fullname("Gaurav", "Bhendarkar"));

const fulname = (firstname, lastname) => (firstname + " " + lastname);
console.log(fulname("gaurav", "Bhendarkar"));