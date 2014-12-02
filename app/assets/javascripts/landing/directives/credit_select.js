angular.module("creditSelectModule", ["templates"])

  .service("creditSelectService", function(){
    var privateCreditTypes = [
      {id: 1, title: "Excellent Credit (760+)"},
      {id: 2, title: "Good Credit (700+)"},
      {id: 3, title: "Fair Credit (640+)"},
      {id: 4, title: "Poor Credit"},
    ];
    return {
      getCreditTypes: function(){
        return privateCreditTypes;
      }
    }
  })

  .controller("CreditSelectController", ["$scope", "creditSelectService", function($scope, creditSelectService){
    $scope.creditTypes = creditSelectService.getCreditTypes();
  }])

  .directive("creditSelect", function() {
    return {
      restrict: "E",
      templateUrl: 'landing/directives/credit_select_tmpl.html',
      controller: "CreditSelectController"
    }
  });