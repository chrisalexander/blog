var text = {

  "fade": function() {
    var els = document.getElementsByClassName("textfade");
    var fns = [];
    for (var i = 0; i < els.length; i++) {
      fns.push(function() {
        (function(el) {
          var hideTimeout = false;
          var show = function(first) {
            if (hideTimeout) {
              clearTimeout(hideTimeout);
            }
            hideTimeout = setTimeout(function() {
              hideTimeout = false;
              cl.add(el, "textfadehide");
            }, first ? 5000 : 1500);
            cl.remove(el, "textfadehide");
          }
          show(true);
          var handleEvent = function(e) {
            show();
          }
          var target = el.className.match(/textfadeglobal/) ? window : el;
          target.onmousemove = handleEvent;
          target.ontouchstart = handleEvent;
        })(els[i]);
      });
    }
    window.onload = function() {
      fns.map(function(fn) {
        fn();
      });
    }
  },
  
  "scrollfade": function() {
    var els = document.getElementsByClassName("scrollfade");
    var forEachEl = function(fn) {
      for (var i = 0; i < els.length; i++) {
        fn(els[i]);
      }
    }
    window.onscroll = function() {
      if (window.scrollY > Math.floor(window.innerHeight/10)) {
        forEachEl(function(el) {
          cl.add(el, "scrollfadehide");
        });
      } else {
        forEachEl(function(el) {
          cl.remove(el, "scrollfadehide");
        });
      }
    }
  }
  
}
