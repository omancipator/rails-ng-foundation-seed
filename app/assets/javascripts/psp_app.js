(function (angular) {
  angular.module('pspApp', ['home', 'landing'])
    .run(function ($rootScope) {
      $rootScope.$apply($(document).foundation());
    }
  );
})(angular);