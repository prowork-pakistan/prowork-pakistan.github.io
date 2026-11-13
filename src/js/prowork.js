/* ProWork site script (vanilla, no dependencies).
 * - Mobile menu
 * - Plans: tabs + 9h/24h access switch
 * - WhatsApp links with the chosen plan pre-filled
 * - Call-back / contact forms posted to Web3Forms
 * - Full-screen photo viewer for the gallery
 * - Mobile sticky CTA
 * - Conversion events for GA4 and the Meta Pixel
 */
(function () {
  "use strict";

  var WA_NUMBER = "923348676891";
  var DEFAULT_WA_TEXT = "Hi Prowork! I'd like to book my free first day.";
  var doc = document;

  function $all(selector, root) {
    return Array.prototype.slice.call((root || doc).querySelectorAll(selector));
  }

  function track(eventName, params, pixelEvent) {
    if (!window.PW_TRACK) return; // local previews never report conversions
    try {
      if (typeof window.gtag === "function") window.gtag("event", eventName, params || {});
    } catch (e) { /* analytics must never break the page */ }
    try {
      if (pixelEvent && typeof window.fbq === "function") window.fbq("track", pixelEvent);
    } catch (e) { /* ignore */ }
  }

  // ---------- Year ----------
  $all("[data-year]").forEach(function (el) {
    el.textContent = String(new Date().getFullYear());
  });

  // ---------- Mobile menu ----------
  var toggle = doc.querySelector("[data-menu-toggle]");
  var menu = doc.getElementById("site-menu");
  if (toggle && menu) {
    var setMenu = function (open) {
      toggle.setAttribute("aria-expanded", open ? "true" : "false");
      menu.classList.toggle("is-open", open);
    };
    toggle.addEventListener("click", function () {
      setMenu(toggle.getAttribute("aria-expanded") !== "true");
    });
    menu.addEventListener("click", function (e) {
      if (e.target.closest("a")) setMenu(false);
    });
    doc.addEventListener("keydown", function (e) {
      if (e.key === "Escape" && toggle.getAttribute("aria-expanded") === "true") {
        setMenu(false);
        toggle.focus();
      }
    });
    var desktop = window.matchMedia("(min-width: 64em)");
    var onBreakpoint = function () { if (desktop.matches) setMenu(false); };
    if (desktop.addEventListener) desktop.addEventListener("change", onBreakpoint);
  }

  // ---------- WhatsApp links ----------
  var plans = doc.querySelector("[data-plans]");

  function currentAccess() {
    return plans ? plans.getAttribute("data-access") || "9" : "9";
  }

  function waText(link) {
    var plan = link.getAttribute("data-plan");
    if (!plan) return link.getAttribute("data-wa") || DEFAULT_WA_TEXT;

    var access = currentAccess();
    var tieredPrice = link.getAttribute("data-price-" + access);
    var name = (access === "24" && link.getAttribute("data-plan-24")) || plan;
    var detail = tieredPrice
      ? (access === "24" ? "24-hour access, " : "9 hours a day, ") + tieredPrice
      : link.getAttribute("data-price");
    return "Hi Prowork! I'm interested in the " + name + (detail ? " (" + detail + ")" : "") + ". When can I come in?";
  }

  function updateWaLinks() {
    $all("a[data-wa]").forEach(function (link) {
      link.href = "https://wa.me/" + WA_NUMBER + "?text=" + encodeURIComponent(waText(link));
    });
  }

  updateWaLinks();

  doc.addEventListener("click", function (e) {
    var link = e.target.closest && e.target.closest("a");
    if (!link) return;
    var where = link.getAttribute("data-wa-loc") || "";
    if (link.href.indexOf("https://wa.me/") === 0) {
      track("whatsapp_click", { link_location: where, plan: link.getAttribute("data-plan") || "" }, "Contact");
    } else if (link.href.indexOf("tel:") === 0) {
      track("phone_click", { link_location: where }, "Contact");
    }
  });

  // ---------- Plans: tabs + access switch ----------
  if (plans) {
    var tabs = $all('[role="tab"]', plans);
    var panels = tabs.map(function (tab) {
      return doc.getElementById(tab.getAttribute("aria-controls"));
    });
    var accessControl = plans.querySelector("[data-access-control]");
    var accessStatus = plans.querySelector("[data-access-status]");

    panels.forEach(function (panel, i) {
      panel.setAttribute("role", "tabpanel");
      panel.setAttribute("aria-labelledby", tabs[i].id);
    });

    var selectTab = function (index, moveFocus) {
      tabs.forEach(function (tab, i) {
        var active = i === index;
        tab.setAttribute("aria-selected", active ? "true" : "false");
        tab.tabIndex = active ? 0 : -1;
        panels[i].classList.toggle("is-active", active);
      });
      if (accessControl) accessControl.hidden = !tabs[index].hasAttribute("data-tiered");
      if (moveFocus) tabs[index].focus();
    };

    tabs.forEach(function (tab, i) {
      tab.addEventListener("click", function () { selectTab(i, false); });
      tab.addEventListener("keydown", function (e) {
        var last = tabs.length - 1;
        var next = null;
        if (e.key === "ArrowRight") next = i === last ? 0 : i + 1;
        else if (e.key === "ArrowLeft") next = i === 0 ? last : i - 1;
        else if (e.key === "Home") next = 0;
        else if (e.key === "End") next = last;
        if (next !== null) {
          e.preventDefault();
          selectTab(next, true);
        }
      });
    });

    $all('input[name="access"]', plans).forEach(function (radio) {
      radio.addEventListener("change", function () {
        if (!radio.checked) return;
        plans.setAttribute("data-access", radio.value);
        updateWaLinks();
        if (accessStatus) {
          accessStatus.textContent = radio.value === "24"
            ? "Showing prices with 24-hour access."
            : "Showing prices for 9 hours a day.";
        }
      });
    });

    // Deep links like /#plan-private-office open the right tab
    var openFromHash = function () {
      var id = window.location.hash.slice(1);
      var target = id && doc.getElementById(id);
      if (!target || !plans.contains(target)) return;
      var panel = target.closest("[data-panel]");
      var index = panels.indexOf(panel);
      if (index > -1) {
        selectTab(index, false);
        target.scrollIntoView();
      }
    };
    window.addEventListener("hashchange", openFromHash);

    selectTab(0, false);
    openFromHash();
  }

  // ---------- Photo viewer for the gallery ----------
  // Each photo links to its large file, so without JS (or with a modifier click) the photo opens on its own.
  var photoLinks = $all("a[data-lightbox]");
  if (photoLinks.length && typeof HTMLDialogElement === "function") {
    var viewer = null;
    var viewerImg, viewerText, viewerCount;
    var current = 0;
    var opener = null;
    var touchX = null;

    var captionFor = function (link) {
      var caption = link.closest("figure") && link.closest("figure").querySelector("figcaption");
      return caption ? caption.textContent.trim() : "";
    };

    var showPhoto = function (index) {
      current = (index + photoLinks.length) % photoLinks.length;
      var link = photoLinks[current];
      var thumb = link.querySelector("img");
      viewerImg.src = link.href;
      viewerImg.alt = thumb ? thumb.alt : "";
      viewerText.textContent = captionFor(link);
      viewerCount.textContent = (current + 1) + " of " + photoLinks.length;
      new Image().src = photoLinks[(current + 1) % photoLinks.length].href; // ready before the next swipe
    };

    var buildViewer = function () {
      viewer = doc.createElement("dialog");
      viewer.className = "lightbox";
      viewer.setAttribute("aria-label", "Photos of the space");
      viewer.innerHTML =
        '<figure class="lightbox__figure">' +
          '<img class="lightbox__img" width="1440" height="1080" alt="" />' +
          '<figcaption class="lightbox__caption" aria-live="polite"><span data-viewer-text></span> <span class="lightbox__count" data-viewer-count></span></figcaption>' +
        "</figure>" +
        '<button class="lightbox__btn lightbox__btn--close" type="button" data-viewer-close><svg class="icon" aria-hidden="true"><use href="#i-close"></use></svg><span class="visually-hidden">Close photos</span></button>' +
        '<button class="lightbox__btn lightbox__btn--prev" type="button" data-viewer-prev><svg class="icon" aria-hidden="true"><use href="#i-arrow"></use></svg><span class="visually-hidden">Previous photo</span></button>' +
        '<button class="lightbox__btn lightbox__btn--next" type="button" data-viewer-next><svg class="icon" aria-hidden="true"><use href="#i-arrow"></use></svg><span class="visually-hidden">Next photo</span></button>';
      doc.body.appendChild(viewer);

      viewerImg = viewer.querySelector(".lightbox__img");
      viewerText = viewer.querySelector("[data-viewer-text]");
      viewerCount = viewer.querySelector("[data-viewer-count]");

      viewer.querySelector("[data-viewer-close]").addEventListener("click", function () { viewer.close(); });
      viewer.querySelector("[data-viewer-prev]").addEventListener("click", function () { showPhoto(current - 1); });
      viewer.querySelector("[data-viewer-next]").addEventListener("click", function () { showPhoto(current + 1); });

      // A click on the dark area around the photo closes the viewer
      viewer.addEventListener("click", function (e) {
        if (e.target === viewer) viewer.close();
      });

      viewer.addEventListener("keydown", function (e) {
        if (e.key === "ArrowRight") {
          e.preventDefault();
          showPhoto(current + 1);
        } else if (e.key === "ArrowLeft") {
          e.preventDefault();
          showPhoto(current - 1);
        }
      });

      // Swipe left or right on phones
      viewer.addEventListener("touchstart", function (e) {
        touchX = e.touches.length === 1 ? e.touches[0].clientX : null;
      }, { passive: true });
      viewer.addEventListener("touchend", function (e) {
        if (touchX === null) return;
        var dx = e.changedTouches[0].clientX - touchX;
        touchX = null;
        if (Math.abs(dx) > 50) showPhoto(current + (dx < 0 ? 1 : -1));
      });

      viewer.addEventListener("close", function () {
        doc.documentElement.classList.remove("has-viewer");
        if (opener) opener.focus();
      });
    };

    photoLinks.forEach(function (link, i) {
      link.addEventListener("click", function (e) {
        if (e.button !== 0 || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return;
        e.preventDefault();
        if (!viewer) buildViewer();
        opener = link;
        showPhoto(i);
        viewer.showModal();
        doc.documentElement.classList.add("has-viewer");
        track("photo_view", { photo: captionFor(link) });
      });
    });
  }

  // ---------- Forms (Web3Forms) ----------
  function fieldMessage(input) {
    var value = input.value.trim();
    var label = input.getAttribute("data-label") || "details";
    if (input.required && !value) return "Please enter your " + label + ".";
    if (input.type === "email" && value && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) {
      return "Please enter an email address like name@example.com.";
    }
    if (input.type === "tel" && value && value.replace(/\D/g, "").length < 10) {
      return "Please enter a phone number with at least 10 digits.";
    }
    return "";
  }

  function showFieldError(input, message) {
    var field = input.closest(".field");
    var error = field && field.querySelector(".field__error");
    if (field) field.classList.toggle("is-invalid", !!message);
    input.setAttribute("aria-invalid", message ? "true" : "false");
    if (error) {
      error.textContent = message;
      error.hidden = !message;
    }
  }

  $all("form[data-lead-form]").forEach(function (form) {
    var status = form.querySelector("[data-form-status]");
    var button = form.querySelector('button[type="submit"]');
    var success = form.parentNode.querySelector("[data-form-success]");
    var inputs = $all("input, textarea", form).filter(function (el) {
      return el.type !== "hidden" && el.name !== "botcheck";
    });

    inputs.forEach(function (input) {
      input.addEventListener("blur", function () {
        if (input.value.trim()) showFieldError(input, fieldMessage(input));
      });
      input.addEventListener("input", function () {
        if (input.getAttribute("aria-invalid") === "true") showFieldError(input, fieldMessage(input));
      });
    });

    form.addEventListener("submit", function (e) {
      e.preventDefault();
      var firstInvalid = null;
      inputs.forEach(function (input) {
        var message = fieldMessage(input);
        showFieldError(input, message);
        if (message && !firstInvalid) firstInvalid = input;
      });
      if (firstInvalid) {
        status.textContent = "Please fix the highlighted field" + (inputs.filter(function (i) { return i.getAttribute("aria-invalid") === "true"; }).length > 1 ? "s." : ".");
        firstInvalid.focus();
        return;
      }

      var data = {};
      new FormData(form).forEach(function (value, key) { data[key] = value; });

      var label = button.textContent;
      button.disabled = true;
      button.setAttribute("aria-busy", "true");
      button.textContent = "Sending…";
      status.textContent = "";

      fetch(form.action, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify(data)
      })
        .then(function (response) {
          return response.json().catch(function () { return {}; }).then(function (json) {
            if (!response.ok || json.success === false) throw new Error(json.message || "Request failed");
          });
        })
        .then(function () {
          track("generate_lead", { method: "form", form_id: form.id || "" }, "Lead");
          form.reset();
          if (success) {
            form.hidden = true;
            success.hidden = false;
            success.focus();
          } else {
            status.textContent = "Thanks! We got your message and will get back to you soon.";
          }
        })
        .catch(function () {
          status.textContent = "Sorry, that didn’t send. Please try again, or message us on WhatsApp at +92 334 8676891.";
        })
        .then(function () {
          button.disabled = false;
          button.removeAttribute("aria-busy");
          button.textContent = label;
        });
    });
  });

  // ---------- Mobile sticky CTA ----------
  var sticky = doc.querySelector("[data-sticky-cta]");
  if (sticky && "IntersectionObserver" in window) {
    var hero = doc.querySelector("[data-hero]");
    var stops = $all("[data-sticky-stop]");
    var heroInView = !!hero;
    var stopsInView = new Set();

    var render = function () {
      sticky.classList.toggle("is-visible", !heroInView && stopsInView.size === 0);
    };

    if (hero) {
      new IntersectionObserver(function (entries) {
        heroInView = entries[0].isIntersecting;
        render();
      }).observe(hero);
    }

    var stopObserver = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) stopsInView.add(entry.target);
        else stopsInView.delete(entry.target);
      });
      render();
    });
    stops.forEach(function (el) { stopObserver.observe(el); });
    render();
  }
})();
