/**
 * Created by atruslow on 10/16/14.
 */

app.controller('zipCodeLookUpController',
    ['$scope', 'zipCodeService',  function($scope, zipCodeService){
        $scope.response = {
            city: '',
            lat: '',
            long: ''
        };

        $scope.findZip = function () {
            zipCodeService.getZipInfo($scope.zipInput)
                .then(function(zipInfo){
                    $scope.response = zipInfo;
                },
                function(data, status){
                    console.log(data, status);
                }
            );

        };

    }]);
