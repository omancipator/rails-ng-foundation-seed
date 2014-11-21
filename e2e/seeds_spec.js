describe("seeds welcome page", function(){
  beforeEach(function(){
    browser.get("http://localhost:3000");
  });
  it("should say welcome somewhere", function(){
    var h1 = $('h1');
    expect(h1.getText()).toMatch(/welcome/);
  });
  it("should have a link to the second page", function(){
    var link = $('[href="/pageTwo"]');
    expect(link).toBeDefined();
    link.click();
    var newPage = $('h1');
    expect(newPage.getText()).toMatch("page two");
  });
});

describe("seeds pageTwo", function(){
  it("should have a back link", function(){
    browser.get("http://localhost:3000/pageTwo")
    var link = $('a');
    expect(link).toBeDefined();
    link.click();
    var h1 = $('h1');
    expect(h1.getText()).toMatch(/welcome/);
  });
});
