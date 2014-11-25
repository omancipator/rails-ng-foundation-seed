// spec.js
describe('angularjs homepage', function() {
  it('should have a title', function() {
    browser.get('http://127.0.0.1:4444/wd/hub');

    expect(browser.getTitle()).toEqual('Super Calculator');
  });
});