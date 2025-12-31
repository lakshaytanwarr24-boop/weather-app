function getWeather() {
  const city = document.getElementById("city").value;
  const apiKey = "YOUR_API_KEY";
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`;

  fetch(url)
    .then(response => response.json())
    .then(data => {
      document.getElementById("result").innerHTML =
        `<h3>${data.name}</h3>
         <p>Temperature: ${data.main.temp}°C</p>
         <p>Weather: ${data.weather[0].main}</p>`;
    });
}
