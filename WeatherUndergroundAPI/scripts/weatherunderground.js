(function (window){
  'use strict';
  var App = window.App || {};
  var $ = window.jQuery;

  function WeatherUnderground(url) {
    if(!url){
      throw new Error('No remote URL supplied.');
    }

    this.serverUrl = url;
  }

  WeatherUnderground.prototype.getAll = function(cb){
    $.get(this.serverUrl, function (serverResponse){
        cb(serverResponse);
        //console.log(serverResponse);
    });
  };

  App.WeatherUnderground = WeatherUnderground;
  window.App = App;
})(window);
