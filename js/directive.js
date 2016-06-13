/**
 * Created by gary on 5/16/16.
 */

var app = angular.module("myApp",[]);
/*
    restrict: 指令在HTML中的展示形式(E:元素，A:属性，C:类，M:注释， 默认为A)
    priority: 优先级，如果单个DOM上有多个指令，数值越高越先执行。
    scope: 创建指令的作用范围 (@:值传递，单向绑定，=: 引用传递，双向绑定，&: 表达式）
    template: 代替原始模板中的DOM，跟replace属性共存
    templateURL: 指定一个模块的路径
    transclude: 自定义指令是否复制原始标记中的内容
    link: 负责DOM操作与注册监听器
    replace: 是否替换原始DOM中的内容，默认为false
    controller: 指令内部controller,暴露此指令的一些方式给其他指令使用
    require: 请求另外一个指令 (?：如果required没有找到相应的指令避免报错，还能确保程序的正常执行，^:表示往父级查找
    compile: 用来需要处理模块的DOM情况，一般情况下不会用
    link: 负责注册和监听DOM
 */
//app.directive("hello", function() {
//        restrict: 'ACE',
//            templateURL: 'demoTemplateURL',
//        replace: true,
//        transclude: true
//
//});

//app.controller("expendController", function($scope){
//    console.log("I am controller");
//    $scope.title = "展开";
//    $scope.text = "全部内容";
//})
//app.directive("expander", function(){
//    console.log("I am directive");
//    return{
//        restrict: "EA",
//        replace: true,
//        transclude: true,
//        scope: {
//            title: '=expanderTitle'
//        },
//        template: '<div>'
//        + '<div class="title" ng-click="toggle()">{{title}}</div>'
//        + '<div class="body" ng-show="showMe" ng-transclude></div>'
//        + '</div>',
//        link: function(scope, element, attrs){
//            scope.showMe = false;
//            scope.toggle = function toggle(){
//                scope.showMe = !scope.showMe;
//            }
//        }
//    }
//})

//app.controller("expendController", function($scope){
//    $scope.expanders = [{
//        title : 'Click me to expand',
//        text : 'Hi there folks, I am the content that was hidden but is now shown.'
//    },{
//        title : 'Click this',
//        text : 'I am even better text than you have seen previously'
//    },{
//        title : 'Test',
//        text : 'test'
//    }];
//});
//
//app.directive("accordion", function(){
//    return {
//        restrict: "EA",
//        replace: true,
//        transclude: true,
//        template: '<div ng-transclude></div>',
//        controller: function(){
//            var expanders = [];
//            this.opened = function(selectedExpander){
//                angular.forEach(expanders, function(expander){
//                    if(selectedExpander != expander){
//                        expander.showMe = false;
//                    }
//                });
//            }
//            this.addExpander = function(expander){
//                expanders.push(expander);
//            }
//        }
//    }
//});
//
//app.directive("expanders", function(){
//    return {
//        restrict: "EA",
//        replace: true,
//        transclude: true,
//        require: '^?accordion',
//        scope: {
//            title: '=expanderTitle'
//        },
//        template: '<div>'
//        + '<div class="title" ng-click="toggle()">{{title}}</div>'
//        + '<div class="body" ng-show="showMe" ng-transclude></div>'
//        + '</div>',
//        link: function(scope, element, attrs, accordionController){
//            scope.showMe = false;
//            accordionController.addExpander(scope);
//            scope.toggle = function toggle(){
//                scope.showMe = !scope.showMe;
//                accordionController.opened(scope);
//            }
//        }
//    }
//})