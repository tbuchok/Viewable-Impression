(function() {
  var AdImpression, exports;

  exports = exports || this;

  AdImpression = (function() {

    function AdImpression(element) {
      var _this = this;
      this.element = element;
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
        return _this.viewed();
      };
    }

    AdImpression.prototype.viewed = function() {
      var result;
      result = this.top >= window.pageYOffset && this.left >= window.pageXOffset && (this.top + this.height) <= (window.pageYOffset + window.innerHeight) && (this.left + this.width) <= (window.pageXOffset + window.innerWidth);
      if (result === true) this._viewed = true;
      return this._viewed;
    };

    return AdImpression;

  })();

  exports.AdImpression = AdImpression;

}).call(this);
