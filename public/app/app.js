angular.module('app',[]);

angular.module('app').controller('testCtrl',function($scope) {
   $scope.jobs = [
       {
            title: 'Sales Person',
            description: 'test '
        },
        {
            title: 'Accountant',
            description: 'something'
        }
       ];
});