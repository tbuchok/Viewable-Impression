(function() {
  var __bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; };

  this.AdImpression = (function() {

    function AdImpression(element) {
      this.element = element;
      this.isVisible = __bind(this.isVisible, this);
      this._viewed = false;
      this.top = element.offsetTop;
      this.left = element.offsetLeft;
      this.width = element.offsetWidth;
      this.height = element.offsetHeight;
      while (element.offsetParent) {
        element = element.offsetParent;
        this.top += element.offsetTop;
        this.left += element.offsetLeft;
      }
      window.onscroll = function() {
        return this.isVisible();
      };
      this.isVisible();
    }

    AdImpression.prototype.viewed = function() {
      return this.isVisible();
    };

    AdImpression.prototype.isVisible = function() {
      var result;
      result = this.top >= window.pageYOffset && this.left >= window.pageXOffset && (this.top + this.height) <= (window.pageYOffset + window.innerHeight) && (this.left + this.width) <= (window.pageXOffset + window.innerWidth);
      if (result === true) this._viewed = true;
      return this._viewed;
    };

    return AdImpression;

  })();

}).call(this);
