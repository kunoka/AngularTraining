/**
 * Created by gary on 5/20/16.
 */
angular.module('starter.common', [])
.factory("commonService", function($q, $timeout){
        var tstAlert = function(key) {
            console.log("tstAlert" + key);
        };
    return{

        transform : function(item){

            var tmp, tmpValue, final, obj = {};
            var i = 0;

            for(;i<item.length;i++){
                tmp = item[i];
                tmpValue = tmp["settingName"];
                delete tmp["userId"];
                delete tmp["settingName"];
                obj[tmpValue] = tmp;
            }
            console.log(obj);
            return obj;
        },
        transformPayee : function(item){

            var a = "1.73.2";
            var b = 2;

            console.log(a<b);

           console.log("transformPayee start");
            var deferred = $q.defer();
            var promise = deferred.promise;

            var tmpObj, firstObj, final, newObj = {};
            var i = 0;
            for(;i<item.length;i++){
                tmpObj = item[i];
                firstObj = tmpObj["settingName"];
                delete tmpObj["userId"];
                delete tmpObj["settingName"];
                // rebuild object
                tmpObj["displayNickname"] = tmpObj["displayNickName"];
                tmpObj["nickname"] = tmpObj["nickName"];
                delete tmpObj["displayNickName"];
                delete tmpObj["nickName"];
                newObj[firstObj] = JSON.stringify(tmpObj);
            }

            $timeout(function() {
                deferred.resolve(newObj);
                console.log("transformPayee after resolve");
            }, 300);
            console.log("transformPayee before promise");
            return promise;

        }

    }
})