(function (window){
  'use strict';
  var App = window.App;
  var WeatherUnderground = App.WeatherUnderground;
  var key = "enteryourweatherundergroundkeyhere";
  var SERVER_URL = "http://api.wunderground.com/api/" +key+ "/forecast/geolookup/conditions/q/FL/Niceville.json";

  var myWeather = new WeatherUnderground(SERVER_URL);
  myWeather.getAll(displayAll);
  myWeather.getAll(displayFahrenheit);

  // uses callback to handle async behavior of JS
  // used promises initially, but that seemed to muddy up the entire point
  function displayAll(serverResponse){
    console.log('Here is the full json response object.');
    console.log(serverResponse);
    console.log("Temp feels like: " + serverResponse.current_observation.feelslike_f + "F");
  }

  // this narrows down the response to display only Fahrenheit
  function displayFahrenheit(serverResponse){
    var Fahrenheit = serverResponse.current_observation.temp_f;
    $("#temperature").text(Fahrenheit + "F");
    console.log('updated time at: ' + new Date().toLocaleString());
  }

  // now create an interval to update every minute = 60000ms
  // production I would update every 15 minutes or 30 minutes
  setInterval(function(){
    myWeather.getAll(displayFahrenheit);
  }, 60000);

})(window);
