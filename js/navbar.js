// Disable browser scroll restoration so mobile opens cleanly at the top (0, 0)
if ("scrollRestoration" in history) {
  history.scrollRestoration = "manual";
}
if (!window.location.hash && window.scrollY > 0) {
  window.scrollTo(0, 0);
}

window.addEventListener("pageshow", (event) => {
  if (!window.location.hash) {
    window.scrollTo(0, 0);
  }
});

document.addEventListener("DOMContentLoaded", () => {
  const body = document.body;
  const header = document.querySelector("[data-header]");
  const toggle = document.querySelector("[data-menu-toggle]");
  const mobileNav = document.querySelector("[data-mobile-nav]");
  const page = body.dataset.page;

  if (!window.location.hash) {
    window.scrollTo(0, 0);
  }

  document.querySelectorAll(`[data-nav="${page}"]`).forEach((link) => {
    link.classList.add("is-active");
  });

  let headerTicking = false;
  const setHeaderState = () => {
    if (header) {
      header.classList.toggle("is-scrolled", window.scrollY > 12);
    }
    headerTicking = false;
  };

  setHeaderState();
  window.addEventListener(
    "scroll",
    () => {
      if (!headerTicking) {
        headerTicking = true;
        window.requestAnimationFrame(setHeaderState);
      }
    },
    { passive: true }
  );

  if (!toggle || !mobileNav) {
    return;
  }

  toggle.addEventListener("click", () => {
    const isOpen = body.classList.toggle("menu-open");
    toggle.setAttribute("aria-expanded", String(isOpen));
    toggle.setAttribute("aria-label", isOpen ? "Close navigation" : "Open navigation");
  });

  mobileNav.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      body.classList.remove("menu-open");
      toggle.setAttribute("aria-expanded", "false");
      toggle.setAttribute("aria-label", "Open navigation");
    });
  });

  // Smooth scroll for hash links without needing global scroll-behavior: smooth
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", (e) => {
      const hash = anchor.getAttribute("href");
      if (hash && hash !== "#") {
        const target = document.querySelector(hash);
        if (target) {
          e.preventDefault();
          target.scrollIntoView({ behavior: "smooth" });
          if (history.pushState) {
            history.pushState(null, "", hash);
          }
        }
      }
    });
  });
});

