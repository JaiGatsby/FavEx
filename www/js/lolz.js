angular.module('ionicApp', ['ionic'])

.config(function($stateProvider, $urlRouterProvider,$ionicConfigProvider) {
  $ionicConfigProvider.tabs.position('bottom');
  $stateProvider
  .state('menu', {
    url: "/menu",
    templateUrl: "templates/menu.html"
  })

  .state('menu.tabs', {
    url: "/tabs",
    views: {
      'menu' :{
        templateUrl: "templates/tabs.html"
      }
    }
  })

  .state('menu.tabs.home', {
    url: "/home",
    views: {
      'home-tab': {
        templateUrl: "templates/home.html"
      }
    }
  })
  .state('menu.tabs.search', {
    url: "/search",
    views: {
      'search-tab': {
        templateUrl: "templates/search.html"
      }
    }
  })

  .state('menu.tabs.about', {
    url: "/about",
    views: {
      'about-tab': {
        templateUrl: "templates/about.html"
      }
    }
  })

  .state('menu.tabs.about.first', {
    url: "/first",
    views: {
      'about-sub': {
        templateUrl: "templates/first.html"
      }
    }
  })
  .state('menu.tabs.about.second', {
    url: "/second",
    views: {
      'about-sub': {
        templateUrl: "templates/second.html"
      }
    }
  })
  .state('menu.tabs.give', {
    url: "/give",
    views: {
      'give-tab': {
        templateUrl: "templates/give.html"
      }
    }
  })
.state('menu.tabs.get', {
    url: "/get",
    views: {
        templateUrl: "templates/get.html"
      }
  })
  .state('menu.tabs.about.third', {
    url: "/third",
    views: {
      'about-sub': {
        templateUrl: "templates/third.html"
      }
    }
  })

  $urlRouterProvider.otherwise("/menu/tabs/about");
})

.controller('goToGet', function($scope, $state) {
  $scope.submitForm = function() {
     console.log("Submitting Form", user);
   $state.go('menu.tabs.get'); 
 };

})