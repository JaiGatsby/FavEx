
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
      },
	controller: 'getCon'
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

.controller('itemCtrl', function ($scope) {
    $scope.items = [
    { name: "I am Hungry" },
    { name: "Damn I need laundry" },
    { name: "Special Missions" },
    ];
})

/*.controller('getCon', function($scope){
	$scope.onfuckingslide = function() {
    $( "#slider-range-min" ).slider({
      range: "min",
      value: 50,
      min: 0,
      max: 100,
      slide: function( event, ui ) {
        $( "#amount" ).val( "$" + ui.value + ",000");
        $(".a, .b, .c, .d").width(ui.value + "%");
      }
    });
    $(".ui-slider-handle").text("<>");
    $( "#amount" ).val( "$" + $( "#slider-range-min" ).slider( "value") + ",000");
  };
})*/
.controller('goToGet', function($scope, $state) {
  $scope.submitForm = function() {
     console.log("Going to Get");
   $state.go('menu.tabs.get'); 
 };

})
.controller('goToGive', function($scope, $state) {
  $scope.submitForm = function() {
     console.log("Going to Give");
   $state.go('menu.tabs.give'); 
 };})


.controller('CalcCtrl', function ($scope, $state) {
    $scope.data = {};
	$scope.funky = function(){
	console.log($scope.data.qty);
	}
})