
  this.impressionViewable = function(element) {
    var height, left, top, width;
    top = element.offsetTop;
    left = element.offsetLeft;
    width = element.offsetWidth;
    height = element.offsetHeight;
    while (element.offsetParent) {
      element = element.offsetParent;
      top += element.offsetTop;
      left += element.offsetLeft;
    }
    return top >= window.pageYOffset && left >= window.pageXOffset && (top + height) <= (window.pageYOffset + window.innerHeight) && (left + width) <= (window.pageXOffset + window.innerWidth);
  };
