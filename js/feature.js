/**
 * Created by gary on 5/16/16.
 */

var app = angular.module("myApp",[]);

app.controller("myController", function($scope){
    $scope.changeValue = function(){
        $scope.name = $scope.name + " Test";
        $scope.spanValue = $scope.name;
    }
});

app.controller("controllerParams", function($scope){
    $scope.name = "params controller";
});
app.controller("controllerArray", ['$scope','$rootScope',function(sc,rs){
    sc.name = "array controller";
    rs.rootName = "Root Name";
    rs.name = new Date();
}]);
app.controller("controllerInject", injectController);
injectController.$inject = ['$scope','$rootScope'];
function injectController(scope, rootScope){
    scope.name = "inject controller";
    rootScope.name = "1111inject controller-rootscope";
}

