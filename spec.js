describe('test local page', function() {
  browser.get('');
  it('should have the text hello world', function() {
    expect(element(by.css('html')).getText()).toContain('Hello World');
  })
})
