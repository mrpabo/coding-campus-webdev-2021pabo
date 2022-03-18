const firstName = document.getElementById("firstName");
const age = document.getElementById("ageContainer");
const place = document.getElementById("country");

async function getAge() {
  const inputName = firstName.value;
  const inputCountry = place.value;
  const requestURL = `https://api.agify.io?name=${inputName}&country_id=${inputCountry}`;

  const response = await fetch(requestURL);
  const data = await response.json();
  age.innerText = data.age;
}
