(function (angular) {
  angular.module('pspApp', ['home', 'karma'])
    .run(function ($rootScope) {
      $rootScope.$apply($(document).foundation());
    }
  );
})(angular);