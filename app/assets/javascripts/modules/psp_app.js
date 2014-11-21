(function(){
  angular.module("pspApp", ['templates', 'loanPurposeDirective'])
    .run(function($rootScope){
      $rootScope.$apply($(document).foundation());
    });
})();