//angular.module("customersApp")
//    .controller("customersController", function ($scope) {
//        $scope.sortBy = 'name';
//        $scope.reverse = false;
//        $scope.customers = [
//            {name: 'John', city: 'Athlone', joined: '2000-12-15', orderTotal: 99.9956},
//            {name: 'Triona', city: 'Navan', joined: '2005-06-03', orderTotal: 10.112},
//            {name: 'Dave', city: 'Slane', joined: '2001-04-06', orderTotal: 8.664},
//            {name: 'Andy', city: 'Drogheda', joined: '2006-08-06', orderTotal: 4.664}
//        ];
//        $scope.doSort = function (propName) {
//            $scope.sortBy = propName;
//            $scope.reverse = !$scope.reverse;
//        }
//    });

/**
 * Can inject dependencies in square brackets
 */
angular.module("customersApp")
    .controller("customersController", ["$scope", CustomersController]);

/**
 * This is another approach - remember this is necessary because of minification.
 */
//CustomersController.$inject["$scope"];

function CustomersController ($scope) {
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
}

/**
 * Needs change to controller directive in index.html - sorting not working
 */

//angular.module("customersApp")
//    .controller("customersController", CustomersController);
//
//function CustomersController () {
//    this.sortBy = 'name';
//    this.reverse = false;
//    this.customers = [
//        {name: 'John', city: 'Athlone', joined: '2000-12-15', orderTotal: 99.9956},
//        {name: 'Triona', city: 'Navan', joined: '2005-06-03', orderTotal: 10.112},
//        {name: 'Dave', city: 'Slane', joined: '2001-04-06', orderTotal: 8.664},
//        {name: 'Andy', city: 'Drogheda', joined: '2006-08-06', orderTotal: 4.664}
//    ];
//    this.doSort = function (propName) {
//        this.sortBy = propName;
//        this.reverse = !this.reverse;
//    }
//}