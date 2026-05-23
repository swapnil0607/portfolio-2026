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
    const frame = carousel.querySelector(".social-post-frame");
    const previous = carousel.querySelector("[data-social-prev]");
    const next = carousel.querySelector("[data-social-next]");
    const count = carousel.querySelector("[data-social-count]");
    const dotsWrap = carousel.querySelector("[data-social-dots]");
    const total = Number.parseInt(carousel.dataset.slides || "1", 10);
    let index = 0;
    let touchStartX = 0;
    let touchStartY = 0;
    let isSwiping = false;

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

    const goPrevious = () => {
      index = index === 0 ? total - 1 : index - 1;
      update();
    };

    const goNext = () => {
      index = index === total - 1 ? 0 : index + 1;
      update();
    };

    if (previous && next && total > 1) {
      previous.addEventListener("click", goPrevious);
      next.addEventListener("click", goNext);

      if (frame) {
        frame.addEventListener(
          "touchstart",
          (event) => {
            touchStartX = event.touches[0].clientX;
            touchStartY = event.touches[0].clientY;
            isSwiping = true;
          },
          { passive: true }
        );

        frame.addEventListener(
          "touchmove",
          (event) => {
            if (!isSwiping) {
              return;
            }

            const diffX = event.touches[0].clientX - touchStartX;
            const diffY = event.touches[0].clientY - touchStartY;

            if (Math.abs(diffX) > Math.abs(diffY) + 8) {
              event.preventDefault();
            }
          },
          { passive: false }
        );

        frame.addEventListener("touchend", (event) => {
          if (!isSwiping) {
            return;
          }

          const diffX = event.changedTouches[0].clientX - touchStartX;
          const diffY = event.changedTouches[0].clientY - touchStartY;
          isSwiping = false;

          if (Math.abs(diffX) < 42 || Math.abs(diffX) < Math.abs(diffY)) {
            return;
          }

          diffX < 0 ? goNext() : goPrevious();
        });
      }
    }

    update();
  });

});
