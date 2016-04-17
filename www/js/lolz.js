
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
               templateUrl: "templates/food.html"
           }
       },
      controller: 'foodctrl'
   })
         .state('favdetails', {
             url: "/favdetails",
             views: {
                 'food-tab': {
                     templateUrl: "templates/favdetails.html"
                 }
             },
             controller: "favdetailsctrl"
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

 .controller('favdetailsctrl', function ($scope, $stateParams, getshit) {
	 
     $scope.id = $stateParams.favid;
	 
	 
	 
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
.controller('AppCtrl', function($scope)
{
  $scope.data = {
	  itsc: "",
	  pword: ""
  };
  $scope.btxt = "Go!";
  $scope.test = $scope.itsc;
  $scope.check = function(){
	  
	  alert("Checking database");
      $state.go('menu.tabs.home');
      
      
	  /*if(valid){
		if(!userexists){
			
		}
		login		
	  }
	  else{
		  
	  }*/
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
