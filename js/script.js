var weatherUrl =
  'https://api.openweathermap.org/data/2.5/weather?q=Miechow&units=metric&appid=672e93b94fcef6c0d2365b6ee1fe7e99';
var request = new XMLHttpRequest();

request.open('GET', weatherUrl, true);

request.onload = function() {
  if (request.status >= 200 && request.status < 400) {
    console.log('All is ok');
    var data = JSON.parse(request.responseText);
    console.log(data);
  } else {
    console.log('Server error');
  }
};

request.onerror = function() {
  console.log('Connection error appeared');
};

request.send();

// $.getJSON(
//   'https://api.openweathermap.org/data/2.5/weather?q=Miechow&units=metric&appid=672e93b94fcef6c0d2365b6ee1fe7e99',
//   function(data) {
//     console.log(data);
//   }
// );
