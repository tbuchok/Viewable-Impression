exports = exports || this

class AdImpression
    constructor: (@element) ->
      @_viewed = false;
      @top = element.offsetTop
      @left = element.offsetLeft
      @width = element.offsetWidth
      @height = element.offsetHeight

      while element.offsetParent
        element = element.offsetParent
        @top += element.offsetTop
        @left += element.offsetLeft

      window.onscroll = =>
        @viewed()

    viewed: ->
      result = @top >= window.pageYOffset && @left >= window.pageXOffset && (@top + @height) <= (window.pageYOffset + window.innerHeight) && (@left + @width) <= (window.pageXOffset + window.innerWidth)
      if result is true
        @_viewed = true
      @_viewed

exports.AdImpression = AdImpression




