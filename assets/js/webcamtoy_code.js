var WebcamToy = {};
if (!window.console || !console.log) {
  window.console = {
    /**
     * @return {undefined}
     */
    log : function() {
    },
    /**
     * @return {undefined}
     */
    error : function() {
    }
  };
}
/** @type {function (): undefined} */
var DealPly = DealPly || function() {
};
(function(i, d, tag, path, r, el, s) {
  /** @type {string} */
  i.GoogleAnalyticsObject = r;
  i[r] = i[r] || function() {
    (i[r].q = i[r].q || []).push(arguments);
  };
  /** @type {number} */
  i[r].l = 1 * new Date;
  /** @type {Element} */
  el = d.createElement(tag);
  s = d.getElementsByTagName(tag)[0];
  /** @type {number} */
  el.async = 1;
  /** @type {string} */
  el.src = path;
  s.parentNode.insertBefore(el, s);
})(window, document, "script", "//www.google-analytics.com/analytics.js", "ga");
ga("create", "UA-56095-9", "auto");
ga("send", "pageview");
(function(self) {
  /**
   * @param {string} name
   * @return {undefined}
   */
  function fn(name) {
    if (window.$) {
      $("#toy-intro>p").hide();
      $("#prompt-" + name).show();
    }
  }
  /**
   * @return {undefined}
   */
  function finish() {
    var value = self.log();
    try {
      if (value.length > 0) {
        /** @type {string} */
        var name = (new Date).toUTCString() + ", V" + self.version;
        if (!home) {
          name += " App";
        }
        localStorage.setItem("log", name + "\n" + value);
      }
    } catch (R) {
    }
  }
  /**
   * @param {string} err
   * @param {(number|string)} element
   * @return {undefined}
   */
  function next(err, element) {
    if (err) {
      src += err + "<br>";
      if ($field.is(":visible")) {
        $("#toy-intro footer").show();
        $("#footer-message").html(src);
      }
      if (self.Services && !self.Services.isHosted) {
        console.error("" + err, element);
      }
      if (src && /context|Effects not/.test(src)) {
        /** @type {boolean} */
        object = true;
        element = element || token;
      }
      self.trackEvent("Error", "" + err, element, true);
      self.log("*ERROR*", "" + err, element);
    }
  }
  /**
   * @return {?}
   */
  function dispatchEvent() {
    return $("#app-flash")[0];
  }
  /**
   * @param {string} event
   * @param {?} deepDataAndEvents
   * @return {undefined}
   */
  function focus(event, deepDataAndEvents) {
    self.Services.facebookAlbum(function(segment, elem, statics) {
      var result = dispatchEvent();
      if (result) {
        if (result.setFacebookAlbumURL) {
          result.setFacebookAlbumURL(segment);
        }
        if (result.setFacebookAlbumPrivacy) {
          result.setFacebookAlbumPrivacy(elem);
        }
        if (result.setFacebookAlbumID) {
          result.setFacebookAlbumID(statics);
        }
      }
    }, event, deepDataAndEvents);
  }
  /**
   * @param {?} elem
   * @return {undefined}
   */
  function triggerEvent(elem) {
    var selector = dispatchEvent();
    if (selector && selector.setFacebookToken) {
      selector.setFacebookToken(elem);
    }
  }
  /**
   * @param {?} o
   * @return {undefined}
   */
  function handleEvents(o) {
    var result = dispatchEvent();
    if (result && result.setFacebookUser) {
      result.setFacebookUser(o.fullName);
    }
  }
  /**
   * @param {string} deepDataAndEvents
   * @param {string} element
   * @param {(number|string)} node
   * @return {undefined}
   */
  function detach(deepDataAndEvents, element, node) {
    var result = dispatchEvent();
    if (result && result.setTwitterUser) {
      result.setTwitterUser(deepDataAndEvents, element, node);
    }
  }
  /**
   * @param {string} deepDataAndEvents
   * @param {string} element
   * @param {(number|string)} arr
   * @return {undefined}
   */
  function clone(deepDataAndEvents, element, arr) {
    var result = dispatchEvent();
    if (result && result.setTumblrUser) {
      result.setTumblrUser(deepDataAndEvents, element, arr);
    }
  }
  /**
   * @param {string} deepDataAndEvents
   * @param {string} element
   * @return {undefined}
   */
  function setWidth(deepDataAndEvents, element) {
    var result = dispatchEvent();
    if (result && result.setVKUser) {
      result.setVKUser(deepDataAndEvents, element);
    }
  }
  /**
   * @param {string} deepDataAndEvents
   * @return {undefined}
   */
  function accelWin(deepDataAndEvents) {
    var result = dispatchEvent();
    if (result && result.setVKAlbum) {
      result.setVKAlbum(deepDataAndEvents);
    }
  }
  /**
   * @return {undefined}
   */
  function ready() {
    if (window.$) {
      $("#home").remove();
    }
    delete self.Home;
    /** @type {boolean} */
    home = false;
  }
  /**
   * @return {undefined}
   */
  function parse() {
    var $elem = $("#app-no-flash a,#home-no-flash a");
    if (self.ua.chrome) {
      $elem.attr("href", self.ua.chromeVersion > 11 ? "https://support.google.com/chrome/answer/108086?hl=" + (navigator.userLanguage || (navigator.language || self.ua.locale)) : "https://www.google.com/chrome/browser/desktop/");
    } else {
      if (self.ua.ie && (!self.ua.ieOld && (window.external && (typeof window.external.msActiveXFilteringEnabled !== "undefined" && external.msActiveXFilteringEnabled())))) {
        var lang = self.ua.locale || "en";
        /** @type {string} */
        var locale = lang + "-" + lang.toUpperCase();
        switch(lang) {
          case "en":
            /** @type {string} */
            locale = "en-US";
            break;
          case "cs":
            /** @type {string} */
            locale = "cs-CZ";
            break;
          case "da":
            /** @type {string} */
            locale = "da-DK";
            break;
          case "el":
            /** @type {string} */
            locale = "el-GR";
            break;
          case "es":
            /** @type {string} */
            locale = "es-XL";
            break;
          case "ja":
            /** @type {string} */
            locale = "ja-JP";
            break;
          case "nb":
            /** @type {string} */
            locale = "nb-NO";
            break;
          case "pt":
            if (navigator.userLanguage === "pt-PT") {
              /** @type {string} */
              locale = "pt-PT";
            } else {
              /** @type {string} */
              locale = "pt-BR";
            }
            break;
          case "sr":
            /** @type {string} */
            locale = "sr-latn-RS";
            break;
          case "sv":
            /** @type {string} */
            locale = "sv-SE";
            break;
          case "zh":
            /** @type {string} */
            locale = "zh-CN";
            break;
        }
        $elem.attr("href", "http://windows.microsoft.com/" + locale + "/internet-explorer/use-activex-filtering").text($elem.eq(0).text().replace(/Adobe.Flash.Player/, "ActiveX"));
      }
    }
    if (home) {
      $("#home-main,#button-init").hide();
      $("#home-no-flash").removeClass("hidden");
    } else {
      $("#toy-intro>p,#toy-intro footer,#button-start").hide();
      $("#app-no-flash").show();
      $next.addClass("bg-toy");
    }
    var version;
    try {
      if (!!self.swfobject && self.swfobject.getFlashPlayerVersion) {
        version = self.swfobject.getFlashPlayerVersion();
        /** @type {string} */
        version = version.major + "." + version.minor + "." + version.release;
      }
    } catch (W) {
    }
    /** @type {string} */
    var title = "Flash not available";
    self.trackEvent("Error", title, version, true);
    self.log("*ERROR*", title, version);
  }
  /**
   * @param {number} callbacks
   * @return {?}
   */
  function initialize(callbacks) {
    if (!("localStorage" in window) || window.localStorage === null) {
      return-1;
    }
    if (callbacks && callbacks > 0) {
      try {
        localStorage.setItem("saveCount", callbacks);
        return callbacks;
      } catch (S) {
      }
    } else {
      try {
        return parseInt(localStorage.getItem("saveCount"), 10) || 1;
      } catch (S) {
      }
    }
    return-1;
  }
  /**
   * @return {undefined}
   */
  function handler() {
    if (!Q) {
      var target = dispatchEvent();
      var targets = $(target);
      if (!target || target && !target.eitest) {
        var activeClassName;
        if (self.ua.chrome) {
          if (targets.attr("title") === "Adobe Flash Player") {
            /** @type {string} */
            activeClassName = "chrome";
          } else {
            if ($(".flc-panel")[0]) {
              /** @type {string} */
              activeClassName = "flashcontrol";
            }
          }
        } else {
          if (self.ua.firefox) {
            if ($("div[bgactive]")[0]) {
              /** @type {string} */
              activeClassName = "flashblock";
            }
          }
        }
        if (activeClassName) {
          self.error("Flash blocked", activeClassName);
        } else {
          if (target) {
            targets.hide();
          }
          $next.show().addClass("bg-toy");
          $("#footer-message").show();
          self.error("Flash not loaded");
        }
      }
    }
  }
  /**
   * @return {undefined}
   */
  function load() {
    self.log("Init Flash");
    if (c) {
      if (!self.swfobject) {
        return;
      }
      if (!property) {
        /** @type {boolean} */
        property = true;
        self.removeFooter();
        $next.hide();
        if (!dispatchEvent()) {
          $el.show().append('<div id="app-flash"></div>').show();
        }
        if (!self.ua.ieOld) {
          jQuery(document).on("visibilitychange webkitvisibilitychange mozvisibilitychange", function() {
            self.log("App", document.hidden || (document.webkitHidden || document.mozHidden) ? "hidden" : "visible");
            finish();
          });
        }
      }
      /** @type {function (string, ?): undefined} */
      self.Services.flashFacebookAlbum = focus;
      /** @type {function (?): undefined} */
      self.Services.onFacebookAuth = triggerEvent;
      /** @type {function (?): undefined} */
      self.Services.onFacebookUser = handleEvents;
      /** @type {function (string, string, (number|string)): undefined} */
      self.Services.onTwitterAuth = detach;
      /** @type {function (string, string, (number|string)): undefined} */
      self.Services.onTumblrAuth = clone;
      /** @type {function (string, string): undefined} */
      self.Services.onVKAuth = setWidth;
      /** @type {function (string): undefined} */
      self.Services.onVKAlbum = accelWin;
      /** @type {function (number): ?} */
      self.Services.flashSaveCount = initialize;
      clearTimeout(id);
      /** @type {number} */
      id = setTimeout(handler, 8E3);
      self.swfobject.createSWF({
        data : ids,
        width : "100%",
        height : "100%"
      }, {
        base : self.Services.assetsURL + "flash/",
        bgcolor : "#000000",
        allowfullscreen : "true",
        allowscriptaccess : "always",
        flashvars : "embed=1&infobar=" + (self.ua.chromeVersion > 26 ? 1 : 0) + "&fbver=" + self.Services.facebookVersion + "&shaderscale=" + (self.swfobject.hasFlashPlayerVersion("11.8.0") ? self.ua.mac ? 0.5 : 0.4 : 1) + "&oauthurl=" + self.Services.oauthURL + "&lang=" + (navigator.userLanguage || (navigator.language || "en")).toLowerCase() + "&v=" + ($next.attr("data-swf-main") || 1)
      }, "app-flash");
    } else {
      parse();
    }
    ready();
  }
  /**
   * @param {boolean} recurring
   * @return {undefined}
   */
  function request(recurring) {
    c = !!self.swfobject && self.swfobject.hasFlashPlayerVersion(self.ua.mac ? "10.3.183" : "10.1.0");
    /** @type {string} */
    ids = self.Services.assetsURL + "flash/loader-" + self.ua.locale + "." + ($next.attr("data-swf-loader") || 1) + ".swf";
    if (recurring) {
      load();
      return;
    }
    if (home) {
      if (c) {
        $.get(ids);
      } else {
        parse();
      }
    } else {
      load();
    }
  }
  /**
   * @param {boolean} recurring
   * @return {undefined}
   */
  function success(recurring) {
    if (self.ua.mobile || self.ua.tablet) {
      return;
    }
    if (self.swfobjectInit) {
      self.swfobjectInit();
      delete self.swfobjectInit;
    }
    if (!!self.swfobject) {
      request(recurring);
    }
  }
  /**
   * @return {undefined}
   */
  function init() {
    self.log("Start HTML5");
    if (!self.Capabilities.webGL) {
      self.error("WebGL not enabled", token);
      return;
    }
    $this.hide();
    if (self.Camera.hasSecureAccess) {
      fn("loading");
    } else {
      self.showAccess();
      fn("access" + ((self.ua.firefox || self.ua.chrome) && !self.ua.mobile ? "-above" : ""));
    }
    self.Camera.getCamera(function(defs, pattern, deepDataAndEvents) {
      if (deepDataAndEvents) {
        self.error(deepDataAndEvents, pattern);
        return;
      }
      token = pattern || "";
      self.trackEvent("Capabilities", "Camera", token, true);
      if (src.length > 0) {
        self.trackEvent("Error", "Camera error recovered", "", true);
      }
      self.log("Camera accessed", token);
      self.hideAccess();
      $this.hide();
      fn("loading");
      $("#footer-check").hide();
      $("#toy-intro footer").fadeOut(150, function() {
        $field.addClass("wait");
        if (!self.ua.mobile) {
          self.Audio.loadAudio();
        }
        self.Effect.loadImages(function() {
          self.log("Images loaded");
          self.Effect.loadEffects(function() {
            self.log("Effects loaded");
            try {
              localStorage.removeItem("forceFlash");
            } catch (U) {
            }
            setTimeout(function() {
              self.UI.init(defs);
            }, 150);
          }, function(ctxt) {
            self.error("Effects not loaded", ctxt);
          });
        }, function(ctxt) {
          self.error("Images not loaded", ctxt);
        });
      });
    }, function(err) {
      self.hideAccess();
      if (err) {
        /** @type {string} */
        src = "";
        next(err, token);
      }
      if (e < 2) {
        e++;
        fn("request-error");
        $("#footer-check").show();
        $this.show();
      } else {
        /** @type {string} */
        src = "";
        self.error("Camera not found", token);
      }
    });
  }
  /**
   * @return {undefined}
   */
  function done() {
    try {
      localStorage.setItem("forceFlash", "1");
      self.trackEvent("Capabilities", "ForceFlash", "true", true);
      self.log("ForceFlash");
    } catch (R) {
    }
  }
  /**
   * @return {undefined}
   */
  function show() {
    self.log("Init HTML5");
    if (self.ua.mobile) {
      $("header,#mobile-sponsor").remove();
      $("#content").css({
        top : 0,
        bottom : 0
      });
    }
    self.Effect.preloadImages();
    $next.addClass("bg-toy");
    $("#prompt-request,#footer-message").show();
    $("#prompt-error").hide();
    $this.removeClass("hidden").buttonClick(init);
    $("#prompt-request-error a,#button-start-flash").click(function(types) {
      /** @type {boolean} */
      property = false;
      if (types) {
        types.preventDefault();
      }
      if (object && self.Capabilities.localStorage) {
        done();
      }
      success(true);
    });
    $el.fadeIn(150);
    ready();
  }
  /**
   * @return {undefined}
   */
  function _init() {
    $("#head-social .twitter").fadeIn(250);
    $("#head-social .twitter a").click(function(anchor) {
      self.popup(anchor, "https://twitter.com/intent/tweet?url=" + encodeURIComponent($(this).attr("data-url")) + "&text=" + encodeURIComponent($(this).attr("data-text")) + "&related=" + $(this).attr("data-related") + "&lang=" + $(this).attr("data-lang"));
      $(this).off("click").removeAttr("href").addClass("inactive");
    });
  }
  /**
   * @return {undefined}
   */
  function postLink() {
    $("#head-social .vk-share").fadeIn(250);
    $("#head-social .vk-share a").click(function(anchor) {
      self.popup(anchor);
      $(this).off("click").removeAttr("href").addClass("inactive");
    });
  }
  /**
   * @param {string} key
   * @return {?}
   */
  function get(key) {
    /** @type {Array.<string>} */
    var directives = document.cookie.split("; ");
    /** @type {number} */
    var i = 0;
    var matcher;
    for (;matcher = directives[i] && directives[i].split("=");i++) {
      if (decodeURIComponent(matcher[0]) === key) {
        return decodeURIComponent(matcher[1] || "");
      }
    }
    return "";
  }
  /** @type {Array} */
  var results = [];
  /** @type {number} */
  var t = (new Date).getTime();
  /** @type {boolean} */
  var value = false;
  /** @type {boolean} */
  var c = false;
  /** @type {boolean} */
  var object = false;
  var home = $("body").hasClass("home");
  var ids;
  /** @type {boolean} */
  var property = false;
  /** @type {boolean} */
  var Q = false;
  var m;
  var id;
  /** @type {string} */
  var src = "";
  /** @type {number} */
  var e = 0;
  /** @type {string} */
  var token = "";
  var $next = $("#toy");
  var $field = $("#toy-intro");
  var $el = $("#app");
  var $this = $("#button-start");
  /**
   * @param {boolean} dataAndEvents
   * @return {undefined}
   */
  self.showAccess = function(dataAndEvents) {
    if (!window.$ || dataAndEvents && !self.ua.chrome) {
      return;
    }
    $("#content").css("top", 0);
    $("header,#head-sponsor,#toy-intro footer").hide();
    var bar = $("#infobar-stripe");
    if (self.ua.ieEdge) {
      bar.css("bottom", 0);
      $el.css("bottom", 14);
      $("#home-sponsor").hide();
    } else {
      $el.css("top", 14);
    }
    bar.show();
    $field.addClass("bg-access");
  };
  /**
   * @param {boolean} dataAndEvents
   * @return {undefined}
   */
  self.hideAccess = function(dataAndEvents) {
    if (!window.$ || dataAndEvents && !self.ua.chrome) {
      return;
    }
    $("#content").css("top", 50);
    $("header,#head-sponsor").show();
    var $this = $("#infobar-stripe");
    if (self.ua.ieEdge) {
      $el.css("bottom", "");
      $("#home-sponsor").show();
    } else {
      $el.css("top", "");
    }
    $this.hide();
    $field.removeClass("bg-access");
  };
  /**
   * @param {number} path
   * @return {undefined}
   */
  self.addScript = function(path) {
    /** @type {string} */
    var tagName = "script";
    /** @type {Element} */
    var el = document.createElement(tagName);
    var insertAt = $(tagName)[0];
    if (el && insertAt) {
      /** @type {number} */
      el.src = path;
      /** @type {boolean} */
      el.async = true;
      insertAt.parentNode.insertBefore(el, insertAt);
    }
  };
  /**
   * @return {?}
   */
  self.log = function() {
    /** @type {number} */
    var k = (new Date).getTime() - t;
    var value = arguments[0];
    var i;
    if (arguments.length === 0) {
      return results.join("\n");
    } else {
      if (arguments.length > 1 && (arguments[0] === "Loader" && arguments[1] === "Init")) {
        /** @type {boolean} */
        Q = true;
      }
    }
    /** @type {number} */
    i = 1;
    for (;i < arguments.length;i++) {
      if (arguments[i] || arguments[i] === 0) {
        value += " " + arguments[i];
      }
    }
    results.push(k + " " + value);
    if (results.length > 60) {
      if (results[40] === "...") {
        results.splice(41, 1);
      } else {
        results.splice(40, 1, "...");
      }
    }
    if (arguments[0] === "*ERROR*") {
      finish();
    }
  };
  /**
   * @param {string} category
   * @param {string} title
   * @param {string} value
   * @param {boolean} dataAndEvents
   * @return {undefined}
   */
  self.trackEvent = function(category, title, value, dataAndEvents) {
    try {
      ga("send", "event", category, title, value, dataAndEvents ? 1 : undefined, {
        nonInteraction : dataAndEvents
      });
    } catch (V) {
    }
  };
  /**
   * @param {string} deepDataAndEvents
   * @param {string} element
   * @return {undefined}
   */
  self.error = function(deepDataAndEvents, element) {
    self.hideAccess();
    next(deepDataAndEvents, element);
    if ($field.is(":visible")) {
      $field.removeClass("wait");
      $("#toy-intro>p,#button-start,#footer-check").hide();
      fn("error");
      if (self.ua && !self.ua.mobile) {
        $("#button-start-flash").css("display", "inline-block");
        if (!object && !property) {
          success(true);
        }
      }
    }
  };
  /**
   * @return {undefined}
   */
  self.init = function() {
    if (value) {
      show();
    } else {
      success(true);
    }
    delete self.init;
  };
  /**
   * @param {Object} e
   * @param {string} url
   * @param {number} opt_attributes
   * @param {number} width
   * @param {string} source
   * @return {undefined}
   */
  self.popup = function(e, url, opt_attributes, width, source) {
    opt_attributes = opt_attributes || 600;
    width = width || 310;
    /** @type {number} */
    var port = window.screenX || 0;
    var portSpec = port ? $(window).width() : screen.availWidth;
    /** @type {number} */
    var isXML = window.screenY || 0;
    var ret = isXML ? $(window).height() : screen.availHeight;
    /** @type {number} */
    var U = port + (portSpec - opt_attributes) / 2;
    /** @type {number} */
    var iLeft = isXML + (ret - width) / 2;
    window.open(url || e && (e.target.href || e.currentTarget.href), "webcamtoy" + (source || "window"), "resizable=yes,toolbar=no,scrollbars=yes,status=no,width=" + opt_attributes + ",height=" + width + ",left=" + U + ",top=" + iLeft);
    if (e) {
      e.preventDefault();
    }
  };
  jQuery(document).ready(function() {
    /**
     * @param {Function} url
     * @param {string} message
     * @param {string} e
     * @return {?}
     */
    window.onerror = function(url, message, e) {
      if (url && !/Script error|Access is denied\.|disconnected port|: a is null|freecorder|TopLine|NPObject|DealPly|dpQuery|postMessage|getElementsByTagName|NS_ERROR_OUT_OF_MEMORY|not of type 'Node'|Bind must be/.test(url)) {
        self.trackEvent("Error", url, message && e ? "[" + message + ":" + e + "]" : "", true);
        self.log("*ERROR*", url);
      }
      return false;
    };
    if (location.pathname === "/contact/") {
      return;
    }
    var data_dev = $next.attr("data-dev");
    /** @type {string} */
    var path = "https://webcamtoy.com";
    if ($("html").attr("manifest") && !home) {
      var index = get("webcamtoy").split("=")[1];
      var selector = navigator.userLanguage || (navigator.language || "en");
      var identifier = selector.substr(0, 2);
      /** @type {string} */
      var type = top.location.search;
      var prompterStrings = {
        bg : "/bg/",
        cs : "/cs/",
        da : "/da/",
        de : "/de/",
        el : "/el/",
        en : "/",
        es : "/es/",
        fi : "/fi/",
        fr : "/fr/",
        hr : "/hr/",
        hu : "/hu/",
        id : "/id/",
        it : "/it/",
        ja : "/ja/",
        lt : "/lt/",
        lv : "/lv/",
        nb : "/nb/",
        nl : "/nl/",
        pl : "/pl/",
        pt : "/pt/",
        ro : "/ro/",
        ru : "/ru/",
        sk : "/sk/",
        sr : "/sr/",
        sv : "/sv/",
        th : "/th/",
        tr : "/tr/",
        zh : "/zh/"
      };
      if (/ca/.test(identifier)) {
        /** @type {string} */
        identifier = "es";
      } else {
        if (/nn|no/.test(identifier)) {
          /** @type {string} */
          identifier = "nb";
        } else {
          if (/be|kk|ky|uk/.test(identifier)) {
            /** @type {string} */
            identifier = "ru";
          }
        }
      }
      if (!/utm_medium=speeddial/.test(type)) {
        /** @type {string} */
        type = "";
      }
      /** @type {string} */
      var url = path + prompterStrings[index] + "app/" + type;
      /** @type {string} */
      var msg = path + prompterStrings[identifier] + "app/" + type;
      /** @type {string} */
      var name = path + "/app/" + type;
      /** @type {(DOMApplicationCache|null)} */
      var cache = window.applicationCache;
      if (cache) {
        if (location.href.indexOf(path) !== 0) {
          if (identifier && (identifier !== self.ua.locale && prompterStrings[identifier])) {
            /** @type {string} */
            top.location.href = msg;
          } else {
            /** @type {string} */
            top.location.href = name;
          }
        }
        $(cache).on("updateready", function() {
          if (cache.status === cache.UPDATEREADY) {
            try {
              cache.swapCache();
            } catch (ai) {
            }
            if (location.href.indexOf(path) === 0) {
              location.reload();
            } else {
              if (identifier && (identifier !== self.ua.locale && prompterStrings[identifier])) {
                /** @type {string} */
                top.location.href = msg;
              } else {
                /** @type {string} */
                top.location.href = name;
              }
            }
          }
        }).on("cached error noupdate", function() {
          if (index) {
            if (index !== self.ua.locale && prompterStrings[index]) {
              /** @type {string} */
              top.location.href = url;
            }
          } else {
            if (identifier && (identifier !== self.ua.locale && prompterStrings[identifier])) {
              /** @type {string} */
              top.location.href = msg;
            }
          }
        });
      } else {
        if (index) {
          if (index !== self.ua.locale && prompterStrings[index]) {
            /** @type {string} */
            top.location.href = url;
            return;
          }
        } else {
          if (identifier && (identifier !== self.ua.locale && prompterStrings[identifier])) {
            /** @type {string} */
            top.location.href = msg;
            return;
          }
        }
      }
    }
    if (window.location !== window.top.location || !self.ua.mobile && (!data_dev && !self.Services.isHosted)) {
      /** @type {string} */
      top.location.href = path + "/";
      return;
    }
    document.title = self.Services.appName;
    var dstUri = self.Capabilities.webGL;
    var canCompile = self.Capabilities.checkWebGL();
    var text = self.Camera && self.Camera.hasGetUserMedia;
    /** @type {string} */
    var comp = location.search && location.search.substr(location.search.indexOf("app=") + 4, 5);
    /** @type {boolean} */
    var stringBuffer = false;
    if (self.ua.mac) {
      $("body").addClass("mac");
      if (/Chrom(e|ium)\/(2[2-3])/.test(navigator.userAgent)) {
        $("body").addClass("font-fix");
      }
    }
    if (home) {
      if (self.Home) {
        self.Home.init();
      }
    } else {
      delete self.Home;
    }
    if (self.Capabilities.localStorage) {
      try {
        /** @type {boolean} */
        stringBuffer = localStorage.getItem("forceFlash") === "1" && !self.ua.mobile;
      } catch (Z) {
        /** @type {boolean} */
        stringBuffer = false;
      }
    }
    if (self.ua.mobile || self.ua.iPad) {
      addEventListener("load", function() {
        window.scrollTo(0, 1);
      }, false);
    } else {
      self.trackEvent("Capabilities", "Version", self.version, true);
    }
    self.trackEvent("Capabilities", "GetUserMedia", text.toString(), true);
    self.trackEvent("Capabilities", "WebGL", dstUri.toString(), true);
    if (dstUri) {
      value = (canCompile.hasFloat || self.ua.mobile) && (canCompile.canCompile && canCompile.canLink);
    }
    value = !self.ua.ie && (comp === "html5" || value && (text && (!stringBuffer && (comp !== "flash" && !$next.hasClass("disabled")))));
    self.trackEvent("Capabilities", "HTML5", value.toString(), true);
    self.trackEvent("Capabilities", "ForceFlash", stringBuffer.toString(), true);
    jQuery(window).on("beforeunload", finish);
    if (!self.ua.mobile && home) {
      self.Services.onFacebookUser = self.Home.setFacebookUser;
    }
    if (self.ua.mobile || self.ua.tablet) {
      if (value) {
        self.UI.loadImages();
      } else {
        $("#button-init").hide();
      }
    } else {
      if (value) {
        self.UI.loadImages();
        if (!home) {
          show();
        }
      } else {
        success(false);
      }
    }
    if (!self.ua.mobile && !self.ua.tablet) {
      _init();
      postLink();
      if (self.Services) {
        self.Services.init();
      }
      setTimeout(function() {
        /** @type {boolean} */
        var dstUri = $("#head-sponsor ins").length < 2;
        if (dstUri && !self.ua.ieOld) {
          $("#head-sponsor").prepend('<a href="https://neave.com/" target="_top" style="position:absolute;width:220px;margin-left:-110px;">&hearts;&nbsp; Neave Interactive</a>');
        }
        self.trackEvent("Capabilities", "AdBlock", dstUri.toString(), true);
      }, 2E3);
    } else {
      if (self.ua.mobile) {
        setTimeout(function() {
          /** @type {boolean} */
          var dstUri = $("#mobile-sponsor ins").length < 2;
          if (dstUri) {
            $("#mobile-sponsor").html('<a href="https://neave.com/" target="_top"><img src="/assets/images/neave-ad-mobile.jpg" width="300" height="250" alt="Neave Interactive"></a>');
          }
          self.trackEvent("Capabilities", "AdBlock", dstUri.toString(), true);
        }, 2E3);
      }
    }
  });
})(WebcamToy);
/**
 * @return {undefined}
 */
