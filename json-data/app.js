async function startApp() {
  console.log("--- Employee Management ---");
  const employees = await loadEmployeesAsync();
  renderEmployeeList(employees);
}
//Daten aus Inet laden
//await wenn async
async function loadEmployeesAsync() {
  const response = await fetch(
    "http://localhost:3000/employees"
  );
  const employees = await response.json();
  return employees;
}

function renderEmployeeList(employees) {
  const listElement = document.getElementById("list");
  for (const employee of employees) {
    const listItem = document.createElement("div");
    listItem.className = "list-item";
    listItem.addEventListener("click", () => renderDetail(employee));

    const keyItem = document.createElement("div");
    keyItem.className = "list-item-key";
    keyItem.innerText = employee.key;
    listItem.appendChild(keyItem);
    const nameItem = document.createElement("div");
    nameItem.className = "list-item-name";
    nameItem.innerText = `${employee.firstName} ${employee.lastName}`;
    listItem.appendChild(nameItem);

    listElement.appendChild(listItem);
  }
}

function renderDetail(employee) {
  document.getElementById("avatar").src = employee.image;
  document.getElementById("key").innerHTML = employee.key;
  document.getElementById(
    "name"
  ).innerHTML = `${employee.firstName} ${employee.lastName}`;
  const dateOfBirth = new Date(employee.dateOfBirth);
  document.getElementById("birthday").innerHTML =
    dateOfBirth.toLocaleDateString("de-AT", {
      day: "numeric",
      month: "long",
      year: "numeric",
    });
}

function createEmployee() {
  const firstName = document.getElementById("firstNameInput");
  const lastName = document.getElementById("lastNameInput");
  const key = document.getElementById("keyInput");
  const dateOfBirth = document.getElementById("dateOfBirthInput");

}