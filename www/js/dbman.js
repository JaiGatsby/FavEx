var MobileServiceClient = WindowsAzure.MobileServiceClient;
var client = new MobileServiceClient('https://favex.azure-mobile.net/', 'CCGQQFPPjSGpBHuykZMnvmhNELtuvv15');

angular.module('ionicApp').factory('dbman', function(){
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
		query.insert(
			obj
		).done(
			function(result){
				
			}
		).error(
			function(err){
				
			}
		)
		
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
		res;
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
		res;
		query.del({
			   obj
			}).done(function (results) {
					res = results;
					//alert(JSON.stringify(results)
			   
			   
			}, function (err) {
			   alert("Error: " + err);
			});
			return res;
		
	};
	factory.query = function(table, obj, sel, limit = null, skrows = 0, order){
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
		res;
		query.where({
			   obj
			})
			   .select(sel)
			   .orderBy(order)
			   .skip(skrows).take(limit)
			   .read().done(function (results) {
					res = results;
					//alert(JSON.stringify(results)
			   
			   
			}, function (err) {
			   alert("Error: " + err);
			});
			return res;
		
	};
	
})