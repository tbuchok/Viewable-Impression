class this.AdImpression
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

      window.onscroll = ->
        @isVisible()

      @isVisible()

    viewed: ->
      @isVisible()

    isVisible: =>
      result = @top >= window.pageYOffset && @left >= window.pageXOffset && (@top + @height) <= (window.pageYOffset + window.innerHeight) && (@left + @width) <= (window.pageXOffset + window.innerWidth)
      if result is true
        @_viewed = true
      @_viewed




