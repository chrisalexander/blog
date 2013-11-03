var cl = {

  "add":  function(el, cl) {
    if (!el.className.match(new RegExp(" " + cl))) {
      el.className += " " + cl;
    }
  },
  
  "remove": function(el, cl) {
    el.className = el.className.replace(new RegExp(" " + cl, "g"), "");
  }
  
}
