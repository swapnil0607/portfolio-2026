document.addEventListener("DOMContentLoaded", () => {
  const animatedItems = document.querySelectorAll(
    ".reveal, .project-card, .case-study-card, .service-card, .process-card, .content-block, .timeline-item, .stat-card, .approach-card"
  );

  const markReady = (item) => {
    item.classList.add("is-visible");

    window.setTimeout(() => {
      item.classList.add("has-revealed");
      item.style.removeProperty("--reveal-delay");
    }, 720);
  };

  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    animatedItems.forEach((item) => {
      item.classList.add("is-visible", "has-revealed");
      item.style.removeProperty("--reveal-delay");
    });
    return;
  }

  if (!("IntersectionObserver" in window)) {
    animatedItems.forEach((item) => {
      item.classList.add("is-visible", "has-revealed");
      item.style.removeProperty("--reveal-delay");
    });
    return;
  }

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) {
          return;
        }

        markReady(entry.target);
        observer.unobserve(entry.target);
      });
    },
    {
      rootMargin: "0px 0px -8% 0px",
      threshold: 0.12
    }
  );

  animatedItems.forEach((item, index) => {
    item.style.setProperty("--reveal-delay", `${Math.min(index % 6, 5) * 45}ms`);
    observer.observe(item);
  });

  const parallaxItems = document.querySelectorAll("[data-parallax]");
  let parallaxTicking = false;

  const updateParallax = () => {
    const scrollY = window.scrollY || window.pageYOffset;

    parallaxItems.forEach((item) => {
      const offset = Math.max(-22, Math.min(22, scrollY * -0.014));
      item.style.setProperty("--parallax-y", `${offset}px`);
    });

    parallaxTicking = false;
  };

  window.addEventListener(
    "scroll",
    () => {
      if (parallaxTicking || parallaxItems.length === 0) {
        return;
      }

      parallaxTicking = true;
      window.requestAnimationFrame(updateParallax);
    },
    { passive: true }
  );
});
