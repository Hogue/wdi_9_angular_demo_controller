(function customersAppIIFE(){
  // Create a Module for this app with a name of 'customersApp'
  // It has NO dependencies, empty Array as the second param
  var app = angular.module('customersApp', ['ngRoute']);

  app.module.config(function($routeProvider){
    $routeProvider
      .when('/',
            {
              controller: 'customersController',
              templateUrl: 'app/views/customers.html'
            }
           )
      .otherwise({redirectTo: '/'});
  });

})();
