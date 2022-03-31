//http://worldtimeapi.org
const time = document.getElementById("dateTime");

async function startApp() {
  const newtime = document.getElementById("dateTime");
  console.log(newtime);

  let response = await fetch(`http://worldtimeapi.org/api/ip`);
  let data = await response.json();
  console.log(data.datetime);

  const pElement = document.createElement("p");
  pElement.innerHTML = data.newtime;
  document.body.appendChild("dateTime");
}
startApp();
