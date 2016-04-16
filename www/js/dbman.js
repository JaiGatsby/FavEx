var MobileServiceClient = WindowsAzure.MobileServiceClient;
var client = new MobileServiceClient('https://favex.azure-mobile.net/', 'CCGQQFPPjSGpBHuykZMnvmhNELtuvv15');

angular.module('ionicApp').service('dbman', function(){
	var factory = {};
		factory.usrtable = client.getTable('favor');
	factory.favortable = client.getTable('user');

	factory.insert = function(table, obj){
		/*
		var query = factory.usrtable.insert({
			mail: "saas@dsafd.com"
		}).done(function (result) {
		   alert(JSON.stringify(result));
		}, function (err) {
		   alert("Error: " + err);
		});
		*/
		var query;
		if(table == "u"){
			query = factory.usrtable;
		}else if(table == "f"){
			query = factory.favortable;
		}
		var res;
		query.insert(
			obj
		).done(
			function(result){
				res = result
			}
		).error(
			function(err){
				
			}
		);
		return res;
		
	};
	factory.update = function(table, obj){
		/*
		var query = factory.usrtable.insert({
			mail: "saas@dsafd.com"
		}).done(function (result) {
		   alert(JSON.stringify(result));
		}, function (err) {
		   alert("Error: " + err);
		});
		*/
		var query;
		if(table == "u"){
			query = factory.usrtable;
		}else if(table == "f"){
			query = factory.favortable;
		}
		var res;
		query.update({
			   obj
			}).done(function (results) {
					res = results;
					//alert(JSON.stringify(results)
			   
			   
			}, function (err) {
			   alert("Error: " + err);
			});
			return res;
		
	};
	factory.del = function(table, obj){
		/*
		var query = factory.usrtable.insert({
			mail: "saas@dsafd.com"
		}).done(function (result) {
		   alert(JSON.stringify(result));
		}, function (err) {
		   alert("Error: " + err);
		});
		*/
		var query;
		if(table == "u"){
			query = factory.usrtable;
		}else if(table == "f"){
			query = factory.favortable;
		}
		var res;
		query.del({
			   obj
			}).done(function (results) {
					res = results;
					
			   
			   
			}, function (err) {
			   alert("Error: " + err);
			});
			return res;
		
	};
	factory.query = function(table, obj, sel){
		/*
		var query = $scope.usrtable.insert({
			mail: "saas@dsafd.com"
		}).done(function (result) {
		   alert(JSON.stringify(result));
		}, function (err) {
		   alert("Error: " + err);
		});
		*/
		var query;
		if(table == "u"){
			query = $scope.usrtable;
		}else{
			query = $scope.favortable;
		}
		var res;
		query.where({	
			type:'f'
			}).read().done(function (results) {
				res = JSON.stringify(results));
				}, function (err) {
		alert("Error: " + err);
			});
			return res;
		
	};
	
})