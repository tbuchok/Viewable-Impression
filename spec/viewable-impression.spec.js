describe('impressionViewable', function(){
  it('should return AdImpression', function(){
    var element = document.createElement('div');
    var adImpression = new AdImpression(element);
    expect(adImpression).toBeDefined();
  });
  it('should be viewable', function(){
    var topElement = document.createElement('div');
    topElement.style.position = 'absolute';
    topElement.style.top = '0px';
    topElement.style.left = '0px';
    document.body.appendChild(topElement);
    var adImpression = new AdImpression(topElement);
    expect(adImpression.viewed()).toBe(true);
  });
  it('should not be viewable at first, but after scroll be viewable', function(){
    var bottomElement = document.createElement('div');
    bottomElement.style.position = 'absolute';
    bottomElement.style.top = '1000px';
    bottomElement.style.left = '0px';
    document.body.appendChild(bottomElement);
    var adImpression = new AdImpression(bottomElement);
    expect(adImpression.viewed()).toBe(false);
    var tallElement = document.createElement('div');
    tallElement.style.height = "1000px";
    document.body.appendChild(tallElement);
    window.scrollTo(0, 1000);
    expect(adImpression.viewed()).toBe(true);
  });
});