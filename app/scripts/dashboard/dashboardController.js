/**
 * Created by atruslow on 10/16/14.
 */

app.controller('dashboardController',
    ['$scope', 'zipCodeService',  function($scope, zipCodeService){

        $scope.cities = [];

        $scope.findCities = function () {
            zipCodeService.findCities({
                lat: $scope.latInput,
                lon: $scope.lonInput,
                n: $scope.nInput

            }).then(
                function (data) {
                    console.log(data);
                    $scope.cities = data;
                },
                function(data, status){
                    console.log(data, status);
                }
            );
        };



    }]);