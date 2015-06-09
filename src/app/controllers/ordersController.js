angular.module('customersApp')
    .controller('ordersController', [
        "$scope",
        "$routeParams",
        "customersFactory",
        OrdersController
    ]);

function OrdersController ($scope, $routeParams, customersFactory) {
    var customerId = $routeParams.customerId;
    $scope.customer = null;

    function init() {
        $scope.customer = customersFactory.getCustomer(customerId);
    }

    init();

}