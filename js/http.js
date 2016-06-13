/**
 * Created by gary on 5/18/16.
 */
var app = angular.module("myApp",[]);

app.controller("myController", function($scope, AjaxService){
    AjaxService.invokeAjax().then(function(data){
        console.log(data);
        var obj = data;
        $scope.remoteID = obj.id;
        $scope.remoteContent = obj.content;
    },function(data){
        console.log("Error: "+data);
        hideLoading();
    });

    console.log(new Date());
})