!function(e,a){a.behaviors.toggleLanguageSwitcher={attach:function(a){e(once("toggleLanguageSwitcher",".language-links-wrapper button")).on("click",(function(){e(this).siblings(".links").toggleClass("active")})),once("toggleOutsideSwitcherClick","html").length&&e(document).on("click",(function(a){if(void 0!==e(".language-links-wrapper.open")){let n=e(a.target),l=e(".language-links-wrapper .links");!n.closest(".language-switcher-language-url").length&&l.is(":visible")&&(e(".language-links-wrapper").removeClass("open"),e('[data-once="toggleLanguageSwitcher"]').attr("aria-expanded","false"),l.removeClass("active"))}}))}}}(jQuery,Drupal);