WebcamToy.swfobjectInit = function() {
  WebcamToy.swfobject = function() {
    /**
     * @param {(Object|number)} objectIdStr
     * @return {?}
     */
    function getObjectById(objectIdStr) {
      /** @type {null} */
      var r = null;
      var o = getElementById(objectIdStr);
      if (o && o.nodeName.toUpperCase() === "OBJECT") {
        if (typeof o.SetVariable !== UNDEFINED) {
          r = o;
        } else {
          r = o.getElementsByTagName(OBJECT)[0] || o;
        }
      }
      return r;
    }
    /**
     * @param {string} dataAndEvents
     * @param {string} url
     * @return {?}
     */
    function createIeObject(dataAndEvents, url) {
      var content = createElement("div");
      /** @type {string} */
      content.innerHTML = "<object classid='clsid:D27CDB6E-AE6D-11cf-96B8-444553540000'><param name='movie' value='" + dataAndEvents + "'>" + url + "</object>";
      return content.firstChild;
    }
    /**
     * @param {Object} attObj
     * @param {Object} parObj
     * @param {(Object|number)} id
     * @return {?}
     */
    function createSWF(attObj, parObj, id) {
      var r;
      var el = getElementById(id);
      id = getId(id);
      if (ua.wk && ua.wk < 312) {
        return r;
      }
      if (el) {
        var o = ua.ie ? createElement("div") : createElement(OBJECT);
        var attr;
        var attr_lower;
        var param;
        if (typeof attObj.id === UNDEFINED) {
          /** @type {(Object|number)} */
          attObj.id = id;
        }
        for (param in parObj) {
          if (parObj.hasOwnProperty(param) && param.toLowerCase() !== "movie") {
            createObjParam(o, param, parObj[param]);
          }
        }
        if (ua.ie) {
          o = createIeObject(attObj.data, o.innerHTML);
        }
        for (attr in attObj) {
          if (attObj.hasOwnProperty(attr)) {
            /** @type {string} */
            attr_lower = attr.toLowerCase();
            if (attr_lower === "styleclass") {
              o.setAttribute("class", attObj[attr]);
            } else {
              if (attr_lower !== "classid" && attr_lower !== "data") {
                o.setAttribute(attr, attObj[attr]);
              }
            }
          }
        }
        if (ua.ie) {
          objIdArr[objIdArr.length] = attObj.id;
        } else {
          o.setAttribute("type", FLASH_MIME_TYPE);
          o.setAttribute("data", attObj.data);
        }
        el.parentNode.replaceChild(o, el);
        r = o;
      }
      return r;
    }
    /**
     * @param {Element} el
     * @param {?} pName
     * @param {?} pValue
     * @return {undefined}
     */
    function createObjParam(el, pName, pValue) {
      var p = createElement("param");
      p.setAttribute("name", pName);
      p.setAttribute("value", pValue);
      el.appendChild(p);
    }
    /**
     * @param {(Object|number)} id
     * @return {undefined}
     */
    function removeSWF(id) {
      var obj = getElementById(id);
      if (obj && obj.nodeName.toUpperCase() === "OBJECT") {
        if (ua.ie) {
          /** @type {string} */
          obj.style.display = "none";
          (function removeSWFInIE() {
            if (obj.readyState == 4) {
              var prop;
              for (prop in obj) {
                if (typeof obj[prop] === "function") {
                  /** @type {null} */
                  obj[prop] = null;
                }
              }
              obj.parentNode.removeChild(obj);
            } else {
              setTimeout(removeSWFInIE, 10);
            }
          })();
        } else {
          obj.parentNode.removeChild(obj);
        }
      }
    }
    /**
     * @param {Object} value
     * @return {?}
     */
    function isElement(value) {
      return value && (value.nodeType && value.nodeType === 1);
    }
    /**
     * @param {number} thing
     * @return {?}
     */
    function getId(thing) {
      return isElement(thing) ? thing.id : thing;
    }
    /**
     * @param {(Object|number)} id
     * @return {?}
     */
    function getElementById(id) {
      if (isElement(id)) {
        return id;
      }
      /** @type {null} */
      var el = null;
      try {
        /** @type {(HTMLElement|null)} */
        el = doc.getElementById(id);
      } catch (z) {
      }
      return el;
    }
    /**
     * @param {string} el
     * @return {?}
     */
    function createElement(el) {
      return doc.createElement(el);
    }
    /**
     * @param {string} val
     * @return {?}
     */
    function toInt(val) {
      return parseInt(val, 10);
    }
    /**
     * @param {string} rv
     * @return {?}
     */
    function hasPlayerVersion(rv) {
      rv += "";
      var pv = ua.pv;
      /** @type {Array.<string>} */
      var v = rv.split(".");
      v[0] = toInt(v[0]);
      v[1] = toInt(v[1]) || 0;
      v[2] = toInt(v[2]) || 0;
      return pv[0] > v[0] || (pv[0] == v[0] && pv[1] > v[1] || pv[0] == v[0] && (pv[1] == v[1] && pv[2] >= v[2])) ? true : false;
    }
    /** @type {string} */
    var UNDEFINED = "undefined";
    /** @type {string} */
    var OBJECT = "object";
    /** @type {string} */
    var SHOCKWAVE_FLASH = "Shockwave Flash";
    /** @type {string} */
    var SHOCKWAVE_FLASH_AX = "ShockwaveFlash.ShockwaveFlash";
    /** @type {string} */
    var FLASH_MIME_TYPE = "application/x-shockwave-flash";
    /** @type {Window} */
    var win = window;
    /** @type {HTMLDocument} */
    var doc = document;
    /** @type {(Navigator|null)} */
    var nav = navigator;
    /** @type {boolean} */
    var b = false;
    /** @type {Array} */
    var e = [];
    /** @type {Array} */
    var objIdArr = [];
    var ua = function() {
      /** @type {boolean} */
      var w3cdom = typeof doc.getElementById !== UNDEFINED && (typeof doc.getElementsByTagName !== UNDEFINED && typeof doc.createElement !== UNDEFINED);
      /** @type {string} */
      var u = nav.userAgent.toLowerCase();
      /** @type {string} */
      var p = nav.platform.toLowerCase();
      /** @type {boolean} */
      var windows = p ? /win/.test(p) : /win/.test(u);
      /** @type {boolean} */
      var mac = p ? /mac/.test(p) : /mac/.test(u);
      /** @type {(boolean|number)} */
      var webkit = /webkit/.test(u) ? parseFloat(u.replace(/^.*webkit\/(\d+(\.\d+)?).*$/, "$1")) : false;
      /** @type {boolean} */
      var ie = nav.appName === "Microsoft Internet Explorer";
      /** @type {Array} */
      var playerVersion = [0, 0, 0];
      /** @type {null} */
      var d = null;
      if (typeof nav.plugins !== UNDEFINED && typeof nav.plugins[SHOCKWAVE_FLASH] === OBJECT) {
        d = nav.plugins[SHOCKWAVE_FLASH].description;
        if (d && (typeof nav.mimeTypes !== UNDEFINED && (nav.mimeTypes[FLASH_MIME_TYPE] && nav.mimeTypes[FLASH_MIME_TYPE].enabledPlugin))) {
          /** @type {boolean} */
          b = true;
          /** @type {boolean} */
          ie = false;
          d = d.replace(/^.*\s+(\S+\s+\S+$)/, "$1");
          playerVersion[0] = toInt(d.replace(/^(.*)\..*$/, "$1"));
          playerVersion[1] = toInt(d.replace(/^.*\.(.*)\s.*$/, "$1"));
          playerVersion[2] = /[a-zA-Z]/.test(d) ? toInt(d.replace(/^.*[a-zA-Z]+(.*)$/, "$1")) : 0;
        }
      } else {
        if (typeof win.ActiveXObject !== UNDEFINED) {
          try {
            var a = new ActiveXObject(SHOCKWAVE_FLASH_AX);
            if (a) {
              d = a.GetVariable("$version");
              if (d) {
                /** @type {boolean} */
                ie = true;
                d = d.split(" ")[1].split(",");
                /** @type {Array} */
                playerVersion = [toInt(d[0]), toInt(d[1]), toInt(d[2])];
              }
            }
          } catch (A) {
          }
        }
      }
      return{
        w3 : w3cdom,
        pv : playerVersion,
        wk : webkit,
        ie : ie,
        win : windows,
        mac : mac
      };
    }();
    var h = function() {
      if (ua.ie) {
        window.attachEvent("onunload", function() {
          /** @type {number} */
          var jl = objIdArr.length;
          /** @type {number} */
          var j = 0;
          for (;j < jl;j++) {
            removeSWF(objIdArr[j]);
          }
          var k;
          for (k in ua) {
            /** @type {null} */
            ua[k] = null;
          }
          /** @type {null} */
          ua = null;
          var unlock;
          for (unlock in WebcamToy.swfobject) {
            /** @type {null} */
            WebcamToy.swfobject[unlock] = null;
          }
          /** @type {null} */
          WebcamToy.swfobject = null;
        });
      }
    }();
    return{
      /**
       * @return {?}
       */
      getFlashPlayerVersion : function() {
        return{
          major : ua.pv[0],
          minor : ua.pv[1],
          release : ua.pv[2]
        };
      },
      /** @type {function (string): ?} */
      hasFlashPlayerVersion : hasPlayerVersion,
      /**
       * @param {Object} attObj
       * @param {Object} parObj
       * @param {(Object|number)} replaceElemIdStr
       * @return {?}
       */
      createSWF : function(attObj, parObj, replaceElemIdStr) {
        if (ua.w3) {
          return createSWF(attObj, parObj, replaceElemIdStr);
        } else {
          return undefined;
        }
      }
    };
  }();
};
WebcamToy.Capabilities = function(self) {
  /**
   * @param {?} type
   * @param {string} vertSource
   * @return {?}
   */
  function createShader(type, vertSource) {
    var shader = gl.createShader(type);
    gl.shaderSource(shader, vertSource);
    gl.compileShader(shader);
    var error = gl.getError();
    if (error !== gl.NO_ERROR || (gl.isContextLost() || !gl.getShaderParameter(shader, gl.COMPILE_STATUS))) {
      return null;
    }
    return shader;
  }
  self.version = $("#toy").attr("data-version") || "0";
  self.ua = function() {
    /** @type {string} */
    var ua = navigator.userAgent.toLowerCase() || "";
    var mobile = $("body").hasClass("mobile");
    /** @type {boolean} */
    var param = /iPad/.test(navigator.platform);
    var ret = param || $("body").hasClass("tablet");
    /** @type {boolean} */
    var chrome = / opr\//.test(ua);
    /** @type {boolean} */
    var windowsphone = /edge\/[0-9]+\./.test(ua);
    /** @type {(Array.<string>|null)} */
    var reqVerArray = ua.match(/chrom(e|ium)\/([0-9]+)\./);
    var o = {
      ie : /msie /.test(ua) || /trident\//.test(ua),
      ieOld : /msie [2-8]\./.test(ua),
      ieEdge : windowsphone,
      chrome : !windowsphone && (!chrome && /chrom(e|ium)/.test(ua)),
      chromeVersion : !windowsphone && (!chrome && (reqVerArray && reqVerArray.length >= 2)) ? parseInt(reqVerArray[2], 10) : 0,
      firefox : /firefox/.test(ua),
      mobile : mobile,
      tablet : ret,
      iPad : param,
      mac : !mobile && (!ret && /mac os/.test(ua)),
      locale : ($("#toy").attr("data-locale") || ($('meta[property="og:locale"]').attr("content") || "en")).substr(0, 2)
    };
    return o;
  }();
  var gl;
  var $has = {
    touch : !!("ontouchstart" in window) && (self.ua.mobile || self.ua.tablet)
  };
  try {
    /** @type {boolean} */
    $has.localStorage = "localStorage" in window && window.localStorage !== null;
  } catch (d) {
    /** @type {boolean} */
    $has.localStorage = false;
  }
  $has.webGL = function() {
    var h;
    try {
      /** @type {Element} */
      var canvas = document.createElement("canvas");
      /** @type {boolean} */
      h = !!(window.WebGLRenderingContext && (canvas.getContext("webgl") || canvas.getContext("experimental-webgl")));
      canvas = undefined;
    } catch (i) {
      /** @type {boolean} */
      h = false;
    }
    return h;
  }();
  /**
   * @return {?}
   */
  $has.checkWebGL = function() {
    var canLink = {
      hasFloat : false,
      canCompile : false,
      canLink : false
    };
    if ($has.webGL) {
      try {
        /** @type {Element} */
        var canvas = document.createElement("canvas");
        gl = canvas.getContext("webgl") || canvas.getContext("experimental-webgl");
        if (gl) {
          /** @type {boolean} */
          canLink.hasFloat = !!(gl.getExtension("OES_texture_float") || gl.getExtension("OES_texture_float_linear"));
          var _program = gl.createProgram();
          var vs = createShader(gl.VERTEX_SHADER, "attribute vec3 p;void main(){gl_Position=vec4(p,1.0);}");
          var fs = createShader(gl.FRAGMENT_SHADER, "precision mediump float;uniform sampler2D t;uniform float a;void main(){vec4 c=vec4(1.0);vec2 p=gl_FragCoord.xy;if(a==1.0){p+=a;};for(float i=0.0;i<9.0;i++){float h=atan(p.y,p.x)+i,r=length(p),b=mod(floor(h/r),2.0);c+=texture2D(t,vec2(b));}gl_FragColor=c;}");
          gl.attachShader(_program, vs);
          gl.attachShader(_program, fs);
          gl.linkProgram(_program);
          /** @type {boolean} */
          canLink.canLink = !!gl.getProgramParameter(_program, gl.LINK_STATUS);
          /** @type {boolean} */
          canLink.canCompile = !!(vs && fs);
          gl.deleteShader(vs);
          gl.deleteShader(fs);
          gl.deleteProgram(_program);
        }
        gl = undefined;
        canvas = undefined;
      } catch (k) {
        /** @type {boolean} */
        canLink.canLink = canLink.canCompile = false;
      }
    }
    return canLink;
  };
  return $has;
}(WebcamToy);
WebcamToy.Services = function(data) {
  /**
   * @param {?} message
   * @return {?}
   */
  function processMessage(message) {
    if (!message || (!window.Blob || !window.atob)) {
      return null;
    }
    var string;
    var paramType;
    var arrayBuffer;
    var data;
    var i;
    try {
      string = window.atob(message.split(",")[1]);
      paramType = message.split(",")[0].split(":")[1].split(";")[0];
      /** @type {ArrayBuffer} */
      arrayBuffer = new ArrayBuffer(string.length);
      /** @type {Uint8Array} */
      data = new Uint8Array(arrayBuffer);
    } catch (T) {
      return null;
    }
    i = string.length;
    for (;i--;) {
      data[i] = string.charCodeAt(i);
    }
    try {
      if (!!window.DataView) {
        return new Blob([new DataView(arrayBuffer)], {
          type : paramType
        });
      }
    } catch (T) {
    }
    try {
      return new Blob([data], {
        type : paramType
      });
    } catch (T) {
    }
    return null;
  }
  /**
   * @param {?} keepData
   * @param {Function} fn
   * @return {undefined}
   */
  function eachEvent(keepData, fn) {
    var buf;
    try {
      buf = $.parseJSON(keepData.responseText);
    } catch (Q) {
    }
    if (fn) {
      fn(buf);
    }
  }
  /**
   * @return {undefined}
   */
  function close() {
    if (jqXHR) {
      jqXHR.abort();
    }
    clearTimeout(timeoutId);
  }
  /**
   * @return {undefined}
   */
  function onSuccess() {
    /** @type {string} */
    req.facebook.album.id = req.facebook.album.url = req.facebook.album.privacy = "";
    try {
      localStorage.setItem("facebookAlbumID", "");
    } catch (O) {
    }
  }
  /**
   * @return {undefined}
   */
  function next() {
    /** @type {string} */
    req.facebook.token = req.facebook.firstName = req.facebook.fullName = req.facebook.id = req.facebook.url = "";
    onSuccess();
  }
  /**
   * @param {Object} response
   * @return {undefined}
   */
  function handler(response) {
    var token = response.authResponse ? response.authResponse.accessToken : "";
    if (response && (response.status === "connected" && token)) {
      req.facebook.token = token;
      self.facebookUser();
      if (self.onFacebookAuth) {
        self.onFacebookAuth(req.facebook.token);
      }
    } else {
      next();
    }
  }
  /**
   * @return {undefined}
   */
  function loadMe() {
    if (!!window.FB) {
      return;
    }
    var es_ES = navigator.userLanguage || (navigator.language || "en-US");
    var language = data.ua.locale || "en";
    /** @type {string} */
    var lang = language + "_" + language.toUpperCase();
    switch(language) {
      case "en":
        if (es_ES === "en-GB") {
          /** @type {string} */
          lang = "en_GB";
        } else {
          /** @type {string} */
          lang = "en_US";
        }
        break;
      case "cs":
        /** @type {string} */
        lang = "cs_CZ";
        break;
      case "da":
        /** @type {string} */
        lang = "da_DK";
        break;
      case "el":
        /** @type {string} */
        lang = "el_GR";
        break;
      case "es":
        /** @type {string} */
        lang = "es_LA";
        switch(es_ES) {
          case "ca-ES":
            /** @type {string} */
            lang = "ca_ES";
            break;
          case "es-ES":
            /** @type {string} */
            lang = "es_ES";
            break;
        }
        break;
      case "ja":
        /** @type {string} */
        lang = "ja_JP";
        break;
      case "nb":
        /** @type {string} */
        lang = "nb_NO";
        break;
      case "pt":
        if (es_ES === "pt-PT") {
          /** @type {string} */
          lang = "pt_PT";
        } else {
          /** @type {string} */
          lang = "pt_BR";
        }
        break;
      case "sr":
        /** @type {string} */
        lang = "sr_RS";
        break;
      case "sv":
        /** @type {string} */
        lang = "sv_SE";
        break;
      case "zh":
        /** @type {string} */
        lang = "zh_CN";
        break;
    }
    data.addScript("//connect.facebook.net/" + lang + "/sdk.js");
  }
  /**
   * @return {undefined}
   */
  function route() {
    /** @type {string} */
    var uHostName = location.hash.substr(1);
    if (uHostName) {
      /** @type {Array.<string>} */
      var codeSegments = uHostName.split("&");
      var data = {};
      var i;
      var chunks;
      /** @type {number} */
      i = 0;
      for (;i < codeSegments.length;i++) {
        /** @type {Array.<string>} */
        chunks = codeSegments[i].split("=");
        /** @type {string} */
        data[chunks[0]] = chunks[1];
      }
      if (data.access_token && data.access_token.length > 50) {
        req.facebook.token = data.access_token;
        /** @type {string} */
        location.hash = "";
      }
    }
    /**
     * @return {undefined}
     */
    window.fbAsyncInit = function() {
      if (!!window.FB) {
        FB.Event.subscribe("auth.statusChange", handler);
        FB.Event.subscribe("auth.logout", handler);
        FB.init({
          appId : _appId,
          channelUrl : channelURL,
          status : true,
          cookie : true,
          oauth : true,
          version : "v" + self.facebookVersion
        });
        if (FB.XFBML) {
          FB.XFBML.parse($("#head-social")[0]);
        }
      }
    };
    loadMe();
  }
  /**
   * @param {Function} next
   * @return {undefined}
   */
  function process(next) {
    clearTimeout(tref);
    if (next) {
      next("", "", req.facebook.album.id = "me");
    }
  }
  /**
   * @param {string} deepDataAndEvents
   * @param {string} token
   * @param {string} val
   * @return {undefined}
   */
  function callback(deepDataAndEvents, token, val) {
    close();
    if (!token) {
      /** @type {string} */
      deepDataAndEvents = token = val = "";
    }
    /** @type {string} */
    req.twitter.user = deepDataAndEvents;
    /** @type {string} */
    req.twitter.token = token;
    /** @type {string} */
    req.twitter.secret = val;
    try {
      localStorage.setItem("twitterUser", deepDataAndEvents);
      localStorage.setItem("twitterToken", token);
      localStorage.setItem("twitterSecret", val);
    } catch (R) {
    }
    if (self.onTwitterAuth) {
      self.onTwitterAuth(deepDataAndEvents, token, val);
    }
  }
  /**
   * @return {?}
   */
  function internalCallback() {
    if (req.twitter.token && self.onTwitterAuth) {
      self.onTwitterAuth(req.twitter.user, req.twitter.token, req.twitter.secret);
      return true;
    }
    return false;
  }
  /**
   * @return {undefined}
   */
  function connect() {
    if (internalCallback()) {
      close();
      return;
    }
    $.ajax({
      url : url + "verify.php?format=json",
      dataType : "jsonp",
      crossDomain : true,
      cache : false,
      timeout : 15E3,
      /**
       * @return {undefined}
       */
      error : function() {
      },
      /**
       * @param {Object} e
       * @return {undefined}
       */
      success : function(e) {
        if (e.success === 1) {
          callback(e.user, e.token, e.secret);
        } else {
          if (e.success === 0 && /blacklist/i.test(e.message)) {
            close();
          }
        }
      }
    });
    if (i < padLength) {
      i++;
      /** @type {number} */
      timeoutId = setTimeout(connect, remaining);
    }
  }
  /**
   * @param {string} deepDataAndEvents
   * @param {string} token
   * @param {number} val
   * @return {undefined}
   */
  function done(deepDataAndEvents, token, val) {
    close();
    if (!token) {
      /** @type {string} */
      deepDataAndEvents = token = val = "";
    }
    /** @type {string} */
    req.tumblr.user = deepDataAndEvents;
    /** @type {string} */
    req.tumblr.token = token;
    /** @type {number} */
    req.tumblr.secret = val;
    try {
      localStorage.setItem("tumblrUser", deepDataAndEvents);
      localStorage.setItem("tumblrToken", token);
      localStorage.setItem("tumblrSecret", val);
    } catch (R) {
    }
    if (self.onTumblrAuth) {
      self.onTumblrAuth(deepDataAndEvents, token, val);
    }
  }
  /**
   * @return {?}
   */
  function size() {
    if (req.tumblr.token && self.onTumblrAuth) {
      self.onTumblrAuth(req.tumblr.user, req.tumblr.token, req.tumblr.secret);
      return true;
    }
    return false;
  }
  /**
   * @return {undefined}
   */
  function success() {
    if (size()) {
      close();
      return;
    }
    $.ajax({
      url : base + "verify.php?format=json",
      dataType : "jsonp",
      crossDomain : true,
      cache : false,
      timeout : 15E3,
      /**
       * @return {undefined}
       */
      error : function() {
      },
      /**
       * @param {Object} response
       * @return {undefined}
       */
      success : function(response) {
        if (response.success === 1) {
          done(response.user, response.token, response.secret);
        }
      }
    });
    if (i < padLength) {
      i++;
      /** @type {number} */
      timeoutId = setTimeout(success, remaining);
    }
  }
  /**
   * @param {string} deepDataAndEvents
   * @param {string} token
   * @return {undefined}
   */
  function cb(deepDataAndEvents, token) {
    close();
    if (!token || !deepDataAndEvents) {
      /** @type {string} */
      deepDataAndEvents = token = "";
    }
    /** @type {string} */
    req.vk.user = String(deepDataAndEvents);
    /** @type {string} */
    req.vk.token = token;
    try {
      localStorage.setItem("vkUser", deepDataAndEvents);
    } catch (Q) {
    }
    if (self.onVKAuth) {
      self.onVKAuth(deepDataAndEvents, token);
    }
  }
  /**
   * @param {string} deepDataAndEvents
   * @return {undefined}
   */
  function init(deepDataAndEvents) {
    if (!deepDataAndEvents) {
      /** @type {string} */
      deepDataAndEvents = "";
    }
    /** @type {string} */
    deepDataAndEvents = String(deepDataAndEvents);
    /** @type {string} */
    req.vk.aid = deepDataAndEvents;
    try {
      localStorage.setItem("vkAlbumID", deepDataAndEvents);
    } catch (P) {
    }
    if (self.onVKAlbum) {
      self.onVKAlbum(deepDataAndEvents);
    }
  }
  /**
   * @return {?}
   */
  function load() {
    if (req.vk.aid && self.onVKAlbum) {
      self.onVKAlbum(req.vk.aid);
    }
    if (req.vk.token && self.onVKAuth) {
      self.onVKAuth(req.vk.user, req.vk.token);
      return true;
    }
    return false;
  }
  /**
   * @return {undefined}
   */
  function refresh() {
    if (load()) {
      close();
      return;
    }
    $.ajax({
      url : activeURL + "verify.php?format=json",
      dataType : "jsonp",
      crossDomain : true,
      cache : false,
      timeout : 15E3,
      /**
       * @return {undefined}
       */
      error : function() {
      },
      /**
       * @param {Object} data
       * @return {undefined}
       */
      success : function(data) {
        if (data.success === 1) {
          cb(data.user, data.token);
        }
      }
    });
    if (i < padLength) {
      i++;
      /** @type {number} */
      timeoutId = setTimeout(refresh, remaining);
    }
  }
  var self = {
    appName : "Webcam Toy",
    scheme : "https",
    assetsURL : "/assets/",
    facebookVersion : $("#toy").attr("data-fb") || "2.6",
    onFacebookAuth : null,
    onFacebookUser : null,
    onTwitterAuth : null,
    onTumblrAuth : null,
    onVKAuth : null,
    onVKAlbum : null
  };
  var req = {
    facebook : {
      firstName : "",
      fullName : "",
      id : "",
      url : "",
      token : "",
      album : {
        id : "",
        url : "",
        privacy : ""
      }
    },
    twitter : {
      user : "",
      token : "",
      secret : "",
      forceLogin : false
    },
    tumblr : {
      user : "",
      token : "",
      secret : "",
      forceLogin : false
    },
    vk : {
      user : "",
      token : "",
      aid : "",
      forceLogin : false
    }
  };
  var jqXHR;
  var ajaxLoader;
  /** @type {boolean} */
  var L = false;
  /** @type {string} */
  var hostname = "webcamtoy.com";
  /** @type {string} */
  var _appId = "201969246526783";
  /** @type {string} */
  var channelURL = self.scheme + "://" + hostname + "/" + (data.ua.locale === "en" ? "" : data.ua.locale + "/") + "fb-channel.html";
  /** @type {number} */
  var i = 0;
  /** @type {number} */
  var padLength = 8;
  /** @type {number} */
  var remaining = 6E3;
  var timeoutId;
  /** @type {number} */
  var backoff = 12E3;
  var tref;
  /** @type {string} */
  var origin = self.scheme + "://oauth." + hostname;
  /** @type {string} */
  var url = origin + "/twitter/";
  /** @type {string} */
  var base = origin + "/tumblr/";
  /** @type {string} */
  var activeURL = origin + "/vk/";
  /** @type {string} */
  self.oauthURL = origin + "/";
  /** @type {boolean} */
  self.isHosted = location.hostname === hostname;
  try {
    req.facebook.album.id = localStorage.getItem("facebookAlbumID") || "";
    req.twitter.user = localStorage.getItem("twitterUser") || "";
    req.twitter.token = localStorage.getItem("twitterToken") || "";
    req.twitter.secret = localStorage.getItem("twitterSecret") || "";
    req.tumblr.user = localStorage.getItem("tumblrUser") || "";
    req.tumblr.token = localStorage.getItem("tumblrToken") || "";
    req.tumblr.secret = localStorage.getItem("tumblrSecret") || "";
    req.vk.aid = localStorage.getItem("vkAlbumID") || "";
    req.vk.user = localStorage.getItem("vkUser") || "";
  } catch (J) {
  }
  /** @type {string} */
  req.vk.token = "";
  /**
   * @return {undefined}
   */
  self.cancelPost = function() {
    close();
    /** @type {boolean} */
    L = false;
  };
  /**
   * @return {undefined}
   */
  self.init = function() {
    $(window).on("message", function(e) {
      e = e.originalEvent;
      if (e.origin === origin) {
        var req;
        try {
          req = $.parseJSON(e.data);
        } catch (O) {
        }
        switch(req.service) {
          case "twitter":
            callback(req.user, req.token, req.secret);
            break;
          case "tumblr":
            done(req.user, req.token, req.secret);
            break;
          case "vk":
            cb(req.user, req.token);
            break;
        }
      }
    });
    route();
    internalCallback();
    size();
    load();
  };
  /**
   * @return {undefined}
   */
  self.facebookUser = function() {
    if (req.facebook.firstName) {
      if (self.onFacebookUser) {
        self.onFacebookUser(req.facebook);
      }
    } else {
      if (!!window.FB) {
        FB.api("/me", function(node) {
          if (node) {
            req.facebook.id = node.id;
            /** @type {string} */
            req.facebook.url = self.scheme + "://www.facebook.com/" + node.id;
            var fullName = node.name || "";
            req.facebook.fullName = fullName;
            req.facebook.firstName = fullName.split(" ")[0];
            if (self.onFacebookUser) {
              self.onFacebookUser(req.facebook);
            }
          }
        });
      }
    }
  };
  /**
   * @return {undefined}
   */
  self.facebookAuth = function() {
    close();
    if (!req.facebook.token) {
      if (!window.FB) {
        loadMe();
      } else {
        FB.login(function() {
        }, {
          scope : "user_photos,publish_actions"
        });
      }
    } else {
      if (self.onFacebookAuth) {
        FB.getLoginStatus(function(response) {
          if (response && response.status === "connected") {
            self.onFacebookAuth(req.facebook.token || "");
          } else {
            next();
          }
        });
      }
    }
  };
  /**
   * @return {undefined}
   */
  self.facebookLogout = function() {
    close();
    if (!!window.FB) {
      FB.getLoginStatus(function(response) {
        if (response && response.status === "connected") {
          FB.logout();
          FB.getLoginStatus();
        }
      });
    }
    next();
  };
  /**
   * @return {undefined}
   */
  self.facebookStatus = function() {
    if (!window.FB) {
      loadMe();
    } else {
      FB.getLoginStatus(handler);
    }
  };
  /**
   * @param {Function} i
   * @param {string} v
   * @param {?} deepDataAndEvents
   * @param {boolean} dataAndEvents
   * @return {undefined}
   */
  self.facebookAlbum = function(i, v, deepDataAndEvents, dataAndEvents) {
    if (!!window.FB && v) {
      clearTimeout(tref);
      /** @type {number} */
      tref = setTimeout(function() {
        process(i);
      }, backoff);
      FB.api("/me/albums", function(response) {
        if (response && response.data) {
          var id = req.facebook.album.id;
          /** @type {number} */
          var j = 0;
          for (;j < response.data.length;j++) {
            var ch = response.data[j].name.toLowerCase();
            if (id && response.data[j].id === id || !id && (ch === v.toLowerCase() || /webcam toy/.test(ch))) {
              if (response.data[j].can_upload) {
                var key = req.facebook.album.url = response.data[j].link || self.scheme + "://www.facebook.com/" + id;
                var r20 = req.facebook.album.privacy = response.data[j].privacy;
                var tabId = req.facebook.album.id = response.data[j].id;
                try {
                  localStorage.setItem("facebookAlbumID", tabId);
                } catch (X) {
                }
                if (i) {
                  clearTimeout(tref);
                  i(key, r20, tabId);
                }
                return;
              }
            }
          }
          if (dataAndEvents) {
            process(i);
          } else {
            /** @type {string} */
            req.facebook.album.id = "";
            FB.api("/me/albums", "post", {
              name : v,
              message : ""
            }, function(results) {
              if (results && results.id) {
                onSuccess();
                var tabId = req.facebook.album.id = results.id;
                try {
                  localStorage.setItem("facebookAlbumID", tabId);
                } catch (aa) {
                }
                self.facebookAlbum(i, v, "", true);
              } else {
                process(i);
              }
            });
          }
        } else {
          process(i);
        }
      });
    }
  };
  /**
   * @param {Object} options
   * @param {Function} done
   * @param {Function} fn
   * @return {undefined}
   */
  self.facebookPost = function(options, done, fn) {
    if (!req.facebook.token) {
      fn("OAuth token not found");
      return;
    }
    if (!req.facebook.album.id) {
      clearTimeout(tref);
      /** @type {string} */
      req.facebook.album.id = "me";
    }
    var value;
    if (options && options.image) {
      value = processMessage(options.image.src);
    }
    if (!value) {
      fn("Image data not found");
      return;
    }
    /** @type {boolean} */
    L = true;
    /** @type {FormData} */
    var params = new FormData;
    params.append("access_token", req.facebook.token);
    params.append("message", "");
    params.append("source", value);
    if (ajaxLoader) {
      ajaxLoader.abort();
    }
    ajaxLoader = $.ajax({
      url : "https://graph.facebook.com/v" + self.facebookVersion + "/" + req.facebook.album.id + "/photos",
      data : params,
      type : "POST",
      cache : false,
      contentType : false,
      processData : false,
      timeout : 3E4,
      statusCode : {
        /**
         * @param {?} events
         * @return {undefined}
         */
        400 : function(events) {
          eachEvent(events, fn);
        },
        /**
         * @param {?} events
         * @return {undefined}
         */
        401 : function(events) {
          eachEvent(events, fn);
        },
        /**
         * @param {?} events
         * @return {undefined}
         */
        403 : function(events) {
          eachEvent(events, fn);
        },
        /**
         * @param {?} events
         * @return {undefined}
         */
        500 : function(events) {
          eachEvent(events, fn);
        }
      },
      /**
       * @param {Object} res
       * @param {(Object|number)} err
       * @return {undefined}
       */
      complete : function(res, err) {
        if (L) {
          var page;
          err = res && res.statusText || err;
          try {
            page = $.parseJSON(res.responseText);
          } catch (T) {
            fn(err);
          }
          if (page && page.success === 0) {
            fn(page);
          } else {
            if (page && page.id) {
              done();
            } else {
              fn(err);
            }
          }
        }
      }
    });
  };
  /**
   * @return {undefined}
   */
  self.twitterAuth = function() {
    close();
    if (!req.twitter.token) {
      var locale = data.ua.locale;
      if (locale === "zh-CN") {
        /** @type {string} */
        locale = "zh";
      }
      data.popup(null, url + "?force_login=" + (req.twitter.forceLogin ? "1&destroy=1" : 0) + (locale ? "&locale=" + locale : ""), 700, 520, "twitter");
      /** @type {number} */
      i = 0;
      /** @type {number} */
      timeoutId = setTimeout(connect, remaining);
    } else {
      if (self.onTwitterAuth) {
        self.onTwitterAuth(req.twitter.user, req.twitter.token, req.twitter.secret);
      }
    }
  };
  /**
   * @return {undefined}
   */
  self.twitterLogout = function() {
    close();
    callback("", "", "");
    /** @type {boolean} */
    req.twitter.forceLogin = true;
  };
  /**
   * @param {Object} options
   * @param {Function} get
   * @param {Function} done
   * @return {undefined}
   */
  self.twitterPost = function(options, get, done) {
    if (!req.twitter.token) {
      done("OAuth token not found");
      return;
    }
    var buffer;
    if (options && options.image) {
      buffer = processMessage(options.image.src);
    }
    if (!buffer) {
      done("Image data not found");
      return;
    }
    /** @type {boolean} */
    L = true;
    /** @type {FormData} */
    var test = new FormData;
    test.append("format", "json");
    test.append("user", req.twitter.user);
    test.append("token", req.twitter.token);
    test.append("secret", req.twitter.secret);
    test.append("message", options.message);
    test.append("file", buffer);
    if (ajaxLoader) {
      ajaxLoader.abort();
    }
    ajaxLoader = $.ajax({
      url : url + "tweet.php",
      data : test,
      type : "POST",
      cache : false,
      crossDomain : true,
      contentType : false,
      processData : false,
      timeout : 2E4,
      /**
       * @return {undefined}
       */
      error : function() {
      },
      /**
       * @param {Object} res
       * @param {(Object|number)} error
       * @return {undefined}
       */
      complete : function(res, error) {
        if (L) {
          error = res && res.statusText || error;
          var e;
          try {
            e = $.parseJSON(res.responseText);
          } catch (T) {
            done(error);
          }
          if (e) {
            if (e.success === 0) {
              done(e.message || error);
            } else {
              get(e.id ? "https://pic.twitter.com/" + e.id : "");
            }
          } else {
            done(error);
          }
        }
      }
    });
  };
  /**
   * @return {undefined}
   */
  self.tumblrAuth = function() {
    close();
    if (!req.tumblr.token) {
      data.popup(null, base + "?force_login=" + (req.tumblr.forceLogin ? "1&destroy=1" : 0), 700, 520, "tumblr");
      /** @type {number} */
      i = 0;
      /** @type {number} */
      timeoutId = setTimeout(success, remaining);
    } else {
      if (self.onTumblrAuth) {
        self.onTumblrAuth(req.tumblr.user, req.tumblr.token, req.tumblr.secret);
      }
    }
  };
  /**
   * @return {undefined}
   */
  self.tumblrLogout = function() {
    close();
    done("", "", "");
    /** @type {boolean} */
    req.tumblr.forceLogin = true;
  };
  /**
   * @param {number} options
   * @param {Function} r
   * @param {Function} fn
   * @return {undefined}
   */
  self.tumblrPost = function(options, r, fn) {
    if (!req.tumblr.token) {
      fn("OAuth token not found");
      return;
    }
    var val;
    if (options && options.image) {
      val = processMessage(options.image.src);
    }
    if (!val) {
      fn("Image data not found");
      return;
    }
    /** @type {boolean} */
    L = true;
    /** @type {string} */
    var buffer = self.scheme + "://" + hostname + "/" + (data.ua.locale === "en" ? "" : data.ua.locale + "/");
    /** @type {FormData} */
    var test = new FormData;
    test.append("format", "json");
    test.append("user", req.tumblr.user);
    test.append("token", req.tumblr.token);
    test.append("secret", req.tumblr.secret);
    test.append("effect", options.effect);
    test.append("link", buffer);
    test.append("message", options.message.replace(self.appName, '<a href="' + buffer + '">' + self.appName + "</a>"));
    test.append("file", val);
    if (ajaxLoader) {
      ajaxLoader.abort();
    }
    ajaxLoader = $.ajax({
      url : base + "upload.php",
      data : test,
      type : "POST",
      cache : false,
      crossDomain : true,
      contentType : false,
      processData : false,
      timeout : 2E4,
      /**
       * @return {undefined}
       */
      error : function() {
      },
      /**
       * @param {Object} res
       * @param {(Object|number)} err
       * @return {undefined}
       */
      complete : function(res, err) {
        if (L) {
          err = res && res.statusText || err;
          var e;
          try {
            e = $.parseJSON(res.responseText);
          } catch (U) {
            fn(err);
          }
          if (e) {
            if (e.success === 0) {
              fn(e.message || err);
            } else {
              r(e.id ? "http://" + req.tumblr.user + ".tumblr.com/post/" + e.id + "/" : "");
            }
          } else {
            fn(err);
          }
        }
      }
    });
  };
  /**
   * @return {undefined}
   */
  self.vkAuth = function() {
    close();
    if (!req.vk.token) {
      data.popup(null, activeURL + "?force_login=" + (req.vk.forceLogin ? "1&destroy=1" : 0), 620, 350, "vk");
      /** @type {number} */
      i = 0;
      /** @type {number} */
      timeoutId = setTimeout(refresh, remaining);
    } else {
      if (self.onVKAuth) {
        self.onVKAuth(req.vk.user, req.vk.token);
      }
    }
  };
  /**
   * @return {undefined}
   */
  self.vkLogout = function() {
    close();
    cb("", "");
    init("");
    /** @type {boolean} */
    req.vk.forceLogin = true;
  };
  /**
   * @param {number} options
   * @param {Function} complete
   * @param {Function} fn
   * @return {undefined}
   */
  self.vkPost = function(options, complete, fn) {
    if (!req.vk.token) {
      fn("OAuth token not found");
      return;
    }
    var buffer;
    if (options && options.image) {
      buffer = processMessage(options.image.src);
    }
    if (!buffer) {
      fn("Image data not found");
      return;
    }
    /** @type {boolean} */
    L = true;
    /** @type {FormData} */
    var test = new FormData;
    test.append("format", "json");
    test.append("aid", req.vk.aid);
    test.append("user", req.vk.user);
    test.append("token", req.vk.token);
    test.append("message", options.message.replace(self.appName, hostname));
    test.append("file", buffer);
    if (ajaxLoader) {
      ajaxLoader.abort();
    }
    ajaxLoader = $.ajax({
      url : activeURL + "upload.php",
      data : test,
      type : "POST",
      cache : false,
      crossDomain : true,
      contentType : false,
      processData : false,
      timeout : 3E4,
      /**
       * @return {undefined}
       */
      error : function() {
      },
      /**
       * @param {Object} res
       * @param {(Object|number)} err
       * @return {undefined}
       */
      complete : function(res, err) {
        if (L) {
          err = res && res.statusText || err;
          var self;
          try {
            self = $.parseJSON(res.responseText);
          } catch (T) {
            fn(err);
          }
          if (self) {
            if (self.success === 0) {
              init(self.aid);
              fn(self.message || err);
            } else {
              if (self.aid && req.vk.aid !== String(self.aid)) {
                init(self.aid);
              }
              complete(self.id ? "https://vk.com/" + self.id : "");
            }
          } else {
            fn(err);
          }
        }
      }
    });
  };
  return self;
}(WebcamToy);
WebcamToy.Texture = function() {
  /**
   * @param {?} texture
   * @param {(number|string)} width
   * @param {(number|string)} height
   * @return {?}
   */
  function initCanvas(texture, width, height) {
    /** @type {Element} */
    var _canvas = document.createElement("canvas");
    _canvas.width = width || texture.width;
    _canvas.height = height || texture.height;
    var canvas = _canvas.getContext("2d");
    if (canvas) {
      canvas.clearRect(0, 0, width, height);
    }
    return canvas;
  }
  /**
   * @param {Object} gl
   * @param {Object} width
   * @param {Object} height
   * @param {WebGLRenderingContext} format
   * @param {?} type
   * @param {?} deepDataAndEvents
   * @param {number} precision
   * @return {undefined}
   */
  function Texture(gl, width, height, format, type, deepDataAndEvents, precision) {
    /** @type {Object} */
    this.gl = gl;
    this.id = gl.createTexture();
    /** @type {WebGLRenderingContext} */
    this.format = format;
    this.type = type;
    precision = precision || (WebcamToy.ua.mac ? gl.LINEAR : gl.NEAREST);
    gl.bindTexture(gl.TEXTURE_2D, this.id);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, precision);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, precision);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE);
    if (deepDataAndEvents) {
      this.loadContentsOf(deepDataAndEvents);
    } else {
      if (width && height) {
        /** @type {Object} */
        this.width = width;
        /** @type {Object} */
        this.height = height;
        try {
          gl.texImage2D(gl.TEXTURE_2D, 0, format, width, height, 0, format, type, null);
        } catch (i) {
        }
      }
    }
  }
  /**
   * @param {?} deepDataAndEvents
   * @return {?}
   */
  Texture.prototype.loadContentsOf = function(deepDataAndEvents) {
    this.gl.bindTexture(this.gl.TEXTURE_2D, this.id);
    this.gl.pixelStorei(this.gl.UNPACK_FLIP_Y_WEBGL, true);
    try {
      this.gl.texImage2D(this.gl.TEXTURE_2D, 0, this.format, this.format, this.type, deepDataAndEvents);
    } catch (d) {
    }
    return this;
  };
  /**
   * @param {number} recurring
   * @return {undefined}
   */
  Texture.prototype.use = function(recurring) {
    this.gl.activeTexture(this.gl.TEXTURE0 + (recurring || 0));
    this.gl.bindTexture(this.gl.TEXTURE_2D, this.id);
  };
  /**
   * @param {Function} $sanitize
   * @return {?}
   */
  Texture.prototype.drawTo = function($sanitize) {
    var gl = this.gl;
    gl.bindFramebuffer(gl.FRAMEBUFFER, gl.framebuffer = gl.framebuffer || gl.createFramebuffer());
    gl.framebufferTexture2D(gl.FRAMEBUFFER, gl.COLOR_ATTACHMENT0, gl.TEXTURE_2D, this.id, 0);
    if (gl.checkFramebufferStatus(gl.FRAMEBUFFER) === gl.FRAMEBUFFER_COMPLETE) {
      $sanitize();
    }
    gl.bindFramebuffer(gl.FRAMEBUFFER, null);
    return this;
  };
  /**
   * @param {boolean} horizontal
   * @param {?} top
   * @param {number} w
   * @param {number} h
   * @return {?}
   */
  Texture.prototype.toImage = function(horizontal, top, w, h) {
    h = h || this.height;
    w = horizontal ? h : w || this.width;
    /** @type {number} */
    var y = 2;
    var height = this.height;
    var width = horizontal ? height : this.width;
    var i;
    /** @type {number} */
    var buffer = width * height * 4;
    /** @type {Uint8Array} */
    var array = new Uint8Array(buffer);
    var ctx = initCanvas(this, w, h);
    var r = initCanvas(this, width, height);
    var data = r.createImageData(width, height);
    var map;
    var image;
    if (data && data.data) {
      map = data.data;
    } else {
      return;
    }
    this.gl.readPixels(horizontal ? (this.width - height) / 2 : 0, 0, width, height, this.gl.RGBA, this.gl.UNSIGNED_BYTE, array);
    /** @type {number} */
    i = buffer;
    for (;i--;) {
      map[i] = array[i];
    }
    r.putImageData(data, 0, 0);
    ctx.save();
    ctx.translate(0, h);
    ctx.scale(w / width, -h / height);
    ctx.drawImage(r.canvas, y / -2 * width / height, y / -2, width + y * width / height, height + y);
    ctx.restore();
    image = ctx.canvas.toDataURL("image/jpeg", top);
    /** @type {null} */
    r = null;
    /** @type {null} */
    ctx = null;
    return image;
  };
  /**
   * @param {Object} item
   * @return {?}
   */
  Texture.prototype.swapWith = function(item) {
    var value = item.id;
    item.id = this.id;
    this.id = value;
    value = item.width;
    item.width = this.width;
    this.width = value;
    value = item.height;
    item.height = this.height;
    this.height = value;
    value = item.format;
    item.format = this.format;
    this.format = value;
    return this;
  };
  /**
   * @return {undefined}
   */
  Texture.prototype.destroy = function() {
    try {
      if (this.gl && this.id) {
        this.gl.deleteTexture(this.id);
      }
    } catch (c) {
    }
    /** @type {null} */
    this.id = null;
    /** @type {null} */
    this.gl = null;
  };
  return Texture;
}();
WebcamToy.Shader = function(dataAndEvents) {
  /**
   * @param {?} elems
   * @return {?}
   */
  function isKind(elems) {
    return Object.prototype.toString.call(elems) === "[object Array]";
  }
  /**
   * @param {?} obj
   * @return {?}
   */
  function _isArray(obj) {
    return Object.prototype.toString.call(obj) === "[object Number]";
  }
  /**
   * @param {WebGLRenderingContext} gl
   * @param {?} type
   * @param {(Function|string)} string
   * @return {?}
   */
  function createShader(gl, type, string) {
    var shader = gl.createShader(type);
    /** @type {string} */
    var h = "Compilation error";
    if (!shader) {
      throw h;
    } else {
      gl.shaderSource(shader, string);
    }
    gl.compileShader(shader);
    if (!gl.isContextLost() && !gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
      throw h;
    }
    return shader;
  }
  /**
   * @param {number} gl
   * @param {(Function|string)} type
   * @param {(Function|string)} chars
   * @return {undefined}
   */
  function ShaderProgram(gl, type, chars) {
    /** @type {number} */
    this.gl = gl;
    /** @type {null} */
    this.vertexAttribute = null;
    /** @type {null} */
    this.texCoordAttribute = null;
    this.program = gl.createProgram();
    type = type || fx;
    chars = chars || whitespace;
    /** @type {string} */
    chars = "precision mediump float;" + chars;
    gl.attachShader(this.program, createShader(gl, gl.VERTEX_SHADER, type));
    gl.attachShader(this.program, createShader(gl, gl.FRAGMENT_SHADER, chars));
    gl.linkProgram(this.program);
    if (!gl.isContextLost() && !gl.getProgramParameter(this.program, gl.LINK_STATUS)) {
      var charset;
      try {
        charset = gl.getProgramInfoLog(this.program);
      } catch (h) {
      }
      throw "Link error" + (charset ? ": " + charset : "");
    }
  }
  /** @type {string} */
  var fx = "attribute vec2 vertex;attribute vec2 _texCoord;varying vec2 texCoord;void main(){texCoord=_texCoord;gl_Position=vec4(vertex*2.0-1.0,0.0,1.0);}";
  /** @type {string} */
  var whitespace = "uniform sampler2D texture;varying vec2 texCoord;void main(){gl_FragColor=texture2D(texture,texCoord);}";
  /**
   * @param {string} gl
   * @return {?}
   */
  ShaderProgram.getMainShader = function(gl) {
    return new ShaderProgram(gl, null, "uniform sampler2D texture;varying vec2 texCoord;uniform float mult;uniform float offset;uniform float mirror;void main(){vec2 p=texCoord/1.005+0.0025;if(mirror==1.0){p.x=1.0-p.x;}gl_FragColor=vec4(clamp(texture2D(texture,p).rgb*mult+offset,0.0,1.0),1.0);}");
  };
  /**
   * @param {string} gl
   * @return {?}
   */
  ShaderProgram.getBlackShader = function(gl) {
    return new ShaderProgram(gl, null, "void main(){gl_FragColor=vec4(0.0,0.0,0.0,1.0);}");
  };
  /**
   * @param {string} gl
   * @return {?}
   */
  ShaderProgram.getWhiteShader = function(gl) {
    return new ShaderProgram(gl, null, "void main(){gl_FragColor=vec4(1.0);}");
  };
  /**
   * @param {?} obj
   * @return {?}
   */
  ShaderProgram.prototype.uniforms = function(obj) {
    if (obj) {
      var gl = this.gl;
      gl.useProgram(this.program);
      var name;
      for (name in obj) {
        if (obj.hasOwnProperty(name)) {
          var uniformLocation = gl.getUniformLocation(this.program, name);
          if (!uniformLocation) {
            continue;
          }
          var val = obj[name];
          if (isKind(val)) {
            switch(val.length) {
              case 1:
                gl.uniform1fv(uniformLocation, new Float32Array(val));
                break;
              case 2:
                gl.uniform2fv(uniformLocation, new Float32Array(val));
                break;
              case 3:
                gl.uniform3fv(uniformLocation, new Float32Array(val));
                break;
              case 4:
                gl.uniform4fv(uniformLocation, new Float32Array(val));
                break;
              case 9:
                gl.uniformMatrix3fv(uniformLocation, false, new Float32Array(val));
                break;
              case 16:
                gl.uniformMatrix4fv(uniformLocation, false, new Float32Array(val));
                break;
              default:
                throw'Cannot load uniform "' + name + '" of length ' + val.length;;
            }
          } else {
            if (_isArray(val)) {
              gl.uniform1f(uniformLocation, val);
            } else {
              throw'Attempted to set uniform "' + name + '" to invalid value ' + (val || "undefined").toString();
            }
          }
        }
      }
    }
    return this;
  };
  /**
   * @param {?} obj
   * @return {?}
   */
  ShaderProgram.prototype.textures = function(obj) {
    this.gl.useProgram(this.program);
    var i;
    for (i in obj) {
      if (obj.hasOwnProperty(i)) {
        this.gl.uniform1i(this.gl.getUniformLocation(this.program, i), obj[i]);
      }
    }
    return this;
  };
  /**
   * @param {number} x
   * @param {number} y
   * @param {number} expectedNumberOfNonCommentArgs
   * @param {number} scale
   * @return {undefined}
   */
  ShaderProgram.prototype.drawRect = function(x, y, expectedNumberOfNonCommentArgs, scale) {
    var gl = this.gl;
    if (!gl) {
      return;
    }
    x = x || 0;
    y = y || 0;
    expectedNumberOfNonCommentArgs = expectedNumberOfNonCommentArgs || 1;
    scale = scale || 1;
    if (!gl.vertexBuffer) {
      gl.vertexBuffer = gl.createBuffer();
    }
    gl.bindBuffer(gl.ARRAY_BUFFER, gl.vertexBuffer);
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([y, x, y, expectedNumberOfNonCommentArgs, scale, x, scale, expectedNumberOfNonCommentArgs]), gl.STATIC_DRAW);
    if (!gl.texCoordBuffer) {
      gl.texCoordBuffer = gl.createBuffer();
      gl.bindBuffer(gl.ARRAY_BUFFER, gl.texCoordBuffer);
      gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([0, 0, 0, 1, 1, 0, 1, 1]), gl.STATIC_DRAW);
    }
    if (!this.vertexAttribute) {
      this.vertexAttribute = gl.getAttribLocation(this.program, "vertex");
      gl.enableVertexAttribArray(this.vertexAttribute);
    }
    if (!this.texCoordAttribute) {
      this.texCoordAttribute = gl.getAttribLocation(this.program, "_texCoord");
      gl.enableVertexAttribArray(this.texCoordAttribute);
    }
    gl.useProgram(this.program);
    gl.bindBuffer(gl.ARRAY_BUFFER, gl.vertexBuffer);
    gl.vertexAttribPointer(this.vertexAttribute, 2, gl.FLOAT, false, 0, 0);
    gl.bindBuffer(gl.ARRAY_BUFFER, gl.texCoordBuffer);
    gl.vertexAttribPointer(this.texCoordAttribute, 2, gl.FLOAT, false, 0, 0);
    gl.drawArrays(gl.TRIANGLE_STRIP, 0, 4);
  };
  /**
   * @return {undefined}
   */
  ShaderProgram.prototype.destroy = function() {
    try {
      if (this.gl && this.program) {
        this.gl.deleteProgram(this.program);
      }
    } catch (h) {
    }
    /** @type {null} */
    this.program = null;
    /** @type {null} */
    this.gl = null;
  };
  return ShaderProgram;
}(WebcamToy);
WebcamToy.Effect = function(self) {
  /**
   * @param {Array} d
   * @param {Array} element
   * @param {number} len
   * @param {number} height
   * @return {?}
   */
  function drawRect(d, element, len, height) {
    /** @type {Float32Array} */
    var mat = new Float32Array(len * height);
    /** @type {number} */
    var b = d.length - 4;
    for (;b >= 0;b -= 4) {
      /** @type {number} */
      d[b] = d[b] * 0.3 + d[b + 1] * 0.59 + d[b + 2] * 0.11;
    }
    /** @type {number} */
    var i = len;
    for (;i--;) {
      /** @type {number} */
      var size = height;
      for (;size--;) {
        /** @type {number} */
        var a = 0;
        /** @type {number} */
        var offset = 3;
        for (;offset--;) {
          /** @type {number} */
          var x = 3;
          for (;x--;) {
            /** @type {number} */
            var j = i + offset - 1;
            /** @type {number} */
            var y = size + x - 1;
            if (y >= 0 && (y < height && (j >= 0 && j < len))) {
              a += d[(j + y * len) * 4] * element[offset + x * 3];
            }
          }
        }
        /** @type {number} */
        mat[i + size * len] = a;
      }
    }
    return mat;
  }
  /**
   * @param {?} c
   * @param {?} $index
   * @param {?} posy
   * @return {undefined}
   */
  function Particle(c, $index, posy) {
    /** @type {Array} */
    this.p = [c, $index, posy];
    /** @type {number} */
    this.dx = 0;
    /** @type {number} */
    this.dy = 0;
    this.reset();
  }
  /**
   * @param {number} x
   * @param {number} y
   * @param {number} theCallback
   * @param {number} theOldPath
   * @return {undefined}
   */
  function move(x, y, theCallback, theOldPath) {
    /** @type {number} */
    this.x = x;
    /** @type {number} */
    this.y = y;
    if (theCallback === 0) {
      /** @type {number} */
      this.size = 64;
      /** @type {number} */
      this.offset = 0;
    } else {
      if (theCallback < theOldPath * 2 / 4) {
        /** @type {number} */
        this.size = 48;
        /** @type {number} */
        this.offset = 64;
      } else {
        if (theCallback < theOldPath * 3 / 4) {
          /** @type {number} */
          this.size = 32;
          /** @type {number} */
          this.offset = 64 + 48;
        } else {
          /** @type {number} */
          this.size = 16;
          /** @type {number} */
          this.offset = 64 + 48 + 32;
        }
      }
    }
  }
  /**
   * @param {Function} fx
   * @param {number} var_args
   * @param {number} sx
   * @param {number} sy
   * @return {undefined}
   */
  function create(fx, var_args, sx, sy) {
    /** @type {Function} */
    this.fx = fx;
    /** @type {number} */
    this.fy = var_args;
    /** @type {number} */
    this.sx = sx;
    /** @type {number} */
    this.sy = sy;
    /** @type {Array} */
    this.pos = new Array(2);
  }
  /**
   * @param {number} x
   * @param {number} y
   * @param {boolean} a4
   * @return {undefined}
   */
  function Rect(x, y, a4) {
    /** @type {number} */
    this.x = x;
    /** @type {number} */
    this.y = y;
    /** @type {boolean} */
    this.big = a4;
  }
  /**
   * @param {number} x
   * @param {number} yp
   * @param {number} y
   * @param {number} dataAndEvents
   * @return {undefined}
   */
  function ShipEnemy(x, yp, y, dataAndEvents) {
    /** @type {number} */
    this.x = x;
    /** @type {number} */
    this.y = yp;
    /** @type {number} */
    this.width = y * 1.5;
    /** @type {number} */
    this.height = y;
    /** @type {number} */
    this.vx = dataAndEvents;
    /** @type {number} */
    this.vy = this.height * 0.3;
    /** @type {number} */
    this.melt = 1;
  }
  /**
   * @param {HTMLCanvasElement} canvas
   * @param {string} out
   * @param {(number|string)} width
   * @param {(number|string)} height
   * @return {undefined}
   */
  function init(canvas, out, width, height) {
    if (this.gl || (!canvas || !out)) {
      return;
    }
    /** @type {string} */
    this.source = out;
    this.width = width || maxWidth;
    this.height = height || maxHeight;
    canvas.width = this.width;
    canvas.height = this.height;
    /** @type {Array} */
    this.size = [this.width, this.height];
    /** @type {Array} */
    this.center = [this.width / 2, this.height / 2];
    this.context2D = init.getContext2D(Math.max(200, Math.floor(this.width / 2)), Math.max(200 * this.height / this.width, Math.floor(this.height / 2)));
    if (!ctx) {
      ctx = init.getContext2D(Math.max(160, Math.floor(this.width / 4)), Math.max(160 * this.height / this.width, Math.floor(this.height / 4)));
    }
    try {
      var attributes = {
        premultipliedAlpha : false
      };
      this.gl = canvas.getContext("webgl", attributes) || canvas.getContext("experimental-webgl", attributes);
    } catch (S) {
      /** @type {null} */
      this.gl = null;
      throw S;
    }
    if (!this.gl) {
      throw "WebGL error";
    }
    var elem = this;
    var gl = this.gl;
    var a = gl.getExtension("OES_texture_float");
    var b = gl.getExtension("OES_texture_float_linear");
    var dataType = gl.UNSIGNED_BYTE;
    this.sourceTexture = new self.Texture(gl, 0, 0, gl.RGB, gl.UNSIGNED_BYTE, null, gl.LINEAR);
    if (a && b) {
      var buffer = new self.Texture(gl, this.width, this.height, gl.RGB, gl.FLOAT);
      buffer.drawTo(function() {
        dataType = gl.FLOAT;
      });
      buffer.destroy();
      /** @type {null} */
      buffer = null;
    }
    this.mainTexture = new self.Texture(gl, this.width, this.height, gl.RGB, dataType);
    this.swapTexture = new self.Texture(gl, this.width, this.height, gl.RGB, dataType);
    this.tempTexture = new self.Texture(gl, this.width, this.height, gl.RGB, dataType);
    try {
      this.defaultShader = new self.Shader(gl);
      this.mainShader = self.Shader.getMainShader(gl);
      this.blackShader = self.Shader.getBlackShader(gl);
      this.whiteShader = self.Shader.getWhiteShader(gl);
    } catch (textStatus) {
      error(textStatus, "default", gl);
    }
    /**
     * @return {undefined}
     */
    this.defaultDrawRect = function() {
      elem.defaultShader.drawRect();
    };
    /**
     * @return {undefined}
     */
    this.mainDrawRect = function() {
      elem.mainShader.drawRect();
      elem.mainShader.uniforms(elem.mainUniforms).drawRect();
    };
    this.shaders = {};
    this.mainUniforms = {
      mult : 1,
      offset : 0,
      mirror : 1
    };
    /** @type {boolean} */
    this.mirror = true;
    /** @type {boolean} */
    this.square = false;
    this.setEffect();
  }
  /**
   * @param {string} s
   * @return {?}
   */
  function lcase(s) {
    return s.replace(/[a-zA-Z]/g, function(c) {
      return String.fromCharCode((c <= "Z" ? 90 : 122) >= (c = c.charCodeAt(0) + 13) ? c : c - 26);
    });
  }
  /**
   * @param {Function} req
   * @param {Function} callback
   * @param {string} err2
   * @return {undefined}
   */
  function load(req, callback, err2) {
    if (self.getImages) {
      try {
        data = self.getImages(event);
        delete self.getImages;
        if (req) {
          req();
        }
      } catch (err) {
        if (callback) {
          callback(err || err2);
        }
      }
    } else {
      if (callback) {
        callback(err2);
      }
    }
  }
  /**
   * @return {?}
   */
  function _preloadImage() {
    return self.Services.assetsURL + "js/app-images." + (inputsPlugin.attr("data-app-images") || 1) + ".js";
  }
  /**
   * @return {?}
   */
  function url() {
    return self.Services.assetsURL + "fs/fs." + (inputsPlugin.attr("data-fs") || 1) + ".txt";
  }
  /**
   * @param {Array} arr
   * @return {?}
   */
  function map(arr) {
    /** @type {number} */
    var m = 2;
    for (;m < 256;m++) {
      if (arr[m] > 4) {
        return m;
      }
    }
    return 2;
  }
  /**
   * @param {Array} value
   * @return {?}
   */
  function val(value) {
    /** @type {number} */
    var count = 253;
    for (;count > 0;count--) {
      if (value[count] > 4) {
        return count;
      }
    }
    return 253;
  }
  /**
   * @param {WebGLProgram} data
   * @param {?} images
   * @return {undefined}
   */
  function overlay(data, images) {
    this.mainTexture.use(0);
    this.swapTexture.drawTo(function() {
      data.uniforms(images).drawRect();
    }).swapWith(this.mainTexture);
  }
  /**
   * @return {undefined}
   */
  function walk() {
    overlay.call(this, this.shaders[this.id], this.uniforms);
    this.mainDraw();
  }
  /**
   * @param {string} textStatus
   * @param {string} value
   * @param {?} gl
   * @return {?}
   */
  function error(textStatus, value, gl) {
    /** @type {string} */
    var item = value;
    if (textStatus) {
      item += ": " + textStatus;
      /** @type {string} */
      item = item.replace(/(\r\n|\n|\r)/gm, "");
    }
    if (item && /Compilation/.test(item)) {
      a++;
      if (a > b) {
        self.UI.destroy("Effects not compiled");
        return false;
      }
    } else {
      if (!gl.isContextLost() && a <= b) {
        self.trackEvent("Error", "Shader", item, true);
        self.log("*ERROR*", "Shader", value);
      }
    }
  }
  var old = {};
  /** @type {Array} */
  var ids = ["mirrorleft", "mirrorright", "mirrortop", "mirrorbottom", "mirrorquad", "upsidedown", "switch", "kaleidoscope", "fragment", "quadcam", "splitscreen", "filmstrip", "ghost", "colorghost", "trail", "shuffle", "tunnel", "spiral", "twist", "dent", "pinch", "bulge", "fisheye", "wedge", "ripple", "stretch", "softfocus", "hazydays", "vintage", "rose", "retro", "cocoa", "xpro", "envy", "zinc", "citrus", "berry", "mint", "smoke", "halo", "bloom", "glaze", "watercolor", "silk", "oldmovie", "cocktail",
  "spycam", "hotpink", "bokeh", "flare", "danger", "rainbow", "trueblue", "mono", "lomo", "comicbook", "monoquad", "lomoquad", "comicstrip", "magazine", "blackwhite", "cartoon", "outline", "sketch", "crosshatch", "underwater", "fire", "snow", "disco", "sparkle", "glitch", "xray", "lsd", "alien", "nightvision", "thermal", "spectrum", "neon", "popart", "popbooth"];
  /** @type {number} */
  var a = 0;
  /** @type {number} */
  var b = 3;
  /** @type {number} */
  var maxWidth = 800;
  /** @type {number} */
  var maxHeight = 600;
  var suiteView = {
    texture2 : 1
  };
  /** @type {Array} */
  var token = [2, 2, 2, 0, 0, 0, -2, -2, -2];
  /** @type {Array} */
  var activeClassName = [1, 2, 1, 2, -12, 2, 1, 2, 1];
  var params = {
    /**
     * @param {number} vec0
     * @return {undefined}
     */
    add : function(vec0) {
      this.initShader("add");
      this.uniforms.add = {
        ratio : vec0 || 0.5
      };
    },
    /**
     * @return {undefined}
     */
    alien : function() {
      this.initShader("alien");
      /** @type {number} */
      this.fps = 20;
    },
    /**
     * @param {number} e
     * @return {undefined}
     */
    blur : function(e) {
      if (!this.initShader("blur")) {
        this.initShader("blursimple");
      }
      this.uniforms.blur1 = {
        delta : [(e || 32) / this.width, 0]
      };
      this.uniforms.blur2 = {
        delta : [0, (e || 32) / this.height]
      };
    },
    /**
     * @return {undefined}
     */
    bloom : function() {
      this.uniforms = {
        center : this.center,
        radius : (this.square ? this.height : this.width) / 4,
        width : this.height
      };
    },
    /**
     * @return {undefined}
     */
    bokeh : function() {
      /** @type {number} */
      var radius = this.width / 6;
      /** @type {number} */
      var w = this.square ? this.width / 3 : (this.width + this.height) / 6;
      this.initShader("bokeh");
      this.initShader("radialblur");
      /** @type {number} */
      this.fps = 20;
      this.extraTexture = this.getTexture(data.bokeh);
      /** @type {number} */
      this.startTime = Date.now() - Math.random() * 100 - 50;
      this.uniforms = {
        bokehs : [],
        bokeh : {
          center : this.center,
          radius : this.height * 1.2,
          init : 1,
          texSize : this.size,
          time : 0
        },
        radialblur1 : {
          texSize : this.size,
          center : this.center,
          blur : Math.floor(this.width / 32),
          radius : radius,
          width : w,
          delta : [1 / this.width, 0]
        },
        radialblur2 : {
          texSize : this.size,
          center : this.center,
          blur : Math.floor(this.width / 32),
          radius : radius,
          width : w,
          delta : [0, 1 / this.height]
        }
      };
      /** @type {number} */
      var a3 = 32;
      for (;a3--;) {
        /** @type {number} */
        var pull = 128 - a3 * a3 / 24;
        this.uniforms.bokehs.push(new Particle(Math.random() * maxWidth - pull / 2, Math.random() * maxHeight - pull / 2, pull));
      }
    },
    /**
     * @return {undefined}
     */
    bulge : function() {
      this.uniforms = {
        mode : 1,
        strength : 0.9,
        center : this.center,
        radius : this.height / 4
      };
    },
    /**
     * @return {undefined}
     */
    cartoon : function() {
      this.initShader("cartoon");
      this.initShader("cartoonink");
      /** @type {number} */
      this.fps = 20;
      /** @type {number} */
      this.quality = 0.7;
      this.uniforms = {
        cartoonink : {
          size : [2.5 / maxHeight * this.height / this.width, 2.5 / maxHeight]
        },
        cartoon : {
          rect : this.getRect(0.01)
        }
      };
    },
    /**
     * @return {undefined}
     */
    cocktail : function() {
      this.initShader("cocktail");
      this.initShader("cocktailborder");
      /** @type {number} */
      this.fps = 20;
      this.extraTexture = this.getTexture(this.square ? data.cocktailsq : data.cocktail);
      this.uniforms = {
        rect : this.getRect(0.006),
        fade : maxWidth / 3
      };
    },
    /**
     * @return {undefined}
     */
    cocoa : function() {
      this.initShader("cocoa");
      /** @type {number} */
      this.fps = 20;
      this.uniforms = {
        center : this.center,
        radius : (this.square ? this.height : this.width) / 6,
        width : this.height * 0.58,
        rect : this.getRect(0.022),
        fade : 60
      };
    },
    /**
     * @return {undefined}
     */
    colorghost : function() {
      this.initShader("colorghost");
      this.initFrameTextures(this.fps = event ? 8 : 20, this.width, this.height);
      this.uniforms = {
        frame : 0,
        tex : {
          frame1 : 1,
          frame2 : 2
        }
      };
    },
    /**
     * @return {undefined}
     */
    comicbook : function() {
      /** @type {number} */
      this.quality = 0.55;
      this.uniforms = {
        quad : 0,
        center : this.center,
        size : Math.min(0.8, 400 / this.height),
        rect : this.getRect(0.02)
      };
    },
    /**
     * @return {undefined}
     */
    comicstrip : function() {
      this.initShader("quadcam");
      this.initShader("comicbook");
      this.initShader("comicstripborder");
      /** @type {number} */
      this.quality = 0.55;
      /** @type {boolean} */
      this.isQuad = true;
      this.uniforms.comicstrip = {
        center : this.center,
        size : Math.min(0.8, 500 / this.height),
        rect : this.getRect(this.square ? 0.028 : 0)
      };
      this.uniforms.comicstripborder = {
        rect : this.getRect(0.018),
        border : [0.009 * this.height / this.width, 0.009],
        wide : (this.width - this.height / 2) / this.width
      };
      this.uniforms.comicstripwide = {
        wide : this.square || event ? 0 : 1,
        square : this.square || event ? 1 : 0
      };
      this.uniforms.comicstripsquare = {
        wide : this.square || event ? 0 : 1,
        square : 1
      };
    },
    /**
     * @return {undefined}
     */
    danger : function() {
      this.uniforms = {
        center : this.center,
        radius : this.width * 0.75,
        rect : this.getRect(0.05),
        fade : 32
      };
    },
    /**
     * @return {undefined}
     */
    dent : function() {
      this.initShader("bulge");
      this.uniforms = {
        mode : 0,
        strength : -1,
        center : this.center,
        radius : this.height / 4
      };
    },
    /**
     * @return {undefined}
     */
    disco : function() {
      this.initShader("discored");
      this.initShader("discogreen");
      this.initShader("discoblue");
      /** @type {number} */
      this.startTime = Date.now() - 2E3;
      this.uniforms = {
        discolights : {},
        discored : [new create(3.3, 2.9, 0.3, 0.3), new create(1.9, 2, 0.4, 0.4), new create(0.8, 0.7, 0.4, 0.5), new create(2.3, 0.1, 0.6, 0.3), new create(0.8, 1.7, 0.5, 0.4), new create(0.3, 1, 0.4, 0.4), new create(1.4, 1.7, 0.4, 0.5), new create(1.3, 2.1, 0.6, 0.3), new create(1.8, 1.7, 0.5, 0.4)],
        discogreen : [new create(1.2, 1.9, 0.3, 0.3), new create(0.7, 2.7, 0.4, 0.4), new create(1.4, 0.6, 0.4, 0.5), new create(2.6, 0.4, 0.6, 0.3), new create(0.7, 1.4, 0.5, 0.4), new create(0.7, 1.7, 0.4, 0.4), new create(0.8, 0.5, 0.4, 0.5), new create(1.4, 0.9, 0.6, 0.3), new create(0.7, 1.3, 0.5, 0.4)],
        discoblue : [new create(3.7, 0.3, 0.3, 0.3), new create(1.9, 1.3, 0.4, 0.4), new create(0.8, 0.9, 0.4, 0.5), new create(1.2, 1.7, 0.6, 0.3), new create(0.3, 0.6, 0.5, 0.4), new create(0.3, 0.3, 0.4, 0.4), new create(1.4, 0.8, 0.4, 0.5), new create(0.2, 0.6, 0.6, 0.3), new create(1.3, 0.5, 0.5, 0.4)]
      };
    },
    /**
     * @return {undefined}
     */
    envy : function() {
      /** @type {number} */
      var radius = this.square ? this.width / 8 : (this.width + this.height) / 10;
      /** @type {number} */
      var w = this.square ? this.width / 1.5 : (this.width + this.height) / 3;
      this.initShader("envy");
      this.initShader("radialblur");
      this.initShader("envyborder");
      /** @type {number} */
      this.fps = 20;
      this.uniforms = {
        radialblur1 : {
          texSize : this.size,
          center : this.center,
          blur : Math.floor(this.width / 32),
          radius : radius,
          width : w,
          delta : [1 / this.width, 0]
        },
        radialblur2 : {
          texSize : this.size,
          center : this.center,
          blur : Math.floor(this.width / 32),
          radius : radius,
          width : w,
          delta : [0, 1 / this.height]
        },
        envyborder : {
          rect : this.getRect(0.022),
          fade : maxWidth / 3
        }
      };
    },
    /**
     * @return {undefined}
     */
    fire : function() {
      /** @type {number} */
      var x = this.square ? (this.width - this.height) / this.width / 2 : 0;
      this.initShader("fire");
      this.initShader("firevignette");
      this.initFrameTextures(6, this.width, this.height);
      /** @type {number} */
      this.fps = 20;
      /** @type {number} */
      this.quality = 0.7;
      this.uniforms = {
        frame : 0,
        center : this.center,
        radius : this.height * 0.4,
        width : (this.square ? this.height : this.width) / 3,
        left : x,
        right : 1 - x,
        tex : {
          frame1 : 1,
          frame2 : 2,
          frame3 : 3,
          frame4 : 4,
          frame5 : 5,
          frame6 : 6
        }
      };
    },
    /**
     * @return {undefined}
     */
    filmstrip : function() {
      /** @type {number} */
      var zoom = event ? 1.5 : 3;
      /** @type {number} */
      var x = this.square ? (this.width - this.height) / this.width / 2 : 0;
      this.initShader("filmstrip");
      this.initFrameTextures(1, Math.round(this.width * zoom), Math.round(this.height * zoom));
      /** @type {number} */
      this.fps = 20;
      /** @type {number} */
      this.quality = 0.7;
      this.uniforms = {
        frame : 0,
        init : true,
        left : x,
        right : 1 - x
      };
    },
    /**
     * @return {undefined}
     */
    fisheye : function() {
      this.initShader("bulge");
      this.uniforms = {
        mode : 1,
        strength : 1,
        center : this.center,
        radius : this.height * 0.75
      };
    },
    /**
     * @return {undefined}
     */
    ghost : function() {
      this.initShader("ghost");
      this.initFrameTextures(this.fps = event ? 8 : 20, this.width, this.height);
      this.uniforms.ghost = {
        frame : 0
      };
    },
    /**
     * @return {undefined}
     */
    glaze : function() {
      this.initShader("glaze");
      this.initShader("overlay");
      /** @type {number} */
      this.fps = 20;
      this.uniforms = {
        glaze : {
          size : [this.width / 2, this.width / 2],
          time : 0
        },
        overlay : {
          rect : this.getRect(0.025),
          mult : 1.25,
          offset : 0.7
        }
      };
    },
    /**
     * @return {undefined}
     */
    glitch : function() {
      this.uniforms = {
        pixelSize : Math.max(10, this.height / maxHeight * 20),
        center : this.center,
        width : this.width / 2
      };
    },
    /**
     * @return {undefined}
     */
    halo : function() {
      this.initShader("halo");
      this.initShader("softfocus");
      /** @type {number} */
      this.fps = 20;
    },
    /**
     * @return {undefined}
     */
    hazydays : function() {
      this.initShader("hazydays");
      this.extraTexture = this.getTexture(this.square ? data.hazydayssq : data.hazydays);
    },
    /**
     * @return {undefined}
     */
    hotpink : function() {
      this.initShader("hotpink");
      this.extraTexture = this.getTexture(data.hotpink);
    },
    /**
     * @return {undefined}
     */
    kaleidoscope : function() {
      if (this.mainTexture.type === this.gl.FLOAT) {
        this.initShader("kaleidoscope1");
        this.initShader("kaleidoscope2");
      } else {
        this.initShader("kaleidoscope");
      }
      this.uniforms = {
        center : this.center,
        offset : [this.width / 2, this.height * 0.1]
      };
    },
    /**
     * @return {undefined}
     */
    lomo : function() {
      this.uniforms = {
        quad : 0,
        center : this.center,
        radius : this.width * 0.8,
        exposure : 2.25
      };
    },
    /**
     * @return {undefined}
     */
    lomoquad : function() {
      this.initShader("lomo");
      /** @type {boolean} */
      this.isQuad = true;
      this.uniforms.lomoquad = {
        center : this.center,
        radius : this.width * 0.85,
        exposure : 2.25,
        rect : this.getRect(0.028),
        fade : 80
      };
    },
    /**
     * @return {undefined}
     */
    lsd : function() {
      this.initShader("lsd");
      this.sourceTexture.loadContentsOf(this.source);
      this.tempTexture.drawTo(this.mainDrawRect);
      /** @type {number} */
      this.fps = 15;
    },
    /**
     * @return {undefined}
     */
    magazine : function() {
      /** @type {number} */
      var theta2 = Math.PI / 3;
      /** @type {number} */
      this.quality = 0.6;
      this.uniforms = {
        center : this.center,
        size : Math.min(0.8, 400 / this.height),
        cosa : Math.cos(theta2),
        sina : Math.sin(theta2),
        rect : this.getRect(0.028),
        fade : 48 * 24
      };
    },
    /**
     * @param {number} weight
     * @return {undefined}
     */
    mix : function(weight) {
      this.initShader("mix");
      this.uniforms.mix = {
        strength : weight || 8
      };
    },
    /**
     * @return {undefined}
     */
    mono : function() {
      this.uniforms = {
        quad : 0
      };
    },
    /**
     * @return {undefined}
     */
    monoquad : function() {
      this.initShader("mono");
      /** @type {boolean} */
      this.isQuad = true;
      this.uniforms.monoquad = {
        rect : this.getRect(0.028),
        fade : 120
      };
    },
    /**
     * @return {undefined}
     */
    neon : function() {
      /** @type {number} */
      this.quality = 0.9;
    },
    /**
     * @return {undefined}
     */
    nightvision : function() {
      /** @type {number} */
      this.quality = 0.7;
      this.uniforms = {
        center : this.center,
        radius : (this.square ? this.height : this.width) * 0.3
      };
    },
    /**
     * @return {undefined}
     */
    oldmovie : function() {
      this.initShader("oldmovienoise");
      this.initShader("oldmoviedirt");
      this.initShader("sepia");
      /** @type {number} */
      this.fps = 10;
      /** @type {number} */
      this.quality = 0.7;
      this.uniforms = {
        flicker : 0,
        jump : 0,
        line : 0,
        dot0 : new Array(3),
        dot1 : new Array(3),
        dot2 : new Array(3),
        sepia : {
          center : this.center,
          radius : this.height / 2,
          width : (this.square ? this.height : this.width) / 3
        }
      };
    },
    /**
     * @return {undefined}
     */
    outline : function() {
      /** @type {number} */
      this.quality = 0.7;
      this.uniforms = {
        rect : this.getRect(0.01)
      };
    },
    /**
     * @return {undefined}
     */
    pinch : function() {
      this.initShader("bulge");
      this.uniforms = {
        mode : 1,
        strength : -0.5,
        center : this.center,
        radius : this.height / 4
      };
    },
    /**
     * @return {undefined}
     */
    popart : function() {
      this.initShader("popart");
      this.extraTexture = this.getTexture(data.popart);
      /** @type {number} */
      this.quality = 0.9;
    },
    /**
     * @return {undefined}
     */
    popbooth : function() {
      this.initShader("popart");
      this.extraTexture = this.getTexture(data.popbooth);
    },
    /**
     * @return {undefined}
     */
    quad : function() {
      this.uniforms.quad = {
        texSize : this.size,
        square : this.square ? 1 : 0,
        quad : 1
      };
    },
    /**
     * @return {undefined}
     */
    quadcam : function() {
      this.initShader("quadcam");
      /** @type {boolean} */
      this.isQuad = true;
    },
    /**
     * @return {undefined}
     */
    rainbow : function() {
      /** @type {number} */
      var radius = 32 * this.height / maxHeight;
      this.initShader("rainbow");
      this.initShader("overlay");
      this.initShader("rainbowborder");
      this.uniforms = {
        rainbow : {
          size : [this.width, this.square ? this.width : this.height],
          offset : this.square ? 0.4 : 0.25
        },
        overlay : {
          rect : this.getRect(0),
          mult : 1.4,
          offset : 0.6
        },
        rainbowborder : {
          texSize : this.size,
          radius : radius,
          border : 1.5,
          ratio : this.square ? 1 : this.width / this.height
        }
      };
    },
    /**
     * @return {undefined}
     */
    retro : function() {
      this.initShader("retro");
      this.extraTexture = this.getTexture(this.square ? data.retrosq : data.retro);
    },
    /**
     * @return {undefined}
     */
    ripple : function() {
      this.uniforms = {
        center : this.center,
        wavelength : this.height / 16,
        amplitude : this.height / 22
      };
    },
    /**
     * @return {undefined}
     */
    rose : function() {
      var radius = this.square ? this.height : this.width;
      this.uniforms = {
        center : this.center,
        radius : radius / 6.4,
        width : radius * 0.75,
        rect : this.getRect(0.03),
        fade : 75
      };
    },
    /**
     * @return {undefined}
     */
    shuffle : function() {
      if (!event && this.initShader("shuffle")) {
        this.initFrameTextures(27, this.width, this.height);
        this.uniforms = {
          frame : 0,
          tex : {
            frame1 : 1,
            frame2 : 2,
            frame3 : 3,
            frame4 : 4,
            frame5 : 5,
            frame6 : 6,
            frame7 : 7,
            frame8 : 8,
            frame9 : 9
          }
        };
      } else {
        this.initShader("shufflesimple");
        this.initFrameTextures(12, this.width, this.height);
        this.uniforms = {
          frame : 0,
          tex : {
            frame1 : 1,
            frame2 : 2,
            frame3 : 3,
            frame4 : 4
          }
        };
      }
      /** @type {number} */
      this.fps = 20;
    },
    /**
     * @return {undefined}
     */
    silk : function() {
      /** @type {number} */
      var normalRadius = (this.square ? this.height : this.width) / 8;
      var w = this.height;
      this.initShader("silk");
      this.initShader("radialblur");
      /** @type {number} */
      this.fps = 20;
      this.uniforms = {
        silk : {
          texSize : this.size,
          center : this.center,
          radius : normalRadius * 2,
          width : w * 1.5
        },
        radialblur1 : {
          texSize : this.size,
          center : this.center,
          blur : Math.floor(this.width / 32),
          radius : normalRadius,
          width : w,
          delta : [1 / this.width, 0]
        },
        radialblur2 : {
          texSize : this.size,
          center : this.center,
          blur : Math.floor(this.width / 32),
          radius : normalRadius,
          width : w,
          delta : [0, 1 / this.height]
        }
      };
    },
    /**
     * @return {undefined}
     */
    snow : function() {
      /** @type {number} */
      var y = Math.max(60, Math.floor(this.height / 4));
      /** @type {number} */
      var values = Math.floor(y * this.width / this.height);
      this.tempContext2D = init.getContext2D(values, y);
      /** @type {Array} */
      this.assets.snowflakes = [];
      this.uniforms = {
        center : this.center,
        radius : (this.square ? this.height : this.width) / 3,
        width : this.height / 2
      };
    },
    /**
     * @return {undefined}
     */
    softfocus : function() {
      this.initShader("softfocus");
      /** @type {number} */
      this.fps = 20;
    },
    /**
     * @return {undefined}
     */
    sparkle : function() {
      /** @type {number} */
      var y = Math.max(60, Math.floor(this.height / 4));
      /** @type {number} */
      var values = Math.floor(y * this.width / this.height);
      this.initShader("sparkle");
      this.initFrameTextures(1, this.width, this.height);
      this.tempContext2D = init.getContext2D(values, y);
      /** @type {number} */
      this.fps = 20;
      /** @type {Array} */
      this.assets.sparkles = [];
      this.uniforms = {
        mirror : this.mirror ? 1 : 0,
        tex : {
          texture2 : 1,
          texture3 : 2
        }
      };
    },
    /**
     * @return {undefined}
     */
    spectrum : function() {
      /** @type {number} */
      this.quality = 0.7;
    },
    /**
     * @return {undefined}
     */
    spiral : function() {
      /** @type {number} */
      var theta2 = 7;
      /** @type {number} */
      var b2 = maxHeight / this.height * 0.95;
      /** @type {number} */
      var a3 = Math.cos(theta2);
      /** @type {number} */
      var a1 = Math.sin(theta2);
      /** @type {number} */
      var m = 60 * this.height / maxHeight;
      /** @type {number} */
      var span = 140 * this.height / maxHeight;
      /** @type {number} */
      var i = Math.log(span / m);
      /** @type {number} */
      var halfTotalAngle = Math.atan(i / Math.PI / 2);
      if (this.mainTexture.type === this.gl.FLOAT) {
        this.initShader("spiral1");
        this.initShader("spiral2");
      } else {
        this.initShader("spiral");
      }
      this.uniforms = {
        spiralx : m,
        a : i,
        center : this.center,
        za : [a3 * b2, a1 * b2],
        start : [(this.center[0] * a3 + this.center[1] * a1) * -b2, (this.center[1] * a3 - this.center[0] * a1) * b2],
        s : [Math.cos(halfTotalAngle), Math.sin(halfTotalAngle)]
      };
    },
    /**
     * @return {undefined}
     */
    splitscreen : function() {
      this.initShader("splitscreen");
      this.initFrameTextures(this.fps = event ? 10 : 20, this.width, this.height);
      this.uniforms = {
        frame : 0
      };
    },
    /**
     * @return {undefined}
     */
    thermal : function() {
      this.initShader("thermal");
      this.extraTexture = this.getTexture(data.thermal);
      /** @type {number} */
      this.quality = 0.7;
    },
    /**
     * @return {undefined}
     */
    trail : function() {
      this.initShader("trail");
      this.sourceTexture.loadContentsOf(this.source);
      this.tempTexture.drawTo(this.mainDrawRect);
    },
    /**
     * @return {undefined}
     */
    tunnel : function() {
      this.uniforms = {
        center : this.center,
        radius : this.height * 0.2
      };
    },
    /**
     * @return {undefined}
     */
    twist : function() {
      this.uniforms = {
        center : this.center,
        radius : this.height / 2,
        angle : -150 * Math.PI / 180
      };
    },
    /**
     * @return {undefined}
     */
    underwater : function() {
      this.initShader("underwater");
      this.initShader("underwaterblue");
      /** @type {Array} */
      this.assets.bubbles = new Array(12);
      this.uniforms = {
        center : this.center,
        radius : (this.square ? this.height : this.width) / 3,
        width : this.height / 2
      };
    },
    /**
     * @return {undefined}
     */
    vintage : function() {
      this.initShader("vintage");
      this.extraTexture = this.getTexture(data.vintage);
      this.uniforms = {
        center : this.center,
        radius : (this.square ? this.height : this.width) / 3,
        width : this.height * 0.6
      };
    },
    /**
     * @return {undefined}
     */
    watercolor : function() {
      this.initShader("watercolor");
      this.extraTexture = this.getTexture(data.watercolor);
      /** @type {number} */
      this.quality = 0.9;
      this.uniforms = {
        rect : this.getRect(0.028),
        fade : 100
      };
    },
    /**
     * @return {undefined}
     */
    wedge : function() {
      this.uniforms = {
        center : this.center
      };
    },
    /**
     * @return {undefined}
     */
    xpro : function() {
      /** @type {number} */
      var radius = this.square ? this.width / 6 : (this.width + this.height) / 8;
      /** @type {number} */
      var w = this.square ? this.width / 3 : (this.width + this.height) / 6;
      this.initShader("xpro");
      this.initShader("radialblur");
      this.initShader("xproborder");
      /** @type {number} */
      this.fps = 20;
      this.uniforms = {
        radialblur1 : {
          texSize : this.size,
          center : this.center,
          blur : Math.floor(this.width / 32),
          radius : radius,
          width : w,
          delta : [1 / this.width, 0]
        },
        radialblur2 : {
          texSize : this.size,
          center : this.center,
          blur : Math.floor(this.width / 32),
          radius : radius,
          width : w,
          delta : [0, 1 / this.height]
        },
        xproborder : {
          rect : this.getRect(0.022),
          fade : 120
        }
      };
    },
    /**
     * @return {undefined}
     */
    zinc : function() {
      /** @type {number} */
      var radius = this.square ? this.width / 6 : (this.width + this.height) / 8;
      /** @type {number} */
      var w = this.square ? this.width / 1.5 : (this.width + this.height) / 3;
      this.initShader("zinc");
      this.initShader("radialblur");
      /** @type {number} */
      this.fps = 20;
      this.uniforms = {
        radialblur1 : {
          texSize : this.size,
          center : this.center,
          blur : Math.floor(this.width / 32),
          radius : radius,
          width : w,
          delta : [1 / this.width, 0]
        },
        radialblur2 : {
          texSize : this.size,
          center : this.center,
          blur : Math.floor(this.width / 32),
          radius : radius,
          width : w,
          delta : [0, 1 / this.height]
        },
        zinc : {
          rect : this.getRect(0.022),
          fade : maxHeight / 3
        }
      };
    }
  };
  var obj = {
    /**
     * @param {?} fake
     * @return {undefined}
     */
    add : function(fake) {
      if (!this.uniforms.add) {
        params.add.call(this, fake);
      }
      if (this.shaders.add) {
        this.shaders.add.textures(suiteView);
        overlay.call(this, this.shaders.add, this.uniforms.add);
      }
    },
    /**
     * @return {undefined}
     */
    alien : function() {
      if (this.shaders.alien) {
        this.shaders.alien.textures(suiteView);
        this.tempTexture.drawTo(this.mainDrawRect).use(1);
        if (!event) {
          obj.blur.call(this, Math.floor(this.width / 16));
        }
        overlay.call(this, this.shaders.alien);
      }
      this.mainDraw();
    },
    /**
     * @param {?} e
     * @return {undefined}
     */
    blur : function(e) {
      if (this.shaders.blursimple) {
        overlay.call(this, this.shaders.blursimple, this.uniforms);
      } else {
        if (!this.uniforms.blur1) {
          params.blur.call(this, e);
        }
        overlay.call(this, this.shaders.blur, this.uniforms.blur1);
        overlay.call(this, this.shaders.blur, this.uniforms.blur2);
      }
    },
    /**
     * @return {undefined}
     */
    bokeh : function() {
      if (!event) {
        overlay.call(this, this.shaders.radialblur, this.uniforms.radialblur1);
        overlay.call(this, this.shaders.radialblur, this.uniforms.radialblur2);
      }
      if (this.shaders.bokeh && this.extraTexture) {
        this.extraTexture.use(1);
        this.shaders.bokeh.textures(suiteView);
        this.uniforms.bokeh.time = this.uniforms.time;
        /** @type {number} */
        var textWidth = 4;
        for (;textWidth--;) {
          /** @type {number} */
          this.uniforms.bokeh.init = textWidth === 3 ? 1 : 0;
          /** @type {number} */
          var x = 8;
          for (;x--;) {
            this.uniforms.bokeh["p" + x] = this.uniforms.bokehs[x + textWidth * 8].move();
          }
          overlay.call(this, this.shaders.bokeh, this.uniforms.bokeh);
        }
      }
      this.mainDraw();
    },
    /**
     * @return {undefined}
     */
    cartoon : function() {
      overlay.call(this, this.shaders.cartoonink, this.uniforms.cartoonink);
      overlay.call(this, this.shaders.cartoon, this.uniforms.cartoon);
      this.mainDraw();
    },
    /**
     * @return {undefined}
     */
    cocktail : function() {
      if (this.shaders.cocktail && this.extraTexture) {
        this.shaders.cocktail.textures(suiteView);
        this.tempTexture.drawTo(this.mainDrawRect).use(1);
        if (!event) {
          obj.blur.call(this, Math.floor(this.width / 16));
        }
        overlay.call(this, this.shaders.cocktail, this.uniforms);
        this.extraTexture.use(1);
        this.shaders.cocktailborder.textures(suiteView);
        overlay.call(this, this.shaders.cocktailborder, this.uniforms);
      }
      this.mainDraw();
    },
    /**
     * @return {undefined}
     */
    cocoa : function() {
      if (this.shaders.cocoa) {
        this.shaders.cocoa.textures(suiteView);
        this.tempTexture.drawTo(this.mainDrawRect).use(1);
        if (!event) {
          obj.blur.call(this, Math.floor(this.width / 32));
        }
        overlay.call(this, this.shaders.cocoa, this.uniforms);
      }
      this.mainDraw();
    },
    /**
     * @return {undefined}
     */
    colorghost : function() {
      var i = this.uniforms.frame;
      var num_points = this.frameTextures.length;
      this.mainTexture.use(0);
      this.frameTextures[i].drawTo(this.defaultDrawRect);
      i++;
      /** @type {number} */
      this.uniforms.frame = i %= num_points;
      this.frameTextures[i].use(1);
      this.frameTextures[(i + num_points / 2) % num_points].use(2);
      if (this.shaders.colorghost) {
        this.shaders.colorghost.textures(this.uniforms.tex);
        overlay.call(this, this.shaders.colorghost);
      }
      this.mainDraw();
    },
    /**
     * @return {undefined}
     */
    comicstrip : function() {
      if (this.shaders.comicbook) {
        this.shaders.comicbook.uniforms(this.uniforms.comicstrip);
        obj.quad.call(this, this.shaders.comicbook);
      }
    },
    /**
     * @return {undefined}
     */
    dent : function() {
      overlay.call(this, this.shaders.bulge, this.uniforms);
      this.mainDraw();
    },
    /**
     * @return {undefined}
     */
    disco : function() {
      var t = this.uniforms.time;
      var base;
      /** @type {number} */
      base = 0;
      for (;base < 9;base++) {
        this.uniforms.discolights["p" + base] = this.uniforms.discored[base].getPos(t);
      }
      overlay.call(this, this.shaders.discored, this.uniforms.discolights);
      /** @type {number} */
      base = 0;
      for (;base < 9;base++) {
        this.uniforms.discolights["p" + base] = this.uniforms.discogreen[base].getPos(t);
      }
      overlay.call(this, this.shaders.discogreen, this.uniforms.discolights);
      /** @type {number} */
      base = 0;
      for (;base < 9;base++) {
        this.uniforms.discolights["p" + base] = this.uniforms.discoblue[base].getPos(t);
      }
      overlay.call(this, this.shaders.discoblue, this.uniforms.discolights);
      this.mainDraw();
    },
    /**
     * @return {undefined}
     */
    envy : function() {
      overlay.call(this, this.shaders.envy);
      if (!event) {
        overlay.call(this, this.shaders.radialblur, this.uniforms.radialblur1);
        overlay.call(this, this.shaders.radialblur, this.uniforms.radialblur2);
      }
      overlay.call(this, this.shaders.envyborder, this.uniforms.envyborder);
      this.mainDraw();
    },
    /**
     * @return {undefined}
     */
    filmstrip : function() {
      var ctx = this.defaultShader;
      var canvas = this.frameTextures[0];
      var frame = this.uniforms.frame;
      var newWidth;
      this.mainTexture.use(0);
      this.gl.viewport(0, 0, canvas.width, canvas.height);
      if (this.uniforms.init) {
        /** @type {boolean} */
        this.uniforms.init = false;
        canvas.drawTo(function() {
          /** @type {number} */
          newWidth = 0;
          for (;newWidth < 6;newWidth++) {
            /** @type {number} */
            var newHeight = 0;
            for (;newHeight < 6;newHeight++) {
              ctx.drawRect(newWidth / 6, newHeight / 6, (newWidth + 1) / 6, (newHeight + 1) / 6);
            }
          }
        }).use(1);
      } else {
        canvas.drawTo(function() {
          /** @type {number} */
          newWidth = 0;
          for (;newWidth < 6;newWidth++) {
            switch(frame) {
              case newWidth:
                ctx.drawRect(newWidth / 6, 0, (newWidth + 1) / 6, 1 / 6);
                break;
              case newWidth + 6:
                ctx.drawRect(newWidth / 6, 1 / 6, (newWidth + 1) / 6, 2 / 6);
                break;
              case newWidth + 12:
                ctx.drawRect(newWidth / 6, 2 / 6, (newWidth + 1) / 6, 0.5);
                break;
              case newWidth + 18:
                ctx.drawRect(newWidth / 6, 0.5, (newWidth + 1) / 6, 4 / 6);
                break;
              case newWidth + 24:
                ctx.drawRect(newWidth / 6, 4 / 6, (newWidth + 1) / 6, 5 / 6);
                break;
              case newWidth + 30:
                ctx.drawRect(newWidth / 6, 5 / 6, (newWidth + 1) / 6, 1);
                break;
            }
          }
        }).use(1);
      }
      this.gl.viewport(0, 0, this.width, this.height);
      if (this.shaders.filmstrip) {
        this.shaders.filmstrip.textures(suiteView);
        overlay.call(this, this.shaders.filmstrip, this.uniforms);
      }
      frame++;
      /** @type {number} */
      this.uniforms.frame = frame %= 36;
      this.mainDraw();
    },
    /**
     * @return {undefined}
     */
    fire : function() {
      var i;
      var pointer = this.uniforms.frame;
      var len = this.frameTextures.length;
      this.mainTexture.use(0);
      this.frameTextures[pointer].drawTo(this.defaultDrawRect);
      pointer++;
      /** @type {number} */
      this.uniforms.frame = pointer %= len;
      i = len;
      for (;i--;) {
        this.frameTextures[(pointer + i) % len].use(i + 1);
      }
      if (this.shaders.fire) {
        this.shaders.fire.textures(this.uniforms.tex);
        overlay.call(this, this.shaders.fire, this.uniforms);
        overlay.call(this, this.shaders.firevignette, this.uniforms);
      }
      this.mainDraw();
    },
    /**
     * @return {undefined}
     */
    fisheye : function() {
      overlay.call(this, this.shaders.bulge, this.uniforms);
      this.mainDraw();
    },
    /**
     * @return {undefined}
     */
    ghost : function() {
      var activeIndex = this.uniforms.ghost.frame;
      this.mainTexture.use(0);
      this.frameTextures[activeIndex].drawTo(this.defaultDrawRect);
      activeIndex++;
      /** @type {number} */
      this.uniforms.ghost.frame = activeIndex %= this.frameTextures.length;
      this.frameTextures[activeIndex].use(1);
      obj.add.call(this, 0.5);
      this.mainDraw();
    },
    /**
     * @return {undefined}
     */
    glaze : function() {
      var params = this;
      this.uniforms.glaze.time = this.uniforms.time;
      this.mainTexture.use(0);
      this.tempTexture.drawTo(function() {
        params.shaders.glaze.uniforms(params.uniforms.glaze).drawRect();
      }).use(1);
      if (this.shaders.overlay) {
        this.shaders.overlay.textures(suiteView);
        overlay.call(this, this.shaders.overlay, this.uniforms.overlay);
      }
      this.mainDraw();
    },
    /**
     * @return {undefined}
     */
    halo : function() {
      if (this.shaders.softfocus) {
        this.shaders.softfocus.textures(suiteView);
        this.tempTexture.drawTo(this.mainDrawRect).use(1);
        if (!event) {
          obj.blur.call(this, Math.floor(this.width / 16));
        }
        overlay.call(this, this.shaders.softfocus);
      }
      overlay.call(this, this.shaders.halo, this.uniforms);
      this.mainDraw();
    },
    /**
     * @return {undefined}
     */
    hazydays : function() {
      if (this.shaders.hazydays && this.extraTexture) {
        this.extraTexture.use(1);
        this.shaders.hazydays.textures(suiteView);
        overlay.call(this, this.shaders.hazydays, this.uniforms);
      }
      this.mainDraw();
    },
    /**
     * @return {undefined}
     */
    hotpink : function() {
      if (this.shaders.hotpink && this.extraTexture) {
        this.extraTexture.use(1);
        this.shaders.hotpink.textures(suiteView);
        overlay.call(this, this.shaders.hotpink);
      }
      this.mainDraw();
    },
    /**
     * @return {undefined}
     */
    kaleidoscope : function() {
      if (this.mainTexture.type === this.gl.FLOAT && this.shaders.kaleidoscope2) {
        this.shaders.kaleidoscope2.textures(suiteView);
        this.tempTexture.drawTo(this.mainDrawRect).use(1);
        overlay.call(this, this.shaders.kaleidoscope1, this.uniforms);
        overlay.call(this, this.shaders.kaleidoscope2, this.uniforms);
      } else {
        overlay.call(this, this.shaders.kaleidoscope, this.uniforms);
      }
      this.mainDraw();
    },
    /**
     * @return {undefined}
     */
    lomoquad : function() {
      if (this.shaders.lomo) {
        this.shaders.lomo.uniforms(this.uniforms.lomoquad);
        obj.quad.call(this, this.shaders.lomo);
      }
    },
    /**
     * @return {undefined}
     */
    lsd : function() {
      this.tempTexture.use(1);
      if (!event) {
        obj.blur.call(this, 2);
      }
      overlay.call(this, this.shaders.lsd);
      obj.add.call(this, event ? 0.6 : 0.85);
      this.tempTexture.swapWith(this.mainTexture);
      this.mainDraw();
    },
    /**
     * @param {?} receiver
     * @return {undefined}
     */
    mix : function(receiver) {
      if (!this.uniforms.mix) {
        params.mix.call(this, receiver);
      }
      if (this.shaders.mix) {
        this.shaders.mix.textures(suiteView);
        overlay.call(this, this.shaders.mix, this.uniforms.mix);
      }
    },
    /**
     * @return {undefined}
     */
    monoquad : function() {
      if (this.shaders.mono) {
        this.shaders.mono.uniforms(this.uniforms.monoquad);
        obj.quad.call(this, this.shaders.mono);
      }
    },
    /**
     * @return {undefined}
     */
    oldmovie : function() {
      if (Math.random() < 0.04) {
        /** @type {number} */
        this.uniforms.jump = Math.random() * 0.02 + 0.02;
      } else {
        /** @type {number} */
        this.uniforms.jump = 0;
      }
      /** @type {number} */
      this.uniforms.flicker = Math.random() * 1.25;
      /** @type {number} */
      this.uniforms.dot0[0] = Math.random() * this.width;
      /** @type {number} */
      this.uniforms.dot1[0] = Math.random() * this.width;
      /** @type {number} */
      this.uniforms.dot2[0] = Math.random() * this.width;
      /** @type {number} */
      this.uniforms.dot0[1] = Math.random() * this.height;
      /** @type {number} */
      this.uniforms.dot1[1] = Math.random() * this.height;
      /** @type {number} */
      this.uniforms.dot2[1] = Math.random() * this.height;
      /** @type {number} */
      this.uniforms.dot0[2] = Math.random() * this.width / 60 + 1;
      /** @type {number} */
      this.uniforms.dot1[2] = Math.random() * this.width / 60 + 1;
      /** @type {number} */
      this.uniforms.dot2[2] = Math.random() < 0.05 ? this.width * 2 : Math.random() * this.width / 60 + 1;
      var line = this.uniforms.line;
      if (Math.random() < 0.025) {
        line = this.width;
      } else {
        if (Math.random() < 0.05) {
          /** @type {number} */
          line = this.width * 0.1;
        } else {
          line += (Math.random() * this.width * 0.25 - line) * 0.05;
        }
      }
      this.uniforms.line = line;
      overlay.call(this, this.shaders.oldmovienoise, this.uniforms);
      overlay.call(this, this.shaders.oldmoviedirt, this.uniforms);
      overlay.call(this, this.shaders.sepia, this.uniforms.sepia);
      this.mainDraw();
    },
    /**
     * @return {undefined}
     */
    pinch : function() {
      overlay.call(this, this.shaders.bulge, this.uniforms);
      this.mainDraw();
    },
    /**
     * @return {undefined}
     */
    popart : function() {
      if (this.shaders.popart && this.extraTexture) {
        this.extraTexture.use(1);
        this.shaders.popart.textures(suiteView);
        overlay.call(this, this.shaders.popart, this.uniforms);
      }
      this.mainDraw();
    },
    /**
     * @return {undefined}
     */
    popbooth : function() {
      if (this.shaders.popart && this.extraTexture) {
        this.extraTexture.use(1);
        this.shaders.popart.textures(suiteView);
        overlay.call(this, this.shaders.popart, this.uniforms);
      }
      this.mainDraw();
    },
    /**
     * @param {WebGLProgram} v3
     * @return {undefined}
     */
    quad : function(v3) {
      var shaders = this;
      /** @type {number} */
      var top = this.square ? (this.width - this.height) / this.width / 2 : 0;
      var dy;
      /** @type {number} */
      var x = 0;
      /** @type {number} */
      var dx = 0.5;
      /** @type {number} */
      var y = 0.5;
      var ctx = this.blackShader;
      switch(v3) {
        case this.shaders.mono:
        ;
        case this.shaders.lomo:
          /** @type {number} */
          x = 0.004;
          break;
        case this.shaders.comicbook:
          /** @type {number} */
          x = 0.005;
          if (!this.square && !event) {
            /** @type {number} */
            y = this.height / 2 / this.width;
            /** @type {number} */
            dx = 1 - y;
          }
          ctx = this.whiteShader;
          break;
      }
      /** @type {number} */
      dy = x * this.height / this.width;
      if (!this.uniforms.quad) {
        params.quad.call(this);
      }
      this.mainTexture.use(0);
      this.tempTexture.drawTo(function() {
        v3.uniforms(shaders.uniforms.quad);
        switch(shaders.quadPos) {
          case 0:
          ;
          case 4:
            ctx.drawRect(0.5, top, 1, dx);
            v3.uniforms(shaders.uniforms.comicstripwide).drawRect(0.5 - x, top + dy, 1 - x, dx + dy);
          case 3:
            ctx.drawRect(0.5, dx, 1, 1 - top);
            v3.uniforms(shaders.uniforms.comicstripsquare).drawRect(0.5 - x, dx - dy, 1 - x, 1 - top - dy);
          case 2:
            ctx.drawRect(0, top, 0.5, y);
            v3.uniforms(shaders.uniforms.comicstripsquare).drawRect(x, top + dy, 0.5 + x, y + dy);
          case 1:
            ctx.drawRect(0, y, 0.5, 1 - top);
            v3.uniforms(shaders.uniforms.comicstripwide).drawRect(x, y - dy, 0.5 + x, 1 - top - dy);
        }
      }).use(0);
      if (shaders.uniforms.comicstripborder && (!this.square && !event)) {
        this.swapTexture.drawTo(function() {
          shaders.shaders.comicstripborder.uniforms(shaders.uniforms.comicstripborder).drawRect();
        }).swapWith(this.mainTexture);
        this.mainTexture.use(0);
      }
      this.defaultShader.drawRect();
    },
    /**
     * @return {undefined}
     */
    quadcam : function() {
      obj.quad.call(this, this.shaders.quadcam);
    },
    /**
     * @return {undefined}
     */
    rainbow : function() {
      var params = this;
      this.mainTexture.use(0);
      this.tempTexture.drawTo(function() {
        params.shaders.rainbow.uniforms(params.uniforms.rainbow).drawRect();
      }).use(1);
      if (this.shaders.overlay) {
        this.shaders.overlay.textures(suiteView);
        overlay.call(this, this.shaders.overlay, this.uniforms.overlay);
      }
      overlay.call(this, this.shaders.rainbowborder, this.uniforms.rainbowborder);
      this.mainDraw();
    },
    /**
     * @return {undefined}
     */
    retro : function() {
      if (this.shaders.retro && this.extraTexture) {
        this.extraTexture.use(1);
        this.shaders.retro.textures(suiteView);
        overlay.call(this, this.shaders.retro, this.uniforms);
      }
      this.mainDraw();
    },
    /**
     * @return {undefined}
     */
    shuffle : function() {
      var c;
      var f = this.uniforms.frame;
      var cnl = this.frameTextures.length;
      this.mainTexture.use(0);
      this.frameTextures[f].drawTo(this.defaultDrawRect);
      f++;
      /** @type {number} */
      this.uniforms.frame = f %= cnl;
      /** @type {number} */
      c = cnl / 3;
      for (;c--;) {
        this.frameTextures[(f + c * 3) % cnl].use(c + 1);
      }
      if (this.shaders.shufflesimple) {
        this.shaders.shufflesimple.textures(this.uniforms.tex);
        overlay.call(this, this.shaders.shufflesimple, this.uniforms);
      } else {
        if (this.shaders.shuffle) {
          this.shaders.shuffle.textures(this.uniforms.tex);
          overlay.call(this, this.shaders.shuffle, this.uniforms);
        }
      }
      this.mainDraw();
    },
    /**
     * @return {undefined}
     */
    silk : function() {
      overlay.call(this, this.shaders.silk, this.uniforms.silk);
      if (!event) {
        overlay.call(this, this.shaders.radialblur, this.uniforms.radialblur1);
        overlay.call(this, this.shaders.radialblur, this.uniforms.radialblur2);
      }
      this.mainDraw();
    },
    /**
     * @return {undefined}
     */
    softfocus : function() {
      if (this.shaders.softfocus) {
        this.shaders.softfocus.textures(suiteView);
        this.tempTexture.drawTo(this.mainDrawRect).use(1);
        obj.blur.call(this, Math.floor(this.width / 40));
        overlay.call(this, this.shaders.softfocus);
      }
      this.mainDraw();
    },
    /**
     * @return {undefined}
     */
    sparkle : function() {
      if (this.shaders.sparkle) {
        this.shaders.sparkle.textures(this.uniforms.tex);
        this.tempTexture.drawTo(this.mainDrawRect).use(1);
        if (!event) {
          obj.blur.call(this, Math.floor(this.width / 40));
        }
        this.frameTextures[0].loadContentsOf(this.context2D.canvas).use(2);
        overlay.call(this, this.shaders.sparkle, this.uniforms);
      }
      this.mainDraw();
    },
    /**
     * @return {undefined}
     */
    spiral : function() {
      if (this.mainTexture.type === this.gl.FLOAT && this.shaders.spiral2) {
        this.shaders.spiral2.textures(suiteView);
        this.tempTexture.drawTo(this.mainDrawRect).use(1);
        overlay.call(this, this.shaders.spiral1, this.uniforms);
        overlay.call(this, this.shaders.spiral2, this.uniforms);
      } else {
        overlay.call(this, this.shaders.spiral, this.uniforms);
      }
      this.mainDraw();
    },
    /**
     * @return {undefined}
     */
    splitscreen : function() {
      var activeIndex = this.uniforms.frame;
      this.mainTexture.use(0);
      this.frameTextures[activeIndex].drawTo(this.defaultDrawRect);
      activeIndex++;
      /** @type {number} */
      this.uniforms.frame = activeIndex %= this.frameTextures.length;
      this.frameTextures[activeIndex].use(1);
      if (this.shaders.splitscreen) {
        this.shaders.splitscreen.textures(suiteView);
        overlay.call(this, this.shaders.splitscreen, this.uniforms);
      }
      this.mainDraw();
    },
    /**
     * @return {undefined}
     */
    thermal : function() {
      if (this.shaders.thermal && this.extraTexture) {
        this.extraTexture.use(1);
        this.shaders.thermal.textures(suiteView);
        overlay.call(this, this.shaders.thermal);
      }
      this.mainDraw();
    },
    /**
     * @return {undefined}
     */
    trail : function() {
      if (this.shaders.trail) {
        this.tempTexture.use(1);
        this.shaders.trail.textures(suiteView);
        overlay.call(this, this.shaders.trail);
        this.tempTexture.swapWith(this.mainTexture);
      }
      this.mainDraw();
    },
    /**
     * @return {undefined}
     */
    underwater : function() {
      overlay.call(this, this.shaders.underwater, this.uniforms);
      overlay.call(this, this.shaders.underwaterblue, this.uniforms);
      this.mainDraw();
    },
    /**
     * @return {undefined}
     */
    vintage : function() {
      if (this.shaders.vintage && this.extraTexture) {
        this.extraTexture.use(1);
        this.shaders.vintage.textures(suiteView);
        overlay.call(this, this.shaders.vintage, this.uniforms);
      }
      this.mainDraw();
    },
    /**
     * @return {undefined}
     */
    watercolor : function() {
      if (this.shaders.watercolor && this.extraTexture) {
        this.extraTexture.use(1);
        this.shaders.watercolor.textures(suiteView);
        overlay.call(this, this.shaders.watercolor, this.uniforms);
      }
      this.mainDraw();
    },
    /**
     * @return {undefined}
     */
    xpro : function() {
      overlay.call(this, this.shaders.xpro);
      if (!event) {
        overlay.call(this, this.shaders.radialblur, this.uniforms.radialblur1);
        overlay.call(this, this.shaders.radialblur, this.uniforms.radialblur2);
      }
      overlay.call(this, this.shaders.xproborder, this.uniforms.xproborder);
      this.mainDraw();
    },
    /**
     * @return {undefined}
     */
    zinc : function() {
      if (!event) {
        overlay.call(this, this.shaders.radialblur, this.uniforms.radialblur1);
        overlay.call(this, this.shaders.radialblur, this.uniforms.radialblur2);
      }
      overlay.call(this, this.shaders.zinc, this.uniforms.zinc);
      this.mainDraw();
    }
  };
  var instances = {
    /**
     * @return {undefined}
     */
    snow : function() {
      var ctx = this.context2D;
      var context = this.tempContext2D;
      var x = ctx.canvas.width;
      var y = ctx.canvas.height;
      var width = context.canvas.width;
      var height = context.canvas.height;
      var result;
      var image;
      var obj;
      var i;
      var mode;
      /** @type {number} */
      var len = Math.max(1200, Math.floor(2400 / maxHeight * y));
      /** @type {number} */
      var loop = Math.max(6, Math.floor(12 / maxHeight * y));
      try {
        ctx.drawImage(this.source, 0, 0, x, y);
      } catch (O) {
        return;
      }
      try {
        context.drawImage(ctx.canvas, 0, 0, width, height);
      } catch (O) {
        return;
      }
      image = context.getImageData(0, 0, width, height);
      if (image && image.data) {
        result = drawRect(image.data, token, width, height);
      } else {
        return;
      }
      for (;this.assets.snowflakes.length < len && loop;) {
        loop--;
        /** @type {number} */
        mode = (Math.random() + 0.2) * y / maxHeight * 10 + 1;
        this.assets.snowflakes.push(new ShipEnemy(Math.random() * x, 4 - mode * 2, mode, Math.random() - 0.5));
      }
      /** @type {number} */
      i = 0;
      for (;i < this.assets.snowflakes.length;i++) {
        obj = this.assets.snowflakes[i];
        if (obj.y < height / 16 || (obj.y > height - height / 16 || result[Math.floor(obj.x) + Math.floor(obj.y) * width] < 204)) {
          obj.vx *= 0.997;
          obj.vy *= 0.997;
          obj.x += obj.vx;
          obj.y += obj.vy;
          if (obj.melt < 1) {
            obj.melt += 1 / 16;
          } else {
            /** @type {number} */
            obj.melt = 1;
          }
          if (obj.x > x + obj.width) {
            obj.x -= x + obj.width;
          }
          if (obj.x < -obj.width) {
            obj.x += x + obj.width;
          }
          if (obj.y > height + obj.height) {
            this.assets.snowflakes.splice(i++, 1);
          }
        } else {
          if (obj.melt > 0) {
            obj.melt -= 1 / 128;
            /** @type {number} */
            obj.vy = obj.height * 0.3;
          } else {
            this.assets.snowflakes.splice(i++, 1);
          }
        }
        ctx.save();
        /** @type {number} */
        ctx.globalAlpha = Math.min(1, obj.melt * 4);
        ctx.drawImage(data.snowflake, obj.x * x / width - obj.width / 2, obj.y * y / height - obj.height / 2, obj.width, obj.height);
        ctx.restore();
      }
      this.sourceTexture.loadContentsOf(ctx.canvas);
    },
    /**
     * @return {undefined}
     */
    sparkle : function() {
      var context = this.context2D;
      var ctx = this.tempContext2D;
      var map = data.sparkle;
      var scale = context.canvas.width;
      var y = context.canvas.height;
      var width = ctx.canvas.width;
      var height = ctx.canvas.height;
      var result;
      var image;
      var resp;
      var w;
      var imageHeight;
      var ratio;
      var x;
      var size;
      var c;
      var i;
      /** @type {number} */
      var W = 0;
      this.sourceTexture.loadContentsOf(this.source);
      context.fillRect(0, 0, this.width, this.height);
      try {
        ctx.drawImage(this.source, 0, 0, width, height);
      } catch (L) {
        return;
      }
      image = ctx.getImageData(0, 0, width, height);
      if (image && image.data) {
        resp = image.data;
        result = drawRect(resp, activeClassName, width, height);
      } else {
        return;
      }
      do {
        W++;
        /** @type {number} */
        x = Math.floor(width * Math.random());
        /** @type {number} */
        size = Math.floor(height * Math.random());
        if (result[x + size * width] > 32) {
          this.assets.sparkles.push(new Rect(x, size, Math.random() < 0.05));
        }
      } while (this.assets.sparkles.length < 128 && W < 32);
      /** @type {number} */
      i = 0;
      for (;i < this.assets.sparkles.length;i++) {
        c = this.assets.sparkles[i];
        if (c.big) {
          /** @type {boolean} */
          c.big = false;
          /** @type {number} */
          ratio = 512;
        } else {
          ratio = resp[(c.x + c.y * width) * 4] + (Math.random() - 0.5) * 16;
        }
        if (ratio < 4 || result[c.x + c.y * width] < 32) {
          this.assets.sparkles.splice(i++, 1);
        } else {
          ratio *= y / 122880;
          /** @type {number} */
          w = map.width * ratio;
          /** @type {number} */
          imageHeight = map.height * ratio;
          context.drawImage(map, c.x * scale / width - w / 2, c.y * y / height - imageHeight / 2, w, imageHeight);
        }
      }
    },
    /**
     * @return {undefined}
     */
    underwater : function() {
      var ctx = this.context2D;
      var tiles = data.bubbles;
      var tileWidth = ctx.canvas.width;
      var y = ctx.canvas.height;
      var num = this.assets.bubbles.length;
      var id;
      var bounds;
      ctx.save();
      try {
        ctx.drawImage(this.source, 0, 0, tileWidth, y);
      } catch (L) {
        ctx.restore();
        return;
      }
      id = num;
      for (;id--;) {
        bounds = this.assets.bubbles[id] = this.assets.bubbles[id] || new move(Math.random() * tileWidth, Math.random() * y, this.height < maxHeight / 2 ? id + 5 : id, num);
        bounds.x += Math.sin(bounds.y / 12) * 2;
        bounds.y -= bounds.size * 0.15;
        if (bounds.y < -bounds.size) {
          /** @type {number} */
          bounds.x = Math.random() * tileWidth;
          bounds.y = y + bounds.size;
        }
        ctx.drawImage(tiles, bounds.offset, 0, bounds.size, bounds.size, Math.floor(bounds.x), Math.floor(bounds.y), bounds.size, bounds.size);
      }
      ctx.restore();
      this.sourceTexture.loadContentsOf(ctx.canvas);
    }
  };
  var data;
  var event = self.ua.mobile;
  var inputsPlugin = $("#toy");
  /** @type {boolean} */
  var s = false;
  /** @type {number} */
  var parentWidth = 2;
  /** @type {number} */
  var wMax = 253;
  var ctx;
  /**
   * @return {undefined}
   */
  Particle.prototype.reset = function() {
    /** @type {number} */
    this.dx = Math.pow(this.p[2], 4) / 1E8;
    /** @type {number} */
    this.dy = this.dx / 3 - Math.random();
  };
  /**
   * @return {?}
   */
  Particle.prototype.move = function() {
    this.p[0] += this.dx;
    if (this.p[0] > maxWidth) {
      this.reset();
      this.p[0] -= maxWidth + this.p[2];
    }
    this.p[1] += this.dy;
    if (this.p[1] > maxHeight) {
      this.reset();
      this.p[1] -= maxHeight + this.p[2];
    } else {
      if (this.p[1] < -this.p[2]) {
        this.p[1] += maxHeight + this.p[2];
        this.reset();
      }
    }
    return this.p;
  };
  /**
   * @param {?} a
   * @return {?}
   */
  create.prototype.getPos = function(a) {
    /** @type {number} */
    this.pos[0] = Math.cos(this.fx * a) * this.sx + 0.5;
    /** @type {number} */
    this.pos[1] = Math.sin(this.fy * a) * this.sy + 0.5;
    return this.pos;
  };
  /**
   * @param {number} w
   * @param {number} h
   * @return {?}
   */
  init.getContext2D = function(w, h) {
    /** @type {Element} */
    var testCanvas = document.createElement("canvas");
    /** @type {number} */
    testCanvas.width = w;
    /** @type {number} */
    testCanvas.height = h;
    var bufferCtx2 = testCanvas.getContext("2d");
    if (bufferCtx2) {
      bufferCtx2.clearRect(0, 0, w, h);
    }
    return bufferCtx2;
  };
  /**
   * @return {undefined}
   */
  init.preloadImages = function() {
    self.addScript(_preloadImage());
  };
  /**
   * @param {Function} data
   * @param {Function} callback
   * @return {undefined}
   */
  init.loadImages = function(data, callback) {
    if (self.getImages) {
      self.log("Images preloaded");
      load(data, callback, "Parse error");
      return;
    }
    $.ajax({
      url : _preloadImage(),
      dataType : "script",
      cache : true,
      timeout : 2E4,
      /**
       * @param {string} deepDataAndEvents
       * @param {string} element
       * @param {Object} operator
       * @return {undefined}
       */
      error : function(deepDataAndEvents, element, operator) {
        init.preloadImages();
        setTimeout(load, 1E4, data, callback, operator || element);
      },
      /**
       * @param {?} textStatus
       * @return {undefined}
       */
      success : function(textStatus) {
        setTimeout(function() {
          load(data, callback, "Parse error");
        }, 100);
      }
    });
  };
  /**
   * @param {Function} onComplete
   * @param {Function} next
   * @return {undefined}
   */
  init.loadEffects = function(onComplete, next) {
    $.ajax({
      url : url(),
      cache : true,
      timeout : 2E4,
      /**
       * @param {string} deepDataAndEvents
       * @param {string} element
       * @param {Object} operator
       * @return {undefined}
       */
      error : function(deepDataAndEvents, element, operator) {
        if (!s) {
          /** @type {boolean} */
          s = true;
          init.loadEffects(onComplete, next);
        } else {
          next(operator || element);
        }
      },
      /**
       * @param {Object} res
       * @return {undefined}
       */
      complete : function(res) {
        if (res && ((res.statusText === "success" || res.statusText === "OK") && res.responseText)) {
          var uHostName;
          try {
            uHostName = window.atob(lcase(res.responseText));
          } catch (responseObject) {
            if (!s) {
              /** @type {boolean} */
              s = true;
              init.loadEffects(onComplete, next);
            } else {
              next(responseObject);
            }
            return;
          }
          var a = uHostName.split("/*:*/\n");
          /** @type {number} */
          var i = a.length - 1;
          var name;
          for (;i > 0;) {
            i--;
            name = a[i].substr(3, a[i].indexOf(":*/") - 3);
            if (name) {
              old[name] = a[i];
            }
          }
          if (onComplete) {
            onComplete();
          }
        } else {
          if (next) {
            if (!s) {
              /** @type {boolean} */
              s = true;
              init.loadEffects(onComplete, next);
            } else {
              next(res && res.statusText);
            }
          }
        }
      }
    });
  };
  /**
   * @param {?} background
   * @return {?}
   */
  init.autoEnhance = function(background) {
    /** @type {number} */
    var oY = 4;
    var width = ctx.canvas.width;
    var height = ctx.canvas.height;
    try {
      ctx.drawImage(background, -oY, -oY, width + oY * 2, height + oY * 2);
    } catch (R) {
      return{
        mult : 1,
        offset : 0
      };
    }
    var data = ctx.getImageData(0, 0, width, height);
    var file;
    /** @type {number} */
    var x = width * height;
    /** @type {number} */
    var xy = x * 4;
    /** @type {Array} */
    var keys = [];
    var j;
    if (data && data.data) {
      file = data.data;
    } else {
      return{
        mult : 1,
        offset : 0
      };
    }
    /** @type {number} */
    j = 0;
    for (;j < 256;j++) {
      /** @type {number} */
      keys[j] = 0;
    }
    for (;x--;) {
      keys[0.5 + file[xy -= 4] * 0.3 + file[xy + 1] * 0.59 + file[xy + 2] * 0.11 | 0]++;
    }
    /** @type {number} */
    j = 2;
    for (;j < 254;j++) {
      if (keys[j] < 8) {
        /** @type {number} */
        keys[j] = 0;
      }
      keys[j] = keys[j - 2] * 0.1 + keys[j - 1] * 0.2 + keys[j] * 0.4 + keys[j + 1] * 0.2 + keys[j + 2] + 0.1;
      if (keys[j] < 8) {
        /** @type {number} */
        keys[j] = 0;
      }
    }
    parentWidth += (map(keys) - parentWidth) / 8;
    wMax += (val(keys) - wMax) / 8;
    return{
      mult : Math.min(2.5, 253 / (wMax - parentWidth)),
      offset : Math.min(60, parentWidth - 2) / -255
    };
  };
  /**
   * @return {undefined}
   */
  init.prototype.mainDraw = function() {
    this.mainTexture.use(0);
    this.defaultShader.drawRect();
  };
  /**
   * @param {string} name
   * @return {?}
   */
  init.prototype.initShader = function(name) {
    if (this.shaders[name]) {
      return true;
    }
    if (this.gl.isContextLost()) {
      return false;
    }
    try {
      this.shaders[name] = new self.Shader(this.gl, null, old[name] ? "uniform sampler2D texture; uniform float square; uniform vec2 texSize; varying vec2 texCoord;" + old[name] : null);
      return true;
    } catch (textStatus) {
      this.shaders[name] = this.defaultShader;
      error(textStatus, name, this.gl);
      return false;
    }
  };
  /**
   * @param {number} size
   * @return {?}
   */
  init.prototype.getTexture = function(size) {
    return new self.Texture(this.gl, 0, 0, this.gl.RGBA, this.gl.UNSIGNED_BYTE, size && (size.width && size.height) ? size : null);
  };
  /**
   * @param {number} expectedNumberOfNonCommentArgs
   * @param {?} a
   * @param {?} b
   * @return {undefined}
   */
  init.prototype.initFrameTextures = function(expectedNumberOfNonCommentArgs, a, b) {
    var arrCount;
    if (this.frameTextures) {
      arrCount = this.frameTextures.length;
      for (;arrCount--;) {
        if (this.frameTextures[arrCount]) {
          this.frameTextures[arrCount].destroy();
          /** @type {null} */
          this.frameTextures[arrCount] = null;
        }
      }
    }
    if (expectedNumberOfNonCommentArgs && (a && b)) {
      /** @type {Array} */
      this.frameTextures = new Array(expectedNumberOfNonCommentArgs);
      /** @type {number} */
      arrCount = 0;
      for (;arrCount < expectedNumberOfNonCommentArgs;arrCount++) {
        this.frameTextures[arrCount] = new self.Texture(this.gl, a, b, this.gl.RGB, this.gl.UNSIGNED_BYTE);
      }
      this.sourceTexture.loadContentsOf(this.source);
      /** @type {number} */
      arrCount = 0;
      for (;arrCount < expectedNumberOfNonCommentArgs;arrCount++) {
        this.frameTextures[arrCount].drawTo(this.mainDrawRect);
      }
    } else {
      /** @type {null} */
      this.frameTextures = null;
    }
  };
  /**
   * @param {(number|string)} keepData
   * @return {undefined}
   */
  init.prototype.setEffect = function(keepData) {
    if (this.gl) {
      this.gl.viewport(0, 0, this.width, this.height);
      this.gl.clearColor(0, 0, 0, 1);
      this.gl.clear(this.gl.COLOR_BUFFER_BIT | this.gl.DEPTH_BUFFER_BIT);
    } else {
      throw "WebGL error";
    }
    if (this.mainTexture) {
      this.mainTexture.use(0);
    } else {
      throw "Effects error";
    }
    if (this.extraTexture) {
      this.extraTexture.destroy();
    }
    /** @type {null} */
    this.extraTexture = null;
    /** @type {null} */
    this.tempContext2D = null;
    this.initFrameTextures();
    /** @type {number} */
    this.startTime = Date.now() - Math.round(3E5 * Math.random());
    this.id = keepData || "normal";
    /** @type {number} */
    this.fps = 30;
    /** @type {number} */
    this.fpsGrid = 0;
    /** @type {number} */
    this.quality = 0.8;
    /** @type {number} */
    this.quadPos = 0;
    /** @type {boolean} */
    this.isQuad = false;
    this.assets = {};
    this.uniforms = {};
    var param = params[this.id];
    if (param) {
      param.call(this);
    }
    /** @type {number} */
    this.uniforms.square = this.square ? 1 : 0;
    this.uniforms.texSize = this.size;
    /** @type {number} */
    this.uniforms.time = 0;
    this.effect = obj[this.id];
    if (!this.effect) {
      this.initShader(this.id);
      /** @type {function (): undefined} */
      this.effect = walk;
    }
    this.canvasEffect = instances[this.id];
    /** @type {number} */
    this.effectNum = ids.indexOf(this.id) + 1;
    if (this.defaultShader) {
      this.draw();
    }
  };
  /**
   * @param {number} num
   * @return {?}
   */
  init.prototype.getEffectID = function(num) {
    return ids[num - 1] || "normal";
  };
  /**
   * @return {undefined}
   */
  init.prototype.previousEffect = function() {
    /** @type {number} */
    var cDigit = this.effectNum - 1;
    if (cDigit < 0) {
      /** @type {number} */
      cDigit = ids.length;
    }
    try {
      this.setEffect(this.getEffectID(cDigit));
    } catch (L) {
    }
  };
  /**
   * @return {undefined}
   */
  init.prototype.nextEffect = function() {
    var cDigit = this.effectNum + 1;
    cDigit %= ids.length + 1;
    try {
      this.setEffect(this.getEffectID(cDigit));
    } catch (L) {
    }
  };
  /**
   * @param {boolean} deepDataAndEvents
   * @return {?}
   */
  init.prototype.useMirror = function(deepDataAndEvents) {
    /** @type {boolean} */
    this.mirror = deepDataAndEvents;
    /** @type {number} */
    this.mainUniforms.mirror = deepDataAndEvents ? 1 : 0;
    try {
      this.setEffect(this.id);
    } catch (L) {
    }
    return this;
  };
  /**
   * @param {string} deepDataAndEvents
   * @return {?}
   */
  init.prototype.useSquare = function(deepDataAndEvents) {
    /** @type {string} */
    this.square = deepDataAndEvents;
    try {
      this.setEffect(this.id);
    } catch (L) {
    }
    return this;
  };
  /**
   * @param {number} opt_attributes
   * @return {?}
   */
  init.prototype.getRect = function(opt_attributes) {
    var YY_START = opt_attributes || 0;
    var YYSTATE = YY_START;
    /** @type {number} */
    var value = YY_START * this.height / this.width;
    if (this.square) {
      value += (this.width - this.height) / 2 / this.width;
    }
    return[YYSTATE, value, 1 - YYSTATE, 1 - value];
  };
  /**
   * @return {undefined}
   */
  init.prototype.autoEnhance = function() {
    var ui = self.Effect.autoEnhance(this.source);
    this.mainUniforms.mult = ui.mult;
    this.mainUniforms.offset = ui.offset;
  };
  /**
   * @return {undefined}
   */
  init.prototype.draw = function() {
    /** @type {number} */
    this.uniforms.time = (Date.now() - this.startTime) / 1E3;
    if (this.canvasEffect) {
      this.canvasEffect();
    } else {
      this.sourceTexture.loadContentsOf(this.source);
    }
    this.mainTexture.drawTo(this.mainDrawRect);
    if (this.effect) {
      this.effect();
    }
  };
  /**
   * @param {number} t
   * @param {number} height
   * @return {?}
   */
  init.prototype.getImage = function(t, height) {
    /** @type {Image} */
    var image = new Image;
    if (this.defaultShader) {
      this.defaultShader.drawRect();
    }
    image.src = this.mainTexture.toImage(this.square, this.quality, t, height);
    return image;
  };
  /**
   * @return {undefined}
   */
  init.prototype.destroyShaders = function() {
    var i = this.shaders.length;
    for (;i--;) {
      this.shaders[i].destroy();
    }
    this.shaders = {};
  };
  /**
   * @return {undefined}
   */
  init.prototype.destroy = function() {
    this.destroyShaders();
    this.initFrameTextures();
    if (this.sourceTexture) {
      this.sourceTexture.destroy();
    }
    /** @type {null} */
    this.sourceTexture = null;
    if (this.mainTexture) {
      this.mainTexture.destroy();
    }
    /** @type {null} */
    this.mainTexture = null;
    if (this.swapTexture) {
      this.swapTexture.destroy();
    }
    /** @type {null} */
    this.swapTexture = null;
    if (this.tempTexture) {
      this.tempTexture.destroy();
    }
    /** @type {null} */
    this.tempTexture = null;
    if (this.extraTexture) {
      this.extraTexture.destroy();
    }
    /** @type {null} */
    this.extraTexture = null;
    if (this.defaultShader) {
      this.defaultShader.destroy();
    }
    /** @type {null} */
    this.defaultShader = null;
    if (this.mainShader) {
      this.mainShader.destroy();
    }
    /** @type {null} */
    this.mainShader = null;
    /** @type {null} */
    this.assets = null;
    /** @type {null} */
    this.uniforms = null;
    /** @type {null} */
    this.effect = null;
    /** @type {null} */
    this.canvasEffect = null;
    /** @type {null} */
    this.context2D = null;
    /** @type {null} */
    this.tempContext2D = null;
    /** @type {boolean} */
    this.isQuad = false;
    /** @type {number} */
    this.width = this.height = this.quadPos = this.startTime = this.quality = this.fpsGrid = this.fps = 0;
    /** @type {null} */
    this.size = null;
    /** @type {null} */
    this.center = null;
    /** @type {null} */
    this.id = null;
    /** @type {null} */
    this.source = null;
    /** @type {null} */
    this.gl = null;
  };
  return init;
}(WebcamToy);
WebcamToy.Grid = function(THREE) {
  /**
   * @param {number} val
   * @param {number} min
   * @param {number} max
   * @return {?}
   */
  function clamp(val, min, max) {
    return Math.min(max, Math.max(min, val));
  }
  /**
   * @param {Array} g
   * @param {string} value
   * @param {number} size
   * @param {number} h
   * @return {undefined}
   */
  function Node(g, value, size, h) {
    /** @type {string} */
    this.source = value;
    /** @type {number} */
    this.page = 0;
    /** @type {number} */
    this.totalPages = 9;
    /** @type {number} */
    this.itemWidth = size;
    /** @type {number} */
    this.itemHeight = h;
    this.gridContext2D = THREE.Effect.getContext2D(size, h);
    /** @type {Array} */
    this.effects = new Array(9);
    /** @type {number} */
    var i = 0;
    for (;i < 9;i++) {
      this.effects[i] = new THREE.Effect(g[i], this.gridContext2D.canvas, size, h);
    }
  }
  /**
   * @param {number} last
   * @param {Function} $
   * @param {Function} req
   * @return {undefined}
   */
  Node.prototype.initPages = function(last, $, req) {
    var path = this;
    this.setPage(last, function() {
      if ($) {
        $(last);
      }
      if (last > 0) {
        setTimeout(function() {
          path.initPages(last - 1, $, req);
        }, 0);
      } else {
        if (req) {
          THREE.log("Grid complete");
          req();
        }
      }
    });
  };
  /**
   * @return {undefined}
   */
  Node.prototype.draw = function() {
    var self = THREE.Effect.autoEnhance(this.source);
    var s;
    var i;
    try {
      this.gridContext2D.drawImage(this.source, 0, 0, this.itemWidth, this.itemHeight);
    } catch (d) {
    }
    if (this.effects) {
      /** @type {number} */
      i = 9;
      for (;i--;) {
        s = this.effects[i];
        if (!s.fpsGrid) {
          s.mainUniforms.mult = self.mult;
          s.mainUniforms.offset = self.offset;
          s.draw();
        }
        s.fpsGrid++;
        s.fpsGrid %= Math.ceil(30 / s.fps);
      }
    }
  };
  /**
   * @param {number} num
   * @return {?}
   */
  Node.prototype.getEffectID = function(num) {
    return this.effects ? this.effects[clamp(Math.floor(num), 0, 9)].id : "";
  };
  /**
   * @param {number} b
   * @param {Function} p
   * @return {undefined}
   */
  Node.prototype.setPage = function(b, p) {
    var button;
    var i;
    this.page = clamp(Math.floor(b), 0, this.totalPages);
    if (this.effects) {
      /** @type {number} */
      i = 9;
      for (;i--;) {
        button = this.effects[i];
        if (button) {
          button.setEffect(button.getEffectID(this.page * 9 + i));
        }
      }
    }
    if (p) {
      p(b);
    }
    THREE.log("Grid page", b);
  };
  /**
   * @return {undefined}
   */
  Node.prototype.previousPage = function() {
    this.page--;
    if (this.page < 0) {
      /** @type {number} */
      this.page = this.totalPages - 1;
    }
    this.setPage(this.page);
  };
  /**
   * @return {undefined}
   */
  Node.prototype.nextPage = function() {
    this.page++;
    this.page %= this.totalPages;
    this.setPage(this.page);
  };
  /**
   * @param {boolean} deepDataAndEvents
   * @return {undefined}
   */
  Node.prototype.useMirror = function(deepDataAndEvents) {
    if (this.effects) {
      /** @type {number} */
      var i = 0;
      for (;i < 9;i++) {
        this.effects[i].useMirror(deepDataAndEvents);
      }
    }
  };
  /**
   * @param {boolean} deepDataAndEvents
   * @return {undefined}
   */
  Node.prototype.useSquare = function(deepDataAndEvents) {
    if (this.effects) {
      /** @type {number} */
      var i = 0;
      for (;i < 9;i++) {
        this.effects[i].useSquare(deepDataAndEvents);
      }
    }
  };
  /**
   * @return {undefined}
   */
  Node.prototype.destroy = function() {
    if (this.effects) {
      var i = this.effects.length;
      for (;i--;) {
        if (this.effects[i]) {
          this.effects[i].destroy();
          /** @type {null} */
          this.effects[i] = null;
        }
      }
    }
    /** @type {null} */
    this.effects = null;
    /** @type {null} */
    this.gridContext2D = null;
  };
  return Node;
}(WebcamToy);
WebcamToy.Audio = function(dataAndEvents) {
  /**
   * @param {string} event
   * @return {undefined}
   */
  function canPlayThrough(event) {
    var listener = new window.Audio;
    /** @type {string} */
    listener.src = dataAndEvents.Services.assetsURL + "audio/" + event + ".ogg";
    node[event] = listener;
  }
  var obj = {};
  var node = {};
  /** @type {Array} */
  var tokenized = ["countdown", "capture"];
  /**
   * @param {string} name
   * @param {number} opt_attributes
   * @return {undefined}
   */
  obj.playTrack = function(name, opt_attributes) {
    if (!!window.Audio) {
      setTimeout(function() {
        if (node[name]) {
          node[name].play();
        }
      }, opt_attributes || 0);
    }
  };
  /**
   * @return {undefined}
   */
  obj.loadAudio = function() {
    if (!!window.Audio) {
      /** @type {number} */
      var index = tokenized.length;
      for (;index--;) {
        canPlayThrough(tokenized[index]);
      }
    }
  };
  return obj;
}(WebcamToy);
WebcamToy.Camera = function() {
  /**
   * @param {?} event
   * @return {undefined}
   */
  function resize(event) {
    WebcamToy.log("Infobar shown");
    stop();
  }
  /**
   * @return {undefined}
   */
  function stop() {
    $(window).off("resize", resize);
    clearTimeout(tref);
  }
  /**
   * @param {string} err
   * @return {undefined}
   */
  function next(err) {
    stop();
    if (element) {
      element.src = undefined;
    }
    if (element && element.mozSrcObject) {
      element.mozSrcObject = undefined;
    }
    if (fn) {
      fn(element, "", err || "Error");
    }
  }
  /**
   * @param {string} err
   * @return {undefined}
   */
  function callback(err) {
    stop();
    if (typeof err === "object") {
      if (err.name) {
        err = err.name;
      } else {
        if (err.code === 1 || err.PERMISSION_DENIED) {
          /** @type {string} */
          err = "PermissionDeniedError";
        } else {
          /** @type {string} */
          err = JSON.stringify(err);
        }
      }
    }
    switch(err) {
      case "AbortError":
      ;
      case "PERMISSION_DENIED":
      ;
      case "Permission Denied":
      ;
      case "PermissionDeniedError":
      ;
      case "PermissionDismissedError":
        /** @type {string} */
        err = "Camera access denied";
        break;
      case "DevicesNotFoundError":
      ;
      case "NO_DEVICES_FOUND":
      ;
      case "NotFoundError":
      ;
      case "NotFoundError: The object can not be found here.":
        /** @type {string} */
        err = "Camera not found";
        break;
      case "CONSTRAINT_NOT_SATISFIED":
      ;
      case "ConstraintNotSatisfiedError":
      ;
      case "HARDWARE_UNAVAILABLE":
      ;
      case "InternalError":
      ;
      case "InvalidSecurityOriginError":
      ;
      case "InvalidStateError":
      ;
      case "MANDATORY_UNSATISFIED_ERROR":
      ;
      case "NOT_SUPPORTED_ERROR":
      ;
      case "SecurityError":
      ;
      case "NotAllowedError":
      ;
      case "OverconstrainedError":
      ;
      case "SourceUnavailableError":
      ;
      case "Starting video failed":
      ;
      case "TabCaptureError":
      ;
      case "TrackStartError":
        /** @type {string} */
        err = "Camera unavailable";
        break;
    }
    if (error) {
      error(err);
    } else {
      next(err);
    }
  }
  /**
   * @param {Array} middleware
   * @return {undefined}
   */
  function init(middleware) {
    middleware.forEach(function(item) {
      if (item.kind === "videoinput") {
        text = item.label;
        return;
      }
    });
  }
  /**
   * @return {undefined}
   */
  function done() {
    fn(element, text);
    if (WebcamToy.ua.chrome && WebcamToy.Services.scheme === "https") {
      try {
        localStorage.setItem("secureAccess", true);
      } catch (n) {
      }
    }
  }
  /**
   * @param {Object} stream
   * @return {undefined}
   */
  function start(stream) {
    /** @type {DOMURL} */
    var vendorURL = window.URL || window.webkitURL;
    stop();
    try {
      if (navigator.mediaDevices && (navigator.mediaDevices.enumerateDevices && window.Promise)) {
        navigator.mediaDevices.enumerateDevices()["then"](init);
      } else {
        if (stream && stream.getVideoTracks) {
          var ticks = stream.getVideoTracks();
          if (ticks && ticks.length > 0) {
            text = ticks[0].label;
          }
        }
      }
    } catch (o) {
    }
    if (navigator.mozGetUserMedia) {
      try {
        element.src = vendorURL ? vendorURL.createObjectURL(stream) : stream;
        /** @type {Object} */
        element.mozSrcObject = stream;
        element.play();
      } catch (err) {
        next(err || "Video error");
      }
      if (fn) {
        setTimeout(done, 150);
      }
    } else {
      $(element).on("canplay", function() {
        $(this).off("canplay");
        if (fn) {
          setTimeout(done, 150);
        }
      });
      try {
        if (!element.src) {
          element.src = vendorURL ? vendorURL.createObjectURL(stream) : stream;
          /** @type {boolean} */
          element.loop = element.muted = true;
          element.load();
        }
      } catch (o) {
        next(o || "Video error");
      }
    }
  }
  var target = {};
  /** @type {Element} */
  var element = document.createElement("video");
  var fn;
  var error;
  var tref;
  var text;
  navigator.getUserMedia_ = navigator.getUserMedia || (navigator.webkitGetUserMedia || navigator.mozGetUserMedia);
  target.hasGetUserMedia = function() {
    return!!navigator.getUserMedia_ || !!(navigator.mediaDevices && navigator.mediaDevices.getUserMedia);
  }();
  target.hasSecureAccess = function() {
    var secureAccess;
    try {
      secureAccess = localStorage.getItem("secureAccess");
    } catch (o) {
    }
    return!!secureAccess;
  }();
  /**
   * @param {?} options
   * @param {?} a3
   * @return {undefined}
   */
  target.getCamera = function(options, a3) {
    if (element.src || element.mozSrcObject) {
      return;
    }
    fn = options;
    error = a3;
    /**
     * @param {string} err
     * @return {undefined}
     */
    element.onerror = function(err) {
      /** @type {null} */
      element.onerror = null;
      next(err || "Video error");
    };
    var isIE = WebcamToy.ua.chrome && WebcamToy.ua.chromeVersion < 42;
    if (isIE) {
      stop();
      $(window).resize(resize);
    }
    /** @type {number} */
    tref = setTimeout(function() {
      callback({
        name : "Camera timeout"
      });
    }, isIE ? 7E3 : 15E3);
    if (target.hasGetUserMedia) {
      try {
        if (navigator.mediaDevices && (navigator.mediaDevices.getUserMedia && window.Promise)) {
          navigator.mediaDevices.getUserMedia({
            video : WebcamToy.ua.chrome ? {
              width : {
                ideal : 960
              },
              height : {
                ideal : 720
              },
              aspectRatio : {
                min : 1.25,
                max : 1.6
              },
              facingMode : "user"
            } : true,
            audio : false
          })["then"](start)["catch"](callback);
        } else {
          navigator.getUserMedia_({
            video : WebcamToy.ua.chrome ? {
              mandatory : {
                minAspectRatio : 1.25,
                maxAspectRatio : 1.6
              },
              optional : [{
                minWidth : 960
              }, {
                minHeight : 720
              }, {
                maxWidth : 960
              }, {
                maxHeight : 720
              }]
            } : true,
            audio : false
          }, start, callback);
        }
      } catch (q) {
        try {
          navigator.getUserMedia_("video", start, callback);
        } catch (err) {
          next(err || "Camera not accessible");
        }
      }
      WebcamToy.log("getUserMedia");
    } else {
      next("Camera not accessible");
    }
  };
  return target;
}();
(function() {
  /** @type {number} */
  var x = 0;
  /** @type {number} */
  var lastTime = 0;
  /** @type {Array} */
  var vendors = ["ms", "moz", "webkit", "o"];
  for (;x < vendors.length && !window.requestAnimationFrame;) {
    window.requestAnimationFrame = window[vendors[x] + "RequestAnimationFrame"];
    window.cancelAnimationFrame = window[vendors[x] + "CancelAnimationFrame"] || window[vendors[x] + "CancelRequestAnimationFrame"];
    x++;
  }
  if (!window.requestAnimationFrame) {
    /**
     * @param {function (number): ?} callback
     * @param {(Element|null)=} element
     * @return {number}
     */
    window.requestAnimationFrame = function(callback, element) {
      /** @type {number} */
      var currTime = (new Date).getTime();
      /** @type {number} */
      var timeToCall = Math.max(0, 1E3 / 60 - currTime + lastTime);
      /** @type {number} */
      var id = setTimeout(function() {
        callback(currTime + timeToCall);
      }, timeToCall);
      /** @type {number} */
      lastTime = currTime + timeToCall;
      return id;
    };
  }
  if (!window.cancelAnimationFrame) {
    /**
     * @param {number} id
     * @return {?}
     */
    window.cancelAnimationFrame = function(id) {
      clearTimeout(id);
    };
  }
})();
$.extend($.easing, {
  /**
   * @param {?} t
   * @param {number} time
   * @param {number} beg
   * @param {number} diff
   * @param {number} dur
   * @return {?}
   */
  easeInQuad : function(t, time, beg, diff, dur) {
    return diff * (time /= dur) * time + beg;
  },
  /**
   * @param {?} b
   * @param {number} t
   * @param {number} x
   * @param {?} c
   * @param {number} d
   * @return {?}
   */
  easeOutQuad : function(b, t, x, c, d) {
    return-c * (t /= d) * (t - 2) + x;
  },
  /**
   * @param {?} b
   * @param {number} time
   * @param {number} beg
   * @param {number} diff
   * @param {number} dur
   * @return {?}
   */
  easeInOutQuad : function(b, time, beg, diff, dur) {
    if ((time /= dur / 2) < 1) {
      return diff / 2 * time * time + beg;
    }
    return-diff / 2 * (--time * (time - 2) - 1) + beg;
  }
});
/**
 * @param {Function} callback
 * @return {?}
 */
