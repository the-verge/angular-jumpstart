angular.module("root", [])
    .controller("customersController", ["$scope", function ($scope) {
        $scope.sortBy = 'name';
        $scope.reverse = false;
        $scope.customers = [
            {name: 'John', city: 'Athlone', joined: '2000-12-15', orderTotal: 99.9956},
            {name: 'Triona', city: 'Navan', joined: '2005-06-03', orderTotal: 10.112},
            {name: 'Dave', city: 'Slane', joined: '2001-04-06', orderTotal: 8.664},
            {name: 'Andy', city: 'Drogheda', joined: '2006-08-06', orderTotal: 4.664}
        ];
        $scope.doSort = function (propName) {
            $scope.sortBy = propName;
            $scope.reverse = !$scope.reverse;
        }
    }]);