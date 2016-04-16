angular.module('ionicApp')

.controller('AppCtrl', function($scope)
{
  $scope.data = {
	  itsc: "",
	  pword: ""
  };
  $scope.btxt = "Go!";
  $scope.test = $scope.itsc;
  $scope.check = function(){
	  
	  alert("Checking database...");
	  /*if(valid){
		if(!userexists){
			
		}
		login		
	  }
	  else{
		  
	  }*/
  }
  
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