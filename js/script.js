const currentWeatherBtn = document.getElementById('currentWeatherBtn');
const fiveDaysWeatherBtn = document.getElementById('fiveDaysWeatherBtn');

//Current date and time display
const today = new Date();
const date =
  today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();
const time =
  today.getHours() + ':' + today.getMinutes() + ':' + today.getSeconds();
const dateTime = date + ' ' + time;
// console.log(today);
document.querySelector('.date').innerText = date;
document.querySelector('.time').innerText = time;

//Current weather display
function current() {
  const request = new XMLHttpRequest();
  const cityNameInput = document.getElementById('cityNameInput').value;
  const city = cityNameInput;
  console.log(city);
  const weatherUrl =
    'https://api.openweathermap.org/data/2.5/weather?q=' +
    city +
    '&units=metric&appid=672e93b94fcef6c0d2365b6ee1fe7e99';

  request.open('GET', weatherUrl, true);

  request.onload = function() {
    const data = JSON.parse(request.responseText);
    const icon =
      'https://openweathermap.org/img/w/' + data.weather[0].icon + '.png';
    const temp = Math.floor(data.main.temp);
    const weather = data.weather[0].main;
    const wind = Math.floor(data.wind.speed * 3.6);

    if (request.status >= 200 && request.status < 400) {
      console.log('Server is ok');

      console.log(data);

      document.getElementById('weather-icon').src = icon;
      document.getElementById('temp').innerText = `Current temperature: ${temp}°C`;
      document.getElementById('weather').innerText = `Current conditions: ${weather}`;
      document.getElementById('wind').innerText = `Current wind speed: ${wind}km/h`;
    } else {
      console.log('Server error');
    }
  };

  request.onerror = function() {
    console.log('Connection error appeared');
  };

  request.send();
}

//Forecast display
function forecast() {
  const requestForecast = new XMLHttpRequest();
  const cityNameInput = document.getElementById('cityNameInput').value;
  const city = cityNameInput;
  console.log(city);
  const weatherUrl =
    'https://api.openweathermap.org/data/2.5/forecast?q=' +
    city +
    '&units=metric&appid=672e93b94fcef6c0d2365b6ee1fe7e99';

  requestForecast.open('GET', weatherUrl, true);

  requestForecast.onload = function() {
    const dataForecast = JSON.parse(requestForecast.responseText);
    console.log(dataForecast);
    // const icon =
    //   'https://openweathermap.org/img/w/' + data.weather[0].icon + '.png';
    const temp6 = Math.floor(dataForecast.list[1].main.temp);
    const temp12 = Math.floor(dataForecast.list[3].main.temp);
    const temp18 = Math.floor(dataForecast.list[5].main.temp);
    const temp24 = Math.floor(dataForecast.list[7].main.temp);
    const temp30 = Math.floor(dataForecast.list[9].main.temp);
    const temp36 = Math.floor(dataForecast.list[11].main.temp);
    const temp42 = Math.floor(dataForecast.list[13].main.temp);
    const temp48 = Math.floor(dataForecast.list[15].main.temp);
    //const weather = dataForecast.list.weather.description;
    //const wind = dataForecast.wind.speed;

    if (requestForecast.status >= 200 && requestForecast.status < 400) {
      console.log('Server is ok');

      console.log(dataForecast);

      //document.getElementById('weather-icon').src = icon;
      document.querySelector('#temp-forecast-6').innerText = temp6 + ' °C';
      document.querySelector('#temp-forecast-12').innerText = temp12 + ' °C';
      document.querySelector('#temp-forecast-18').innerText = temp18 + ' °C';
      document.querySelector('#temp-forecast-24').innerText = temp24 + ' °C';
      document.querySelector('#temp-forecast-30').innerText = temp30 + ' °C';
      document.querySelector('#temp-forecast-36').innerText = temp36 + ' °C';
      document.querySelector('#temp-forecast-42').innerText = temp42 + ' °C';
      document.querySelector('#temp-forecast-48').innerText = temp48 + ' °C';
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
