/**
 * Can inject dependencies in square brackets
 */
angular.module("customersApp")
    .controller("customersController", [
        "$scope",
        "customersFactory",
        CustomersController
    ]);

/**
 * This is another approach - remember this is necessary because of minification.
 */
//CustomersController.$inject["$scope"];

function CustomersController ($scope, customersFactory) {
    $scope.sortBy = 'name';
    $scope.reverse = false;
    $scope.customers = [];

    function init () {
        $scope.customers = customersFactory.getCustomers();
    }

    init();

    $scope.doSort = function (propName) {
        $scope.sortBy = propName;
        $scope.reverse = !$scope.reverse;
    }
}
