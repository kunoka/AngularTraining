/**
 * Ajax service
 */
app.factory("AjaxService", function($q, $http) {
	
	//Server URL
	var ajaxURL = "http://rest-service.guides.spring.io/greeting";
	
	//Get deferred
	var deferred = $q.defer();
	
	return {
		invokeAjax: function(){
			$http.get(ajaxURL)
            .success(function(data){
            	deferred.resolve(data);
            })
            .error(function(data){
            	deferred.reject(data);
            });
			return deferred.promise;
		}
	};
});