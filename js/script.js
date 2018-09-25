
let searchBtn = document.getElementById('searchBtn');

function searchCities() {
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

    if (request.status >= 200 && request.status < 400) {
      console.log('Server is ok');

      console.log(data);

      document.getElementById('weather-icon').src = icon;
      document.getElementById('temp').innerText = temp + ' °C';
      document.getElementById('weather').innerText = weather;
    } else {
      console.log('Server error');
    }
  };

  request.onerror = function() {
    console.log('Connection error appeared');
  };

  request.send();
}

searchBtn.addEventListener('click', searchCities);
