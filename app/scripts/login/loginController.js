/**
 * Created by atruslow on 10/5/14.
 */


app.controller('loginController',
    ['$scope', '$location',  function($scope, $location){
        $scope.form = {
            email: '',
            password: ''
        }

        $scope.submit = function () {
            if (!$scope.form.email) {
                $scope.form.emailError = true;
            } else {
                $scope.form.emailError = false;
            }
            if (!$scope.form.password) {
                $scope.form.passwordError = true;
            } else {
                $scope.form.passwordError = false;
            }
            if ( !$scope.form.passwordError &&  !$scope.form.emailError )  {
                $location.url('/dashboard');
            }
        }

}]);