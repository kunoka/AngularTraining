/**
 * Created by gary on 5/18/16.
 */

var app = angular.module('myApp', []);

app.controller('myController', function($scope){

    $scope.userList = [
        {name: 'jackie', age: 20, address: "china"},
        {name: 'lucy', age: 22, address: "china it"},
        {name: 'tom', age: 23, address: "china"},
        {name: 'tim', age: 24, address: "china"},
        {name: 'jessie', age: 25, address: "china"},
    ];

    $scope.myFilter = function(item){
        return item.age > 23;
    };

});

app.filter('upperCaseFilter', function($filter){
    var filterFun = function(name){
        return $filter('uppercase')(name);
    };
    return filterFun;
});
