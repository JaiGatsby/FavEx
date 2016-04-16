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
   .state('menu.tabs.food', {
       url: "/food",
       views: {
           'food-tab': {
               templateUrl: "templates/food.html"
           }
       }
   })
         .state('favdetails', {
             url: "/give/:favid",
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

    .state('menu.tabs.sm', {
        url: "/sm",
        views: {
            'sm-tab': {
                templateUrl: "templates/sm.html"
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
    $scope.items = [
    { name: "Get some food", id:"food"},
    { name: "Help out with some laundry", id: "laundry" },
    { name: "Tutor someone", id: "tutor" },
    { name: "Help buy some stuff",id:"buy" },
    { name: "Special missions",id:"sm"}
    ];
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

 .controller('favdetailsctrl', function ($scope, $stateParams) {
   
     $scope.id = $stateParams.favid;
 })



