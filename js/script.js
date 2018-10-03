let currentWeatherBtn = document.getElementById('currentWeatherBtn');
let fiveDaysWeatherBtn = document.getElementById('fiveDaysWeatherBtn');

function current() {
  let request = new XMLHttpRequest();
  let cityNameInput = document.getElementById('cityNameInput').value;
  let city = cityNameInput;
  console.log(city);
  let weatherUrl =
    'https://api.openweathermap.org/data/2.5/weather?q=' +
    city +
    '&units=metric&appid=672e93b94fcef6c0d2365b6ee1fe7e99';

  request.open('GET', weatherUrl, true);

  request.onload = function() {
    let data = JSON.parse(request.responseText);
    let icon =
      'https://openweathermap.org/img/w/' + data.weather[0].icon + '.png';
    let temp = Math.floor(data.main.temp);
    let weather = data.weather[0].main;
    let wind = Math.floor((data.wind.speed) * 3.6);

    if (request.status >= 200 && request.status < 400) {
      console.log('Server is ok');

      console.log(data);

      document.getElementById('weather-icon').src = icon;
      document.getElementById('temp').innerText = temp + ' °C';
      document.getElementById('weather').innerText = weather;
      document.getElementById('wind').innerText = wind + ' km/h';
    } else {
      console.log('Server error');
    }
  };

  request.onerror = function() {
    console.log('Connection error appeared');
  };

  request.send();
}

function forecast() {
  let requestForecast = new XMLHttpRequest();
  let cityNameInput = document.getElementById('cityNameInput').value;
  let city = cityNameInput;
  console.log(city);
  let weatherUrl =
    'https://api.openweathermap.org/data/2.5/forecast?q=' +
    city +
    '&units=metric&appid=672e93b94fcef6c0d2365b6ee1fe7e99';

  requestForecast.open('GET', weatherUrl, true);

  requestForecast.onload = function() {
    let dataForecast = JSON.parse(requestForecast.responseText);
    console.log(dataForecast);
    // let icon =
    //   'https://openweathermap.org/img/w/' + data.weather[0].icon + '.png';
    let temp = Math.floor(dataForecast.list[15].main.temp);
    //let weather = dataForecast.list.weather.description;
    //let wind = dataForecast.wind.speed;

    if (requestForecast.status >= 200 && requestForecast.status < 400) {
      console.log('Server is ok');

      console.log(dataForecast);

      //document.getElementById('weather-icon').src = icon;
      document.getElementById('temp').innerText = temp + ' °C';
      //document.getElementById('weather').innerText = weather;
      //document.getElementById('wind').innerText = wind + ' m/s';
    } else {
      console.log('Server error');
    }
  };

  requestForecast.onerror = function() {
    console.log('Connection error appeared');
  };

  requestForecast.send();
}

currentWeatherBtn.addEventListener('click', current);
fiveDaysWeatherBtn.addEventListener('click', forecast);
