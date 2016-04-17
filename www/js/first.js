angular.module('ionicApp')

.controller('AppCtrl2', function($scope)
{
  $scope.data = {
	  itsc: "",
	  pword: ""
  };
  $scope.dis = "";
  $scope.rb;
  $scope.rb_ch = function(){
	  if($scope.rb == "tutoring"){
		  $scope.dis = "disabled";
	  }else{
		  $scope.dis = "";
	  }
  };
  $scope.btxt = "Go!";
  $scope.test = $scope.itsc;
  $scope.check = function(){
	  
      window.open("#/menu/tabs/submit","_self");
      
      
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