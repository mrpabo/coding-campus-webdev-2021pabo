const OPEN_WEATHER_KEY = "d5b8696de25e060dded642380e8d4b39";
const LAT = "37.671700";
const LONG = "-122.124000";
const UNSPLASH_ACCESS_KEY = "bwwP1GmmieMG4eyJGOFXiR7jAJoHxZ4BRhyuanIgmzM";
const UNSPLASH_SECRET_KEY = "wSy-3avveF8q8waJCJU51gYpxhWTKGBts8hsnHsMOqw";

// fetch calls
async function getLatLong(location) {
  const CITYNAME = location ? location : "Bürs";
  try {
    const resCity = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${CITYNAME}&appid=${OPEN_WEATHER_KEY}`
    );
    const { coord } = await resCity.json();

    getWeatherData(coord.lat, coord.lon);
    getBackgroundImage(CITYNAME);
  } catch (error) {
    console.log("error has occured on long lat api", error);
  }
}
async function getWeatherData(lat, long) {
  try {
    const res = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=${OPEN_WEATHER_KEY}&units=metric`
    );
    const data = await res.json();
    insertDataInDom(data);
  } catch (error) {
    console.log("Error has occured on weather data API call", error);
  }
}

async function getBackgroundImage(location) {
  const CITYNAME = location ? location : "Bürs";
  try {
    const res = await fetch(
      `https://api.unsplash.com/search/photos?query=${CITYNAME}&client_id=${UNSPLASH_ACCESS_KEY}`
    );
    const data = await res.json();
    const { results } = data;
    const photoURL = results[0].urls.raw;
    document.getElementById(
      "widget"
    ).style.backgroundImage = `url(${photoURL})`;
    console.log(photoURL);
  } catch (error) {
    console.log("Error has occured on API call", error);
  }
}

//DOM Logic

function insertDataInDom({ main, name, sys, weather, wind, visibility }) {
  console.log(name);
  const dateElement = document.getElementById("date");
  const cityElement = document.getElementById("city");
  const countryElement = document.getElementById("country");
  const tempElement = document.getElementById("temp");
  const statusElement = document.getElementById("status");
  const highAndLowElement = document.getElementById("highAndLow");
  const windElement = document.getElementById("wind");
  const visibilityElement = document.getElementById("visibility");
  const humidityElement = document.getElementById("humidity");
  const pressureElement = document.getElementById("pressure");
  cityElement.innerText = name;
  const today = new Date();
  const options = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  };
  dateElement.innerText = new Intl.DateTimeFormat("de-DE", options).format(
    today
  );

  countryElement.innerText = sys.country;

  tempElement.innerText = Math.trunc((main.temp));
  windElement.innerText = wind.speed;
  const lowerCaseDescription = weather[0].description;

  statusElement.innerText =
    lowerCaseDescription.charAt(0).toUpperCase() +
    lowerCaseDescription.slice(1);
  console.log("vs", visibilityElement);
  visibilityElement.innerText = visibility;
  humidityElement.innerText = main.humidity;
  highAndLowElement.innerText = `${Math.trunc(main.temp_max)}/${Math.trunc(
    main.temp_min
  )}`;

  pressureElement.innerText = main.pressure;
}
function getInputValue() {
  return document.getElementById("locationInput").value;
}
getLatLong();

getBackgroundImage();

function myFunction(a, b) {}
