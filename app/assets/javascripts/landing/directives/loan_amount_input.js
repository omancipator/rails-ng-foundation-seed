angular.module("loanAmountModule", ["templates"])
.controller("LoanAmountInputController", [function(){

  }])

.directive("loanAmountInput", function(){
    return{
      restrict: "E",
      templateUrl: "landing/directives/loan_amount_input_tmpl.html"
    }
  })