(function () {
  "use strict";

  document.documentElement.setAttribute("data-js-ready", "");

  const toggle = document.querySelector("[data-nav-toggle]");
  const navigation = document.querySelector("[data-navigation]");

  if (toggle && navigation) {
    const closeNavigation = function () {
      toggle.setAttribute("aria-expanded", "false");
      navigation.setAttribute("data-open", "false");
    };

    toggle.addEventListener("click", function () {
      const isOpen = toggle.getAttribute("aria-expanded") === "true";
      toggle.setAttribute("aria-expanded", String(!isOpen));
      navigation.setAttribute("data-open", String(!isOpen));
    });

    navigation.addEventListener("click", function (event) {
      if (event.target.closest("a")) {
        closeNavigation();
      }
    });

    document.addEventListener("keydown", function (event) {
      if (event.key === "Escape") {
        closeNavigation();
        toggle.focus();
      }
    });

    window.addEventListener("resize", function () {
      if (window.innerWidth >= 768) {
        closeNavigation();
      }
    });
  }

  const androidLinks = document.querySelectorAll("[data-genai-android-link]");
  if (
    typeof GENERATIVE_AI_PASSPORT_ANDROID_URL === "string" &&
    GENERATIVE_AI_PASSPORT_ANDROID_URL.trim() !== ""
  ) {
    androidLinks.forEach(function (link) {
      link.href = GENERATIVE_AI_PASSPORT_ANDROID_URL;
      link.hidden = false;
    });
  }
})();
