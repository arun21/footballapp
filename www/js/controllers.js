angular.module('starter.controllers', [])

.controller('AppCtrl', function($scope, $ionicModal, $timeout) {

  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //$scope.$on('$ionicView.enter', function(e) {
  //});

  // Form data for the login modal
  $scope.loginData = {};

  // Create the login modal that we will use later
  $ionicModal.fromTemplateUrl('templates/login.html', {
    scope: $scope
  }).then(function(modal) {
    $scope.modal = modal;
  });

  // Triggered in the login modal to close it
  $scope.closeLogin = function() {
    $scope.modal.hide();
  };

  // Open the login modal
  $scope.login = function() {
    $scope.modal.show();
  };

  // Perform the login action when the user submits the login form
  $scope.doLogin = function() {
    console.log('Doing login', $scope.loginData);

    // Simulate a login delay. Remove this and replace with your login
    // code if using a login system
    $timeout(function() {
      $scope.closeLogin();
    }, 1000);
  };
})

.controller('PlaylistCtrl', function($scope) {
  $scope.playlists = [
    { title: 'Reggae', id: 1 },
    { title: 'Chill', id: 2 },
    { title: 'Dubstep', id: 3 },
    { title: 'Indie', id: 4 },
    { title: 'Rap', id: 5 },
    { title: 'Cowbell', id: 6 }
  ];
})

.controller('CountryCtrl', function($scope) {
  $scope.countries = [{
    id: 0,
    name: 'Germany',
    coach: 'Joachim Löw',
    face: 'img/germanyLogo.jpg'
  }, {
    id: 1,
    name: 'Portual',
    coach: 'Fernando Santos',
    face: 'img/portualLogo.jpg'
  }, {
    id: 2,
    name: 'France',
    coach: 'Didier Deschamps',
    face: 'img/franceLogo.jpg'
  }, {
    id: 3,
    name: 'Spain',
    coach: 'Vicente del Bosque',
    face: 'img/spainLogo.png'
  }, {
    id: 4,
    name: 'England',
    coach: 'Sam Allardyce',
    face: 'img/englandLogo.jpg'
  }];
})

.controller('PlayersListCtrl', function($scope, $stateParams, Countries) {
  $scope.country = Countries.get($stateParams.countryId);
})

.controller('PlayersCtrl', function($scope) {
  $scope.germany = [
    { title: 'Reggae', id: 1 },
    { title: 'Chill', id: 2 },
  ];
  $scope.france = [
    { title: 'Reggae', id: 1 },
    { title: 'Chill', id: 2 },
  ];
  $scope.spain = [
    { title: 'Reggae', id: 1 },
    { title: 'Chill', id: 2 },
  ];
  $scope.england = [
    { title: 'Reggae', id: 1 },
    { title: 'Chill', id: 2 },
  ];
  $scope.portugal = [
    { title: 'Reggae', id: 1 },
    { title: 'Chill', id: 2 },
  ];
});
