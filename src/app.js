function displayTemperature(response) {
let temperatureElement = documnet.querySelector("#temperature");
temperatureElement.innerHTML = Math.round (response.data.main.temp);
cityElement.innerHTML = response.data.name;
  
}



let apiKey = "b9338fa434bf42227o1029bt48f71d21";
let apiUrl = "https://api.shecodes.io/weather/v1/current?query=Lisbon&key=b9338fa434bf42227o1029bt48f71d21&units=metric";



axios.get(apiUrl).then(displayTemperature);