document.addEventListener("DOMContentLoaded", () => {
  const filterButtons = document.querySelectorAll("[data-filter]");
  const projectCards = document.querySelectorAll("[data-category]");

  filterButtons.forEach((button) => {
    button.addEventListener("click", () => {
      const filter = button.dataset.filter;

      filterButtons.forEach((item) => item.classList.remove("is-active"));
      button.classList.add("is-active");

      projectCards.forEach((card) => {
        const isVisible = filter === "all" || card.dataset.category === filter;
        card.classList.toggle("is-hidden", !isVisible);
      });
    });
  });

  document.querySelectorAll("[data-social-carousel]").forEach((carousel) => {
    const image = carousel.querySelector(".social-post-frame img");
    const previous = carousel.querySelector("[data-social-prev]");
    const next = carousel.querySelector("[data-social-next]");
    const count = carousel.querySelector("[data-social-count]");
    const dotsWrap = carousel.querySelector("[data-social-dots]");
    const total = Number.parseInt(carousel.dataset.slides || "1", 10);
    let index = 0;

    if (!image || !dotsWrap || Number.isNaN(total)) {
      return;
    }

    const dots = Array.from({ length: total }, (_, dotIndex) => {
      const dot = document.createElement("button");
      dot.type = "button";
      dot.className = "social-post-dot";
      dot.setAttribute("aria-label", `Go to slide ${dotIndex + 1}`);
      dot.addEventListener("click", () => {
        index = dotIndex;
        update();
      });
      dotsWrap.appendChild(dot);
      return dot;
    });

    const update = () => {
      image.style.setProperty("--social-slide-offset", `${index * -100 / total}%`);
      if (count) {
        count.textContent = `${index + 1} / ${total}`;
      }
      dots.forEach((dot, dotIndex) => {
        dot.classList.toggle("is-active", dotIndex === index);
      });
    };

    if (previous && next && total > 1) {
      previous.addEventListener("click", () => {
        index = index === 0 ? total - 1 : index - 1;
        update();
      });

      next.addEventListener("click", () => {
        index = index === total - 1 ? 0 : index + 1;
        update();
      });
    }

    update();
  });

});
