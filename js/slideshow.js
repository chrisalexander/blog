var slideshow = function(inputConfig, inputTarget) {

  var target = inputTarget;

  var defaultClasses = target.className;

  var currentImage = 0;

  var config = inputConfig.map(function(image) {
    return {
      "userConfig": image,
      "loaded": false,
      "loading": false,
      "loadCallbacks": [],
      "el": new Image(),
      "orientation": "?"
    }
  });

  var loaded = function(i, cb) {
    var img = config[i];
    img.loaded = true;
    img.loading = false;
    while (img.loadCallbacks.length) {
      img.loadCallbacks.shift()();
    }
    if (cb) {
      cb();
    }
  }

  var load = function(i, cb) {
    var img = config[i];
    if (img.loading) {
      if (cb) {
        img.loadCallbacks.push(cb);
      }
      return;
    }
    img.loading = true;
    if (img.loaded) {
      loaded(i, cb);
      return;
    }
    img.el.onload = (function(i, cb) {
      return function() {
        loaded(i, cb);
      }
    })(i, cb);
    img.el.src = img.userConfig.src;
  }

  var apply = function(i) {
    var img = config[i];

    img.orientation = images.orientation(img.el);

    target.querySelector(".heading").innerText = img.userConfig.heading || "";
    target.querySelector(".subheading").innerText = img.userConfig.subheading || "";

    if (img.userConfig.overscroll) {
      target.querySelector(".image").style.backgroundImage = "";
      target.querySelector(".overscroll").src = img.userConfig.src;
    } else {
      target.querySelector(".image").style.backgroundImage = "url(" + img.userConfig.src + ")";
      target.querySelector(".overscroll").src = "";
    }

    target.className = defaultClasses;
    cl.add(target, "orientation-" + img.orientation);
    if (img.userConfig.heading || img.userConfig.subheading) {
      cl.add(target, "description")
    }
    if (img.userConfig.overscroll) {
      cl.add(target, "overscroll");
    }

    window.location.hash = "#photo_" + (i + 1);

    target.style.opacity = 1;
  }

  var next = function(e) {
    if (e) {
      e.preventDefault();
    }

    target.style.opacity = 0;

    currentImage++;
    if (currentImage >= config.length) {
      currentImage = 0;
    }
    var nextImage = currentImage + 1;
    if (nextImage >= config.length) {
      nextImage = 0;
    }

    load(currentImage, (function(i) {
      return function() {
        apply(i);
      }
    })(currentImage));

    load(nextImage);
  }

  var getAnchor = function() {
    var anchor = window.location.hash.replace(/^#photo_/, "");
    if (!anchor.length) {
      return false;
    }
    var anchorInt = parseInt(anchor);
    if (anchorInt == NaN) {
      return false;
    }
    return anchorInt;
  }

  window.addEventListener("hashchange", function() {
    var anchor = getAnchor();
    if (!anchor) {
      return;
    }
    currentImage = anchor - 2;
    next();
  }, false);

  var begin = function() {
    currentImage = -1;
    var start = getAnchor();
    if (start) {
      currentImage = start - 2;
    }
    next();
  }

  return {
    "next": next,
    "begin": begin
  }
}
