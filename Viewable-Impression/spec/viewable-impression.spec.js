describe('impressionViewable', function(){
  it('should be viewable', function(){
    var topElement = document.createElement('div');
    topElement.style.position = 'absolute';
    topElement.style.top = '0px';
    topElement.style.left = '0px';
    document.body.appendChild(topElement);
    expect(impressionViewable(topElement)).toBe(true);
  });
  it('should not be viewable', function(){
    var bottomElement = document.createElement('div');
    bottomElement.style.position = 'absolute';
    bottomElement.style.top = '9999px';
    bottomElement.style.left = '0px';
    document.body.appendChild(bottomElement);
    expect(impressionViewable(bottomElement)).toBe(false);
  });
});