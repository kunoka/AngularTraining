/**
 * Created by gary on 5/16/16.
 */

angular.module("myApp", [])

    .config(function(){
        console.log("config");
    })

    .run(function($rootScope){

        //$rootScope.versionNumber = "V1.0";
        console.log("I am run");
    })

    .service("myService", function($http, $q){
        console.log("service" + "");

        //return {
        //    sayHello : function(){
        //        return "Say Hello";
        //    },
        //
        //    getData : function(){
        //        var defer = $q.defer();
        //        var promise = defer.promise;
        //        $http.get("http://rest-service.guides.spring.io/greeting")
        //            .success(function(data){
        //                defer.resolve(data);
        //            })
        //            .error(function(data){
        //                defer.reject(data);
        //            });
        //        return promise;
        //    }
        //}
    })

    .controller("myController",function($rootScope,$scope,$http, myService){
        console.log("I am controller");
        //$rootScope.versionNumber = "V1.1";
        //
        //myService.getData().then(function(data){
        //    var obj = data;
        //    console.log(data);
        //    $scope.id = obj.id;
        //    $scope.content = obj.content;
        //},function(data){
        //    console.log(data);
        //});

    })

    .directive("myTest", function() {
        console.log("I am directive");
        return {
            restrict: "A",
            replace: false,
            //transclude: true,
            //scope: {
            //    title: '=expanderTitle'
            //},
            //template: '<div>'
            //+ '<div class="title" ng-click="toggle()">{{title}}</div>'
            //+ '<div class="body" ng-show="showMe" ng-transclude></div>'
            //+ '</div>',
            link: function (scope, element, attrs) {
                console.log("directive - link");
            }
        }
    })