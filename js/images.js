var images = {

  "applyBackgroundImages": function() {
    var els = document.getElementsByClassName("bgfade");
    for (var i = 0; i < els.length; i++) {
      var el = els[i];

      var matches = el.style.backgroundImage.match(/^url\("(.+)"\)$/);
      if (!matches || matches.length < 1) { continue; }
      var url = matches[1];
      el.style.opacity = 0;
      el.style.backgroundImage = "";

      var img = new Image();
      img.onload = (function(el, url) {
        return function() {
          el.style.backgroundImage = 'url("' + url + '")';
          el.className += " fade";
          el.style.opacity = 1;
        }
      })(el, url);
      img.src = url;
    }
  },

  "renderImages": function() {
    var imgs = document.getElementsByTagName("img");
    for (var i = 0; i < imgs.length; i++) {
      var img = imgs[i];
      if (!img.complete) {
        img.style.opacity = 0;
        img.onload = function() {
          this.style.opacity = 1;
        }
      }
    }
  },

  "width": function(el) {
    return el.width;
  },

  "height": function(el) {
    return el.height;
  },

  "orientation": function(el) {
    if (el.width > el.height) {
      return "L";
    } else if (el.width < el.height) {
      return "P";
    }
    return "S";
  }

}
