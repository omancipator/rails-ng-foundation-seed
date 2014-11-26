// Angular Rails Templates 0.1.3
//
// angular_templates.ignore_prefix: ["angular-foundation/"]
// angular_templates.markups: ["erb", "str"]
// angular_templates.htmlcompressor: false

angular.module("templates", []);

// Angular Rails Template
// source: app/assets/templates/directives/loan_purpose_select_tmpl.html

angular.module("templates").run(["$templateCache", function($templateCache) {
  $templateCache.put("directives/loan_purpose_select_tmpl.html", '<div class="large-3 columns d-loan-purpose-select">\n  <label>Loan Purpose\n    <select name="lcatid" ng-model="purpose" ng-change="selectionMade()" ng-options="purpose.title for purpose in purposes">\n      <option selected="selected" value="">- Select -</option>\n    </select>\n  </label>\n\n  <alert class="alert-box info radius" close="closeAlert()" ng-show="showAlert">\n    <span class="label">Note</span>\n    A Prosper loan for small businesses is a personal loan for business expenses. Individual borrowers will be personally liable for the debt and loans are not related to or guaranteed by the Small Business Administration.\n  </alert>\n</div>')
}]);

// Angular Rails Template
// source: vendor/assets/bower_components/angular-foundation/template/alert/alert.html

angular.module("templates").run(["$templateCache", function($templateCache) {
  $templateCache.put("template/alert/alert.html", "<div class='alert-box' ng-class='(type || \"\")'>\n  <span ng-transclude></span>\n  <a ng-show='closeable' class='close' ng-click='close()'>&times;</a>\n</div>")
}]);

//adding to module (getting) module
angular.module("loanPurposeSelectModule",['templates', 'mm.foundation.alert'])

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

  .controller("LoanPurposeSelectController", ["$scope", "loanPurposesService",function($scope, loanPurposesService){
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
      templateUrl: "directives/loan_purpose_select_tmpl.html",
      controller: "LoanPurposeSelectController"
    }
  });
(function(){
    angular.module('karma',["templates", "loanPurposeSelectModule"]);
})();

// templates
//**********
// add plug ins


// one of ours:


// one from a framework:
// note: this will resolve because of the following setting in application.rb:
// config.assets.paths << Rails.root.join("vendor","assets","bower_components", "angular-foundation"):


// nested files
//*************



// module
//*******

;
