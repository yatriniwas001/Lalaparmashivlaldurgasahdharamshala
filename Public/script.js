/*
 * lovable.dev
 * script.js
 *
 * Lala Parma Shiv Lal Durga Sah Dharamshala
 * Static site script
 *
 * Everything the site displays lives in SITE_DATA below.
 *
 * RULE:
 * Never add information that has not been confirmed by management.
 *
 * Leave an array empty and the page will show a
 * "Please contact us" message instead of inventing details.
 */

(function () {
  "use strict";

  /* =========================================================
     CENTRAL EDITABLE DATA
     ========================================================= */

  var SITE_DATA = {
    property: {
      name: "Lala Parma Shiv Lal Durga Sah Dharamshala",

      address:
        "Nainital Rd, Tallital, Nainital, Uttarakhand 263001, India",

      phoneDisplay: "+91 79961 93849",

      phoneTel: "tel:+917996193849",

      mapsUrl:
        "https://maps.app.goo.gl/72707WuKq8hdhXni9",

      rating: {
        value: 4.1,
        count: 971,
        source: "Google"
      }
    },

    /*
     * Room types - empty until confirmed by management.
     */
    rooms: [],

    /*
     * Facilities - empty until confirmed by management.
     */
    facilities: [],

    /*
     * Genuine, management-approved guest reviews only.
     * Quoted exactly.
     *
     * Never edit wording.
     * Never fabricate reviews.
     */
    reviews: [],

    /*
     * Neutral confirmed points.
     * These are not quoted guest reviews.
     */
    reviewHighlights: [
      "Rated 4.1 out of 5 from 971 public Google reviews.",
      "Located on Nainital Road in Tallital, Nainital."
    ],

    /*
     * Gallery
     */
    gallery: [
      {
        src: "assets/hero-nainital.jpg",
        alt: "Nainital lake town in the Kumaon hills at sunrise",
        caption: "Nainital at sunrise"
      },
      {
        src: "assets/gallery-lake.jpg",
        alt: "View across Naini Lake with the surrounding hills",
        caption: "Naini Lake"
      },
      {
        src: "assets/gallery-temple.jpg",
        alt: "Street scene in Nainital town near Tallital",
        caption: "Nainital town"
      },
      {
        src: "assets/gallery-snowview.jpg",
        alt: "Himalayan range seen from a viewpoint above Nainital",
        caption: "Himalayan views"
      }
    ],

    /*
     * General Nainital attractions.
     */
    attractions: [
      {
        name: "Naini Lake",
        description:
          "The lake at the heart of the town, known for boating and lakeside walks."
      },
      {
        name: "Naina Devi Temple",
        description:
          "A well-known temple on the northern shore of Naini Lake, visited by pilgrims through the year."
      },
      {
        name: "Mall Road",
        description:
          "The main promenade connecting Tallital and Mallital, lined with shops and eateries."
      },
      {
        name: "Tibetan Market",
        description:
          "A busy street market in Tallital popular with visitors."
      },
      {
        name: "Snow View Point",
        description:
          "A viewpoint above the town offering views towards the Himalayan range on clear days."
      },
      {
        name: "Tiffin Top (Dorothy's Seat)",
        description:
          "A hilltop lookout reached by walking or pony trail from Ayarpatta."
      }
    ],

    /*
     * Frequently asked questions.
     */
    faqs: [
      {
        q: "Where is the dharamshala located?",
        a:
          "Lala Parma Shiv Lal Durga Sah Dharamshala is at Nainital Rd, Tallital, Nainital, Uttarakhand 263001, India. You can open the exact location using the Google Maps link on this page."
      },
      {
        q: "How do I book a room?",
        a:
          "Bookings and availability are handled directly over the phone. Please call +91 79961 93849. We do not take payments or bookings through this website."
      },
      {
        q: "What types of rooms are available?",
        a:
          "Room types, occupancy and current availability change through the season. Please call +91 79961 93849 for accurate, up-to-date information."
      },
      {
        q: "What is the tariff?",
        a:
          "Tariffs are not published on this website. Please call +91 79961 93849 for current rates."
      },
      {
        q: "What facilities are provided?",
        a:
          "Please call +91 79961 93849 to confirm the facilities available at the time of your stay."
      },
      {
        q: "What are the check-in and check-out timings?",
        a:
          "Check-in and check-out timings are confirmed at the time of booking. Please call +91 79961 93849."
      },
      {
        q: "Where can I read guest reviews?",
        a:
          "Public reviews and the latest rating are on our Google Maps listing. At the time of writing the listing shows 4.1 out of 5 from 971 reviews."
      }
    ]
  };

  /* =========================================================
     CONSTANTS
     ========================================================= */

  var P = SITE_DATA.property;

  var SVG_NS = "http://www.w3.org/2000/svg";

  var PHONE_PATH =
    "M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1 1 .4 1.9.7 2.8a2 2 0 0 1-.5 2.1L8.1 9.9a16 16 0 0 0 6 6l1.3-1.2a2 2 0 0 1 2.1-.5c.9.3 1.8.6 2.8.7a2 2 0 0 1 1.7 2Z";

  var STAR_PATH =
    "m12 3 2.6 5.6 6 .8-4.4 4.2 1.1 6L12 16.8 6.7 19.6l1.1-6-4.4-4.2 6-.8L12 3Z";

  var CHEVRON_PATH = "m6 9 6 6 6-6";

  /* =========================================================
     DOM HELPERS
     ========================================================= */

  function el(tag, className, text) {
    var node = document.createElement(tag);

    if (className) {
      node.className = className;
    }

    if (text != null) {
      node.textContent = text;
    }

    return node;
  }

  function icon(path, className) {
    var svg = document.createElementNS(SVG_NS, "svg");

    svg.setAttribute(
      "class",
      "ico" + (className ? " " + className : "")
    );

    svg.setAttribute("viewBox", "0 0 24 24");
    svg.setAttribute("aria-hidden", "true");

    var pathElement = document.createElementNS(SVG_NS, "path");

    pathElement.setAttribute("d", path);

    svg.appendChild(pathElement);

    return svg;
  }

  function callButton(label, className) {
    var button = el(
      "a",
      "btn " + (className || "btn-primary")
    );

    button.href = P.phoneTel;

    button.appendChild(icon(PHONE_PATH));
    button.appendChild(document.createTextNode(label));

    return button;
  }

  /* =========================================================
     STAR RATING
     ========================================================= */

  function renderStars() {
    var nodes = document.querySelectorAll(".stars");

    for (var i = 0; i < nodes.length; i++) {
      var value =
        parseFloat(nodes[i].getAttribute("data-stars")) || 0;

      for (var s = 1; s <= 5; s++) {
        var star = icon(
          STAR_PATH,
          s <= Math.round(value) ? "star-on" : "star-off"
        );

        nodes[i].appendChild(star);
      }
    }
  }

  /* =========================================================
     FALLBACK
     ========================================================= */

  function fallback(heading, body) {
    var wrap = el("div", "card card-pad fallback");

    wrap.appendChild(el("h3", null, heading));
    wrap.appendChild(el("p", null, body));
    wrap.appendChild(
      callButton("Call " + P.phoneDisplay)
    );

    return wrap;
  }

  /* =========================================================
     ROOMS
     ========================================================= */

  function renderRooms() {
    var host = document.getElementById("roomsBody");

    if (!host) {
      return;
    }

    if (!SITE_DATA.rooms.length) {
      host.appendChild(
        fallback(
          "Please contact us for room details",
          "Room types, occupancy and current availability are confirmed directly with the management. Call us and we will tell you exactly what is available for your dates."
        )
      );

      return;
    }

    var grid = el("div", "grid grid-3");

    SITE_DATA.rooms.forEach(function (room) {
      var card = el("div", "card card-pad");

      card.appendChild(
        el("h3", "h3", room.name)
      );

      card.appendChild(
        el("p", "muted small", room.description)
      );

      grid.appendChild(card);
    });

    host.appendChild(grid);
  }

  /* =========================================================
     FACILITIES
     ========================================================= */

  function renderFacilities() {
    var host = document.getElementById("facilitiesBody");

    if (!host) {
      return;
    }

    if (!SITE_DATA.facilities.length) {
      host.appendChild(
        fallback(
          "Please contact us for facility details",
          "We do not list facilities online unless we can confirm them for your dates. Call the management and we will tell you what is provided."
        )
      );

      return;
    }

    var grid = el("div", "grid grid-3");

    SITE_DATA.facilities.forEach(function (facility) {
      var card = el("div", "card card-pad");

      card.appendChild(
        el("h3", "h3", facility.name)
      );

      if (facility.description) {
        card.appendChild(
          el(
            "p",
            "muted small",
            facility.description
          )
        );
      }

      grid.appendChild(card);
    });

    host.appendChild(grid);
  }

  /* =========================================================
     REVIEWS
     ========================================================= */

  function renderReviews() {
    var host = document.getElementById("reviewsBody");

    if (!host) {
      return;
    }

    /*
     * If no management-approved reviews have been added,
     * do not fabricate or reproduce reviews.
     */
    if (!SITE_DATA.reviews.length) {
      var card = el("div", "card card-pad");

      card.appendChild(
        el(
          "h3",
          "h3",
          "Reviews are published on Google"
        )
      );

      card.appendChild(
        el(
          "p",
          "muted small",
          "We do not reproduce guest reviews on this website. Every public review, positive or otherwise, can be read in full on our Google Maps listing."
        )
      );

      var list = el("ul", "highlights");

      SITE_DATA.reviewHighlights.forEach(
        function (highlight) {
          list.appendChild(
            el("li", null, highlight)
          );
        }
      );

      card.appendChild(list);
      host.appendChild(card);

      return;
    }

    var grid = el("div", "grid");

    SITE_DATA.reviews.forEach(function (review) {
      var quote = el(
        "blockquote",
        "card card-pad"
      );

      quote.appendChild(
        el(
          "p",
          null,
          "\u201C" + review.text + "\u201D"
        )
      );

      quote.appendChild(
        el(
          "footer",
          null,
          review.author +
            (review.source
              ? " · " + review.source
              : "")
        )
      );

      grid.appendChild(quote);
    });

    host.appendChild(grid);
  }

  /* =========================================================
     GALLERY
     ========================================================= */

  function renderGallery() {
    var host = document.getElementById("galleryGrid");

    if (!host) {
      return;
    }

    SITE_DATA.gallery.forEach(function (item) {
      var button = el(
        "button",
        "gallery-item"
      );

      button.type = "button";

      button.setAttribute(
        "aria-label",
        "View image: " + item.caption
      );

      var img = new Image();

      img.src = item.src;
      img.alt = item.alt;
      img.loading = "lazy";
      img.decoding = "async";
      img.width = 1200;
      img.height = 900;

      button.appendChild(img);

      button.addEventListener(
        "click",
        function () {
          openLightbox(item);
        }
      );

      host.appendChild(button);
    });
  }

  /* =========================================================
     ATTRACTIONS
     ========================================================= */

  function renderAttractions() {
    var host = document.getElementById(
      "attractionsGrid"
    );

    if (!host) {
      return;
    }

    SITE_DATA.attractions.forEach(
      function (attraction) {
        var card = el(
          "div",
          "card card-pad"
        );

        card.appendChild(
          el(
            "h3",
            "h3",
            attraction.name
          )
        );

        card.appendChild(
          el(
            "p",
            "muted small",
            attraction.description
          )
        );

        host.appendChild(card);
      }
    );
  }

  /* =========================================================
     FAQ ACCORDION
     ========================================================= */

  function renderFaqs() {
    var host = document.getElementById("faqList");

    if (!host) {
      return;
    }

    SITE_DATA.faqs.forEach(function (item, index) {
      var wrap = el("div", "acc-item");

      var panelId = "faq-panel-" + index;

      var button = el("button", "acc-btn");

      button.type = "button";

      button.setAttribute(
        "aria-expanded",
        "false"
      );

      button.setAttribute(
        "aria-controls",
        panelId
      );

      button.appendChild(
        el("span", null, item.q)
      );

      button.appendChild(
        icon(CHEVRON_PATH)
      );

      var panel = el("div", "acc-panel");

      panel.id = panelId;
      panel.hidden = true;

      panel.appendChild(
        el("p", null, item.a)
      );

      button.addEventListener(
        "click",
        function () {
          var isOpen =
            button.getAttribute(
              "aria-expanded"
            ) === "true";

          button.setAttribute(
            "aria-expanded",
            isOpen ? "false" : "true"
          );

          panel.hidden = isOpen;
        }
      );

      wrap.appendChild(button);
      wrap.appendChild(panel);

      host.appendChild(wrap);
    });
  }

  /* =========================================================
     LIGHTBOX
     ========================================================= */

  var lightbox =
    document.getElementById("lightbox");

  var lightboxImg =
    document.getElementById("lightboxImg");

  var lightboxCap =
    document.getElementById("lightboxCap");

  var lightboxClose =
    document.getElementById("lightboxClose");

  var lastFocused = null;

  function openLightbox(item) {
    if (!lightbox) {
      return;
    }

    lastFocused = document.activeElement;

    lightboxImg.src = item.src;
    lightboxImg.alt = item.alt;

    lightboxCap.textContent = item.caption;

    lightbox.hidden = false;

    document.body.style.overflow = "hidden";

    if (lightboxClose) {
      lightboxClose.focus();
    }
  }

  function closeLightbox() {
    if (!lightbox || lightbox.hidden) {
      return;
    }

    lightbox.hidden = true;

    lightboxImg.src = "";

    document.body.style.overflow = "";

    if (
      lastFocused &&
      typeof lastFocused.focus === "function"
    ) {
      lastFocused.focus();
    }
  }

  if (lightbox) {
    lightbox.addEventListener(
      "click",
      function (event) {
        if (event.target === lightbox) {
          closeLightbox();
        }
      }
    );

    if (lightboxClose) {
      lightboxClose.addEventListener(
        "click",
        closeLightbox
      );
    }

    document.addEventListener(
      "keydown",
      function (event) {
        if (event.key === "Escape") {
          closeLightbox();
        }
      }
    );
  }

  /* =========================================================
     HEADER + MOBILE NAVIGATION
     ========================================================= */

  function initHeader() {
    var header =
      document.getElementById("siteHeader");

    var menuBtn =
      document.getElementById("menuBtn");

    var mobileNav =
      document.getElementById("mobileNav");

    if (!header) {
      return;
    }

    function onScroll() {
      if (window.scrollY > 16) {
        header.classList.add("scrolled");
      } else if (
        !menuBtn ||
        menuBtn.getAttribute("aria-expanded") !==
          "true"
      ) {
        header.classList.remove("scrolled");
      }
    }

    window.addEventListener(
      "scroll",
      onScroll,
      { passive: true }
    );

    onScroll();

    if (!menuBtn || !mobileNav) {
      return;
    }

    function setOpen(open) {
      menuBtn.setAttribute(
        "aria-expanded",
        open ? "true" : "false"
      );

      menuBtn.setAttribute(
        "aria-label",
        open ? "Close menu" : "Open menu"
      );

      mobileNav.hidden = !open;

      if (open) {
        header.classList.add("scrolled");
      } else {
        onScroll();
      }
    }

    menuBtn.addEventListener(
      "click",
      function () {
        var isOpen =
          menuBtn.getAttribute(
            "aria-expanded"
          ) === "true";

        setOpen(!isOpen);
      }
    );

    mobileNav.addEventListener(
      "click",
      function (event) {
        if (
          event.target &&
          event.target.tagName === "A"
        ) {
          setOpen(false);
        }
      }
    );
  }

  /* =========================================================
     INITIALIZATION
     ========================================================= */

  function init() {
    var year =
      document.getElementById("year");

    if (year) {
      year.textContent = String(
        new Date().getFullYear()
      );
    }

    renderStars();
    renderRooms();
    renderFacilities();
    renderReviews();
    renderGallery();
    renderAttractions();
    renderFaqs();
    initHeader();
  }

  /* =========================================================
     START
     ========================================================= */

  if (document.readyState === "loading") {
    document.addEventListener(
      "DOMContentLoaded",
      init
    );
  } else {
    init();
  }
})();
