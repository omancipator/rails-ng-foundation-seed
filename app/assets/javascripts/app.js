angular.module('pspApp',['templates', 'mm.foundation.alert', 'psp.widgets'])
  .run(function($rootScope){
    $rootScope.$apply($(document).foundation());
  }
);



