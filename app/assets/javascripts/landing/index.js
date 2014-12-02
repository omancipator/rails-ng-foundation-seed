(function(){
    angular.module('landing',["templates", "loanPurposeSelectModule", "creditSelectModule", "loanAmountModule"])

      .controller("LandingFormController",['$scope', function($scope){

          $scope.loanInfo = {
            purposeId: 0,
              amount: 0
          }

          $scope.submitForm = function(){

              alert("booya:" + $scope.loanInfo.purposeId );
          };

      }]);

})();

