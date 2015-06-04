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
    $scope.customers= [
        {
            id: 1,
            joined: '2000-12-02',
            name:'John',
            city:'Chandler',
            orderTotal: 9.9956,
            orders: [
                {
                    id: 1,
                    product: 'Shoes',
                    total: 9.9956
                }
            ]
        },
        {
            id: 2,
            joined: '1965-01-25',
            name:'Zed',
            city:'Las Vegas',
            orderTotal: 19.99,
            orders: [
                {
                    id: 2,
                    product: 'Baseball',
                    total: 9.995
                },
                {
                    id: 3,
                    product: 'Bat',
                    total: 9.995
                }
            ]
        },
        {
            id: 3,
            joined: '1944-06-15',
            name:'Tina',
            city:'New York',
            orderTotal:44.99,
            orders: [
                {
                    id: 4,
                    product: 'Headphones',
                    total: 44.99
                }
            ]
        },
        {
            id: 4,
            joined: '1995-03-28',
            name:'Dave',
            city:'Seattle',
            orderTotal:101.50,
            orders: [
                {
                    id: 5,
                    product: 'Kindle',
                    total: 101.50
                }
            ]
        }
    ];

    $scope.doSort = function (propName) {
        $scope.sortBy = propName;
        $scope.reverse = !$scope.reverse;
    }
}

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