describe("loanPurposeSelectModule", function(){

  var $rootScope, $compile, $controller, scope
  beforeEach( module("loanPurposeSelectModule", "templates") );


  beforeEach(inject(function(_$rootScope_, _$compile_, _$controller_){
    $rootScope = _$rootScope_;
    $compile = _$compile_;
    $controller = _$controller_;
    element = angular.element("<loan-purpose-select></loan-purpose-select>");
    scope = $rootScope.$new();
  }));




  describe("loanPurposeSelect", function(){

    // helper function
    function createDirective() {
      $compile(element)(scope);
      scope.$digest();
      return element.find('.d-loan-purpose-select');
    }

    it("should show the d-loan-purpose-select class element", function(){
      var dir = createDirective();
      expect(dir).toBeDefined();
    });

    it("should show a dropdown of loan purposes", function(){
      var dir = createDirective();
      var select = dir.find("select");
      expect(select).toBeDefined();
      //expect(true).toBeFalsy();
    });

  });





});