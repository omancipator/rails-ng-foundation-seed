(function(){
    angular.module('pspApp',['templates', 'loanPurposeSelectModule'])
        .run(function($rootScope, $templateCache){
            $rootScope.$apply($(document).foundation());

            atmpl = $templateCache.get('template/alert/alert.html');
        }
    );
})();

