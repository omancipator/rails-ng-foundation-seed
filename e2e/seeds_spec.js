describe("landing page form", function(){
  beforeEach(function(){
    browser.get("http://localhost:3000/");
  });
  it("should say welcome somewhere", function(){
    var h1 = $('h1');
    expect(h1.getText()).toMatch(/welcome/);
  });
  it("should have an input for loan amount", function(){
    var input = $('input#amount');
    expect(input).toBeDefined();
  });

  it("should have a select for loan purpose", function(){
    var loanPurposeSelect = $('.d-loan-purpose-select');
    expect(loanPurposeSelect).toBeDefined();
  });

});

