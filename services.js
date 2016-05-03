'use strict'

angular.module('mainApp').factory('weatherService', function($http){
  return {
    getWeather: function(city, country){
      var query = city + ',' + country;
      var APPID = 'b10867cf1c2cc3514ddf3eb2693fc17b';
      return $http.get('http://api.openweathermap.org/data/2.5/weather?' , {
        params: {
          q: query,
          APPID: APPID
        }
      }).then(function(response){
        return response.data.weather[0].description;
      });
    }
  }
});