import { person } from "./dans.js";

function displayName({
  firstName,
  lastName,
  twitter,
  company,
  cars,
  phoneNumber,
  isPossibleToContact,
}) {
  const nameTag = document.createElement("h2");
  const twitterTag = document.createElement("h5");
  const companyTag = document.createElement("h5");
  const phoneNumberTag = document.createElement("p");
  const profileContainer = document.createElement("div");

  nameTag.innerText = `${firstName} ${lastName}`;
  twitterTag.innerText = `${twitter}`;
  companyTag.innerText = `${company}`;
  phoneNumberTag.innerText = `${phoneNumber}`;
  return [nameTag, twitterTag, companyTag, phoneNumberTag];
}

const body = document.getElementsByName("body");
const profileElements = displayName(person);

for (const element of profileElements) {
  document.body.appendChild(element);
}
