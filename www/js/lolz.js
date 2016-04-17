
angular.module('ionicApp')

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
   .state('menu.tabs.status', {
        url: "/status",
        views: {
            'status-tab': {
                templateUrl: "templates/status.html"
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
   .state('menu.tabs.food', {
       url: "/food",
       views: {
           'food-tab': {
               controller: "foodctrl",
               templateUrl: "templates/food.html"
               
           }
       }
      
   })
         


    .state('menu.tabs.laundry', {
        url: "/laundry",
        views: {
            'laundry-tab': {
                templateUrl: "templates/laundry.html"
            }
        }
    })

    .state('menu.tabs.tutor', {
        url: "/tutor",
        views: {
            'tutor-tab': {
                templateUrl: "templates/tutor.html"
            }
        }
    })

    .state('menu.tabs.buy', {
        url: "/buy",
        views: {
            'buy-tab': {
                templateUrl: "templates/buy.html"
            }
        }
    })

    .state('menu.tabs.others', {
        url: "/others",
        views: {
            'others-tab': {
                templateUrl: "templates/others.html"
            }
        }
    })
         

    .state('signin', {
        url: "/signin",
        templateUrl: "templates/signin.html",
        controller: "AppCtrl"
    })
    .state('menu.tabs.submit', {
        url: "/submit",
        views: {
            'submit-tab': {
                templateUrl: "templates/submit.html"
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

    $urlRouterProvider.otherwise("/signin");

})

.controller('itemCtrl', function ($scope, $state, $location) {
    $scope.func = function (s) {
        switch (s) {
            case "food":
                $state.go('menu.tabs.food');
                break;
            case "laundry":
                $state.go('menu.tabs.laundry');
                break;
            case "tutor":
                $state.go('menu.tabs.tutor');
                break;
            case "buy":
                $state.go('menu.tabs.buy');
                break;
            case "others":
                $state.go('menu.tabs.others');
                break;
        }
    };
})


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
        
    };
})



.controller('foodctrl', function ($scope, $stateParams, dbman) {

      
    $scope.data = function () { alert(JSON.stringify(dbman.query('f', { type: 'f' }, '', 100000, 0))); };
         
    $scope.doRefresh = function () {
             alert("Refreshing");
             $scope.$broadcast('scroll.refreshComplete');
     };
})

.controller('CalcCtrl', function ($scope, $state) {
    $scope.data = {};
    $scope.funky = function(){
        console.log($scope.data.qty);
    }
})

.factory("Items", function ($firebaseArray) {
    var itemsRef = new Firebase("https://incandescent-inferno-5317.firebaseio.com/items");
    return $firebaseArray(itemsRef);


})

.controller('lCtrl', function($scope)
{
  $scope.groups = [];
  $scope.cats = ["Pick-up", "Drop-off", "Budget", "Phone number", "Comments"];
  for (var i=0; i<2; i++) {
    $scope.groups[i] = {
      name: i,
      items: []
    };
    if(i==0){
        $scope.groups[i].items.push('Pick-Up Hall 9');
      $scope.groups[i].items.push('Drop-Off Hall 4');
      $scope.groups[i].items.push('Budget = $50');
      $scope.groups[i].items.push('No: 94683372');
      $scope.groups[i].items.push('Meet at atrium');
    }
    else{
      $scope.groups[i].items.push('Pick-Up Hall 3');
      $scope.groups[i].items.push('Drop-Off north gate');
      $scope.groups[i].items.push('Budget = $$100');
      $scope.groups[i].items.push('No: 63265366');
      $scope.groups[i].items.push('N/A');
    }
  }
  
  /*
   * if given group is the selected group, deselect it
   * else, select the given group
   */
  $scope.toggleGroup = function(group) {
    if ($scope.isGroupShown(group)) {
      $scope.shownGroup = null;
    } else {
      $scope.shownGroup = group;
    }
  };
  $scope.isGroupShown = function(group) {
    return $scope.shownGroup === group;
  };
})

.controller('lCtrl1', function($scope)
{
  $scope.groups = [];
  $scope.cats = ["Pick-up", "Drop-off", "Budget", "Phone number", "Comments"];
  for (var i=0; i<2; i++) {
    $scope.groups[i] = {
      name: i,
      items: []
    };
    if(i==0){
        $scope.groups[i].items.push('Pick-Up Hall 4');
      $scope.groups[i].items.push('Drop-Off LG7');
      $scope.groups[i].items.push('Budget = $25');
      $scope.groups[i].items.push('No: 94683375');
      $scope.groups[i].items.push('---');
    }
    else{
      $scope.groups[i].items.push('Pick-Up AT LG5');
      $scope.groups[i].items.push('Drop-Off south gate');
      $scope.groups[i].items.push('Budget = $200');
      $scope.groups[i].items.push('No: 53267666');
      $scope.groups[i].items.push('Thanks :)');
    }
  }
  
  /*
   * if given group is the selected group, deselect it
   * else, select the given group
   */
  $scope.toggleGroup = function(group) {
    if ($scope.isGroupShown(group)) {
      $scope.shownGroup = null;
    } else {
      $scope.shownGroup = group;
    }
  };
  $scope.isGroupShown = function(group) {
    return $scope.shownGroup === group;
  };
})

.controller('lCtrl2', function($scope)
{
  $scope.groups = [];
  $scope.cats = ["Pick-up", "Drop-off", "Budget", "Phone number", "Comments"];
  for (var i=0; i<2; i++) {
    $scope.groups[i] = {
      name: i,
      items: []
    };
    if(i==0){
        $scope.groups[i].items.push('Pick-Up at rm 506 Hall 8');
      $scope.groups[i].items.push('Drop-Off Hall 4 rm 301');
      $scope.groups[i].items.push('Budget = $75');
      $scope.groups[i].items.push('No: 946833567');
      $scope.groups[i].items.push('Please Hurry!');
    }
    else{
      $scope.groups[i].items.push('Pick-Up Hall 3');
      $scope.groups[i].items.push('Drop-Off north gate');
      $scope.groups[i].items.push('Budget = $100');
      $scope.groups[i].items.push('No: 632653678');
      $scope.groups[i].items.push('Take your time :)');
    }
  }
  
  /*
   * if given group is the selected group, deselect it
   * else, select the given group
   */
  $scope.toggleGroup = function(group) {
    if ($scope.isGroupShown(group)) {
      $scope.shownGroup = null;
    } else {
      $scope.shownGroup = group;
    }
  };
  $scope.isGroupShown = function(group) {
    return $scope.shownGroup === group;
  };
})

.controller('lCtrl3', function($scope)
{
  $scope.groups = [];
  $scope.cats = ["Pick-up", "Drop-off", "Budget", "Phone number", "Comments"];
  for (var i=0; i<2; i++) {
    $scope.groups[i] = {
      name: i,
      items: []
    };
    if(i==0){
        $scope.groups[i].items.push('Pick-Up Hall 1');
      $scope.groups[i].items.push('Drop-Off atrium');
      $scope.groups[i].items.push('Budget = $70');
      $scope.groups[i].items.push('No: 946886672');
      $scope.groups[i].items.push('Meet at lg4 gym');
    }
    else{
      $scope.groups[i].items.push('Pick-Up Hall 7');
      $scope.groups[i].items.push('Drop-Off north gate');
      $scope.groups[i].items.push('Budget = $200');
      $scope.groups[i].items.push('No: 26265366');
      $scope.groups[i].items.push('N/A');
    }
  }
  
  /*
   * if given group is the selected group, deselect it
   * else, select the given group
   */
  $scope.toggleGroup = function(group) {
    if ($scope.isGroupShown(group)) {
      $scope.shownGroup = null;
    } else {
      $scope.shownGroup = group;
    }
  };
  $scope.isGroupShown = function(group) {
    return $scope.shownGroup === group;
  };
})

.controller('lCtrl4', function($scope)
{
  $scope.groups = [];
  $scope.cats = ["Pick-up", "Drop-off", "Budget", "Phone number", "Comments"];
  for (var i=0; i<2; i++) {
    $scope.groups[i] = {
      name: i,
      items: []
    };
    if(i==0){
        $scope.groups[i].items.push('Pick-Up Hall 1');
      $scope.groups[i].items.push('Drop-Off Hall 2');
      $scope.groups[i].items.push('Budget = $40');
      $scope.groups[i].items.push('No: 94683372');
      $scope.groups[i].items.push('Meet at cafe');
    }
    else{
      $scope.groups[i].items.push('Pick-Up Hall 3');
      $scope.groups[i].items.push('Drop-Off south gate');
      $scope.groups[i].items.push('Budget = $100');
      $scope.groups[i].items.push('No: 63265366');
      $scope.groups[i].items.push('See you soon');
    }
  }
  
  /*
   * if given group is the selected group, deselect it
   * else, select the given group
   */
  $scope.toggleGroup = function(group) {
    if ($scope.isGroupShown(group)) {
      $scope.shownGroup = null;
    } else {
      $scope.shownGroup = group;
    }
  };
  $scope.isGroupShown = function(group) {
    return $scope.shownGroup === group;
  };
})



.controller('AppCtrl', function($scope)
{
  $scope.data = {
	  itsc: "",
	  pword: ""
  };
    
  $scope.btxt = "Go!";
  $scope.test = $scope.itsc;
  $scope.check = function(){
	  
      if ($scope.data.itsc ==="admin" && $scope.data.pword === "fakedata"){
          window.open("#/menu/tabs/home","_self");
      }
      else{
          alert("Sorry, incorrect username and/or password")
      }
  };
  
})
.filter('yesNo', function() {
    return function(input) {
        if(input == true){
			document.getElementById("b").setAttribute("disabled", "");
            
		}else{
			document.getElementById("b").removeAttribute("disabled");
            
		}
		return "";
    }

});
