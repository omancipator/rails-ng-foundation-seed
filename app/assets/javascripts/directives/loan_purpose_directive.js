//adding to module (getting) module
angular.module("loanPurposeDirective", ['mm.foundation.alert'])

  .service("loanPurposesService", function(){
    // right now these are hard-coded...we may want to fetch these from the db at some point
    // select * from ListingCategory;
    var privatePurposes = [
      {id: 1, title: "Debt consolidation"},
      {id: 2, title: "Home improvement"},
      {id: 3, title: "Business"},
      {id: 6, title: "Auto"},
      {id:16, title: "Motorcycle"},
      {id:17, title: "RV"},
      {id:9,  title: "Boat"},
      {id:15, title: "Medical/Dental"},
      {id:19, title: "Vacation"},
      {id:13, title: "Household Expenses"},
      {id:8,  title: "Baby &amp; Adoption Loans"},
      {id:11, title: "Engagement Ring Financing"},
      {id:20, title: "Wedding Loans"},
      {id:14, title: "Large Purchases"},
      {id:18, title: "Taxes"},
      {id:12, title: "Green Loans"},
      {id:7,  title: "Other"}
    ];
    return{
      getPurposes: function(){
        return privatePurposes;
      }
    };
  })

  .controller("loanPurposeSelectController", ["$scope", "loanPurposesService",function($scope, loanPurposesService){
    $scope.purposes = loanPurposesService.getPurposes();
    $scope.showAlerts = false;
    $scope.selectionMade = function(){
      $scope.showAlert = ($scope.purpose.id == 3) ? true: false;
      console.log($scope.purpose.id);
    };
    $scope.closeAlert = function(){
      $scope.showAlert = false;
    }
  }])

  .directive("loanPurposeSelect", function(){
    return{
      restrict: "E",
      templateUrl: "directives/loan_purpose_select.html",
      controller: "loanPurposeSelectController"
    }
  });
