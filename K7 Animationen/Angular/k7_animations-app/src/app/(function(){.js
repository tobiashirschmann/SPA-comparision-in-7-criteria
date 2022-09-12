(function () {
  (function () {
    var Context = raptor.require("ebay.context.Context");
    Context.call(Context, {
      app: "viewitem",
      features: {},
      site: 77,
      cobrand: 2,
      domain: ".ebay.de",
      pool: "production",
      pid: 2047675,
      locale: "de_DE",
      errors: { enabled: false },
    });
  })();

  if (typeof FastClick === "function") {
    FastClick.attach(document.body);
  }
  try {
    if ($(".vi-VR-cvipCntr1").length > 0) {
      var script = document.createElement("script");
      script.innerHTML = "var vidummyhelper = 0;";
      var head = document.getElementsByTagName("head")[0];
      if (head) {
        head.appendChild(script);
      }
    }
  } catch (e) {}
  try {
    $("#smtBackToAnchor").on("click", function () {
      var backToAnchor = $(".vi-VR-spl-lnk");
      var url = backToAnchor.attr("href");
      if (url.indexOf("http%3A%") != -1) {
        url = decodeURIComponent(url);
        backToAnchor.attr("href", url);
      }
    });
    if (!raptor.find("com.ebay.raptor.vi.powerbid.AmountUtils")) {
      raptor.defineModule(
        "com.ebay.raptor.vi.powerbid.AmountUtils",
        function () {
          return {
            getBidIncrement: function (e, t) {
              return 0;
            },
            getCurrencySymbol: function (e, t) {
              return "";
            },
            formatCurrency: function (e, t, n) {
              return "";
            },
            getMoneyStandard: function (e, t) {
              return "";
            },
            getDecimalSeparator: function (e) {
              return "";
            },
            getThousandSeparator: function (e) {
              return "";
            },
            isSpaceGroupSeperator: function (e) {
              return false;
            },
            getThousandSeparatorByAmt: function (e, t) {
              return "";
            },
            parseCurrencyBySeperators: function (e, t, n) {
              return 0;
            },
            sanitizeAmt: function (e) {
              return 0;
            },
            parseCurrencyByCleanAmt: function (e) {
              return 0;
            },
            parseCurrency: function (e) {
              return 0;
            },
            setLocalPrice: function (e) {
              return e;
            },
            setPowerBidVal: function (e) {
              return e;
            },
            setPowerBidValHelper: function (e) {
              return e;
            },
            getPowerBidValKey: function (e, t) {
              return "";
            },
            getIncrementCase: function (e) {
              return 0;
            },
            roundingMakeQuickBid: function (e) {
              return e;
            },
            removeDecimalDigits: function (e, t) {
              return "";
            },
            setSeparatorSymbols: function (e) {},
            getMaxPlusOneIncrementPrice: function (e) {
              return null;
            },
            getMaxPlusOneIncrementLocalPrice: function (e) {
              return null;
            },
            getLocalPrice: function (e, t) {
              return {};
            },
          };
        }
      );
    }
  } catch (e) {}
  $(".w2b-sgl").each(function (index) {
    if ($(this).html() == "Kostenloser Versand") {
      $(this).html("Kostenloser Inlandsversand");
    }
  });
  var prc = $("#vi-mskumap-postchkout");
  if (prc && prc.size() == 0) {
    prc = $("#vi-mskumap-prechkout");
  }
  var lhrdPrcCnt = $("#lkd_hdr div.lhdr-prcfmt-cntr span#lhdr-prcfmt");
  if (prc.size() > 0 && lhrdPrcCnt && lhrdPrcCnt.size() > 0) {
    lhrdPrcCnt.addClass("vi-lhdr-prc-hide");
  }
  try {
    if ($(".flL.maxbidinput label") && $(".flL.maxbidinput label").length > 0) {
      $(".flL.maxbidinput label").removeAttr("id");
    }
    var e1 = $("#e1.lowpay");
    var vehc_rdloans = $("#vehc_rdloans");
    if (e1.size() > 0 && vehc_rdloans.size() > 0) {
      vehc_rdloans.text(e1.text());
      vehc_rdloans.css("text-transform", "capitalize");
    }
  } catch (e) {}
  try {
    if (
      $("#LeftSummaryPanel").find("[mainWidgetId='mainwidgetid']").length > 0 &&
      !(window.initXMLHttpClient && window.fetchResponseHandler)
    ) {
      $("#cache_mask").removeClass("cache_mask");
      $("#cache_mask").html("");
    }
  } catch (e) {}
  try {
    $("#vi_snippetdesc_btn").attr("id", "snippetdesc");
  } catch (e) {}
  try {
    var newPBBtn = $("#bidBtn_btn.vilens-item");
    if (newPBBtn.size() > 0 && $(".vi-VR-cvipCntr1").size() == 0) {
      $(window).on("load", function () {
        newPBBtn.on("click", function () {
          if ($(".vilens-modal-wrapper").size() == 0) {
            var rlogId = null;
            try {
              $.fn.getComments = function () {
                return this.contents()
                  .map(function () {
                    if (this.nodeType === 8) return this.nodeValue;
                  })
                  .get();
              };
              $("body")
                .getComments()
                .forEach(function (i) {
                  var ind = i.indexOf("RlogId");
                  if (ind > 0) {
                    rlogId = i.substring(ind + 7);
                  }
                });
            } catch (e) {}
            $.ajax({
              url:
                "/bfl/metrics?surl=" +
                window.location.href +
                "&rlogid=" +
                rlogId +
                "&ref=" +
                document.referrer,
              success: function () {},
            });
            setTimeout(function () {
              window.location.href = newPBBtn.attr("href");
            }, 100);
          }
        });
      });
    }
  } catch (ex) {}
  try {
    raptor.require("pubsub").subscribe("_OPN_POWB_LAYER", newBidLayerMonitor);
    function newBidLayerMonitor() {
      var newPBBtn = $(".vilens-item");
      if (
        newPBBtn.size() > 0 &&
        $(".vi-VR-cvipCntr1").size() == 0 &&
        $(".vilens-modal-wrapper").size() == 0
      ) {
        window.console &&
          window.console.log(".vilens-modal-wrapper doesnt exist");
        var url = ["/", "bfl/", "metrics?surl="];
        $.ajax({
          url:
            url.join("") +
            window.location.href +
            "&rlogid=" +
            rlogId +
            "&ref=" +
            document.referrer,
          success: function () {},
        });
        setTimeout(function () {
          window.location.href = newPBBtn.attr("href");
        }, 50);
      }
    }
  } catch (ex) {
    window.console && window.console.log(ex);
  }
  try {
    if ($(".vi-itm-snpts").length > 0) {
      $("#shippingSummary").find(".u-cb.spcr").hide();
      $(".vi-itm-snpts").parent().parent().hide();
    }
  } catch (e) {}
  function replaceHref(cssSelector) {
    $("." + cssSelector)
      .find("a")
      .each(function () {
        var href = $(this).attr("href");
        if (href.indexOf("https://cgi") != -1) {
          href = href.replace("https://cgi", "http://cgi");
          $(this).attr("href", href);
        }
        if (href.indexOf("http://ofr") != -1) {
          href = href.replace("http://ofr", "https://ofr");
          $(this).attr("href", href);
        }
      });
  }
  if (document.location.protocol == "https:") {
    $(document).ready(function () {
      replaceHref("statusContent");
    });
  }
  function replaceHrefWithId(cssSelector) {
    $("#" + cssSelector).each(function () {
      var href = $(this).attr("href");
      if (href.indexOf("http://ofr") != -1) {
        href = href.replace("http://ofr", "https://ofr");
        $(this).attr("href", href);
      }
    });
  }
  if (document.location.protocol == "https:") {
    try {
      $(document).ready(function () {
        replaceHrefWithId("boBtn_btn");
      });
    } catch (e) {
      console.log(e);
    }
  }
  try {
    if ($(".rpColWid > a").length > 0) {
      var href = $(".rpColWid > a").eq(0).attr("href");
      if (href && -1 !== href.indexOf("buyer-ads")) {
        var boBtn_btn = $("#boBtn_btn");
        if (boBtn_btn.length > 0) {
          var bo_link = boBtn_btn.attr("href");
          bo_link &&
            -1 !== bo_link.indexOf("MakeBestOffer") &&
            ((bo_link = bo_link.replace("https://offer", "http://offer")),
            boBtn_btn.attr("href", bo_link),
            boBtn_btn.attr("id", "boBtn_btn_new_bo"));
        }
      }
    }
  } catch (t) {
    window.console && window.console.log(t);
  }
  try {
    window &&
      (window.onload = function () {
        var o = $("#desc_ifr"),
          w = o.length > 0 && o.width();
        "99%" != w && w < 500 && o.width("99%");
      });
  } catch (o) {
    window && window.console && window.console.log(o);
  }
  try {
    var classified = $("div#mainContent") && $("div#mainContent").length <= 0;
    var placeHolderEl = $(".prefetch_merch_ph");
    var placeHolderPresent = placeHolderEl && placeHolderEl.length > 0;
    var merchAbfEl =
      $("#vi-merch-abf") && $("#vi-merch-abf").length > 0 && $("#vi-merch-abf");
    if (classified && placeHolderPresent) {
      $(document).on("_FETCH_MERCH_RESPONSE", function (evt, response) {
        try {
          var cA_mresponse = JSON.parse(response);
          if (cA_mresponse && cA_mresponse.body) {
            merchAbfEl.html(cA_mresponse.body["vi-merch-abf"]);
          }
        } catch (e) {
          placeHolderEl.hide();
        }
      });
      if (window.fetchMerchResponse) {
        $(document).trigger("_FETCH_MERCH_RESPONSE", window.fetchMerchResponse);
      } else {
        window &&
          typeof window.fetchMerchResponseHandlerPrefetch === "function" &&
          window.fetchMerchResponseHandlerPrefetch(true);
      }
    }
    if (
      placeHolderPresent &&
      typeof window.fetchMerchResponseHandlerPrefetch !== "function"
    ) {
      placeHolderEl.hide();
    }
  } catch (e) {}
  (function ($) {
    GH.new_user_profile = true;
  })(GH);
  (function ($) {
    if (typeof (GHFlyout === "function")) {
      new GHFlyout("/gh/watchlist?modules=WATCH_LIST", "gh-wl-click", "");
    }
  })(GH && GH.jQ);
  (function ($) {
    if (typeof (GHFlyout === "function")) {
      new GHFlyout("/gh/cart?modules=MINI_CART", "", "gh-minicart-hover");
    }
  })(GH && GH.jQ);
  if (typeof GH != "undefined" && GH) {
    GH.urls = {
      autocomplete_js: "https://ir.ebaystatic.com/rs/c/desktop_ac_0621v1.js",
      fnet_js: "https://c.paypal.com/da/r/efbv3.js",
      ie8_js: "https://ir.ebaystatic.com/f/rbezfuzpu20wfd2kvejeb5adxyg.js",
      scandal_js: "https://ir.ebaystatic.com/cr/v/c1/ScandalJS-1.2.0-v4.min.js",
      widget_delivery_platform:
        "https://ir.ebaystatic.com/cr/v/c1/globalheader_widget_platform__v2-b70676194b.js",
      auto_tracking_widget:
        "https://ir.ebaystatic.com/rs/v/enk4ekgiky2ufpj3l2fgfblxaqd.js",
      web_resource_tracker:
        "https://ir.ebaystatic.com/rs/v/mjgerh5fmy51nnbwjoml1g1juqs.js",
      behavior_js_collection:
        "https://ir.ebaystatic.com/cr/v/c1/aW5ob3VzZWpzMTY0ODcxMTc3Njc3MQ==-1.0.0.min.js",
    };
    GH.GHSW = {
      raptor: "true",
      sandbox: 0,
      emp: 0,
      ac1: "true",
      ac2: 0,
      ac3: 0,
      ac4: 0,
      ac5: 0,
      ac6: 0,
      hideMobile: 0,
      langSwitch: 0,
      pool: 0,
      ALERT_POPUPOFF: 0,
      NEWALERT_POPUPOFF: 0,
      newprofile: 0,
      desktop_new_profile_service: "true",
      UNLOAD_Firefox: "true",
      UNLOAD_Chrome: "true",
      UNLOAD_IE: 0,
      UNLOAD_Safari: 0,
      ENABLE_HTTPS: "true",
      SEARCH_PROM: "true",
      MINICART: 0,
      STICKY_HEADER: 0,
    };
    GH.GHSW.gadgetNotificationEnabled = true;
  }
  if (typeof GH != "undefined" && GH) {
    GH_config = {
      geoLang: "[]",
      suppressGeoUserUpdateInfo: "false",
      siteId: "77",
      xhrBaseUrl: "https://www.ebay.de",
      env: "production",
      sin: 0,
      id: "",
      fn: "",
      pageId: 2047675,
      selectedCatId: "15032",
      tmx: "",
    };
    GH.init();
  }
  $("#msgPanel a.btn").on("keypress", function (e) {
    if (e.keyCode === 32 && this.getAttribute("role") === "button") {
      e.preventDefault();
      this.click();
    }
  });
  raptor.require("com.ebay.raptor.vi.SMEBanner").init();
  raptor.require("ebay.viewItem.PicturePanel.Profiling").init();

  var videoHelper = {
    getVideoControlElements: function (self) {
      const Report = class extends shaka.ui.Element {
        constructor(parent, controls, text) {
          super(parent, controls);

          // The actual button that will be displayed
          this.button_ = document.createElement("button");
          this.button_.classList.add("video-player__report-button");
          // have problem with creating svg/link programmatically, so we just add it as innerHTML
          var svgStr =
            '<svg aria-hidden="true" class="icon icon--report-flag" focusable="false"><use xlink:href="#icon--report-flag"></use></svg>';
          this.button_.innerHTML = svgStr;
          // there doesn't seem to be a way to pass text to the Factory, so we try get it from the 'self.imgArray'
          if (!self.conf.videoConfig.reportText) {
            for (var i = 0; self.imgArray && i < self.imgArray.length; i++) {
              var img = self.imgArray[i];
              if (
                img &&
                img.videoViewerInfo &&
                img.videoViewerInfo.report &&
                img.videoViewerInfo.report.text &&
                img.videoViewerInfo.report.text.textSpans &&
                img.videoViewerInfo.report.text.textSpans[0]
              ) {
                self.conf.videoConfig.reportText =
                  img.videoViewerInfo.report.text.textSpans[0].text; // set it for use later
              }
            }
          }
          var reportTxt = document.createTextNode(
            self.conf.videoConfig.reportText || "Report"
          ); // report btn text
          this.button_.appendChild(reportTxt);
          this.parent.appendChild(this.button_);
          this.eventManager.listen(
            this.button_,
            "click",
            self.handleReportBtnClick.bind(self)
          );
        }
      };
      Report.Factory = class {
        create(rootElement, controls, text) {
          return new Report(rootElement, controls, text);
        }
      };

      const TextSelection = shaka.ui.TextSelection;

      TextSelection.Factory = class {
        /** @override */
        create(rootElement, controls) {
          return new shaka.ui.TextSelection(rootElement, controls);
        }
      };

      return { Report, TextSelection };
    },
    attachVideoPlayer: function (containerEl, video) {
      var player = new shaka.Player(video);
      var ui = new shaka.ui.Overlay(player, containerEl, video);
      var { Report, TextSelection } =
        this.conf.videoHelper.getVideoControlElements(this);
      // eslint-disable-next-line no-undef,new-cap
      shaka.ui.Controls.registerElement("report", new Report.Factory());
      // eslint-disable-next-line no-undef,new-cap
      shaka.ui.Controls.registerElement(
        "captions",
        new TextSelection.Factory()
      );
      ui.configure(this.videoControls);

      player.addEventListener("error", function (error) {
        console.error("shaka Error:", error);
      });
      return player;
    },
  };

  var viUtils = raptor.require("com.ebay.raptor.vi.utils");
  var enImgCarousel = raptor.require("ebay.viewItem.imageCarousel");
  new enImgCarousel({
    layerId: "viEnlargeImgLayer",
    imgCntId: "viEnlargeImgLayer_img_ctr",
    imageAccessibilityText: "Bild",
    imgAlt: viUtils.getDomText("#img-carousel-alt") || "",
    imgArr: [
      {
        thumbImgUrl:
          "https:\u002F\u002Fi.ebayimg.com\u002Fimages\u002Fg\u002F-ZUAAOSwTChjA43I\u002Fs-l64.jpg",
        thumbImgSize: null,
        displayImgUrl:
          "https:\u002F\u002Fi.ebayimg.com\u002Fimages\u002Fg\u002F-ZUAAOSwTChjA43I\u002Fs-l300.jpg",
        displayImgSize: null,
        maxImageUrl:
          "https:\u002F\u002Fi.ebayimg.com\u002Fimages\u002Fg\u002F-ZUAAOSwTChjA43I\u002Fs-l1600.jpg",
        maxImageHeight: 1599,
        maxImageWidth: 1204,
        videoMedia: null,
        videoViewerInfo: null,
        zoomEnabled: true,
        enlargeEnabled: true,
        selected: false,
        stockPhoto: false,
      },
      {
        thumbImgUrl:
          "https:\u002F\u002Fi.ebayimg.com\u002Fimages\u002Fg\u002F7-sAAOSwY35jA43K\u002Fs-l64.jpg",
        thumbImgSize: null,
        displayImgUrl:
          "https:\u002F\u002Fi.ebayimg.com\u002Fimages\u002Fg\u002F7-sAAOSwY35jA43K\u002Fs-l300.jpg",
        displayImgSize: null,
        maxImageUrl:
          "https:\u002F\u002Fi.ebayimg.com\u002Fimages\u002Fg\u002F7-sAAOSwY35jA43K\u002Fs-l1600.jpg",
        maxImageHeight: 1205,
        maxImageWidth: 1600,
        videoMedia: null,
        videoViewerInfo: null,
        zoomEnabled: true,
        enlargeEnabled: true,
        selected: false,
        stockPhoto: false,
      },
      {
        thumbImgUrl:
          "https:\u002F\u002Fi.ebayimg.com\u002Fimages\u002Fg\u002FmokAAOSw~YZjA43L\u002Fs-l64.jpg",
        thumbImgSize: null,
        displayImgUrl:
          "https:\u002F\u002Fi.ebayimg.com\u002Fimages\u002Fg\u002FmokAAOSw~YZjA43L\u002Fs-l300.jpg",
        displayImgSize: null,
        maxImageUrl:
          "https:\u002F\u002Fi.ebayimg.com\u002Fimages\u002Fg\u002FmokAAOSw~YZjA43L\u002Fs-l1600.jpg",
        maxImageHeight: 1205,
        maxImageWidth: 1600,
        videoMedia: null,
        videoViewerInfo: null,
        zoomEnabled: true,
        enlargeEnabled: true,
        selected: false,
        stockPhoto: false,
      },
      {
        thumbImgUrl:
          "https:\u002F\u002Fi.ebayimg.com\u002Fimages\u002Fg\u002F3E8AAOSw4jFjA43N\u002Fs-l64.jpg",
        thumbImgSize: null,
        displayImgUrl:
          "https:\u002F\u002Fi.ebayimg.com\u002Fimages\u002Fg\u002F3E8AAOSw4jFjA43N\u002Fs-l300.jpg",
        displayImgSize: null,
        maxImageUrl:
          "https:\u002F\u002Fi.ebayimg.com\u002Fimages\u002Fg\u002F3E8AAOSw4jFjA43N\u002Fs-l1600.jpg",
        maxImageHeight: 1599,
        maxImageWidth: 1204,
        videoMedia: null,
        videoViewerInfo: null,
        zoomEnabled: true,
        enlargeEnabled: true,
        selected: false,
        stockPhoto: false,
      },
      {
        thumbImgUrl:
          "https:\u002F\u002Fi.ebayimg.com\u002Fimages\u002Fg\u002Fn9sAAOSwLX5jA43O\u002Fs-l64.jpg",
        thumbImgSize: null,
        displayImgUrl:
          "https:\u002F\u002Fi.ebayimg.com\u002Fimages\u002Fg\u002Fn9sAAOSwLX5jA43O\u002Fs-l300.jpg",
        displayImgSize: null,
        maxImageUrl:
          "https:\u002F\u002Fi.ebayimg.com\u002Fimages\u002Fg\u002Fn9sAAOSwLX5jA43O\u002Fs-l1600.jpg",
        maxImageHeight: 1599,
        maxImageWidth: 1204,
        videoMedia: null,
        videoViewerInfo: null,
        zoomEnabled: true,
        enlargeEnabled: true,
        selected: false,
        stockPhoto: false,
      },
      {
        thumbImgUrl:
          "https:\u002F\u002Fi.ebayimg.com\u002Fimages\u002Fg\u002Ftv0AAOSwP9FjA43Q\u002Fs-l64.jpg",
        thumbImgSize: null,
        displayImgUrl:
          "https:\u002F\u002Fi.ebayimg.com\u002Fimages\u002Fg\u002Ftv0AAOSwP9FjA43Q\u002Fs-l300.jpg",
        displayImgSize: null,
        maxImageUrl:
          "https:\u002F\u002Fi.ebayimg.com\u002Fimages\u002Fg\u002Ftv0AAOSwP9FjA43Q\u002Fs-l1600.jpg",
        maxImageHeight: 1599,
        maxImageWidth: 1204,
        videoMedia: null,
        videoViewerInfo: null,
        zoomEnabled: true,
        enlargeEnabled: true,
        selected: false,
        stockPhoto: false,
      },
      {
        thumbImgUrl:
          "https:\u002F\u002Fi.ebayimg.com\u002Fimages\u002Fg\u002FEj0AAOSwQspjA43S\u002Fs-l64.jpg",
        thumbImgSize: null,
        displayImgUrl:
          "https:\u002F\u002Fi.ebayimg.com\u002Fimages\u002Fg\u002FEj0AAOSwQspjA43S\u002Fs-l300.jpg",
        displayImgSize: null,
        maxImageUrl:
          "https:\u002F\u002Fi.ebayimg.com\u002Fimages\u002Fg\u002FEj0AAOSwQspjA43S\u002Fs-l1600.jpg",
        maxImageHeight: 1599,
        maxImageWidth: 1204,
        videoMedia: null,
        videoViewerInfo: null,
        zoomEnabled: true,
        enlargeEnabled: true,
        selected: false,
        stockPhoto: false,
      },
      {
        thumbImgUrl:
          "https:\u002F\u002Fi.ebayimg.com\u002Fimages\u002Fg\u002FnfoAAOSwVxZjA44s\u002Fs-l64.jpg",
        thumbImgSize: null,
        displayImgUrl:
          "https:\u002F\u002Fi.ebayimg.com\u002Fimages\u002Fg\u002FnfoAAOSwVxZjA44s\u002Fs-l300.jpg",
        displayImgSize: null,
        maxImageUrl:
          "https:\u002F\u002Fi.ebayimg.com\u002Fimages\u002Fg\u002FnfoAAOSwVxZjA44s\u002Fs-l1600.jpg",
        maxImageHeight: 1599,
        maxImageWidth: 739,
        videoMedia: null,
        videoViewerInfo: null,
        zoomEnabled: true,
        enlargeEnabled: true,
        selected: false,
        stockPhoto: false,
      },
    ],
    islarge: true,
    isEnableTouch: false,
    clsTrk: "VI_ENG_IMG_LYR_V2_CLOSE",
    opnTrk: "ENLARGE_PANEL",
    arrTrk: "VI_ENLARGE_IMAGE_LAYER_V2_ARROW_CLK",
    fsARRTrk: "VI_ENLARGE_IMAGE_LAYER_V2_FS_ARRW_CLK",
    fsTHBTrk: "VI_ENG_IMG_LYR_V2_THB_CLK",
    isFS: true,
    fsId: "viEnlargeImgLayer_layer_fs",
    sliderId: "viEnlargeImgLayer_layer_fs_slider",
    cellWidth: "75",
    cellHeight: "76",
    cellNumber: "6",
    isVideoPresent: false,
    filmstripEnhanced: "false",
    statusMessage: "Hauptbild aktualisiert",
    videoConfig: {
      js: "https://ir.ebaystatic.com/cr/v/c1/ebayui/shaka/v3.2.0/shaka-player.ui.js",
      css: "https://ir.ebaystatic.com/cr/v/c1/ebayui/shaka/v3.2.0/controls.css",

      reportText: null,
      loadingText: null,
    },
    videoHelper: videoHelper,
    progressBarLabel: "Fortschrittsbalken für Video",
    playbackTimeTemplate:
      "{elapsed} Sekunden von {duration} Sekunden abgespielt",
    volumeLevelTemplate: "Aktuelle Lautstärke: {level} von {max}",
  });
  var pageLayer = raptor.require("com.ebay.raptor.vi.pagelayer");
  new pageLayer({
    cmpId: "viEnlargeImgLayer",
    isHideScroll: true,
    isFade: true,
    returnFocusId: "",
    isBckBtnSupport: true,
  });
  var enLayer = raptor.require("ebay.viewItem.enlargeLayerv2");
  new enLayer({ id: "viEnlargeImgLayer", mainImgHldrId: "mainImgHldr" });

  var filmstrip = raptor.require("ebay.viewItem.utils.filmstrip");
  new filmstrip({
    sliderId: "vi_main_img_fs_slider_hidden",
    fsId: "vi_main_img_fs_hidden",
    cellNumber: 3,
    cellWidth: 75,
    cellHeight: "74",
    speed: "3",
    fsARRTrk: "VI_FILMSTRIP_ARR_CLICK",
    fsTHBTrk: "VI_FILMSTRIP_THUMBS_CLICK",
    fsHOVTrk: "VI_FILMSTRIP_THUMBS_HOVER",
    filmstripEnhanced: "false",
    isNavigationArrowsEnabled: true,
    isHoverTrackingFilmstrip: false,
  });

  raptor.require("ebay.viewItem.PicturePanelPH").init({
    prLdImgThrsld: 5,
    fsImgList: [
      {
        thumbImgUrl:
          "https:\u002F\u002Fi.ebayimg.com\u002Fimages\u002Fg\u002F-ZUAAOSwTChjA43I\u002Fs-l64.jpg",
        thumbImgSize: null,
        displayImgUrl:
          "https:\u002F\u002Fi.ebayimg.com\u002Fimages\u002Fg\u002F-ZUAAOSwTChjA43I\u002Fs-l300.jpg",
        displayImgSize: null,
        maxImageUrl:
          "https:\u002F\u002Fi.ebayimg.com\u002Fimages\u002Fg\u002F-ZUAAOSwTChjA43I\u002Fs-l1600.jpg",
        maxImageHeight: 1599,
        maxImageWidth: 1204,
        videoMedia: null,
        videoViewerInfo: null,
        zoomEnabled: true,
        enlargeEnabled: true,
        selected: false,
        stockPhoto: false,
      },
      {
        thumbImgUrl:
          "https:\u002F\u002Fi.ebayimg.com\u002Fimages\u002Fg\u002F7-sAAOSwY35jA43K\u002Fs-l64.jpg",
        thumbImgSize: null,
        displayImgUrl:
          "https:\u002F\u002Fi.ebayimg.com\u002Fimages\u002Fg\u002F7-sAAOSwY35jA43K\u002Fs-l300.jpg",
        displayImgSize: null,
        maxImageUrl:
          "https:\u002F\u002Fi.ebayimg.com\u002Fimages\u002Fg\u002F7-sAAOSwY35jA43K\u002Fs-l1600.jpg",
        maxImageHeight: 1205,
        maxImageWidth: 1600,
        videoMedia: null,
        videoViewerInfo: null,
        zoomEnabled: true,
        enlargeEnabled: true,
        selected: false,
        stockPhoto: false,
      },
      {
        thumbImgUrl:
          "https:\u002F\u002Fi.ebayimg.com\u002Fimages\u002Fg\u002FmokAAOSw~YZjA43L\u002Fs-l64.jpg",
        thumbImgSize: null,
        displayImgUrl:
          "https:\u002F\u002Fi.ebayimg.com\u002Fimages\u002Fg\u002FmokAAOSw~YZjA43L\u002Fs-l300.jpg",
        displayImgSize: null,
        maxImageUrl:
          "https:\u002F\u002Fi.ebayimg.com\u002Fimages\u002Fg\u002FmokAAOSw~YZjA43L\u002Fs-l1600.jpg",
        maxImageHeight: 1205,
        maxImageWidth: 1600,
        videoMedia: null,
        videoViewerInfo: null,
        zoomEnabled: true,
        enlargeEnabled: true,
        selected: false,
        stockPhoto: false,
      },
      {
        thumbImgUrl:
          "https:\u002F\u002Fi.ebayimg.com\u002Fimages\u002Fg\u002F3E8AAOSw4jFjA43N\u002Fs-l64.jpg",
        thumbImgSize: null,
        displayImgUrl:
          "https:\u002F\u002Fi.ebayimg.com\u002Fimages\u002Fg\u002F3E8AAOSw4jFjA43N\u002Fs-l300.jpg",
        displayImgSize: null,
        maxImageUrl:
          "https:\u002F\u002Fi.ebayimg.com\u002Fimages\u002Fg\u002F3E8AAOSw4jFjA43N\u002Fs-l1600.jpg",
        maxImageHeight: 1599,
        maxImageWidth: 1204,
        videoMedia: null,
        videoViewerInfo: null,
        zoomEnabled: true,
        enlargeEnabled: true,
        selected: false,
        stockPhoto: false,
      },
      {
        thumbImgUrl:
          "https:\u002F\u002Fi.ebayimg.com\u002Fimages\u002Fg\u002Fn9sAAOSwLX5jA43O\u002Fs-l64.jpg",
        thumbImgSize: null,
        displayImgUrl:
          "https:\u002F\u002Fi.ebayimg.com\u002Fimages\u002Fg\u002Fn9sAAOSwLX5jA43O\u002Fs-l300.jpg",
        displayImgSize: null,
        maxImageUrl:
          "https:\u002F\u002Fi.ebayimg.com\u002Fimages\u002Fg\u002Fn9sAAOSwLX5jA43O\u002Fs-l1600.jpg",
        maxImageHeight: 1599,
        maxImageWidth: 1204,
        videoMedia: null,
        videoViewerInfo: null,
        zoomEnabled: true,
        enlargeEnabled: true,
        selected: false,
        stockPhoto: false,
      },
      {
        thumbImgUrl:
          "https:\u002F\u002Fi.ebayimg.com\u002Fimages\u002Fg\u002Ftv0AAOSwP9FjA43Q\u002Fs-l64.jpg",
        thumbImgSize: null,
        displayImgUrl:
          "https:\u002F\u002Fi.ebayimg.com\u002Fimages\u002Fg\u002Ftv0AAOSwP9FjA43Q\u002Fs-l300.jpg",
        displayImgSize: null,
        maxImageUrl:
          "https:\u002F\u002Fi.ebayimg.com\u002Fimages\u002Fg\u002Ftv0AAOSwP9FjA43Q\u002Fs-l1600.jpg",
        maxImageHeight: 1599,
        maxImageWidth: 1204,
        videoMedia: null,
        videoViewerInfo: null,
        zoomEnabled: true,
        enlargeEnabled: true,
        selected: false,
        stockPhoto: false,
      },
      {
        thumbImgUrl:
          "https:\u002F\u002Fi.ebayimg.com\u002Fimages\u002Fg\u002FEj0AAOSwQspjA43S\u002Fs-l64.jpg",
        thumbImgSize: null,
        displayImgUrl:
          "https:\u002F\u002Fi.ebayimg.com\u002Fimages\u002Fg\u002FEj0AAOSwQspjA43S\u002Fs-l300.jpg",
        displayImgSize: null,
        maxImageUrl:
          "https:\u002F\u002Fi.ebayimg.com\u002Fimages\u002Fg\u002FEj0AAOSwQspjA43S\u002Fs-l1600.jpg",
        maxImageHeight: 1599,
        maxImageWidth: 1204,
        videoMedia: null,
        videoViewerInfo: null,
        zoomEnabled: true,
        enlargeEnabled: true,
        selected: false,
        stockPhoto: false,
      },
      {
        thumbImgUrl:
          "https:\u002F\u002Fi.ebayimg.com\u002Fimages\u002Fg\u002FnfoAAOSwVxZjA44s\u002Fs-l64.jpg",
        thumbImgSize: null,
        displayImgUrl:
          "https:\u002F\u002Fi.ebayimg.com\u002Fimages\u002Fg\u002FnfoAAOSwVxZjA44s\u002Fs-l300.jpg",
        displayImgSize: null,
        maxImageUrl:
          "https:\u002F\u002Fi.ebayimg.com\u002Fimages\u002Fg\u002FnfoAAOSwVxZjA44s\u002Fs-l1600.jpg",
        maxImageHeight: 1599,
        maxImageWidth: 739,
        videoMedia: null,
        videoViewerInfo: null,
        zoomEnabled: true,
        enlargeEnabled: true,
        selected: false,
        stockPhoto: false,
      },
    ],
    isProfilingEnabledByDefault: true,
  });

  var bidSection = raptor.require("com.ebay.raptor.vi.itemsummary.BidSection");
  var isRedirect = true;
  var powerBid = 14;
  if (
    powerBid &&
    powerBid > 0 &&
    (powerBid == 2 || (powerBid > 5 && powerBid < 15))
  ) {
    new bidSection(
      "",
      "_OPN_POWB_LAYER",
      "MaxBidId",
      "fshippingCost",
      "impchSummary",
      "_OPN_ONLOAD_POWB_LAYER",
      isRedirect,
      true,
      { trackBidBtn: "true", bidTrackingId: "" },
      "false",
      ""
    );
  } else {
    new bidSection(
      "",
      "_OPN_PB_LAYER",
      "MaxBidId",
      "fshippingCost",
      "impchSummary",
      "_OPN_ONLOAD_PB_LAYER",
      isRedirect,
      true,
      { trackBidBtn: "true", bidTrackingId: "" },
      "false",
      ""
    );
  }
  new bidSection(
    "",
    "_OPN_OCB_LAYER",
    null,
    null,
    null,
    "_OPN_ONLOAD_OCB_LAYER",
    isRedirect,
    false,
    { trackBidBtn: "true", bidTrackingId: "" },
    "false",
    ""
  );

  if (window.ShoppingCTALayer) {
    new ShoppingCTALayer({
      width: "540px",
      closeLayerMsg:
        "Dialog schließen - Die Seite wird aktualisiert, wenn der Dialog geschlossen wird.",
      openLayerMsg: "Menü „Bieten“ ist geöffnet.",
    });
  }

  //UNCOMMENT TO START TIME COUNTER
  var counter = raptor.require("com.ebay.raptor.vi.bid.Counter");
  //check naming
  new counter({
    counterSvcId: "COUNTER_SVC_ID",
    counterStartSvcId: "COUNTER_START_SVC_ID",
    counterStopSvcId: "COUNTER_STOP_SVC_ID",
    autoRefreshSvcId: "AUTO_REFRESH_SVC",
    timerSvcId: "TIMER_SVC_ID",
    isUrgencyHigh: false,
    isUrgencyMedHigh: false,
    timeLeftInMins: 2814,
    timeLeftInSec: 4,
    counterStartFromInMins: 180,
    autoRefreshEnabled: true,
    slowDurationInMins: 180,
    slowIntervalInSecs: 300,
    fastDurationInMins: 1,
    fastIntervalInSecs: 2,
    accelerateDurationInMins: 5,
    accelerationBase: 2.0,
    accelerationRatio: 0.75,
    autoRefreshURL:
      "https://www.ebay.de/lit/v1/item?item=334539543607&pbv=1&si=57Rtp%2BNbZGMQZyhms1EpgORANm8%3D",
    accessedDate: 1661268342000,
    viewerItemRelation: 0,
    detailLevel: "4",
    enableAFAlways: true,
    afIntervalPower: 1.100000023841858,
    afIntervalFraction: 2.799999952316284,
    afIntervalResetValue: 2.0,
    timeRangeBroadcast: 0,
    sseVal: 0,
    scheduledEndDate: "1661437186000",
  });

  $("#").click(function () {
    $("#viTabs_0")[0].click();
  });
  var pageLayer = raptor.require("com.ebay.raptor.vi.pagelayer");
  new pageLayer({
    cmpId: "rvwEnlargeImgLayer_10000000304712896",
    isHideScroll: true,
    isFade: true,
    returnFocusId: ".reviews-images button:first",
    isBckBtnSupport: true,
  });
  var pageLayer = raptor.require("com.ebay.raptor.vi.pagelayer");
  new pageLayer({
    cmpId: "rvwEnlargeImgLayer_10000000307648775",
    isHideScroll: true,
    isFade: true,
    returnFocusId: ".reviews-images button:first",
    isBckBtnSupport: true,
  });
  var pageLayer = raptor.require("com.ebay.raptor.vi.pagelayer");
  new pageLayer({
    cmpId: "rvwEnlargeImgLayer_10000000307151950",
    isHideScroll: true,
    isFade: true,
    returnFocusId: ".reviews-images button:first",
    isBckBtnSupport: true,
  });
  var pageLayer = raptor.require("com.ebay.raptor.vi.pagelayer");
  new pageLayer({
    cmpId: "rvwEnlargeImgLayer_10000000307071852",
    isHideScroll: true,
    isFade: true,
    returnFocusId: ".reviews-images button:first",
    isBckBtnSupport: true,
  });
  var pageLayer = raptor.require("com.ebay.raptor.vi.pagelayer");
  new pageLayer({
    cmpId: "rvwEnlargeImgLayer_10000000306936976",
    isHideScroll: true,
    isFade: true,
    returnFocusId: ".reviews-images button:first",
    isBckBtnSupport: true,
  });
  var deeplinksv2 = false;
  var isAutoCars = false;
  var prForBotsEnabled = false;
  var enableSpaceBarOnTabsFlag = false;
  var isNoTabTrackingFromVim = function (evt) {
    return (
      evt &&
      evt.originalEvent &&
      evt.originalEvent.detail &&
      evt.originalEvent.detail === "noTabTracking"
    );
  };
  $("#viTabs_0").bind("click", function (event, param) {
    if (param !== "noTabTracking" && !isNoTabTrackingFromVim(event)) {
      trackingUtil("Description_Tab");
    }
  });

  $("ul.nav-tabs-m a").bind("keydown", function (event) {
    if (event.keyCode == 37) {
      //check if any element exists to the left
      var previousTab = $(this).parent().prev("li");
      var previousChildLink = previousTab.children("a");
      if (previousTab.length > 0) {
        previousChildLink.trigger("click");
        previousChildLink.focus();
      } else {
      }
    } else if (event.keyCode == 39) {
      //check if any element exists to the right
      var nextTab = $(this).parent().next("li");
      var nextChildLink = nextTab.children("a");
      if (nextTab.length > 0) {
        nextChildLink.trigger("click");
        nextChildLink.focus();
      } else {
      }
    } else if (enableSpaceBarOnTabsFlag && event.keyCode == 32) {
      var focussedElement = $(this);
      focussedElement.trigger("click");
    }
  });

  if (enableSpaceBarOnTabsFlag) {
    window.onkeydown = function (e) {
      if ($("ul.nav-tabs-m a").is(":focus")) return !(e.keyCode == 32);
    };
  }

  $("ul.nav-tabs-m a, .tab a").click(function (event) {
    event.stopPropagation();
    var id = $(this).parent().index();
    var tempAttr;
    id += 1;
    if ($(this).parent().attr("class") != "item active sel") {
      $("ul.nav-tabs-m li").each(function (index) {
        $(this).removeClass("active sel");
        $(this).children("a").attr("aria-selected", "false");
      });

      $("div.tab-content-m div").each(function (index) {
        $(this).removeClass("active sel");
      });

      $("ul.nav-tabs-m li:nth-child(" + id + ")").addClass("active sel");
      $("ul.nav-tabs-m li:nth-child(" + id + ")")
        .children("a")
        .attr("aria-selected", "true");
      $("div.tab-content-m div:nth-child(" + id + ")").addClass("active sel");

      if (id == 1 && deeplinksv2) {
        var tabNum = 2;
        if (isAutoCars) {
          tabNum = 3;
        }
        $("div.tab-content-m div:nth-child(" + tabNum + ")").addClass(
          "active sel"
        );
        $(".vi-readMore-ship").addClass("u-dspn");
      }
      if (id == 2 && deeplinksv2) {
        $(".vi-readMore-ship").removeClass("u-dspn");
      }
    }
    try {
      if ($(".tab a").length) {
        var idx = $(this).attr("idx");

        if (!deeplinksv2 && idx == null) {
          idx = $(this).index();
        }

        $(".tab a").each(function (index) {
          if ($(this).hasClass("sel")) {
            $(this).removeClass("sel");
            $(this).attr("aria-selected", "false");
          }
          if ($("#viTabs_" + index + "_cnt").hasClass("sel")) {
            $("#viTabs_" + index + "_cnt").removeClass("sel");
          }
        });

        $("#viTabs_" + idx).addClass("sel");
        $("#viTabs_" + idx + "_cnt").addClass("sel");
      }
    } catch (e) {}
  });

  if (deeplinksv2) {
    $(document).ready(function () {
      $('a[href^="#"].vi-ds3-ter-a').on("click", function (e) {
        e.preventDefault();
        var target = this.hash,
          $target = $(target);
        $("html, body")
          .stop()
          .animate(
            {
              scrollTop: $target.offset().top,
            },
            700,
            "swing",
            function () {
              window.location.hash = target;
            }
          );
      });
    });
  }

  $("#viTabs_1").bind("click", function (event, param) {
    if (param !== "noTabTracking" && !isNoTabTrackingFromVim(event)) {
      if (event.target.innerHTML == "Kfz-Instandhaltungsprotokoll") {
        trackingUtil("VEHICLE_HISTORY_REPORT_TAB_CLICK");
      } else {
        trackingUtil("Shipping_and_Payments_Tab");
      }
    } else {
      $("#viTabs_1").focus();
      if (
        navigator &&
        navigator.userAgent &&
        navigator.userAgent.indexOf("Opera") != -1
      ) {
        setTimeout(function () {
          document.location.hash = document.location.hash.substring(1);
        }, 50);
      }
    }
  });

  $("#viTabs_2").bind("click", function (event, param) {
    trackingUtil("VEHICLE_SHIPPINGPAYMENT_TAB");
  });
  if (prForBotsEnabled) {
    $(document).ready(function () {
      trackingUtil("VI_DOCUMENT_READY_TRIGGER");
    });
  }
  $("#snippetdesc").bind("click", function (event, param) {
    trackingUtil("VI_SEE_FULL_DESC_CLICK");
  });

  $("#gf-mrecs-ads-append").detach().appendTo("#glbfooter");
  window.disabledFooterPlmt = true;

  var tRtmPubsub = raptor.require("pubsub");
  if (tRtmPubsub) {
    tRtmPubsub.subscribe("ADD_TO_WATCH_TRIGGERED", function (msg) {
      $("body").trigger("RTM_PUBLISH", { pids: ["280"] });
    });
    tRtmPubsub.subscribe("ADD_TO_WATCH_POST_CLICK", function (msg) {
      $("body").trigger("RTM_PUBLISH", { pids: ["280"] });
    });
  }

  var tRtmPubsub = raptor.require("pubsub");
  if (tRtmPubsub) {
    tRtmPubsub.subscribe("_SUBMIT_CARTBTN", function (msg) {
      $("body").trigger("RTM_PUBLISH", { pids: ["20047"] });
    });
    tRtmPubsub.subscribe("ADD_TO_CART_POST_CLICK", function (msg) {
      $("body").trigger("RTM_PUBLISH", { pids: ["20047"] });
    });
  }

  $("#_rtop").click(function () {
    trackingUtil("Return_to_top");
  });
  raptor.require("com.ebay.raptor.vi.cookie.ScreenDetail").init({
    cookieName: "dp1",
    cookieletName: "pbf",
    currentResValue: {
      maxWidth: 2147483647,
      minWidth: 1681,
      name: "RES_MAX",
      value: 7,
      id: 7,
      integer: 7,
    },
    resRange: [
      {
        maxWidth: -1,
        minWidth: -1,
        name: "DEFAULT",
        value: 0,
        id: 0,
        integer: 0,
      },
      {
        maxWidth: 1024,
        minWidth: 0,
        name: "RES_1024",
        value: 1,
        id: 1,
        integer: 1,
      },
      {
        maxWidth: 1152,
        minWidth: 1025,
        name: "RES_1152",
        value: 2,
        id: 2,
        integer: 2,
      },
      {
        maxWidth: 1280,
        minWidth: 1153,
        name: "RES_1280",
        value: 3,
        id: 3,
        integer: 3,
      },
      {
        maxWidth: 1366,
        minWidth: 1281,
        name: "RES_1366",
        value: 4,
        id: 4,
        integer: 4,
      },
      {
        maxWidth: 1440,
        minWidth: 1367,
        name: "RES_1440",
        value: 5,
        id: 5,
        integer: 5,
      },
      {
        maxWidth: 1680,
        minWidth: 1441,
        name: "RES_1680",
        value: 6,
        id: 6,
        integer: 6,
      },
      {
        maxWidth: 2147483647,
        minWidth: 1681,
        name: "RES_MAX",
        value: 7,
        id: 7,
        integer: 7,
      },
    ],
    resBits: [85, 86, 87],
    currentViewportValue: {
      maxWidth: 1020,
      minWidth: 0,
      name: "VIEWPORT_1",
      value: 1,
      id: 1,
      integer: 1,
    },
    viewportRange: [
      {
        maxWidth: -1,
        minWidth: -1,
        name: "DEFAULT",
        value: 0,
        id: 0,
        integer: 0,
      },
      {
        maxWidth: 1020,
        minWidth: 0,
        name: "VIEWPORT_1",
        value: 1,
        id: 1,
        integer: 1,
      },
      {
        maxWidth: 1024,
        minWidth: 1021,
        name: "VIEWPORT_2",
        value: 2,
        id: 2,
        integer: 2,
      },
      {
        maxWidth: 1148,
        minWidth: 1025,
        name: "VIEWPORT_3",
        value: 3,
        id: 3,
        integer: 3,
      },
      {
        maxWidth: 1152,
        minWidth: 1149,
        name: "VIEWPORT_4",
        value: 4,
        id: 4,
        integer: 4,
      },
      {
        maxWidth: 1276,
        minWidth: 1153,
        name: "VIEWPORT_5",
        value: 5,
        id: 5,
        integer: 5,
      },
      {
        maxWidth: 1280,
        minWidth: 1277,
        name: "VIEWPORT_6",
        value: 6,
        id: 6,
        integer: 6,
      },
      {
        maxWidth: 2147483647,
        minWidth: 1281,
        name: "VIEWPORT_7",
        value: 7,
        id: 7,
        integer: 7,
      },
    ],
    viewportBits: [69, 70, 71],
  });

  var loadNoriJs = function () {
    var noriJsArray = [];

    noriJsArray.push("https://ir.ebaystatic.com/rs/c/merch-9DhxLpVb.js");

    var isJsAlreadyLoaded = function (url) {
      if (!url) return;

      var resources = document.getElementsByTagName("script");
      for (var i = resources.length; i--; ) {
        if (resources[i] && resources[i]["src"] && resources[i]["src"] == url)
          return true;
      }
      return false;
    };

    noriJsArray.forEach(function (jsUrl) {
      if (isJsAlreadyLoaded(jsUrl)) {
        if (typeof $_mod_merch !== "undefined") {
          $_mod_merch.ready();
        }
      } else {
        var lazyLoadDelay = 0;
        setTimeout(function () {
          var script = document.createElement("script");
          script.type = "text/javascript";
          script.src = jsUrl;
          script.async = true;
          script.onload = function () {
            if (typeof $_mod_merch !== "undefined") {
              $_mod_merch.ready();
            }
          };
          document.body.appendChild(script);
        }, lazyLoadDelay);
      }
    });
  };

  window.addEventListener("load", loadNoriJs);
  $rwidgets(
    [
      "com.ebay.raptor.vi.utils.ScrollTrackingUtil",
      "w1-1",
      { isNoriEnabled: true, isActive: true },
    ],
    [
      "com.ebay.raptor.vi.isum.smartBackTo",
      "w1-2",
      {
        isBacktoSearch: false,
        viBackToUrl: "javascript:void(0);",
        smtBackToAnchorArrowId: "smtBackToAnchorArrow",
        numLevels: "0",
        smtBackToAnchorId: "smtBackToAnchor",
      },
      0,
      0,
      0,
      [
        "ebay.viewItem.AddToWatchLink",
        "w1-3",
        {
          addToWatchUrl:
            "https:\u002F\u002Fwww.ebay.de\u002Fmyb\u002FWatchListAdd?_trksid=p2047675.l1359&item=334539543607&rt=nc&sourcePage=4340&srt=01000700000050516083af3a5b57631eb8eb8c5e73f211dc11d038acee5576a7c1ade9b43a56a33057f9d655da59c5f17c6881ddca0826059e8381daaf9177d0a3c26a9e10b0607b431d747d0b0975858b580c77bfe9fa&tagId=-99&SubmitAction.AddToListVI=x&ssPageName=VIP:watchlink:top:de&etn=Watch list",
          msku: false,
          linkTopId: "linkTopAct",
          userHasList: false,
          ended: false,
          id: "watchLink",
          userSignedIn: false,
        },
        "w1-2",
        "watchItm",
      ],
    ],
    ["com.ebay.raptor.vi.overlayHandler", "w1-4"],
    [
      "com.ebay.raptor.vi.topmessagepanel.TopMessagePanel",
      "w1-5",
      {
        dummy: "##n##",
        itemId: "334539543607",
        autoRefreshSvcId: "AUTO_REFRESH_SVC",
        panelId: "msgPanel",
        CHINESE_BUYER_HIGH_BIDDER_RESERVE_NOT_MET_PC_ON:
          "Sie sind derzeit Höchstbietender, aber der Mindestpreis wurde noch nicht erreicht. ",
        inlineExp: false,
        CHINESE_BUYER_HIGH_BIDDER_PC_ON: "Sie sind Höchstbietender. ",
        CHINESE_BUYER_OUTBIDDER_PC_ON: "Sie wurden überboten. ",
      },
    ],
    [
      "ebay.viewItem.PicturePanel",
      "w1-6",
      {
        thbrImgId: "icThrImg",
        mainImgHldr: "mainImgHldr",
        isVideoPresent: false,
        videoButtonLabel:
          "Artikelvideo. Folie {index} von {total}. Öffnet die Bildergalerie und spielt das Video ab.",
        mskuId: "sel-msku-variation",
        imgButtonLabel:
          "Artikelbild {index} von {total}. Öffnet die Bildergalerie.",
        isSelfHosted: true,
        selectedIndex: 0,
        numberOfImages: 8,
        currentImgButtonLabel: "Bild {index} von {total}",
        mainImgId: "icImg",
        isNavigationArrowsEnabled: true,
        fsImgList: [
          {
            thumbImgUrl:
              "https:\u002F\u002Fi.ebayimg.com\u002Fimages\u002Fg\u002F-ZUAAOSwTChjA43I\u002Fs-l64.jpg",
            thumbImgSize: null,
            displayImgUrl:
              "https:\u002F\u002Fi.ebayimg.com\u002Fimages\u002Fg\u002F-ZUAAOSwTChjA43I\u002Fs-l300.jpg",
            displayImgSize: null,
            maxImageUrl:
              "https:\u002F\u002Fi.ebayimg.com\u002Fimages\u002Fg\u002F-ZUAAOSwTChjA43I\u002Fs-l1600.jpg",
            maxImageHeight: 1599,
            maxImageWidth: 1204,
            videoMedia: null,
            videoViewerInfo: null,
            zoomEnabled: true,
            enlargeEnabled: true,
            selected: false,
            stockPhoto: false,
          },
          {
            thumbImgUrl:
              "https:\u002F\u002Fi.ebayimg.com\u002Fimages\u002Fg\u002F7-sAAOSwY35jA43K\u002Fs-l64.jpg",
            thumbImgSize: null,
            displayImgUrl:
              "https:\u002F\u002Fi.ebayimg.com\u002Fimages\u002Fg\u002F7-sAAOSwY35jA43K\u002Fs-l300.jpg",
            displayImgSize: null,
            maxImageUrl:
              "https:\u002F\u002Fi.ebayimg.com\u002Fimages\u002Fg\u002F7-sAAOSwY35jA43K\u002Fs-l1600.jpg",
            maxImageHeight: 1205,
            maxImageWidth: 1600,
            videoMedia: null,
            videoViewerInfo: null,
            zoomEnabled: true,
            enlargeEnabled: true,
            selected: false,
            stockPhoto: false,
          },
          {
            thumbImgUrl:
              "https:\u002F\u002Fi.ebayimg.com\u002Fimages\u002Fg\u002FmokAAOSw~YZjA43L\u002Fs-l64.jpg",
            thumbImgSize: null,
            displayImgUrl:
              "https:\u002F\u002Fi.ebayimg.com\u002Fimages\u002Fg\u002FmokAAOSw~YZjA43L\u002Fs-l300.jpg",
            displayImgSize: null,
            maxImageUrl:
              "https:\u002F\u002Fi.ebayimg.com\u002Fimages\u002Fg\u002FmokAAOSw~YZjA43L\u002Fs-l1600.jpg",
            maxImageHeight: 1205,
            maxImageWidth: 1600,
            videoMedia: null,
            videoViewerInfo: null,
            zoomEnabled: true,
            enlargeEnabled: true,
            selected: false,
            stockPhoto: false,
          },
          {
            thumbImgUrl:
              "https:\u002F\u002Fi.ebayimg.com\u002Fimages\u002Fg\u002F3E8AAOSw4jFjA43N\u002Fs-l64.jpg",
            thumbImgSize: null,
            displayImgUrl:
              "https:\u002F\u002Fi.ebayimg.com\u002Fimages\u002Fg\u002F3E8AAOSw4jFjA43N\u002Fs-l300.jpg",
            displayImgSize: null,
            maxImageUrl:
              "https:\u002F\u002Fi.ebayimg.com\u002Fimages\u002Fg\u002F3E8AAOSw4jFjA43N\u002Fs-l1600.jpg",
            maxImageHeight: 1599,
            maxImageWidth: 1204,
            videoMedia: null,
            videoViewerInfo: null,
            zoomEnabled: true,
            enlargeEnabled: true,
            selected: false,
            stockPhoto: false,
          },
          {
            thumbImgUrl:
              "https:\u002F\u002Fi.ebayimg.com\u002Fimages\u002Fg\u002Fn9sAAOSwLX5jA43O\u002Fs-l64.jpg",
            thumbImgSize: null,
            displayImgUrl:
              "https:\u002F\u002Fi.ebayimg.com\u002Fimages\u002Fg\u002Fn9sAAOSwLX5jA43O\u002Fs-l300.jpg",
            displayImgSize: null,
            maxImageUrl:
              "https:\u002F\u002Fi.ebayimg.com\u002Fimages\u002Fg\u002Fn9sAAOSwLX5jA43O\u002Fs-l1600.jpg",
            maxImageHeight: 1599,
            maxImageWidth: 1204,
            videoMedia: null,
            videoViewerInfo: null,
            zoomEnabled: true,
            enlargeEnabled: true,
            selected: false,
            stockPhoto: false,
          },
          {
            thumbImgUrl:
              "https:\u002F\u002Fi.ebayimg.com\u002Fimages\u002Fg\u002Ftv0AAOSwP9FjA43Q\u002Fs-l64.jpg",
            thumbImgSize: null,
            displayImgUrl:
              "https:\u002F\u002Fi.ebayimg.com\u002Fimages\u002Fg\u002Ftv0AAOSwP9FjA43Q\u002Fs-l300.jpg",
            displayImgSize: null,
            maxImageUrl:
              "https:\u002F\u002Fi.ebayimg.com\u002Fimages\u002Fg\u002Ftv0AAOSwP9FjA43Q\u002Fs-l1600.jpg",
            maxImageHeight: 1599,
            maxImageWidth: 1204,
            videoMedia: null,
            videoViewerInfo: null,
            zoomEnabled: true,
            enlargeEnabled: true,
            selected: false,
            stockPhoto: false,
          },
          {
            thumbImgUrl:
              "https:\u002F\u002Fi.ebayimg.com\u002Fimages\u002Fg\u002FEj0AAOSwQspjA43S\u002Fs-l64.jpg",
            thumbImgSize: null,
            displayImgUrl:
              "https:\u002F\u002Fi.ebayimg.com\u002Fimages\u002Fg\u002FEj0AAOSwQspjA43S\u002Fs-l300.jpg",
            displayImgSize: null,
            maxImageUrl:
              "https:\u002F\u002Fi.ebayimg.com\u002Fimages\u002Fg\u002FEj0AAOSwQspjA43S\u002Fs-l1600.jpg",
            maxImageHeight: 1599,
            maxImageWidth: 1204,
            videoMedia: null,
            videoViewerInfo: null,
            zoomEnabled: true,
            enlargeEnabled: true,
            selected: false,
            stockPhoto: false,
          },
          {
            thumbImgUrl:
              "https:\u002F\u002Fi.ebayimg.com\u002Fimages\u002Fg\u002FnfoAAOSwVxZjA44s\u002Fs-l64.jpg",
            thumbImgSize: null,
            displayImgUrl:
              "https:\u002F\u002Fi.ebayimg.com\u002Fimages\u002Fg\u002FnfoAAOSwVxZjA44s\u002Fs-l300.jpg",
            displayImgSize: null,
            maxImageUrl:
              "https:\u002F\u002Fi.ebayimg.com\u002Fimages\u002Fg\u002FnfoAAOSwVxZjA44s\u002Fs-l1600.jpg",
            maxImageHeight: 1599,
            maxImageWidth: 739,
            videoMedia: null,
            videoViewerInfo: null,
            zoomEnabled: true,
            enlargeEnabled: true,
            selected: false,
            stockPhoto: false,
          },
        ],
        fsId: "vi_main_img_fs",
        prLdImgThrsld: 5,
        imgAlt: "Apple iPhone 13 Pro Max - 256GB - Graphit (Ohne Simlock)",
        id: "vi_pic_panel",
        isEnableTouch: false,
      },
      0,
      0,
      0,
      [
        "ebay.viewItem.PictureColumn",
        "w1-7",
        {
          nextPrevButtonLabel: "Folie {index} von {total}",
          plId: "viEnlargeImgLayer",
          mainImgId: "icImg",
          imgThreshold: "4",
          viHOVTRK: "VI_FILMSTRIP_THUMBS_HOVER",
          viTHBTRK: "VI_FILMSTRIP_THUMBS_CLICK",
          isVerticalImageStrip: true,
          isHoverTrackingFilmstrip: false,
          fsId: "vi_main_img_fs_hidden",
          pcId: "vi_main_img_fs",
          id: "vi_pic_column",
          viMORETRK: "VI_VERTICAL_IMAGE_MORE_CLICK",
        },
        "w1-6",
        "vi_pic_column",
      ],
      [
        "ebay.viewItem.ZoomEnlarge",
        "w1-8",
        {
          enlargeMsg:
            "Klicken, um das Bild zu vergrößern und weitere Ansichten zu sehen",
          zoomEnMsgCntId: "zoom_enlarge_msg_cnt",
          mainImgId: "icImg",
          zoomEnMsgId: "zoom_enlarge_msg",
          id: "vi_pic_zoomEnlarge",
          zoomMsg: "Zum Heranzoomen mit der Maus über das Bild fahren",
          isZoomLiteEnabled: true,
        },
        "w1-6",
        "vi_pic_zoomEnlarge",
        0,
        [
          "ebay.viewItem.Zoomlite",
          "w1-9",
          {
            zoomImgId: "zoom_main_img",
            instantZoomEnlargeMsg: "Zum Vergrößern bitte anklicken",
            mImgContainerSize: 300,
            maskId: "zoom_img_mask",
            imgCntrId: "zoom_main_img_cntr",
            itemPicsSize: 8,
            isNewZoomTest1: true,
            instantZoomHoverMsg: "Mauszeiger bewegen zum Heranzoomen",
            instantZoom: true,
            mainImgId: "icImg",
            isNavigationArrowsEnabled: true,
            zoomSelId: "zoom_selector",
            zoomCntrId: "zoom_main_cntr",
            id: "vi_pic_zoom",
            isVerticalImageStripEnabled: true,
            zoomOnHoverHintId: "zoom_on_hover_hint",
          },
          "w1-8",
          "vi_pic_zoom",
        ],
      ],
    ],
    ["raptor.ads.AdsManager", "w1-10", { isAsyncEnabled: true }],
    ["com.ebay.raptor.vi.AdsAtfTracking", "w1-11"],
    [
      "com.ebay.raptor.vi.utils.Timer.TimerUtils",
      "w1-12",
      {
        offScreenMessage: "(wird alle ##1## Sekunden aktualisiert)",
        timeLeftOffScreenMessage: "Restzeit ",
      },
    ],
    [
      "com.ebay.raptor.vi.TimeLeft",
      "w1-13",
      {
        ocbSvcId: "_OPN_OCB_LAYER",
        counterStartSvcId: "COUNTER_START_SVC_ID",
        timeLeftOffScreenMessage: "Restzeit ",
        dayTxt: "w1-13-_day",
        timerSvcId: "TIMER_SVC_ID",
        isUrgencyMedHigh: false,
        counterStopSvcId: "COUNTER_STOP_SVC_ID",
        enableAFAlways: true,
        hoursTxt: "w1-13-_hours",
        timeLeftId: "vi-cdown_timeLeft",
        powSvcId: "_OPN_POWB_LAYER",
        isBinCounter: false,
        hotTimeCss: " tmlHt",
        minuteCharTxt: "w1-13-_m",
        lessTimeCss: "tml tmlHt",
        isAccessibilityOffScreenTimerOn: false,
        timeLeft: {
          secondsLeft: 4,
          daysLeft: 1,
          hoursLeft: 22,
          minutesLeft: 54,
        },
        offScreenMessage: "(wird alle ##1## Sekunden aktualisiert)",
        hourCharTxt: "w1-13-_h",
        dayCharTxt: "w1-13-_d",
        autoRefreshSvcId: "AUTO_REFRESH_SVC",
        pbSvcId: "_OPN_PB_LAYER",
        timerStopSvcId: "TIMER_SVC_STOP_ID",
        isUrgencyHigh: false,
        secondCharTxt: "w1-13-_s",
        hourTxt: "w1-13-_hour",
        counterSvcId: "COUNTER_SVC_ID",
      },
    ],
    [
      "raptor.vi.ActionPanel",
      "w1-14",
      {
        noGuestCart: false,
        isVIMCustomization: false,
        isModel: {
          largeButton: false,
          itmCondition: "Gebraucht",
          normalizedItemCondition: "gebraucht",
          conditionId: 3000,
          binPrice: null,
          binPriceDouble: null,
          binPriceOnly: null,
          convertedBinPrice: null,
          binURL: null,
          binGXOUrl: null,
          binXOUrl: null,
          bidPrice: "EUR 784,00",
          bidPriceDouble: "784.0",
          bidPriceOnly: null,
          convertedBidPrice: null,
          maxBidPrice: null,
          boSalePrice: null,
          boSalePriceDouble: null,
          boSalePriceOnly: null,
          priceInMoney: null,
          convertedPriceInMoney: null,
          mtpYourPickPrice: null,
          currencySymbol: null,
          bidURL:
            "https:\u002F\u002Fcgi.ebay.de\u002Fws\u002FeBayISAPI.dll?ViewItem&cta=placebid&item=334539543607&fromPage=2047675&fb=2",
          bids: 18,
          bidCurrencySymbol: "EUR",
          bidCounterModel: {
            timeLeftInMins: 2814,
            timeLeftInSec: 4,
            scheduledEndDate: 1661437186000,
            counterStartFromInMins: 180,
            slowDurationInMins: 180,
            slowIntervalInSecs: 300,
            fastDurationInMins: 1,
            fastIntervalInSecs: 2,
            accelerateDurationInMins: 5,
            accelerationBase: 2.0,
            accelerationRatio: 0.75,
            autoRefreshURL:
              "https:\u002F\u002Fwww.ebay.de\u002Flit\u002Fv1\u002Fitem?item=334539543607&pbv=1&si=57Rtp%2BNbZGMQZyhms1EpgORANm8%3D",
            accessedDate: 1661268342000,
            viewerItemRelationId: 0,
            detailLevel: "4",
            enableAfreshInterval: true,
            afreshIntervalPower: 1.100000023841858,
            afreshIntervalRatio: 2.799999952316284,
            afIntervalResetValue: 2.0,
            autoRefreshEnabled: true,
          },
          timeLeftUrgency: "LOW",
          showBidsCount: false,
          showBidsCountHot: true,
          bestOfferURL: null,
          bestOfferLayerURL: null,
          reviewCounterOfferLayerURL: null,
          signInBestOfferLayerURL: null,
          shopCartURL: null,
          shopCartPageURL: null,
          binLayerURL: null,
          duringCheckoutLayerUrl: null,
          signInBinLayerURL: null,
          minToBidPrice: "EUR 789,00",
          minToBidLocalPrice: null,
          versionQtyTxt: null,
          notActive: false,
          lotSize: 0,
          remainQty: 1,
          selectedVariationRemainQty: -1,
          maxQtyPerBuyer: 0,
          totalQty: 1,
          totalOffers: 0,
          qtyPurchased: 0,
          totalBids: 18,
          uniqueBidderCount: 0,
          showUniqueBidderCount: false,
          bidHistoryUrl:
            "https:\u002F\u002Fwww.ebay.de\u002Fbfl\u002Fviewbids\u002F334539543607?item=334539543607&rt=nc&_trksid=p2047675.l2565",
          showQtyPurchased: false,
          showQtyRemaining: true,
          txnSaleDate: null,
          startTime: 1661177986000,
          endTime: 1661437186000,
          endTimeMs: 1661437186000,
          timeLeft: {
            secondsLeft: 4,
            daysLeft: 1,
            hoursLeft: 22,
            minutesLeft: 54,
          },
          locale: "de_DE",
          duringCheckoutGXOUrl: null,
          duringCheckoutXOUrl: null,
          itemRevisionTimestamp: 0,
          goTogetherModel: null,
          groupGiftModel: null,
          partnerRedirectWebsite: null,
          partnerRedirectButtonText: null,
          currentVatPrice: null,
          binVatPrice: null,
          currentVatConvertedPrice: null,
          binVatConvertedPrice: null,
          disableMerchOnVI: false,
          quantity: null,
          currencyCode: "EUR",
          itmConditionVisibilityKey: null,
          viewedSeoFrameUrl: null,
          flowersCutoffTime: 15,
          showVehiclePriceComparison: false,
          vehiclePriceComparison: null,
          financePartnerUrl: null,
          vehicleInspectionUrl: null,
          rateKickUrl: null,
          geicoUrl: null,
          weGoLookUrl: null,
          itemUrl: null,
          enableAfreshInterval: true,
          cartLayerURL: null,
          addToCartRoverUrl: null,
          itemDescSnippet:
            "Verkaufe ein Apple iPhone 13 Pro Max - 256GB - Graphit (ohne Simlock). Voll funktionsfähig, keine Kratzer, keine Mängel. Sieht aus wie neu, ist aber ja auch erst zwei Monate alt. iPhone ist zurückgesetzt und aus iCloud entfernt.",
          qtyNotAvailable: false,
          buyerLoginNameSha: null,
          giftExperience: null,
          liteUrlPrefixForListing: null,
          mockATC: false,
          mockATCURL: null,
          atcViElig: false,
          streamLineBinModel: null,
          ca65Warning: null,
          suppressStreamLineBin: false,
          reviewSioLayerUrl: null,
          newUshipBannerEnabled: false,
          ushipUrl: null,
          showPostSaleAuthenticationBanner: false,
          hasTransactionPrice: false,
          ecoParticipationFee: null,
          shopActionBinUrl: null,
          shopActionAtcUrl: null,
          completedVI: false,
          blockingDestination: false,
          partiallyProvisionedUser: false,
          newCVIPView: false,
          bestOffer: false,
          signedIn: false,
          binLayerEnabled: false,
          minAdvertisedPriceExposure: "NONE",
          dsplStpHlpIcon: false,
          dsplStpLblVar: false,
          hideStpHlpIcon: false,
          soldOnEBay: false,
          soldOffEBay: false,
          addXOQuantityParam: false,
          binController: false,
          binOnLoad: false,
          bopisatfredesign: false,
          classifiedAd: false,
          realEstateItem: false,
          adminView: false,
          belowMarket: false,
          dealsItem: false,
          encodeBOPISURL: true,
          cartLayerEnabled: false,
          itemDescSnippetsEnabledV1: true,
          itemDescSnippetsEnabledV2: false,
          relativeEndTime: false,
          emailDigitalDeliveryItem: false,
          multiQtyEnabledForGifting: false,
          oid: false,
          pccetransactionId: null,
          payNowShopActionUrl: null,
          showCTAForMotors: false,
          saveOnOriginalPrice: null,
          autoCars: false,
          autoMotorCycles: false,
          gtc: false,
          ended: false,
          bestOfferLayer: false,
          boOnLoad: false,
          showBidLayer: true,
          oneClickBid: false,
          amtSaved: null,
          saveOnOriginalRetailPrice: null,
          promoSaleOn: false,
          liveAuctionItem: false,
          halfOnCore: false,
          availableQuantityThreshold: 10,
          pudoavailable: true,
          binLayer: false,
          binLayerSigninRedirectVIEnabled: false,
          topProduct: false,
          autoVehicle: false,
          listingSiteId: 77,
          mrpEnabled: false,
          atcurl: "",
          itemBinnable: false,
          versionView: false,
          printView: false,
          previewItem: false,
          reviewOffer: false,
          buyerView: false,
          duringCheckoutUrl: null,
          signInUrlWithCartLayerReturn: null,
          discountedPriceDouble: null,
          itemRevisionDate: null,
          itemRevisionLink: null,
          minRemnantSetEnabled: false,
          buyerGuaranteePCEnabled: true,
          ebpbannerRedesign: true,
          redPaymentsAbfEnabled: false,
          swapButtonColors: true,
          timeLeftUrgencyRed: true,
          conditionDetailEnabled: false,
          conditionDetail: null,
          motorsComScoreTracking: null,
          addVehicleInspectionRTM: false,
          buildGEICOLink: false,
          buildRateKickLink: false,
          ushipEnabled: false,
          financeTabEnabled: false,
          showDealsItemSignal: false,
          percentOff: null,
          bincounterEnabled: false,
          abincounterEnabled: true,
          defaultBulkShopCartURL: null,
          liveAuctionHidePayNow: false,
          bidingAvailable: true,
          buyAnother: false,
          scheduled: false,
          nonJS: false,
          buildWeGoLookLink: false,
          siteId: 77,
          itemRevised: false,
          buyerGuaranteeUnavailabilityReasonCode: "NO_COVERAGE",
          supressQty: false,
          freeVHREnabled: false,
          vppEnabled: false,
          autoPowerSports: false,
          sellerView: false,
          showBOPIS: false,
          bopisavailableForUser: false,
          pudoSymphonyPilotSeller: false,
          showEBN: false,
          bin: false,
          expired: false,
          buyerGuaranteeEnabled: true,
          binAvailable: false,
          originalPrice: null,
          discountedPrice: null,
          promoSaleTimeLeft: null,
          discountedPercentage: 0,
          remnantSetValue: 0,
          euBasePrice: null,
          caautoVehicle: false,
          savingsPercent: null,
          privateSale: false,
          vatIncluded: false,
          vatExcluded: false,
          flowersCatItem: false,
          digitalGiftCard: false,
          bid: true,
          won: false,
          reserveNotMet: false,
          sold: false,
          shopCart: false,
          itemInCart: false,
          bulkShopCartURL: null,
          originalRetailPrice: null,
          pricingTreatment: "NONE",
          bidMore: false,
          bulkAddToCartEnabled: false,
          origClosedViewItemUrl: null,
        },
        isATCRedesignLayerV1Active: false,
        bidBtnId: "bidBtn_btn",
        savingsRateLowerCase: "Rabatt",
        isRedesign: false,
        isBOPISOnly: false,
        isCartLyr: false,
        isEncodeBOPISUrl: true,
        isBidOfferTrackingEnabled: true,
        isBOPIS: true,
        errTitleATC: "Leider gab es ein Problem",
        primaryBtnBin: "continueBtnBin",
        isFeedbackLinkActive: false,
        isEbayPlusUpsellLinkPresent: false,
        isEUSite: true,
        disableBINBtnFeatureON: true,
        customizationBinOverlay: "customizationBinOverlay",
        isPUDO: true,
        errMsgATC:
          "Der ausgewählte Artikel wurde nicht in Ihren Warenkorb gelegt.",
        savingsRateUpperCase: "Rabatt",
        bindSpaceBarOnBinButton: false,
        isValid: "isValid",
        isSMEInterruptLayer: false,
        secondaryBtnBin: "backBtnBin",
        isShowReview: false,
        isSubmitButtonPresent: false,
        itemId: 334539543607,
        enableCustomizationDialog: true,
        isBuyBoxFlex: true,
        qtyBoxId: "qtyTextBox",
        siteId: 77,
        throbberMessageATC_4: "Fast fertig",
        watchBtnId: "watch-area",
        throbberMessageATC_2: "Vorgang läuft...",
        waitforCustomizationEnabled: false,
      },
      0,
      0,
      0,
      [
        "com.ebay.raptor.vi.BidPrice",
        "w1-15",
        {
          mtbId: "w1-15-_mtb",
          ocbSvcId: "_OPN_OCB_LAYER",
          mtbTxt: "Geben Sie mindestens ##1## ein ",
          bpId: "prcIsum_bidPrice",
          autoRefreshDisableBtnSvcId: "AUTO_REFRESH_DISABLE_BTN_SVC",
          cbLocalId: "convbidPrice",
          isABINCounterEnabled: false,
          resId: "w1-15-_reserve",
          buyBoxFlex: true,
          isSubmitButtonPresent: false,
          dummy: "##1##",
          autoRefreshSvcId: "AUTO_REFRESH_SVC",
          powSvcId: "_OPN_POWB_LAYER",
          pbSvcId: "_OPN_PB_LAYER",
          mtbHBTxt: "Geben Sie mehr als ##1## ein ",
          resNMTxt: "Mindestpreis nicht erreicht ",
          isSPersistenBIN: false,
          resTxt: "Mindestpreis erreicht ",
        },
        "w1-14",
        "cp",
        0,
        [
          "com.ebay.raptor.vi.BidHistory",
          "w1-16",
          { autoRefreshSvcId: "AUTO_REFRESH_SVC", bidCmpId: "qty-test_min" },
        ],
      ],
      [
        "com.ebay.raptor.vi.BidHistory",
        "w1-17",
        { autoRefreshSvcId: "AUTO_REFRESH_SVC", bidCmpId: "qty-test" },
      ],
      [
        "com.ebay.raptor.vi.VIButton",
        "w1-18",
        { mouseDownClass: "md", isCSS3: true, btnId: "bidBtn_btn" },
        "w1-14",
        "",
      ],
      [
        "ebay.viewItem.AddToWatchBtmLnkR1",
        "w1-19",
        {
          addToWatchUrl:
            "https:\u002F\u002Fwww.ebay.de\u002Fmyb\u002FWatchListAdd?_trksid=p2047675.l1360&item=334539543607&rt=nc&sourcePage=4340&srt=010007000000506eb6a3f7655f59782bcd6b32a3916c27e865cd956ccdabb95c5de1708c58aba8de02c89e1c43be15b0639e5c3a23cd0fae189e1e35c1cddea7c22ebf0a6769a84e329b3a6776cd43b4db07c1aa4731ea&SubmitAction.AddToListVI=x&ssPageName=VIP:watchlink:top:de",
          watchFullId: "vi-atw-full",
          isNewRaptorCmd: true,
          msku: false,
          defaultWatchCount: 51,
          watwtxt: "Ich beobachte",
          signInUrl:
            "https:\u002F\u002Fsignin.ebay.de\u002Fws\u002FeBayISAPI.dll?SignIn&ru=https%3A%2F%2Fcgi.ebay.de%2Fws%2FeBayISAPI.dll%3FViewItem%26actionType%3Dsinginformore%26item%3D334539543607",
          watchersElmSelector:
            "#vi-bybox-watchers-container #vi-bybox-watchers",
          watchListId: "-99",
          isWatched: false,
          atwtxt: "Auf die Beobachtungsliste",
          isNewAddToCustomWatchListEnabled: true,
          isDeleteWatchRaptorCmd: true,
          isItemEnded: false,
          itemId: "334539543607",
          watchlnkId: "vi-atl-lnk",
          watcherLabel:
            '\u003Cspan class="vi-buybox-watchcount">-1\u003C\u002Fspan> Beobachter',
          removeListUrl:
            "\u002Fmye\u002Fajax\u002Fdmsvc?srt=01000700000050715880cdc15856d63df9316b201ea25f6dcbe0fc157fa1d17c1133336b3b09d2ef2df0490a69035d5372f5747c17151f6339a7349d5e8244ed85ac6a33a0585c5f3a337d99de7439238832e8bb3ee06e",
          isGuestWatchUser: false,
          watchName: "Beobachten",
          isUserSignedIn: false,
          myEbayWatchListUrl: "\u002Fmye\u002Fmyebay\u002FWatchList",
          watchersLabel:
            '\u003Cspan class="vi-buybox-watchcount">-1\u003C\u002Fspan> Beobachter',
          removeFromWatchBaseUrl:
            "https:\u002F\u002Fwww.ebay.de\u002Fmyb\u002FWatchListDelete?itemIds=334539543607",
        },
        "w1-14",
        "",
      ],
    ],
    [
      "com.ebay.raptor.vi.isum.buyerProtection",
      "w1-20",
      {
        isTwoCol: false,
        ebpHdrId: "ebpHdr",
        siteUrl:
          "https%3A%2F%2Fpages.ebay.de%2Febaybuyerprotection%2Findex.html",
        siteId: 77,
        ebpVarWidthId: "ebpVarWidth",
        isAutoVehicle: false,
      },
    ],
    [
      "com.ebay.raptor.vi.Description",
      "w1-21",
      {
        regexFrameHt: "chrome\\\u002F(76|77)",
        descSnippetEnabled: false,
        tgto: "https:\u002F\u002Fvi.vipr.ebaydesc.com",
        logDescTimer: true,
        setFrameHt: 4000,
        fixFrameHt: true,
      },
    ],
    ["ebay.viewItem.BuyerFeedback", "w1-22", { modalEnabled: true }],
    [
      "com.ebay.raptor.vi.reviews.ProductReviewRedesignV2",
      "w1-23",
      {
        marketplaceid: "EBAY-DE",
        itemId: 334539543607,
        isReviewsMediaImagesEnabled: true,
        readFullReviewTxt: "Vollständige Rezension lesen",
        cosgrcEndpoint:
          "https:\u002F\u002Fapi.ebay.com\u002Fbuy\u002Freview\u002Fv1",
        baseDomain: "ebay.de",
        review: "Vollständige Rezension lesen",
        isUserSignedIn: false,
        currentDomain: "ebay.de",
        reviewsReplaceToken: "999,999",
      },
      0,
      0,
      0,
      ["com.ebay.raptor.vi.reviews.ProductReviewsImagesOverlay", "w1-24"],
      ["com.ebay.raptor.vi.reviews.ProductReviewsImagesOverlay", "w1-25"],
      ["com.ebay.raptor.vi.reviews.ProductReviewsImagesOverlay", "w1-26"],
      ["com.ebay.raptor.vi.reviews.ProductReviewsImagesOverlay", "w1-27"],
      ["com.ebay.raptor.vi.reviews.ProductReviewsImagesOverlay", "w1-28"],
    ],
    [
      "raptor.ads.AdsManager",
      "w1-29",
      {
        headers:
          '{"Authorization":"Bearer v^1.1#i^1#r^0#f^0#p^1#I^3#t^H4sIAAAAAAAAAO1Ya2wUVRTu9qWlosGAVbRmO6AYzMzemdluZ8fuytJSuyl9brtKDeA87rTT7u6MM3fabmNgUyIhQTTGREQFGpMaFEngB0KMf0B\u002FCEZQxABRGh\u002FxmfhAUqv4A+9MS9nWpg9asD\u002FcP5u595xzv\u002FOdc+6594JUbt7yzZWbB+e7bsrsTYFUpstF54O83JwHb83KXJyTAdIEXL2ppansnqwfSk0hHtP5BmjqWsKE7q54LGHyzmCAsIwErwmmavIJIQ5NHkl8JFS9mmcowOuGhjRJixHucHmAoL0lDJQhx7IiK\u002FsEEY8mrths1AKEl4MKECEokWWGgzTA86ZpwXDCREICBQgGMAwJOJKhGxmGB4CnWYplQTPhjkLDVLUEFqEAEXTg8o6ukYZ1YqiCaUIDYSNEMByqiNSGwuWrahpLPWm2gsM8RJCALHP0V5kmQ3dUiFlw4mVMR5qPWJIETZPwBIdWGG2UD10Bcw3wHao5uhgyYgnnBT7F75O9s0JlhWbEBTQxDntElUnFEeVhAqkoORmjmA2xDUpo+KsGmwiXu+2\u002FekuIqYoKjQCxamVoTaiujghCUUiSccFoh0iPCRIkJZw\u002FVhwaqswXQ87PKH5AQrbET3pBCUNysp8jsQ5d7ONE4Be8wwCGVhmmfwyCMi0hqzaZprtGQysh9gaO5ozmi9M4w0K1iVojpCAb6Ygcm8Yt7Wu2gz0UXQu1Jux4wzgmyO18Th6ZEW2EDFW0EByxMHbCoS5ACLquysTYSSdHh9OqywwQrQjpvMfT2dlJddq1zlKa0eJhAKA9j1WvjkitMC4QI\u002FLqaIXxhEnVcUWCWMtUeZTUMZYunMMYQKKFCPoB670ShNGogmNH\u002FzWQ5rJndKHMVuGIHC1xtI\u002F1cVxxScnsFE5wOHc9No6J0pctVhiWUyAp+\u002FwK6fUrCikWyz6SViAEEIqi5Of+r5+pV0AESgZE0yqB657+bZUeq7WtrQzW61KHEEFNSV90DUd3NCvdSiSmNrU2VcVQmK2qZ83AVKtkXOfLYipmphGvPy4Bdq3\u002FZyRUaiaC8ozci0iaDuu0mCol51aAaRPVCQZKzsi7kK6Hp7d3X3e\u002FZmnfuDY+pt\u002FL5lYfG9cp007hG+GUXetTd8y2YWIjgq5SdtApSYt7NAGfUjwOYo9oJVdYuGu6J5WEXTrOD4jXmqKCbRrHGle14HTxSRVW6JaIpacFZaoqomBOU3ha0CXcFdM1ZpRLKr5MzKnywN4Oua3KQ7cAyvGdMjskyoCmZhn4AkTV2offRq0dJvCZARlaLAaNKD3jrTMet5AgxuBc20NnvmeowiTnmewe14Ub3vJ8Ppqm\u002FQzNzsg3yTmxrJ9rG\u002F2NanzTuOt4Rj\u002FIBDOcH93jOgh6XAcyXS7gAffRS0BRblZTdtYti00VQUoVFMpUWxICsgxItcOkLqhGZq5rQzVf\u002F1naE1DvWnDnyCNQXhadn\u002FYiBO65OpND31Ywn2EAx9CMzSjbDJZcnc2m78heeO9dh6m39vVHNy2sPljZuOSSeP+pP8H8ESGXKycD52sGcW7hQNXxDYurTp7bt7ds3wNFPYcW\u002FBztzh\u002F46nT+dpDdX5Bb1PbLrqzv6h959OgW8uszF57V6IzgMU\u002F76Rcba84bRdtO\u002FJpatqN78GX9x60rL+xakJX6HIWDlTV\u002FHO3d1vDS+6n8dQf6X+N2vjq45a\u002FNi6K+eberTx7e7ap4+4XDZXse6lu3rBBcXPSe0TPv\u002FI6GJx7\u002FsvsLak\u002F0qejgof3f\u002FL4J5fV\u002FC8+sOEa07P++4fjlNnHpm3Wnzi5\u002FbtdA5dZP1l\u002FkNhbV7r6kD\u002FB9f8PLHXsf3njm6We459sKy2\u002FeWfjRBnb\u002Fx3fLpdlH2gv6jrzx04lXtnyoRrr6fqsPxwteP\u002FnO9rWlhe9+sP3TwNmh8P0DH3DJzJwTAAA=","X-EBAY-C-TRACKING":"guid=86f64c431810aa3900b1a527ff8328c0,pageId=2047675","X-EBAY-C-MARKETPLACE-ID":"EBAY-DE","X-EBAY-C-CULTURAL-PREF":"currency=EUR","X-EBAY-TERRITORY-ID":"DE","X-EBAY-C-REQUEST-ID":"ri=77Om5JKj7R1w,rci=ee952e477e834b13","X-EBAY-C-CORRELATION-SESSION":"operationId=2047675","Accept-Language":"de-DE","X-EBAY-C-ENDUSERCTX":"ip=79.246.146.211,userAgentAccept=text%2Fhtml%2Capplication%2Fxhtml%2Bxml%2Capplication%2Fxml%3Bq%3D0.9%2Cimage%2Favif%2Cimage%2Fwebp%2Cimage%2Fapng%2C*%2F*%3Bq%3D0.8%2Capplication%2Fsigned-exchange%3Bv%3Db3%3Bq%3D0.9,userAgentAcceptEncoding=gzip,userAgentAcceptCharset=null,userAgent=Mozilla%2F5.0+%28Windows+NT+10.0%3B+Win64%3B+x64%29+AppleWebKit%2F537.36+%28KHTML%2C+like+Gecko%29+Chrome%2F104.0.0.0+Safari%2F537.36,referer=https%3A%2F%2Fwww.ebay.de%2Fsch%2Fi.html%3F_from%3DR40%26_nkw%3Diphone%2B256%26_sacat%3D0%26rt%3Dnc%26LH_Auction%3D1,xff=79.246.146.211%2C+184.86.102.148%2C95.101.83.172%2C66.135.207.156%2C10.220.22.142,uri=%2Fitm%2F334539543607,applicationURL=http%3A%2F%2Fwww.ebay.de%2Fitm%2F334539543607%3Fepid%3D18049286615%26hash%3Ditem4de41c5437%253Ag%253A-ZUAAOSwTChjA43I%26amdata%3Denc%253AAQAHAAAA4D1lRGTZkzt5mQGBDG1n53d12ug2k%252BqyxmzrWXpgHzOJ3OuJB3SyP7Nl5c9BeVHpCmKnvMcgr6Gz%252B28MjFdklkSr3B9HYb3Vm2YlTHbmwUvYnIpCLg0DFlV6MyR5KU4FUw3pSTzusPxTjNYcm2VuDHLvlOzk2txTbdJ110AGbSdLhYueY2jp9QZxMMEzWexPE6dMYkGX%252FbxZbYZ6SQBmARrSzETibKWMxThDW7Cmg5EQwUcKqemGtPUfeeVgmiuhNgLFgm68s8U4h7JMHIOrsrLbG5ulzg7G%252Bl78idfV%252Bq4g%257Ctkp%253ABk9SR66_zbTZYA%26LH_Auction%3D1,physicalLocation=country%3DDE,contextualLocation=country%3DDE,isPiggybacked=false,fullSiteExperience=true,expectSecureURL=true,sec-ch-ua-model=%22%22,sec-ch-ua-platform-version=%2210.0.0%22,sec-ch-ua-full-version=%22104.0.5112.101%22"}',
        loadJsAsync: false,
        threshold: 1000,
        enableBtfMskuVariationContext: false,
        atfMskuVarRefreshDelay: 0,
        body: '{"context":{"zip":"65199","user_ip":"79.246.146.211","srp_referer":"https:\u002F\u002Fwww.ebay.de\u002Fitm\u002F334539543607?epid=18049286615&hash=item4de41c5437%3Ag%3A-ZUAAOSwTChjA43I&amdata=enc%3AAQAHAAAA4D1lRGTZkzt5mQGBDG1n53d12ug2k%2BqyxmzrWXpgHzOJ3OuJB3SyP7Nl5c9BeVHpCmKnvMcgr6Gz%2B28MjFdklkSr3B9HYb3Vm2YlTHbmwUvYnIpCLg0DFlV6MyR5KU4FUw3pSTzusPxTjNYcm2VuDHLvlOzk2txTbdJ110AGbSdLhYueY2jp9QZxMMEzWexPE6dMYkGX%2FbxZbYZ6SQBmARrSzETibKWMxThDW7Cmg5EQwUcKqemGtPUfeeVgmiuhNgLFgm68s8U4h7JMHIOrsrLbG5ulzg7G%2Bl78idfV%2Bq4g%7Ctkp%3ABk9SR66_zbTZYA&LH_Auction=1","page_merch_request_id":"b0c53f99-5039-4965-8c6f-024d384fd79a","item_id":334539543607,"user_site":"DE","format":"html","browser_width":"1015","locale":"de-DE","search_context":"(qry=iphone%2B256|dmLCat=-1|srCnt=0|mCCatId=0|minPrice=-1.0|maxPrice=-1.0|crncyId=276|fmt=auction|fShip=0|etrs=0|aspects=rt:nc)","modules":"PLACEMENT_101110,PLACEMENT_101111,PLACEMENT_101113,PLACEMENT_101112,PLACEMENT_101506","user_state":"4","site":77,"user_shipping_country":77,"feed_enrichment_url":"https:\u002F\u002Fapi.ebay.com\u002Fnori\u002Fexperience","guid":"86f64c431810aa3900b1a527ff8328c0"},"config":{"async_response":"NEVER","merch":true}}',
        url: "https:\u002F\u002Fapi.ebay.com\u002Fnori\u002Fexperience\u002Fv1\u002Fmodule_provider",
        adIds: ["101110", "101111", "101113", "101112", "101506"],
        enableMerchRefresh: false,
        enableOnScroll: true,
        customCallbackHandler: true,
        atfPlacementIds: [101195, 101196],
        atfMskuVarRefreshTimeout: 0,
        enableAtfMskuVarRefresh: false,
      },
    ],
    [
      "com.ebay.raptor.vi.AdsTracking",
      "w1-30",
      {
        adIds: ["101110", "101111", "101113", "101112", "101506"],
        body: '{"context":{"zip":"65199","user_ip":"79.246.146.211","srp_referer":"https:\u002F\u002Fwww.ebay.de\u002Fitm\u002F334539543607?epid=18049286615&hash=item4de41c5437%3Ag%3A-ZUAAOSwTChjA43I&amdata=enc%3AAQAHAAAA4D1lRGTZkzt5mQGBDG1n53d12ug2k%2BqyxmzrWXpgHzOJ3OuJB3SyP7Nl5c9BeVHpCmKnvMcgr6Gz%2B28MjFdklkSr3B9HYb3Vm2YlTHbmwUvYnIpCLg0DFlV6MyR5KU4FUw3pSTzusPxTjNYcm2VuDHLvlOzk2txTbdJ110AGbSdLhYueY2jp9QZxMMEzWexPE6dMYkGX%2FbxZbYZ6SQBmARrSzETibKWMxThDW7Cmg5EQwUcKqemGtPUfeeVgmiuhNgLFgm68s8U4h7JMHIOrsrLbG5ulzg7G%2Bl78idfV%2Bq4g%7Ctkp%3ABk9SR66_zbTZYA&LH_Auction=1","page_merch_request_id":"b0c53f99-5039-4965-8c6f-024d384fd79a","item_id":334539543607,"user_site":"DE","format":"html","browser_width":"1015","locale":"de-DE","search_context":"(qry=iphone%2B256|dmLCat=-1|srCnt=0|mCCatId=0|minPrice=-1.0|maxPrice=-1.0|crncyId=276|fmt=auction|fShip=0|etrs=0|aspects=rt:nc)","modules":"PLACEMENT_101110,PLACEMENT_101111,PLACEMENT_101113,PLACEMENT_101112,PLACEMENT_101506","user_state":"4","site":77,"user_shipping_country":77,"feed_enrichment_url":"https:\u002F\u002Fapi.ebay.com\u002Fnori\u002Fexperience","guid":"86f64c431810aa3900b1a527ff8328c0"},"config":{"async_response":"NEVER","merch":true}}',
      },
    ]
  );
  new (raptor.require("raptor.tracking.core.Tracker"))({
    psi: "ATzUNtLU*",
    pid: "p2047675",
    rover: {
      clk: "/roverclk/0/0/9",
      imp: "/roverimp/0/0/9",
      uri: "https://rover.ebay.de",
    },
  });
  raptor
    .require("raptor.tracking.idmap.IdMap")
    .roverService("https://rover.ebay.de/idmap/0?footer");
})();
