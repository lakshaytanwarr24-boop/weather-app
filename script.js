function getWeather() {
  const city = document.getElementById("city").value;
  const apiKey = "82c9607994c09bf765b0e8bf3c79f9b1";
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
