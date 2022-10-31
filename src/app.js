function displayTemperature(response) {
  console.log(response.data);
let temperatureElement = document.querySelector("#temperature");
let cityElement = document.querySelector("#city");
let descriptionElement = document.querySelector("#description");
temperatureElement.innerHTML = Math.round(response.data.main.temp);
cityElement.innerHTML = response.data.name;
descriptionElement.innerHTML = response.data.weather[0].description;
  
}



let apiKey = "b9338fa434bf42227o1029bt48f71d21";
let apiUrl = "https://api.shecodes.io/weather/v1/current?query=Lisbon&key=b9338fa434bf42227o1029bt48f71d21&units=metric";



axios.get(apiUrl).then(displayTemperature);

