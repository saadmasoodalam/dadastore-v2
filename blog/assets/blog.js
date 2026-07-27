const blogHeader = document.querySelector("[data-blog-header]");
const blogNav = document.querySelector("[data-blog-nav]");
const blogNavToggle = document.querySelector("[data-blog-nav-toggle]");
const blogYearTargets = document.querySelectorAll("[data-blog-year]");
const filterButtons = document.querySelectorAll("[data-blog-filter]");
const articleCards = document.querySelectorAll("[data-blog-category]");
const filterStatus = document.querySelector("[data-blog-filter-status]");

blogYearTargets.forEach((target) => {
  target.textContent = new Date().getFullYear();
});

const closeBlogNav = ({ restoreFocus = false } = {}) => {
  if (!blogNav || !blogNavToggle) return;

  const wasOpen = blogNav.classList.contains("is-open");
  blogNav.classList.remove("is-open");
  blogNavToggle.classList.remove("is-open");
  blogNavToggle.setAttribute("aria-expanded", "false");
  blogNavToggle.setAttribute("aria-label", "Open navigation");
  document.body.classList.remove("blog-menu-open");

  if (restoreFocus && wasOpen) {
    blogNavToggle.focus();
  }
};

if (blogNav && blogNavToggle) {
  blogNavToggle.addEventListener("click", () => {
    const isOpen = blogNav.classList.toggle("is-open");
    blogNavToggle.classList.toggle("is-open", isOpen);
    blogNavToggle.setAttribute("aria-expanded", String(isOpen));
    blogNavToggle.setAttribute("aria-label", isOpen ? "Close navigation" : "Open navigation");
    document.body.classList.toggle("blog-menu-open", isOpen);
  });

  blogNav.addEventListener("click", (event) => {
    if (event.target instanceof HTMLAnchorElement) {
      closeBlogNav();
    }
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && blogNav.classList.contains("is-open")) {
      closeBlogNav({ restoreFocus: true });
    }
  });

  document.addEventListener("click", (event) => {
    const target = event.target;

    if (
      blogNav.classList.contains("is-open") &&
      target instanceof Node &&
      !blogNav.contains(target) &&
      !blogNavToggle.contains(target)
    ) {
      closeBlogNav();
    }
  });
}

if (blogHeader) {
  const updateHeader = () => {
    blogHeader.classList.toggle("is-scrolled", window.scrollY > 10);
  };

  updateHeader();
  window.addEventListener("scroll", updateHeader, { passive: true });
}

if (filterButtons.length && articleCards.length) {
  filterButtons.forEach((button) => {
    button.addEventListener("click", () => {
      const filter = button.dataset.blogFilter ?? "all";
      let visibleCount = 0;

      filterButtons.forEach((item) => {
        const isActive = item === button;
        item.classList.toggle("is-active", isActive);
        item.setAttribute("aria-pressed", String(isActive));
      });

      articleCards.forEach((card) => {
        const shouldShow = filter === "all" || card.dataset.blogCategory === filter;
        card.hidden = !shouldShow;
        if (shouldShow) visibleCount += 1;
      });

      if (filterStatus) {
        const noun = visibleCount === 1 ? "article" : "articles";
        filterStatus.textContent = `Showing ${visibleCount} draft ${noun}.`;
      }
    });
  });
}
