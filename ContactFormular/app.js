const firstName = document.getElementById("fName");
const lastName = document.getElementById("lName");
const email = document.getElementById("mail");
const profession = document.getElementById("position");
const passwort = document.getElementById("pw");
const passwortRepeat = document.getElementById("re-pw");
const submitPerson = document.getElementById("submitButton");

//const profiles =

//async function getProfiles() {
  //const response = await fetch("http://localhost:8081/getprofiles");
  //console.log(response);
//}
//getProfiles();


cards.forEach((card) => {
  const cardContainer = document.createElement("div");
  cardContainer.innerHTML = `
        <div>${card.firstName} ${card.lastName}</div>
        <div>email: ${card.email}</div>
        <div>company: ${card.email}</div>
        <div>profession:${card.profession}</div>
        `;

  document.body.append(cardContainer);
});

function submitButton('click', submitButton) {
    document.getElementById('click')
}
