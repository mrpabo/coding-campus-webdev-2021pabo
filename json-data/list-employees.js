console.log("---Employees---");

const filesystem = require("fs");
const { off } = require("process");

const rawdata = filesystem.readFileSync("employees.json");
const employees = JSON.parse(rawdata);
console.log(employees);

for (const employee of employees) {
  const key = employee.key;
  const firstName = employee.firstName;
  const lastName = employee.lastName;
  console.log(`${key}-${firstName}${lastName}`);
}
