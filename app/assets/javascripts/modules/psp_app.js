(function(){
    angular.module('pspApp',[])
        .run(function($rootScope, $templateCache){
            $rootScope.$apply($(document).foundation());
        }
    );
})();

