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
      'get-tab': {
        templateUrl: "templates/get.html"
      }
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
<<<<<<< HEAD
// JavaScript source code
.controller('itemCtrl', function ($scope) {
    $scope.items = [
    { name: "I am Hungry" },
    { name: "Damn I need laundry" },
    { name: "Special Missions" },
    ];
});
=======

.controller('goToGet', function($scope, $state) {
  $scope.submitForm = function() {
     console.log("Submitting Form");
   $state.go('menu.tabs.get'); 
 };

})
>>>>>>> f1018d4c8d2ce3b5cb17685f32cdd891214017e4