$.fn.buttonClick = function(callback) {
  if (WebcamToy.Capabilities.touch) {
    return this.each(function() {
      $(this).bind("touchend", function() {
        if (callback) {
          callback();
        }
      });
    });
  } else {
    return this.each(function() {
      var item = $(this);
      item.mousedown(function() {
        item.data("pressed", true);
      }).mouseup(function() {
        if (item.data("pressed")) {
          item.data("pressed", false);
          if (callback) {
            callback();
          }
        }
      }).mouseout(function() {
        item.data("pressed", false);
      });
      /**
       * @param {?} event
       * @return {undefined}
       */
      this.onselectstart = function(event) {
        if (event) {
          event.preventDefault();
        }
      };
      /**
       * @param {?} evt
       * @return {undefined}
       */
      this.oncontextmenu = function(evt) {
        if (evt) {
          evt.preventDefault();
        }
      };
    });
  }
};
/**
 * @param {?} inSender
 * @return {?}
 */
$.fn.removeButtonClick = function(inSender) {
  return this.each(function() {
    $(this).unbind("mousedown mouseup mouseout touchend");
    /** @type {null} */
    this.onselectstart = null;
  });
};
WebcamToy.UI = function(log) {
  /**
   * @param {number} recurring
   * @param {?} s
   * @param {number} expectedHashCode
   * @param {Function} mayParseLabeledStatementInstead
   * @param {boolean} dataAndEvents
   * @return {undefined}
   */
  function fn(recurring, s, expectedHashCode, mayParseLabeledStatementInstead, dataAndEvents) {
    /** @type {string} */
    var activeClassName = dataAndEvents ? "fade-fast" : "fade-slow";
    s.show().addClass(activeClassName);
    /** @type {number} */
    abortTimeout = setTimeout(function() {
      s.css("opacity", recurring);
      /** @type {number} */
      abortTimeout = setTimeout(function() {
        s.removeClass(activeClassName);
        if (!recurring) {
          s.hide();
        }
        if (mayParseLabeledStatementInstead) {
          mayParseLabeledStatementInstead();
        }
      }, dataAndEvents ? 210 : 410);
    }, expectedHashCode || 0);
  }
  /**
   * @return {undefined}
   */
  function unpause() {
    /** @type {number} */
    id = requestAnimationFrame(tick);
  }
  /**
   * @return {undefined}
   */
  function tick() {
    if (!node.paused) {
      if (data.grid) {
        /** @type {number} */
        going = setTimeout(unpause, 1E3 / 30);
        self.draw();
      } else {
        /** @type {number} */
        going = setTimeout(unpause, 1E3 / options.fps);
        options.autoEnhance();
        options.draw();
      }
    }
  }
  /**
   * @return {undefined}
   */
  function animate() {
    /** @type {number} */
    options.quadPos = data.quadCountdown = options.isQuad ? 4 : 0;
    if (data.quadCountdown) {
      loading.hide();
      $summary.show();
      $message.addClass("quad");
    } else {
      $summary.hide();
      loading.show();
      $message.removeClass("quad");
    }
    try {
      options.draw();
    } catch (cf) {
    }
    $itemContainer.hide();
    $("#button-effects .effect").hide();
    $("#button-effects .effect-" + options.id).show();
    log.log("Effect", options.id);
  }
  /**
   * @return {undefined}
   */
  function update() {
    if (!element || !node) {
      return;
    }
    var w = frame.width();
    var r = frame.height();
    var horizontal = options.square;
    /** @type {function (*): number} */
    var ceil = Math.ceil;
    if (data.grid && mod) {
      /** @type {boolean} */
      var delta = false;
      /** @type {number} */
      var g = parseInt(msg.css("bottom"), 10) < 26 ? 50 : 75;
      /** @type {number} */
      var value = Math.floor(w / 3 - 25);
      /** @type {number} */
      var arr = options.square ? value : value / width;
      mod.stop(true, false).each(function() {
        /** @type {number} */
        var height = (r - g - (r < 711 ? 85 : 92)) / 3;
        /** @type {number} */
        var x = options.square ? height - 2 : height * width;
        if (x > value) {
          /** @type {number} */
          x = value;
          /** @type {number} */
          height = arr;
          /** @type {boolean} */
          delta = true;
        }
        $(this).css({
          "margin-left" : options.square ? ceil((height - 2 - height * width) / 2) : 0,
          width : ceil(height * width),
          height : ceil(height)
        }).parent().stop(true, false).css({
          "margin-left" : 0,
          "margin-bottom" : 0,
          width : ceil(x),
          height : ceil(height)
        });
      });
      $("#grid-view>div").css("margin-top", delta ? Math.max(2, (r - g - arr * 3 - 82) / 2) : "");
    } else {
      if (w / r > (horizontal ? 1 : width)) {
        $img.css({
          width : horizontal ? r - 2 : r * width,
          height : r,
          "margin-left" : horizontal ? (r - 2) / -2 : r * width / -2,
          "margin-top" : r / -2
        });
        element.css({
          width : r * width,
          height : r,
          "margin-left" : horizontal ? (r - r * width - 2) / 2 : 0
        });
      } else {
        $img.css({
          width : w,
          height : horizontal ? w : w / width,
          "margin-left" : w / -2,
          "margin-top" : horizontal ? w / -2 : w / width / -2
        });
        element.css({
          width : horizontal ? w * width : w,
          height : horizontal ? w : w / width,
          "margin-left" : horizontal ? (w - w * width) / 2 : 0
        });
      }
    }
  }
  /**
   * @return {undefined}
   */
  function loadNext() {
    if (data.capturing || (data.sharing || data.grid)) {
      return;
    }
    options.previousEffect();
    animate();
  }
  /**
   * @return {undefined}
   */
  function raf() {
    if (data.capturing || (data.sharing || data.grid)) {
      return;
    }
    options.nextEffect();
    animate();
  }
  /**
   * @return {undefined}
   */
  function func() {
    if (data.grid) {
      self.previousPage();
      search();
    }
  }
  /**
   * @return {undefined}
   */
  function onFocus() {
    if (data.grid) {
      self.nextPage();
      search();
    }
  }
  /**
   * @return {undefined}
   */
  function complete() {
    if (!data.sharing) {
      node.play();
      if (options) {
        options.draw();
      }
      clearTimeout(going);
      cancelAnimationFrame(id);
      tick();
    }
  }
  /**
   * @return {undefined}
   */
  function onComplete() {
    if (data.capturing || data.sharing) {
      return;
    }
    options.useMirror(!options.mirror);
    if (self) {
      self.useMirror(options.mirror);
    }
    if (!data.grid) {
      options.draw();
    }
  }
  /**
   * @return {undefined}
   */
  function anim() {
    if (data.capturing || data.sharing) {
      return;
    }
    options.useSquare(!options.square);
    self.useSquare(options.square);
    if (!data.grid) {
      options.draw();
    }
    update();
  }
  /**
   * @return {undefined}
   */
  function event() {
    if (data.capturing || (data.sharing || data.grid)) {
      return;
    }
    /** @type {boolean} */
    data.useCountdown = !data.useCountdown;
  }
  /**
   * @return {undefined}
   */
  function label() {
    if (data.capturing || (data.sharing || data.grid)) {
      return;
    }
    /** @type {boolean} */
    data.useCameraFlash = !data.useCameraFlash;
  }
  /**
   * @return {?}
   */
  function draw() {
    var containerPos;
    var buttonPos;
    var $slide = mod.parent().eq(options.effectNum - self.page * 9);
    if (!$slide.length) {
      $slide = mod.parent().eq(4);
    }
    if (!$slide.length) {
      return null;
    }
    containerPos = frame.offset();
    buttonPos = $slide.offset();
    return{
      left : buttonPos.left - containerPos.left,
      top : buttonPos.top - containerPos.top,
      width : $slide.width(),
      height : $slide.height()
    };
  }
  /**
   * @return {undefined}
   */
  function render() {
    /** @type {number} */
    var page = Math.floor(options.effectNum / 9);
    complete();
    if (data.grid) {
      frame.removeClass("wait");
      update();
      $itemContainer.hide();
      fn(0, overlay, 0, null, true);
      setTimeout(function() {
        if (self.page !== page) {
          self.setPage(page);
        }
        search();
        $this.show();
        var s = draw();
        if (!s) {
          $img.hide();
          msg.show();
          return;
        }
        msg.hide().css("opacity", 0);
        $img.removeClass("toy-shadow").addClass("toy-zoom-out");
        element.addClass("toy-zoom-out");
        setTimeout(function() {
          $img.css({
            width : s.width,
            height : s.height,
            "margin-left" : s.left - frame.width() / 2,
            "margin-top" : s.top - frame.height() / 2
          });
          element.css({
            width : options.square ? s.width * width : s.width,
            height : s.height,
            "margin-left" : options.square ? (s.width - s.width * width) / 2 : 0
          });
          setTimeout(function() {
            $img.removeClass("toy-zoom-out");
            element.removeClass("toy-zoom-out");
            fn(0, $img, 0, null, true);
            fn(1, msg, 210, function() {
              if (!data.gridLoaded) {
                /** @type {boolean} */
                data.gridLoaded = true;
                visible_image.hide();
                $("#button-effects .more").show();
              }
              /** @type {boolean} */
              data.zooming = false;
            }, true);
          }, 510);
        }, 0);
      }, 10);
    } else {
      if (self.page !== page) {
        self.setPage(page);
      }
      var s = draw();
      if (!s) {
        overlay.show();
        $img.show();
        msg.hide();
        $this.hide();
        update();
        animate();
        return;
      }
      update();
      var c = {
        width : $img.width(),
        height : $img.height(),
        "margin-left" : $img.css("margin-left"),
        "margin-top" : $img.css("margin-top")
      };
      $img.show().css({
        opacity : 1,
        width : s.width,
        height : s.height,
        "margin-left" : s.left - frame.width() / 2,
        "margin-top" : s.top - frame.height() / 2
      });
      element.css({
        width : options.square ? s.width * width : s.width,
        height : s.height,
        "margin-left" : options.square ? (s.width - s.width * width) / 2 : 0
      });
      fn(0, msg, 0, null, true);
      setTimeout(function() {
        $img.addClass("toy-zoom-in").css(c);
        element.addClass("toy-zoom-in").css({
          width : options.square ? c.width * width : c.width,
          height : c.height,
          "margin-left" : options.square ? (c.width - c.width * width - 2) / 2 : 0
        });
        setTimeout(function() {
          $img.removeClass("toy-zoom-in").addClass("toy-shadow-fade toy-shadow");
          element.removeClass("toy-zoom-in");
          $this.hide();
          update();
          fn(1, overlay, 0, null, true);
          setTimeout(function() {
            $img.removeClass("toy-shadow-fade");
            /** @type {boolean} */
            data.zooming = false;
          }, 210);
        }, 410);
      }, 0);
      animate();
    }
  }
  /**
   * @return {undefined}
   */
  function show() {
    if (data.capturing || (data.sharing || data.zooming)) {
      return;
    }
    /** @type {boolean} */
    data.grid = !data.grid;
    /** @type {boolean} */
    data.zooming = true;
    log.log("Grid", data.grid ? "show" : "hide");
    if (data.gridLoaded) {
      render();
    } else {
      node.pause();
      frame.addClass("wait");
      if (self) {
        $("#button-effects p").hide();
        script.text("0%");
        visible_image.show();
        log.log("Grid init");
        setTimeout(function() {
          self.initPages(self.totalPages, function(totalPages) {
            script.text(Math.round(Math.max(0, Math.min(1, (self.totalPages - totalPages) / self.totalPages)) * 90 + 10) + "%");
          }, render);
        }, 0);
      } else {
        render();
      }
    }
  }
  /**
   * @return {undefined}
   */
  function closeLightbox() {
    if (document.webkitExitFullscreen) {
      document.webkitExitFullscreen();
    } else {
      if (document.webkitCancelFullScreen) {
        document.webkitCancelFullScreen();
      } else {
        if (document.mozExitFullScreen) {
          document.mozExitFullScreen();
        } else {
          if (document.mozCancelFullScreen) {
            document.mozCancelFullScreen();
          } else {
            if (document.exitFullScreen) {
              document.exitFullScreen();
            } else {
              if (document.exitFullscreen) {
                document.exitFullscreen();
              }
            }
          }
        }
      }
    }
  }
  /**
   * @return {undefined}
   */
  function toggleFullscreen() {
    var element = frame[0];
    if (element.webkitRequestFullScreen) {
      element.webkitRequestFullScreen(Element.ALLOW_KEYBOARD_INPUT);
    } else {
      if (element.mozRequestFullScreen) {
        element.mozRequestFullScreen();
      } else {
        if (element.requestFullScreen) {
          element.requestFullScreen();
        } else {
          if (element.requestFullscreen) {
            element.requestFullscreen();
          }
        }
      }
    }
  }
  /**
   * @return {?}
   */
  function onFullscreenChange() {
    return document.webkitIsFullScreen || (document.mozFullScreen || (document.webkitFullscreenElement || (document.mozFullScreenElement || (document.fullScreenElement || document.fullscreenElement))));
  }
  /**
   * @return {undefined}
   */
  function click() {
    if (onFullscreenChange()) {
      closeLightbox();
    } else {
      toggleFullscreen();
    }
  }
  /**
   * @return {?}
   */
  function unwrap() {
    return data.saveFilename + data.saveCount + ".jpg";
  }
  /**
   * @return {undefined}
   */
  function open() {
    setTimeout(function() {
      elements.removeAttr("href");
    }, 50);
  }
  /**
   * @return {undefined}
   */
  function run() {
    /** @type {boolean} */
    data.sharing = false;
    open();
    log.log("Back");
    if (item.is(":visible")) {
      fn(0, item, 0, function() {
        item.hide()[0].reset();
      }, true);
    }
    complete();
    content.fadeOut(150, function() {
      $spinner.hide().css({
        opacity : 1
      }).removeClass("photo-bottom photo-tweet");
      content.removeClass("rotate-two photo-drop photo-img-tweet photo-shadow").attr("src", "");
      fn(0, $("#toy-share-ui"), 50, function() {
        log.Services.cancelPost();
        test();
        _this.hide();
        that.hide();
        ul.hide();
        video.hide();
        button.hide();
        css();
        p.hide();
        elem.hide();
        target.hide();
        $li.hide();
        a.hide();
        object.hide();
        form.hide();
        /** @type {null} */
        img = null;
        /** @type {null} */
        canvas = null;
        fn(0, frame, 0, function() {
          frame.removeClass("bg-share").addClass("bg-toy");
          t.css("opacity", 0);
          fn(1, frame, 0, function() {
            options.setEffect(options.id);
            animate();
            element.show();
            $img.show();
            fn(1, t, 0, function() {
              fn(1, overlay);
            }, true);
          }, true);
        }, true);
      }, true);
    });
  }
  /**
   * @return {undefined}
   */
  function go() {
    if (data.countdown) {
      /** @type {number} */
      var method = data.quadCountdown;
      /** @type {number} */
      var el_t = 50;
      /** @type {number} */
      var originalLeft_ = 50;
      /** @type {boolean} */
      var fX100 = options.id === "comicstrip";
      /** @type {number} */
      var RK = (options.width - options.height / 2) / options.width * 100;
      switch(method) {
        case 4:
          /** @type {number} */
          originalLeft_ = fX100 ? RK / 2 : 25;
          /** @type {number} */
          el_t = 25;
          break;
        case 3:
          /** @type {number} */
          originalLeft_ = fX100 ? RK + (100 - RK) / 2 : 75;
          /** @type {number} */
          el_t = 25;
          break;
        case 2:
          /** @type {number} */
          originalLeft_ = fX100 ? (100 - RK) / 2 : 25;
          /** @type {number} */
          el_t = 75;
          break;
        case 1:
          /** @type {number} */
          originalLeft_ = fX100 ? 100 - RK / 2 : 75;
          /** @type {number} */
          el_t = 75;
          break;
      }
      if (method) {
        $box.addClass("quad");
      } else {
        $box.removeClass("quad");
      }
      $box.css({
        left : originalLeft_ + "%",
        top : el_t + "%",
        visibility : "visible"
      }).html("<p>" + data.countdown-- + "</p>").show().delay(method ? 300 : 400).fadeOut(method ? 100 : 150);
      log.Audio.playTrack("countdown");
      setTimeout(go, method ? 700 : 900);
    } else {
      if (data.quadCountdown) {
        data.quadCountdown--;
      }
      setTimeout(init, data.useCountdown || options.isQuad ? 200 : 0);
    }
  }
  /**
   * @return {undefined}
   */
  function on() {
    /** @type {boolean} */
    data.photoSaved = true;
    if (object.is(":visible")) {
      object.hide();
      a.show();
    }
  }
  /**
   * @return {undefined}
   */
  function hide() {
    if ($elem.is(":visible")) {
      $elem.fadeOut(200);
    } else {
      $elem.hide();
    }
    if ($el.is(":visible")) {
      $el.fadeOut(200);
    } else {
      $el.hide();
    }
    if (el.is(":visible")) {
      el.fadeOut(200);
    } else {
      el.hide();
    }
    if (panel.is(":visible")) {
      panel.fadeOut(200);
    } else {
      panel.hide();
    }
  }
  /**
   * @return {undefined}
   */
  function finish() {
    /** @type {number} */
    data.photoTextNum = Math.floor(Math.random() * is.length);
    /** @type {number} */
    data.photoCommentNum = Math.floor(Math.random() * radio.length);
    /** @type {number} */
    data.postAttempt = 0;
    /** @type {boolean} */
    data.photoSaved = false;
    fn(1, $("#toy-share-ui"), 300);
  }
  /**
   * @param {number} x
   * @return {undefined}
   */
  function fix(x) {
    var i = x || 600;
    /** @type {number} */
    var height = Math.round(i / width);
    canvas = canvas || options.getImage(i, height);
  }
  /**
   * @return {undefined}
   */
  function init() {
    /** @type {boolean} */
    data.capturing = false;
    if (data.quadCountdown) {
      log.Audio.playTrack("capture", 125);
      if (data.useCameraFlash) {
        $("#camera-flash").show().delay(250).fadeOut(250, countdown);
      } else {
        setTimeout(countdown, 250);
      }
      return;
    }
    /** @type {boolean} */
    data.sharing = true;
    $box.hide();
    switch(data.shareService) {
      case "facebook":
        $elem.removeButtonClick().buttonClick(close).removeClass("button-inactive").show();
        find("post");
        bind("facebook-post");
        load();
        break;
      case "twitter":
        $el.removeButtonClick().buttonClick(refresh).removeClass("button-inactive").show();
        find("compose");
        bind("twitter-compose");
        load();
        break;
      case "tumblr":
        el.removeButtonClick().buttonClick(handler).removeClass("button-inactive").show();
        find("post");
        bind("tumblr-compose");
        load();
        break;
      case "vk":
        panel.removeButtonClick().buttonClick(activate).removeClass("button-inactive").show();
        find("post");
        bind("vk-post");
        load();
        break;
      default:
        startGame();
        find("login");
        bind("disclaimer");
        break;
    }
    log.Audio.playTrack("capture", 125);
    if (data.useCameraFlash) {
      $("#camera-flash").show();
    }
    setTimeout(function() {
      if (data.useCameraFlash) {
        $("#camera-flash").fadeOut(250, finish);
      } else {
        finish();
      }
      node.pause();
      img = options.getImage();
      /** @type {null} */
      canvas = null;
      overlay.hide();
      element.hide();
      $img.hide();
      frame.removeClass("bg-toy").addClass("bg-share");
      if (!data.useCameraFlash) {
        frame.hide().fadeIn(100);
      }
      if (img && (options && content)) {
        content.attr({
          src : img.src,
          width : options.width,
          height : options.height
        });
      }
      switch(options.id) {
        case "cocoa":
        ;
        case "danger":
        ;
        case "retro":
        ;
        case "rose":
        ;
        case "xpro":
        ;
        case "zinc":
          content.removeClass("photo-white photo-thick");
          content.addClass("photo-black photo-thin");
          break;
        case "fire":
        ;
        case "lsd":
        ;
        case "nightvision":
          content.removeClass("photo-white photo-thin");
          content.addClass("photo-black photo-thick");
          break;
        case "cocktail":
        ;
        case "comicbook":
        ;
        case "comicstrip":
        ;
        case "envy":
        ;
        case "hazydays":
        ;
        case "magazine":
        ;
        case "rainbow":
          content.removeClass("photo-black photo-thick");
          content.addClass("photo-white photo-thin");
          break;
        case "glaze":
        ;
        case "watercolor":
          content.removeClass("photo-black photo-thick photo-thin");
          break;
        default:
          content.removeClass("photo-black photo-thin");
          content.addClass("photo-white photo-thick");
      }
    }, data.useCameraFlash ? 250 : 0);
    setTimeout(function() {
      if (data.useCameraFlash) {
        $spinner.show();
      } else {
        $spinner.fadeIn(100);
      }
      content.show().css("margin-top", -60);
      setTimeout(function() {
        content.addClass("rotate-two photo-drop").css("margin-top", 0);
        setTimeout(function() {
          content.addClass("photo-shadow");
          log.trackEvent("Photo", "Capture", options.id);
          log.log("Photo", "Capture", options.id);
        }, 250);
      }, data.useCameraFlash ? 100 : 0);
    }, 200);
  }
  /**
   * @return {undefined}
   */
  function countdown() {
    if (data.capturing || (data.sharing || data.grid)) {
      return;
    }
    $itemContainer.hide();
    fn(0, overlay, 0, null, true);
    if (data.quadCountdown) {
      /** @type {number} */
      options.quadPos = data.quadCountdown;
    }
    /** @type {number} */
    data.countdown = data.useCountdown ? 3 : 0;
    /** @type {boolean} */
    data.capturing = true;
    setTimeout(go, data.countdown ? 250 : 0);
  }
  /**
   * @param {string} wanted
   * @return {?}
   */
  function expect(wanted) {
    return $("#button-effects .effect-" + wanted).text();
  }
  /**
   * @param {string} template
   * @return {?}
   */
  function compile(template) {
    template = template.replace(/(^|[-\u2014\s(\["])'/g, "$1\u2018");
    template = template.replace(/'/g, "\u2019");
    template = template.replace(/(^|[-\u2014\[(\u2018\s])"/g, "$1\u201c");
    template = template.replace(/"/g, "\u201d");
    template = template.replace(/<3/g, "\u2665");
    template = template.replace(/\.\.\./g, "\u2026");
    template = template.replace(/(:\)|:\-\)|\=\)|:D|\=D|:3|\(:)/g, "\u263a");
    template = template.replace(/(:\(|:\-\(|\=\()/g, "\u2639");
    template = template.replace(/WE(B|D)? ?CA(M(E)?|N) ?TOY/g, "WEBCAM TOY");
    template = template.replace(/(W|w)(E|e)(b|d)? ?(C|c)(A|a)(m(e)?|n)/g, "$1ebcam");
    return template.substr(0, end);
  }
  /**
   * @return {?}
   */
  function callback() {
    if (options.id === "normal") {
      return is[data.photoTextNum || 0];
    }
    var exp = expect(options.id);
    var template = exp ? radio[data.photoCommentNum || 0].value.replace("%s", exp) : photoText;
    return compile(template);
  }
  /**
   * @return {undefined}
   */
  function search() {
    collection.each(function(v) {
      $(this).text(expect(self.getEffectID(v)));
    });
  }
  /**
   * @param {?} node
   * @param {number} i
   * @param {string} e
   * @return {undefined}
   */
  function focus(node, i, e) {
    if (e.length === 3) {
      /** @type {string} */
      e = "";
    } else {
      e += ".";
    }
    node.text(i + e);
    /** @type {number} */
    tref = setTimeout(focus, 400, node, i, e);
  }
  /**
   * @return {undefined}
   */
  function toLowerCase() {
    fn(0, selector, 0, null, true);
  }
  /**
   * @return {undefined}
   */
  function css() {
    $("#toy-share-ui footer p").hide();
  }
  /**
   * @param {string} obj
   * @return {undefined}
   */
  function bind(obj) {
    css();
    if (obj) {
      $("#prompt-" + obj).show();
    }
  }
  /**
   * @return {undefined}
   */
  function test() {
    clearTimeout(tref);
    $elem.find("p").hide();
    $el.find("p").hide();
    el.find("p").hide();
    panel.find("p").hide();
  }
  /**
   * @param {string} type
   * @return {undefined}
   */
  function find(type) {
    var element;
    var o;
    test();
    switch(data.shareService) {
      case "facebook":
        element = $elem;
        o = _this;
        break;
      case "twitter":
        element = $el;
        o = that;
        break;
      case "tumblr":
        element = el;
        o = ul;
        break;
      case "vk":
        element = panel;
        o = video;
        break;
      default:
        $(".button .share-login").show();
        return;
    }
    if (type === "posted") {
      element.hide();
      o.show();
    } else {
      o.hide();
      element.show();
      if (type) {
        element.find(".share-" + type).show();
      }
    }
  }
  /**
   * @return {undefined}
   */
  function startGame() {
    $($slide.hide()[Math.floor(Math.random() * $slide.length)]).show();
  }
  /**
   * @return {undefined}
   */
  function remove() {
    /** @type {string} */
    data.shareService = "";
    /** @type {number} */
    data.postAttempt = 0;
    $elem.fadeOut(200);
    _this.fadeOut(200);
    $el.fadeOut(200);
    that.fadeOut(200);
    el.fadeOut(200);
    ul.fadeOut(200);
    panel.fadeOut(200);
    video.fadeOut(200);
    button.fadeOut(200);
    p.fadeOut(100);
    elem.fadeOut(100);
    target.fadeOut(100);
    $li.fadeOut(100);
    css();
    fn(0, body, 0, function() {
      test();
      $elem.removeClass("share-center button-inactive").addClass("share").removeButtonClick().delay(250).fadeIn(400).buttonClick(restoreScript);
      $el.removeClass("share-center button-inactive").addClass("share").removeButtonClick().delay(250).fadeIn(400).buttonClick(e);
      el.removeClass("share-center button-inactive").addClass("share").removeButtonClick().delay(250).fadeIn(400).buttonClick(which);
      panel.removeClass("share-center button-inactive").addClass("share").removeButtonClick().delay(250).fadeIn(400).buttonClick(act);
      startGame();
      find("login");
      bind("disclaimer");
      fn(1, body, 250, null, true);
      fn(1, selector, 250, null, true);
    }, true);
  }
  /**
   * @return {undefined}
   */
  function load() {
    button.removeClass("button-inactive").addClass("active").show();
  }
  /**
   * @param {Object} result
   * @return {undefined}
   */
  function next(result) {
    /** @type {string} */
    var output = "";
    /** @type {string} */
    var cls = "";
    if (result && result.error) {
      output = result.error.message;
      cls = result.error.type;
    } else {
      /** @type {Object} */
      output = result;
    }
    if (output === "OK") {
      return;
    }
    if (data.postAttempt < 1) {
      data.postAttempt++;
    } else {
      if (/oauth/i.test(cls) || /oauth/i.test(output)) {
        log.Services.facebookLogout();
        remove();
        return;
      } else {
        bind("facebook-error");
        process();
      }
    }
    find("error");
    load();
    $elem.removeClass("button-inactive").buttonClick(close);
    log.error("Facebook post error" + (cls ? ": " + cls : "") + (output ? ": " + output : ""));
  }
  /**
   * @return {undefined}
   */
  function setup() {
    find("posted");
    bind("facebook-posted");
    load();
    log.trackEvent("Photo", "Facebook", options.id);
    log.log("Photo", "Facebook", options.id);
    /** @type {number} */
    data.postAttempt = 0;
    on();
  }
  /**
   * @return {undefined}
   */
  function close() {
    find("posting");
    css();
    $elem.removeButtonClick().addClass("button-inactive");
    button.removeClass("active").addClass("button-inactive");
    focus(th, classNames, "...");
    log.log("Photo", "Facebook post", options.id);
    log.Services.facebookPost({
      image : img,
      message : callback()
    }, setup, next);
  }
  /**
   * @return {undefined}
   */
  function cb() {
    if (!data.sharing || data.shareService !== "facebook") {
      return;
    }
    if (data.albumLoaded) {
      find("post");
      $elem.removeButtonClick().buttonClick(close).removeClass("button-inactive");
    } else {
      find("loading");
      $elem.removeButtonClick().addClass("button-inactive");
    }
  }
  /**
   * @return {undefined}
   */
  function loop() {
    if (data.shareService === "facebook") {
      return;
    }
    /** @type {string} */
    data.shareService = "facebook";
    toLowerCase();
    css();
    hide();
    fn(0, body, 0, function() {
      /** @type {boolean} */
      data.albumLoaded = false;
      cb();
      $elem.hide().delay(250).fadeIn(400, process);
      bind("facebook-post");
      $elem.removeClass("share").addClass("share-center");
      button.removeClass("twitter tumblr vk button-inactive").addClass("facebook active").delay(250).fadeIn(400);
      if (body.data("hover")) {
        fn(1, body, 250, null, true);
      }
    }, true);
  }
  /**
   * @param {string} path
   * @param {string} target
   * @param {?} errorCallback
   * @return {undefined}
   */
  function download(path, target, errorCallback) {
    if (path) {
      _this.attr("href", path);
      if (target === "everyone") {
        log.trackEvent("Photo", "Facebook album", path);
        log.log("Photo", "Facebook album", path);
      }
    }
    /** @type {boolean} */
    data.albumLoaded = !!errorCallback;
    cb();
  }
  /**
   * @return {undefined}
   */
  function process() {
    log.Services.facebookAlbum(download, frame.attr("data-fb-album-name"));
  }
  /**
   * @param {boolean} name
   * @return {undefined}
   */
  function route(name) {
    if (name && data.sharing) {
      loop();
    }
  }
  /**
   * @return {undefined}
   */
  function restoreScript() {
    /** @type {function (boolean): undefined} */
    log.Services.onFacebookAuth = route;
    log.Services.facebookAuth();
  }
  /**
   * @param {Object} data
   * @return {undefined}
   */
  function handle(data) {
    if (data && data.fullName) {
      $src.text(string.replace("%s", data.fullName));
      p.text(param.replace("%s", data.fullName));
      $("#prompt-facebook-post span,#prompt-facebook-logout span").show();
    }
  }
  /**
   * @param {Object} e
   * @return {undefined}
   */
  function add(e) {
    if (e && typeof e === "object") {
      e = e.statusText || JSON.stringify(e);
    }
    if (/blacklist/i.test(e)) {
      log.Services.twitterLogout();
      remove();
      return;
    }
    if (data.postAttempt < 2) {
      data.postAttempt++;
    } else {
      if (/oauth/i.test(e)) {
        log.Services.twitterLogout();
        remove();
        return;
      } else {
        bind("twitter-error");
      }
    }
    find("error");
    load();
    $el.removeClass("button-inactive").buttonClick(toggle);
    /** @type {boolean} */
    obj.disabled = false;
    log.error("Twitter post error" + (e ? ": " + e : ""));
  }
  /**
   * @param {?} url
   * @return {undefined}
   */
  function get(url) {
    /** @type {null} */
    canvas = null;
    find("posted");
    bind("twitter-posted");
    load();
    if (url) {
      $("a.twitter").attr("href", url);
    }
    log.trackEvent("Photo", "Twitter", options.id);
    log.log("Photo", "Twitter", options.id);
    /** @type {number} */
    data.postAttempt = 0;
    on();
  }
  /**
   * @return {undefined}
   */
  function toggle() {
    obj.blur();
    /** @type {boolean} */
    obj.disabled = true;
    find("posting");
    css();
    $el.removeButtonClick().addClass("button-inactive");
    button.removeClass("active").addClass("button-inactive");
    focus(stat, dataName, "...");
    log.log("Photo", "Twitter post", options.id);
    log.Services.twitterPost({
      image : img,
      message : compile(input.val()) || callback()
    }, get, add);
  }
  /**
   * @return {undefined}
   */
  function create() {
    if (data.shareService === "twitter") {
      return;
    }
    /** @type {string} */
    data.shareService = "twitter";
    toLowerCase();
    css();
    hide();
    fn(0, body, 0, function() {
      find("compose");
      $el.hide().delay(250).fadeIn(400);
      bind("twitter-compose");
      $el.removeClass("share").addClass("share-center");
      button.removeClass("facebook tumblr vk button-inactive").addClass("twitter active").delay(250).fadeIn(400);
      if (body.data("hover")) {
        fn(1, body, 250, null, true);
      }
      $el.removeButtonClick().buttonClick(refresh);
    }, true);
  }
  /**
   * @return {undefined}
   */
  function select() {
    var j = compile(input.val());
    if (input.val() !== j) {
      /** @type {number} */
      var length = obj.selectionStart + j.length - input.val().length + 1;
      obj.focus();
      input.val("");
      input.val(j);
      if (obj.setSelectionRange && length) {
        obj.setSelectionRange(length, length);
      }
    }
    /** @type {number} */
    var node = end - j.length;
    block.text(node).removeClass("short long blur").addClass(input.is(":focus") ? node < 20 ? "short" : "long" : "blur");
  }
  /**
   * @return {undefined}
   */
  function file() {
    if (item.is(":visible")) {
      fn(0, item, 100, function() {
        content.addClass("rotate-two");
        $spinner.removeClass("photo-bottom");
        obj.blur();
        input.val("");
      }, true);
    }
  }
  /**
   * @return {undefined}
   */
  function refresh() {
    content.removeClass("rotate-two photo-drop").addClass("photo-img-tweet");
    $spinner.addClass("photo-bottom photo-tweet");
    input.attr("placeholder", callback());
    /** @type {boolean} */
    obj.disabled = false;
    item.css("opacity", 0);
    fn(1, item, 100, function() {
      obj.focus();
      select();
    }, true);
    $el.removeButtonClick().buttonClick(toggle);
    find("post");
    bind("twitter-post");
  }
  /**
   * @param {string} deepDataAndEvents
   * @return {undefined}
   */
  function clone(deepDataAndEvents) {
    if (deepDataAndEvents) {
      $title.text(nextCode.replace("@", "@" + deepDataAndEvents));
      elem.text(requestUrl.replace("@", "@" + deepDataAndEvents));
      if (data.sharing) {
        create();
      }
    }
  }
  /**
   * @return {undefined}
   */
  function e() {
    /** @type {function (string): undefined} */
    log.Services.onTwitterAuth = clone;
    log.Services.twitterAuth();
  }
  /**
   * @param {Object} e
   * @return {undefined}
   */
  function done(e) {
    if (e && typeof e === "object") {
      e = e.statusText || JSON.stringify(e);
    }
    if (data.postAttempt < 2) {
      data.postAttempt++;
    } else {
      if (/oauth/i.test(e)) {
        log.Services.tumblrLogout();
        remove();
        return;
      } else {
        bind("tumblr-error");
      }
    }
    find("error");
    load();
    el.removeClass("button-inactive").buttonClick(handler);
    log.error("Tumblr post error" + (e ? ": " + e : ""));
  }
  /**
   * @param {?} scope
   * @return {undefined}
   */
  function link(scope) {
    /** @type {null} */
    canvas = null;
    find("posted");
    bind("tumblr-posted");
    load();
    if (scope) {
      $("a.tumblr").attr("href", scope);
    }
    log.trackEvent("Photo", "Tumblr", options.id);
    log.log("Photo", "Tumblr", options.id);
    /** @type {number} */
    data.postAttempt = 0;
    on();
  }
  /**
   * @return {undefined}
   */
  function handler() {
    fix(options.square ? 500 * width : 500);
    find("posting");
    css();
    el.removeButtonClick().addClass("button-inactive");
    button.removeClass("active").addClass("button-inactive");
    focus(selected, itemWithLeastDistance, "...");
    log.log("Photo", "Tumblr post", options.id);
    log.Services.tumblrPost({
      image : canvas,
      message : callback(),
      effect : options.id
    }, link, done);
  }
  /**
   * @return {undefined}
   */
  function bindEvents() {
    if (data.shareService === "tumblr") {
      return;
    }
    /** @type {string} */
    data.shareService = "tumblr";
    toLowerCase();
    css();
    hide();
    fn(0, body, 0, function() {
      find("post");
      el.hide().delay(250).fadeIn(400);
      bind("tumblr-post");
      el.removeClass("share").addClass("share-center");
      button.removeClass("facebook twitter vk button-inactive").addClass("tumblr active").delay(250).fadeIn(400);
      if (body.data("hover")) {
        fn(1, body, 250, null, true);
      }
      el.removeButtonClick().buttonClick(handler);
    }, true);
  }
  /**
   * @param {string} deepDataAndEvents
   * @return {undefined}
   */
  function Class(deepDataAndEvents) {
    if (deepDataAndEvents && data.sharing) {
      bindEvents();
    }
  }
  /**
   * @return {undefined}
   */
  function which() {
    /** @type {function (string): undefined} */
    log.Services.onTumblrAuth = Class;
    log.Services.tumblrAuth();
  }
  /**
   * @param {Object} err
   * @return {undefined}
   */
  function check(err) {
    /** @type {string} */
    var message = "";
    /** @type {string} */
    var cls = "";
    if (err && err.error) {
      message = err.error.message;
      cls = err.error.type;
    } else {
      /** @type {Object} */
      message = err;
    }
    if (data.postAttempt < 2) {
      data.postAttempt++;
    } else {
      if (/oauth/i.test(cls) || /oauth/i.test(message)) {
        log.Services.vkLogout();
        remove();
        return;
      } else {
        bind("vk-error");
      }
    }
    find("error");
    load();
    panel.removeClass("button-inactive").buttonClick(activate);
    log.error("VK post error" + (cls ? ": " + cls : "") + (message ? ": " + message : ""));
  }
  /**
   * @param {?} fn
   * @return {undefined}
   */
  function runTest(fn) {
    /** @type {null} */
    canvas = null;
    find("posted");
    bind("vk-posted");
    load();
    if (fn) {
      $("a.vk").attr("href", fn);
    }
    log.trackEvent("Photo", "VK", options.id);
    log.log("Photo", "VK", options.id);
    /** @type {number} */
    data.postAttempt = 0;
    on();
  }
  /**
   * @return {undefined}
   */
  function activate() {
    fix();
    find("posting");
    css();
    panel.removeButtonClick().addClass("button-inactive");
    button.removeClass("active").addClass("button-inactive");
    focus(textNode, fromIndex, "...");
    log.log("Photo", "VK post", options.id);
    log.Services.vkPost({
      image : canvas,
      message : callback()
    }, runTest, check);
  }
  /**
   * @return {undefined}
   */
  function postLink() {
    if (data.shareService === "vk") {
      return;
    }
    /** @type {string} */
    data.shareService = "vk";
    toLowerCase();
    css();
    hide();
    fn(0, body, 0, function() {
      find("post");
      panel.hide().delay(250).fadeIn(400);
      bind("vk-post");
      panel.removeClass("share").addClass("share-center");
      button.removeClass("facebook twitter tumblr button-inactive").addClass("vk active").delay(250).fadeIn(400);
      if (body.data("hover")) {
        fn(1, body, 250, null, true);
      }
      panel.removeButtonClick().buttonClick(activate);
    }, true);
  }
  /**
   * @param {boolean} deepDataAndEvents
   * @return {undefined}
   */
  function cloneNode(deepDataAndEvents) {
    if (deepDataAndEvents && data.sharing) {
      postLink();
    }
  }
  /**
   * @return {undefined}
   */
  function act() {
    /** @type {function (boolean): undefined} */
    log.Services.onVKAuth = cloneNode;
    log.Services.vkAuth();
  }
  /**
   * @param {?} elem
   * @return {undefined}
   */
  function setStyle(elem) {
    if (elem.css("opacity") === "0") {
      elem.css("opacity", "");
    }
  }
  /**
   * @return {undefined}
   */
  function initialize() {
    $delegate.buttonClick(loadNext);
    $field.buttonClick(raf);
    if (mobile) {
      return;
    }
    element.click(function() {
      $itemContainer.hide();
    });
    $input.buttonClick(func);
    win.buttonClick(onFocus);
    flash.buttonClick(show);
    $message.buttonClick(countdown);
    $btn.buttonClick(function() {
      $itemContainer.toggle();
    });
    stage.buttonClick(run).hover(function() {
      var self = data.photoSaved ? a : object;
      if (self) {
        setStyle(self);
        self.stop(true, true).fadeIn(150);
      }
    }, function() {
      var self = data.photoSaved ? a : object;
      if (self) {
        self.stop(true, true).delay(100).fadeOut(150);
      }
    });
    $elem.buttonClick(restoreScript);
    $el.buttonClick(e);
    el.buttonClick(which);
    panel.buttonClick(act);
    $(".button.share,.button.share-center").hover(function() {
      setStyle(body);
      body.data("hover", true).stop(true, true).fadeIn(150);
    }, function() {
      body.data("hover", false).stop(true, true).delay(50).fadeOut(150);
    });
    button.buttonClick(function() {
      if (button.hasClass("active")) {
        switch(data.shareService) {
          case "facebook":
            /** @type {null} */
            log.Services.onFacebookAuth = null;
            log.Services.facebookLogout();
            break;
          case "twitter":
            /** @type {null} */
            log.Services.onTwitterAuth = null;
            log.Services.twitterLogout();
            file();
            break;
          case "tumblr":
            /** @type {null} */
            log.Services.onTumblrAuth = null;
            log.Services.tumblrLogout();
            break;
          case "vk":
            /** @type {null} */
            log.Services.onVKAuth = null;
            log.Services.vkLogout();
            break;
        }
        remove();
      }
    }).hover(function() {
      if (button.hasClass("active")) {
        var t;
        switch(data.shareService) {
          case "facebook":
            t = p;
            break;
          case "twitter":
            t = elem;
            break;
          case "tumblr":
            t = target;
            break;
          case "vk":
            t = $li;
            break;
        }
        if (t) {
          t.stop(true, true).fadeIn(150, function() {
            t.css("opacity", 1);
          });
        }
      }
    }, function() {
      if (button.hasClass("active")) {
        var t;
        switch(data.shareService) {
          case "facebook":
            t = p;
            break;
          case "twitter":
            t = elem;
            break;
          case "tumblr":
            t = target;
            break;
          case "vk":
            t = $li;
            break;
        }
        if (t) {
          t.stop(true, true).delay(50).fadeOut(150);
        }
      }
    });
    item.submit(function(types) {
      if (types) {
        types.preventDefault();
      }
    });
    bind("disclaimer");
    methods.click(onComplete);
    items.click(anim);
    settings.click(event);
    tab.click(label);
    checkbox.click(click);
    mod.parent().each(function(owner) {
      $(this).mousedown(function() {
        /** @type {number} */
        var scale = 0.92;
        var $canvas = $(this).find("canvas");
        /** @type {number} */
        var h = parseFloat($canvas.css("height"));
        /** @type {number} */
        var x2 = options.square ? h : parseFloat($canvas.css("width"));
        /** @type {function (*): number} */
        var ffloor = Math.floor;
        $(this).data("pressed", true).css({
          width : x2 - (options.square ? 2 : 0),
          height : h
        }).animate({
          "margin-left" : ffloor((x2 - (x2 - (options.square ? 2 : 0)) * scale) / 2),
          "margin-bottom" : ffloor((h - h * scale) / 2),
          width : (x2 - (options.square ? 2 : 0)) * scale,
          height : h * scale
        }, 100, "easeOutQuad");
        $canvas.css({
          width : h * width,
          height : h
        }).animate({
          "margin-left" : options.square ? ffloor((h - h * width) * scale / 2) : 0,
          width : h * width * scale,
          height : h * scale
        }, 100, "easeOutQuad");
      }).mouseup(function(event) {
        if ($(this).data("pressed")) {
          event.stopPropagation();
          $(this).data("pressed", false);
          options.setEffect(self.getEffectID(owner));
          if (data.zooming) {
            update();
          } else {
            show();
          }
        } else {
          update();
        }
      }).mouseout(function() {
        if ($(this).data("pressed")) {
          $(this).data("pressed", false);
          update();
        }
      });
      /**
       * @param {?} event
       * @return {undefined}
       */
      this.onselectstart = function(event) {
        if (event) {
          event.preventDefault();
        }
      };
    });
    $this.mouseup(function() {
      /** @type {boolean} */
      var cg = false;
      mod.parent().each(function() {
        if ($(this).data("pressed")) {
          /** @type {boolean} */
          cg = true;
          $(this).trigger("mouseup");
        }
      });
      if (!cg) {
        update();
      }
    });
    try {
      /** @type {function (?): ?} */
      $itemContainer[0].oncontextmenu = $this[0].oncontextmenu = $img[0].oncontextmenu = function(evt) {
        if (evt) {
          evt.preventDefault();
          return false;
        }
      };
    } catch (cf) {
    }
    elements.click(function() {
      $(this).attr("download", unwrap());
      data.saveCount++;
      try {
        localStorage.setItem("saveCount", data.saveCount);
      } catch (cg) {
      }
      log.trackEvent("Photo", "Save", options.id);
      log.log("Photo", "Save", options.id);
      on();
    }).mousedown(function() {
      if (img && img.src) {
        try {
          var a = window.atob(img.src.substring("data:image/jpeg;base64,".length));
          /** @type {Uint8Array} */
          var ret = new Uint8Array(a.length);
          /** @type {number} */
          var i = 0;
          var aLength = a.length;
          for (;i < aLength;i++) {
            ret[i] = a.charCodeAt(i);
          }
          /** @type {Blob} */
          var blob = new Blob([ret.buffer], {
            type : "image/jpeg"
          });
          $(this).attr("href", URL.createObjectURL(blob));
        } catch (cl) {
          $(this).attr("href", img.src);
        }
      }
    }).mouseup(open).mouseout(open).mouseleave(open).hover(function() {
      setStyle(form);
      form.stop(true, true).fadeIn(150);
    }, function() {
      form.stop(true, true).delay(100).fadeOut(150);
    });
  }
  /**
   * @return {undefined}
   */
  function Dateinput() {
    if (mobile) {
      return;
    }
    input.on("change input focus blur mousedown mouseup", select);
    jQuery(document).keydown(function(e) {
      if (data.sharing) {
        if (input.is(":focus")) {
          return;
        }
        if (e.metaKey && e.keyCode === 8) {
          run();
          return;
        }
      }
      if (e.altKey || (e.ctrlKey || (e.shiftKey || (e.metaKey || data.zooming)))) {
        return;
      }
      switch(e.keyCode) {
        case 8:
          e.preventDefault();
          break;
        case 32:
          if (!data.grid) {
            $message.addClass("button-active");
          }
          break;
        case 37:
          if (data.grid) {
            $input.addClass("button-active");
          } else {
            $delegate.addClass("button-active");
          }
          break;
        case 38:
          if (data.grid) {
            $input.addClass("button-active");
          }
          break;
        case 39:
          if (data.grid) {
            win.addClass("button-active");
          } else {
            $field.addClass("button-active");
          }
          break;
        case 40:
          if (data.grid) {
            win.addClass("button-active");
          }
          break;
        case 67:
          if (!data.grid) {
            settings.parent().addClass("settings-active");
          }
          break;
        case 70:
          if (!data.grid) {
            tab.parent().addClass("settings-active");
          }
          break;
        case 71:
          if (!data.grid) {
            flash.addClass("button-active");
          }
          break;
        case 73:
          if (!data.grid) {
            $btn.addClass("button-active");
          }
          break;
        case 77:
          if (!data.grid) {
            methods.parent().addClass("settings-active");
          }
          break;
        case 83:
          if (!data.grid) {
            items.parent().addClass("settings-active");
          }
          break;
      }
    }).keyup(function(e) {
      if (data.sharing && input.is(":focus")) {
        if (e.keyCode === 13) {
          toggle();
        }
        return;
      }
      if (e.altKey || (e.ctrlKey || (e.shiftKey || (e.metaKey || data.zooming)))) {
        return;
      }
      switch(e.keyCode) {
        case 8:
          e.preventDefault();
          break;
        case 27:
          closeLightbox();
          break;
        case 32:
          if (data.grid) {
            show();
          } else {
            $message.removeClass("button-active");
            countdown();
          }
          break;
        case 37:
          if (data.grid) {
            $input.removeClass("button-active");
            func();
          } else {
            $delegate.removeClass("button-active");
            loadNext();
          }
          break;
        case 38:
          if (data.grid) {
            $input.removeClass("button-active");
            func();
          }
          break;
        case 39:
          if (data.grid) {
            win.removeClass("button-active");
            onFocus();
          } else {
            $field.removeClass("button-active");
            raf();
          }
          break;
        case 40:
          if (data.grid) {
            win.removeClass("button-active");
            onFocus();
          }
          break;
        case 67:
          if (!data.grid) {
            event();
            settings.parent().removeClass("settings-active");
            /** @type {boolean} */
            settings[0].checked = data.useCountdown;
          }
          break;
        case 70:
          if (!data.grid) {
            label();
            tab.parent().removeClass("settings-active");
            /** @type {boolean} */
            tab[0].checked = data.useCameraFlash;
          }
          break;
        case 71:
          flash.removeClass("button-active");
          show();
          break;
        case 73:
          if (!data.grid) {
            $btn.removeClass("button-active");
            if (!data.capturing) {
              if (!data.sharing) {
                if (!data.grid) {
                  $itemContainer.toggle();
                }
              }
            }
          }
          break;
        case 77:
          if (!data.grid) {
            methods.parent().removeClass("settings-active");
          }
          onComplete();
          methods[0].checked = options.mirror;
          break;
        case 83:
          if (!data.grid) {
            items.parent().removeClass("settings-active");
          }
          anim();
          items[0].checked = options.square;
          break;
      }
    });
  }
  /**
   * @return {undefined}
   */
  function drawGrid() {
    if (!mobile) {
      if (self) {
        self.destroy();
      }
      self = new log.Grid(mod, node, 320, Math.floor(320 / width));
    }
  }
  /**
   * @param {Function} cb
   * @return {undefined}
   */
  function reset(cb) {
    if (node && (node.videoWidth && (node.videoHeight && (node.videoWidth > 2 && node.videoHeight > 2)))) {
      /** @type {string} */
      var err = node.videoWidth + "x" + node.videoHeight;
      log.trackEvent("Capabilities", "Resolution", err);
      log.log("Resolution", err);
      /** @type {number} */
      width = node.videoWidth / node.videoHeight;
    } else {
      log.trackEvent("Capabilities", "Resolution", "None");
      log.log("Resolution", "None");
      /** @type {number} */
      width = mobile ? 3 / 4 : 4 / 3;
    }
    try {
      var key;
      if (options) {
        key = options.id;
        options.destroy();
        element.remove();
        $img.prepend("<canvas/>");
        element = $("#toy-view canvas");
      }
      options = new log.Effect(element[0], node, 800, Math.floor(800 / width));
      options.setEffect(key);
      drawGrid();
    } catch (deepDataAndEvents) {
      log.error(deepDataAndEvents);
      return;
    }
    if (cb) {
      cb();
    }
  }
  /**
   * @return {undefined}
   */
  function stop() {
    clearTimeout(going);
    cancelAnimationFrame(id);
    if (node) {
      node.pause();
    }
    if (options) {
      options.destroyShaders();
    }
    if (data.grid) {
      if (data.zooming) {
        /** @type {boolean} */
        data.zooming = false;
        frame.removeClass("wait");
        $("#button-effects p").show();
        visible_image.hide();
      }
      /** @type {boolean} */
      data.grid = false;
      render();
    }
    if (data.gridLoaded) {
      /** @type {boolean} */
      data.gridLoaded = false;
      drawGrid();
    }
    log.log("Effects destroyed");
  }
  /**
   * @param {?} evt
   * @return {undefined}
   */
  function f(evt) {
    evt.preventDefault();
    sprite.destroy("WebGL context lost");
  }
  /**
   * @return {undefined}
   */
  function success() {
    if (!data.destroyed || data.restoreCount > 3) {
      return;
    }
    reset();
    Dateinput();
    animate();
    update();
    complete();
    opts.hide();
    t.show();
    overlay.show();
    /** @type {boolean} */
    data.destroyed = false;
    data.restoreCount++;
    /** @type {string} */
    var value = "WebGL context restored";
    log.trackEvent("Error", value, "", true);
    log.log(value);
  }
  /**
   * @param {string} imageData
   * @return {undefined}
   */
  function addImage(imageData) {
    /** @type {Image} */
    var image = new Image;
    /** @type {string} */
    image.src = log.Services.assetsURL + "images/" + imageData;
  }
  /**
   * @return {undefined}
   */
  function start() {
    if (data.destroyed) {
      return;
    }
    if (!options) {
      log.error("Effects not found");
      return;
    }
    if (mobile) {
      onComplete();
    } else {
      data.saveFilename = elements.attr("data-save") || "webcam-toy-photo.jpg";
      data.saveFilename = data.saveFilename.substr(0, data.saveFilename.indexOf("."));
      try {
        /** @type {number} */
        data.saveCount = parseInt(localStorage.getItem("saveCount"), 10) || 1;
      } catch (cf) {
      }
      $("#button-effects .effect span").remove();
      methods[0].checked = options.mirror;
      items[0].checked = options.square;
      /** @type {boolean} */
      settings[0].checked = data.useCountdown;
      /** @type {boolean} */
      tab[0].checked = data.useCameraFlash;
      checkbox[0].checked = onFullscreenChange();
      jQuery(document).on("webkitfullscreenchange mozfullscreenchange mozfullscreenerror", function() {
        checkbox[0].checked = onFullscreenChange();
        update();
      }).on("visibilitychange webkitvisibilitychange mozvisibilitychange", function() {
        if (node && options) {
          if (document.hidden || (document.webkitHidden || document.mozHidden)) {
            if (!bv) {
              /** @type {boolean} */
              bv = true;
              log.log("App hidden");
            }
          } else {
            if (bv) {
              /** @type {boolean} */
              bv = false;
              log.log("App visible");
              options.setEffect(options.id);
              update();
              complete();
            }
          }
        }
        try {
          localStorage.setItem("log", log.log());
        } catch (cg) {
        }
      });
      $img.addClass("toy-shadow");
      /** @type {function (Object): undefined} */
      log.Services.onFacebookUser = handle;
      log.Services.facebookUser();
    }
    animate();
    initialize();
    $(window).resize(update);
    update();
    complete();
    opts.removeClass("wait");
    if (data.destroyed) {
      sprite.destroy();
    } else {
      fn(0, opts, 100, function() {
        if (data.destroyed) {
          sprite.destroy();
        } else {
          fn(1, t, 0, function() {
            if (data.destroyed) {
              sprite.destroy();
            } else {
              fn(1, overlay, 0, Dateinput, true);
            }
          }, true);
        }
      }, true);
    }
  }
  var sprite = {};
  var data = {
    capturing : false,
    sharing : false,
    grid : false,
    gridLoaded : false,
    zooming : false,
    useCameraFlash : true,
    useCountdown : true,
    photoSaved : false,
    albumLoaded : false,
    destroyed : false,
    shareService : "",
    saveCount : 1,
    saveFilename : "",
    photoTextNum : 0,
    photoCommentNum : 0,
    postAttempt : 0,
    countdown : 0,
    quadCountdown : 0,
    restoreCount : 0
  };
  var a6;
  /** @type {number} */
  var U = 0;
  var node;
  var options;
  var self;
  var img;
  var canvas;
  var width;
  var going;
  var id;
  var abortTimeout;
  var tref;
  /** @type {number} */
  var end = 105;
  /** @type {boolean} */
  var bv = false;
  var frame = $("#toy");
  var opts = $("#toy-intro");
  var overlay = $("#toy-ui");
  var $img = $("#toy-view");
  var $this = $("#toy-grid");
  var t = $("#toy-main");
  var element = $("#toy-view canvas");
  var msg = $("#grid-ui");
  var mod = $("#grid-view canvas");
  var collection = $("#grid-view p");
  var $itemContainer = $("#settings form");
  var methods = $("#setting-mirror");
  var items = $("#setting-square");
  var settings = $("#setting-countdown");
  var tab = $("#setting-flash");
  var checkbox = $("#setting-full-screen");
  var $btn = $("#button-settings");
  var $delegate = $("#button-previous");
  var $field = $("#button-next");
  var $input = $("#button-up");
  var win = $("#button-down");
  var flash = $("#button-effects");
  var visible_image = $("#button-effects .loading");
  var script = $("#button-effects .loading span");
  var $message = $("#button-capture");
  var stage = $("#button-back");
  var elements = $("#button-save");
  var $elem = $("div.button.facebook");
  var _this = $("a.button.facebook");
  var $el = $("div.button.twitter");
  var that = $("a.button.twitter");
  var el = $("div.button.tumblr");
  var ul = $("a.button.tumblr");
  var panel = $("div.button.vk");
  var video = $("a.button.vk");
  var button = $("div.button.logout");
  var loading = $("#capture-text");
  var $summary = $("#capture-quad-text");
  var $box = $("#toy-countdown");
  var a = $("#prompt-back");
  var object = $("#prompt-discard");
  var form = $("#prompt-save");
  var body = $("#toy-share-ui footer");
  var selector = $("#prompt-login");
  var $slide = $("#prompt-login span");
  var p = $("#prompt-facebook-logout");
  var $src = $("#prompt-facebook-post");
  var th = $(".button.facebook .share-posting");
  var param = p.text();
  var string = $src.text();
  var classNames = th.text();
  var elem = $("#prompt-twitter-logout");
  var $title = $("#prompt-twitter-post");
  var stat = $(".button.twitter .share-posting");
  var requestUrl = elem.text();
  var nextCode = $title.text();
  var dataName = stat.text();
  var target = $("#prompt-tumblr-logout");
  var $label = $("#prompt-tumblr-post");
  var selected = $(".button.tumblr .share-posting");
  var aA = target.text();
  var ca = $label.text();
  var itemWithLeastDistance = selected.text();
  var $li = $("#prompt-vk-logout");
  var $status = $("#prompt-vk-post");
  var textNode = $(".button.vk .share-posting");
  var ag = $li.text();
  var aM = $status.text();
  var fromIndex = textNode.text();
  var $spinner = $("#photo");
  var content = $("#photo img");
  var item = $("#photo form");
  var input = $('#photo input[type="text"]');
  var obj = input[0];
  var is = obj && input.attr("data-alt").split("|");
  var block = $("#photo p");
  var radio = $('#photo input[type="hidden"]');
  var mobile = log.ua.mobile;
  /**
   * @param {string} deepDataAndEvents
   * @return {undefined}
   */
  sprite.destroy = function(deepDataAndEvents) {
    opts.stop().css("opacity", 1).show();
    t.stop().hide();
    overlay.stop().hide();
    if (data.destroyed) {
      return;
    }
    stop();
    jQuery(document).off("keydown keyup");
    /** @type {boolean} */
    data.destroyed = true;
    log.error(deepDataAndEvents);
  };
  /**
   * @return {undefined}
   */
  sprite.loadImages = function() {
    /** @type {Array} */
    var codeSegments = ["bg-wood-light.jpg", "video.svg", "camera.svg", "camera4.svg", "gear.svg", "check.svg", "twitter.svg", "facebook.svg", "power.svg", "bg-linen.jpg"];
    if (log.ua.locale === "ru") {
      codeSegments.push("vk.svg");
    } else {
      codeSegments.push("tumblr.svg");
    }
    /** @type {number} */
    var i = 0;
    for (;i < codeSegments.length;i++) {
      addImage(codeSegments[i]);
    }
  };
  /**
   * @param {?} obj
   * @return {undefined}
   */
  sprite.init = function(obj) {
    if (node) {
      return;
    }
    node = obj;
    if (window.$) {
      $("#toy-main canvas").on("webglcontextlost", f).on("webglcontextrestored", success);
    }
    log.removeFooter();
    var timeoutId;
    if (node && node.videoWidth) {
      reset(start);
    } else {
      $(node).on("loadedmetadata", function() {
        if (width && (node.videoWidth && Math.round(node.videoWidth / width) != node.videoHeight)) {
          clearTimeout(timeoutId);
          /** @type {number} */
          timeoutId = setTimeout(reset, 1E3, start);
        }
      });
      /** @type {number} */
      timeoutId = setTimeout(function() {
        clearTimeout(timeoutId);
        if (node && node.videoWidth) {
          reset(start);
        } else {
          /** @type {number} */
          timeoutId = setTimeout(reset, 3E3, start);
        }
      }, 2E3);
    }
  };
  return sprite;
}(WebcamToy);
WebcamToy.Home = function(self) {
  /**
   * @return {undefined}
   */
  function handleError() {
    index++;
    index %= matches.length;
  }
  /**
   * @param {string} textStatus
   * @return {?}
   */
  function error(textStatus) {
    return self.Services.assetsURL + "photos/" + textStatus + ".jpg";
  }
  /**
   * @param {Object} $el
   * @param {number} data
   * @return {undefined}
   */
  function onSuccess($el, data) {
    if ($el && (data && (data.img && data.id))) {
      $el.css("background-image", "url(" + error(data.img) + ")");
      $el.attr("href", "https://pic.twitter.com/" + data.id);
    }
  }
  /**
   * @param {number} data
   * @return {undefined}
   */
  function render(data) {
    if (data && window.$) {
      var $this = $("#photo" + (i + 1));
      var next;
      try {
        if ($this) {
          next = $this.find("div");
          if (next && !!next[0]) {
            if (self.ua.ie || self.ua.firefox) {
              next.animate({
                opacity : 1
              }, 200);
            } else {
              next.css("opacity", 1);
            }
          }
        }
      } catch (t) {
      }
      /** @type {number} */
      tref = setTimeout(function() {
        onSuccess($this, data);
        i++;
        i %= 4;
        handleError();
        /** @type {number} */
        tref = setTimeout(function() {
          try {
            if (next && !!next[0]) {
              if (self.ua.ie || self.ua.firefox) {
                next.animate({
                  opacity : 0
                }, 200);
              } else {
                next.css("opacity", 0);
              }
            }
          } catch (u) {
          }
          find();
        }, 150);
      }, 210);
    }
  }
  /**
   * @return {undefined}
   */
  function loadImage() {
    var data = matches[index];
    if (!data || (!data.img || (!data.id || data.img.length !== 15))) {
      find();
      return;
    }
    /** @type {Image} */
    var cubeImage = new Image;
    /**
     * @return {undefined}
     */
    cubeImage.onload = function() {
      if (self.ua.ie) {
        /** @type {number} */
        tref = setTimeout(function() {
          render(data);
        }, 1400);
      } else {
        /** @type {number} */
        tref = setTimeout(render, 1400, data);
      }
    };
    /**
     * @return {undefined}
     */
    cubeImage.onerror = function() {
      handleError();
      /** @type {number} */
      tref = setTimeout(find, 100);
    };
    cubeImage.src = error(data.img);
  }
  /**
   * @param {?} seed
   * @return {undefined}
   */
  function find(seed) {
    try {
      if (!$("#app").is(":visible")) {
        if ($("#home-photos").is(":visible") && $(window).width() > 700) {
          loadImage();
        } else {
          /** @type {number} */
          tref = setTimeout(find, 3E3);
        }
      }
    } catch (r) {
    }
  }
  /**
   * @return {?}
   */
  function f() {
    return Math.round(Math.random()) - 0.5;
  }
  /**
   * @return {undefined}
   */
  function send() {
    var data_json = $("#home-photos").attr("data-json");
    handler = $.ajax({
      url : self.Services.assetsURL + "photos/" + (data_json || "photos") + ".json",
      dataType : "json",
      timeout : 2E4,
      /**
       * @return {undefined}
       */
      error : function() {
      },
      /**
       * @param {Object} data
       * @return {undefined}
       */
      success : function(data) {
        if (data && data.photos) {
          matches = data.photos.sort(f);
          /** @type {number} */
          var i = 0;
          for (;i < 4;i++) {
            var clearing = $("#photo" + (i + 1));
            onSuccess(clearing, data.photos[i]);
          }
          setTimeout(function() {
            try {
              var $that = $("#home-photos div");
              if ($that && !!$that[0]) {
                if (self.ua.ie || self.ua.firefox) {
                  $that.animate({
                    opacity : 0
                  }, 200);
                } else {
                  $that.addClass("photo-fade").css("opacity", 0);
                }
              }
            } catch (v) {
            }
          }, 200);
          /** @type {number} */
          tref = setTimeout(find, 500);
        }
      }
    });
  }
  /**
   * @return {undefined}
   */
  function update() {
    if (self.init && window.$) {
      var result = $("#home");
      var $this = $("#home-cws");
      var $elem = $("#home-sponsor");
      var mod = $("#home-photos div");
      clearTimeout(tref);
      if (handler) {
        handler.abort();
      }
      if ($this) {
        $this.fadeOut(200);
        $elem.fadeOut(200);
      }
      if (mod) {
        mod.stop();
      }
      if (result) {
        result.delay(50).fadeOut(250, function() {
          setTimeout(function() {
            if ($this) {
              if ($(window).height() > 600) {
                $elem.addClass("no-cws").fadeIn(200, function() {
                  $elem.removeAttr("style");
                });
              } else {
                $elem.addClass("no-cws").removeAttr("style");
              }
            }
            setTimeout(function() {
              if (self.init) {
                self.init();
              }
            }, 30);
          }, 30);
        });
      } else {
        if ($this) {
          $this.hide();
        }
        self.init();
      }
    }
  }
  var proto = {};
  var matches;
  /** @type {number} */
  var i = 0;
  /** @type {number} */
  var index = 4;
  var tref;
  var handler;
  /**
   * @param {Object} data
   * @return {undefined}
   */
  proto.setFacebookUser = function(data) {
    if (window.$) {
      var test = $("#home-fb").html();
      if (test && data.firstName) {
        $("#home-main").animate({
          opacity : 0
        }, 150, function() {
          if (window.$) {
            $("#home-main").html(test.replace("%s", data.firstName)).delay(150).animate({
              opacity : 1
            }, 150);
            if (data.id && data.url) {
              setTimeout(function() {
                $("#home-main .fb-pic").attr("href", data.url).css("background-image", "url(https://graph.facebook.com/v" + self.Services.facebookVersion + "/" + data.id + "/picture)");
              }, 0);
            } else {
              $("#home-main .fb-pic").hide();
            }
          }
        });
      }
    }
  };
  /**
   * @return {undefined}
   */
  self.removeFooter = function() {
    var hidden = $("#home-cws,#home-sponsor");
    if (hidden) {
      if (self.ua.ie) {
        hidden.hide();
      } else {
        hidden.remove();
      }
    }
  };
  /**
   * @return {undefined}
   */
  proto.init = function() {
    if ($.fn.buttonClick) {
      $("#button-init").buttonClick(update);
    } else {
      $("#button-init").click(update);
    }
    $("#home-photos a,#home-body a,#home footer a").click(function(e) {
      self.trackEvent("Outbound", e.target.href || e.currentTarget.href);
    });
    $("#home-photos a").click(function(e) {
      self.popup(e, e.target.href || e.currentTarget.href, Math.min(screen.availWidth, 703), Math.min(screen.availHeight - 100, 660), "photowindow");
    });
    if (self.ua.chrome && self.Services.isHosted) {
      $("#home-cws").attr("onclick", "try{chrome.webstore.install();return false;}catch(e){}");
    }
    if (!self.ua.mobile) {
      send();
    }
  };
  return proto;
}(WebcamToy);
