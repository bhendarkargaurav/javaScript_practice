// array methods:
// Map, filter, reduce

const users = [
    {id: 1, name: "Gaurav", active: true, salary: 50000 },
    {id: 2, name: "Ankit", active: false, salary: 70000},
    {id: 3, name: "Amrut", active: true, salary: 40000}
];

// filter active user
const activeUsers = users.filter(user => user.active);
console.log(activeUsers);


// claculate total salary (All Users)

const totalSalary = users.reduce((total, user) => total + user.salary, 0);
console.log(totalSalary);


// total salaruy of active users
const activeSalaryTotal = users
  .filter(user => user.active)
  .reduce((total, user) => total + user.salary, 0);

  console.log(activeSalaryTotal);



  // add field Using map();

  const updatedUser = users.map(user => ({
    ...user,
    isHighEarner: user.salary > 45000,
  }));

  console.log(updatedUser);