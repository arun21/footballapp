angular.module('starter.services', [])

.factory('Countries', function() {
  // Might use a resource here that returns a JSON array

  // Some fake testing data
  var countries = [{
    id: 0,
    name: 'Germany',
    coach: 'Joachim Löw',
    face: 'img/germanyLogo.png',
    position:1
  }, {
    id: 1,
    name: 'Portual',
    coach: 'Fernando Santos',
    face: 'img/portualLogo.png',
    position:2
  }, {
    id: 2,
    name: 'France',
    coach: 'Didier Deschamps',
    face: 'img/franceLogo.png',
    position:3
  }, {
    id: 3,
    name: 'Spain',
    coach: 'Vicente del Bosque',
    face: 'img/spainLogo.png',
    position:4
  }, {
    id: 4,
    name: 'England',
    coach: 'Sam Allardyce',
    face: 'img/englandLogo.png',
    position:5
  }];

  return {
    all: function() {
      return countries;
    },
    remove: function(country) {
      countries.splice(countries.indexOf(country), 1);
    },
    get: function(countryId) {
      for (var i = 0; i < countries.length; i++) {
        if (countries[i].id === parseInt(countryId)) {
          return countries[i];
        }
      }
      return null;
    }
  };
});
