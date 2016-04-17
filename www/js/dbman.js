
angular.module('ionicApp').service('dbman', function () {
	
		this.usrtable = client.getTable('favor');
	this.favortable = client.getTable('user');

	this.insert = function(table, obj){
		/*
		var query = this.usrtable.insert({
			mail: "saas@dsafd.com"
		}).done(function (result) {
		   alert(JSON.stringify(result));
		}, function (err) {
		   alert("Error: " + err);
		});
		*/
		var query;
		if(table === "u"){
			query = this.usrtable;
		}else if(table === "f"){
			query = this.favortable;
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
	this.update = function(table, obj){
		/*
		var query = this.usrtable.insert({
			mail: "saas@dsafd.com"
		}).done(function (result) {
		   alert(JSON.stringify(result));
		}, function (err) {
		   alert("Error: " + err);
		});
		*/
		var query;
		if(table === "u"){
			query = this.usrtable;
		}else if(table === "f"){
			query = this.favortable;
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
	this.del = function(table, obj){
		/*
		var query = this.usrtable.insert({
			mail: "saas@dsafd.com"
		}).done(function (result) {
		   alert(JSON.stringify(result));
		}, function (err) {
		   alert("Error: " + err);
		});
		*/
		var query;
		if(table === "u"){
			query = this.usrtable;
		}else{
			query = this.favortable;
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
	this.query = function(table, obj, sel){
		
		var query;
		if(table === "u"){
			query = this.usrtable;
		}else{
			query = this.favortable;
		}
		var res;
		query.where().read().done(function (results) {
		    res = JSON.stringify(result);
		    alert(res);
		}, function (err) {
		    alert("Error: " + err);
		});
		console.log("dsdsadsa" + res);
			return res;
		
	};
	
})