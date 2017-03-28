// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.controllers' is found in controllers.js
angular.module('starter', ['ionic', 'starter.controllers'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if (window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      cordova.plugins.Keyboard.disableScroll(true);

    }
    if (window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }
  });
})

.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider

    .state('app', {
    url: '/app',
    abstract: true,
    templateUrl: 'templates/menu.html',
    controller: 'AppCtrl'
  })
    .state('app.about', {
      url: '/about',
      views: {
        'menuContent': {
          templateUrl: 'templates/about.html'
        }
      }
    })
    .state('app.home', {
      url: '/home',
      views: {
        'menuContent': {
          templateUrl: 'templates/home.html'
        }
      }
    })
    .state('app.hart', {
      url: '/hart',
      views: {
        'menuContent': {
          templateUrl: 'templates/hart.html'
        }
      }
    })
    .state('app.lloris', {
      url: '/lloris',
      views: {
        'menuContent': {
          templateUrl: 'templates/lloris.html'
        }
      }
    })
    .state('app.ramos', {
      url: '/ramos',
      views: {
        'menuContent': {
          templateUrl: 'templates/ramos.html'
        }
      }
    })
    .state('app.neuer', {
      url: '/neuer',
      views: {
        'menuContent': {
          templateUrl: 'templates/neuer.html'
        }
      }
    })
  .state('app.country', {
    url: '/country',
    views: {
      'menuContent': {
        templateUrl: 'templates/countries.html',
        controller: 'CountryCtrl'
      }
    }
  })
  .state('app.single', {
    url: '/countries/:countryId',
    views: {
      'menuContent': {
        templateUrl: 'templates/players.html',
        controller: 'PlayersListCtrl'
      }
    }
  })
  .state('app.germany', {
      url: '/germany',
      views: {
        'menuContent': {
          templateUrl: 'templates/germany.html'
        }
      }
    })
  .state('app.spain', {
      url: '/spain',
      views: {
        'menuContent': {
          templateUrl: 'templates/spain.html'
        }
      }
    })
      .state('app.france', {
      url: '/france',
      views: {
        'menuContent': {
          templateUrl: 'templates/france.html'
        }
      }
    })
    .state('app.england', {
      url: '/england',
      views: {
        'menuContent': {
          templateUrl: 'templates/england.html'
        }
      }
    })
    .state('app.playlist', {
      url: '/playlist',
      views: {
        'menuContent': {
          templateUrl: 'templates/playlist.html'
        }
      }
    });
  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/app/home');
});
