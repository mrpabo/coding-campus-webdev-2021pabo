// Variables for showing values
const dateElement = document.getElementById("date");
const temperaturElement = document.getElementById("temperatur");
const cityElement = document.getElementById("city");
const countryElement = document.getElementById("country");
const windStatusElement = document.getElementById("wind-status");
const visibilityElement = document.getElementById("visibility");
const humidityElement = document.getElementById("humidity");
const airPressureElement = document.getElementById("air-pressure");
const mymodal = document.getElementById("myModal");

//document.addEventListener("click");

// fetch API um Wetterdaten zu bekommen -> Übergabe der Werte an HTML
async function getApiFetch() {
  const searching = document.getElementById("suche").value;
  console.log(suche);
  
  
  
  let response = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?lat=47.2340146&lon=9.5894645&appid=a7c436a1d85945dc4d344a61d53ee68a&units=metric&lang=DE&date=DY-MTH-DT-YR&humidity=%&visibility=meter`
  );
  let data = await response.json();
  console.log(data);
  countryElement.innerHTML = data.name;
  windStatusElement.innerHTML = data.wind.speed;
  visibilityElement.innerHTML = data.visibility;
  humidityElement.innerHTML = data.main.humidity;
  airPressureElement.innerHTML = data.main.pressure;
}/*
function submitAtitude(event) {
  event.preventDefault();
  getApiFetch();
}
// Modals
function openModal() {
  mymodal.style.display = "block";
}
function closeModal() {
  mymodal.style.display = "none";
}


function callBackgroundPhoto(city) {
  fetch(
    `https://api.unsplash.com/search/photos?query=${city}&client_id=EBVfN-qtv30SVCbrwtSX0jXShdTWFQNItAP1h48eFNI&orientation=landscape`
  )
    .then((response) => response.json())
    .then((unplashData) => insertBackgroundPhoto(unplashData.results));
}
function insertBackgroundPhoto(results) {
  const URLPhoto = results[0].urls.regular;
  console.log(URLPhoto);
  document.main.style.setProperty("background-image", `url("${URLPhoto}")`);
}
*/
  
