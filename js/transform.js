/**
 * Created by gary on 5/19/16.
 */

var app = angular.module('myApp', ['starter.common']);

app.controller('myController', function($scope, $timeout, $q, commonService) {
    // slice right characters from payee_
    var str = "payee_100000001";
     var res = str.replace("payee_","");
    console.log(res);
var item = [];
   item[0] =
        {
            displayNickName: "<Harry>",
            nickName :"Harry",
            userId:"0000000001",
            settingName:"巣鴨信金世田谷支店普通(総合)23456781ｱｲｶﾜ ﾕｷｺ",
            avatar:"images/portrait.jpg"
        };
    item[1] =
        {
            displayNickName: "<Tina>",
            nickName: "Tina",
            userId: "0000000001",
            settingName: "ゆうちょ銀行墨田支店決済用普通10203041ﾀﾆ ﾏﾆﾋﾛ",
            avatar: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMgA…7gPIFki9j+A0ZhIJOXvm/s8yEeSVHAG8AAAAASUVORK5CYII="
        };
    console.log(item.length);
    $scope.original = item;
    // asyn begin

    var promise = commonService.transformPayee(item);
    console.log("promise after");
    promise.then(function(one) {
            console.log("promise .then start");
            $scope.final = one;

            //console.log(new Date());
            //console.log(' Promise one resolved with ', one);
            //var anotherDeferred = $q.defer();
            //$timeout(function(){
            //    anotherDeferred.resolve(new Date());
            //},1000);
            //return anotherDeferred.promise;
        })
    //    .then(function(two) {
    //        console.log(new Date());
    //        console.log('Promise two resolved with ' + two);
    //        var thirdDeferred = $q.defer();
    //        $timeout(function(){
    //            thirdDeferred.resolve(new Date());
    //        },2000);
    //        return thirdDeferred.promise;
    //    })
    //    .then(function(three){
    //
    //        console.log("Promise three resolved with " + three);
    //    });
    //console.log("promise end");
    // asyn end


    //$scope.final = commonService.transformPayee(item);
    //console.log("I am in transform.js");
});

