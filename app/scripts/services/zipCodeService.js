/**
 * Created by atruslow on 10/16/14.
 */

app.factory('zipCodeService',
    ['$http', '$q',
        function($http, $q ){

            var getZipInfo = function(zipInput){
                var deferred = $q.defer();
                $http({
                    url: '/api/zip/' + zipInput,
                    method: 'GET'
                }).success(function(data){
                    deferred.resolve(data);
                }).error(function(data){
                    deferred.reject(data);
                });
                return deferred.promise;
            };

            var findCities = function (info) {
                var deferred = $q.defer();
                $http({
                    url: '/api/radius',
                    method: 'GET',
                    params: info
                }).success(function(data){
                    deferred.resolve(data);
                }).error(function(data){
                    deferred.reject(data);
                });
                return deferred.promise;

            };

            return {
                getZipInfo: getZipInfo,
                findCities: findCities
            };
}]);