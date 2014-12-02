(function (angular) {
  angular.module('pspApp', ['ui.router', 'home', 'landing'])


    .config(function($stateProvider, $urlRouterProvider) {
      $stateProvider
        .state('landing', {
          url: 'landing',
          templateUrl: 'landing/index_tmpl.html',
          controller: "LandingFormController as landingCtrl"
        })

      $urlRouterProvider.otherwise('/landing');
    })


    .run(function ($rootScope) {
      $rootScope.$apply($(document).foundation());
    }

  );
})(angular);