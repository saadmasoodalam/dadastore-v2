const header = document.querySelector("[data-header]");
const nav = document.querySelector("[data-nav]");
const navToggle = document.querySelector("[data-nav-toggle]");
const year = document.querySelector("[data-year]");
const backToTop = document.querySelector("[data-back-to-top]");
const revealItems = document.querySelectorAll(".reveal");
const navLinks = document.querySelectorAll('.site-nav a[href^="#"]');
const sections = document.querySelectorAll("#services, #process, #proof, #work, #reviews, #contact");
const prefersReducedMotion = window.matchMedia?.("(prefers-reduced-motion: reduce)").matches ?? false;
const scrollBehavior = prefersReducedMotion ? "auto" : "smooth";

if (year) {
  year.textContent = new Date().getFullYear();
}

const closeNav = ({ restoreFocus = false } = {}) => {
  if (!nav || !navToggle) return;

  const wasOpen = nav.classList.contains("is-open");
  nav.classList.remove("is-open");
  navToggle.classList.remove("is-open");
  navToggle.setAttribute("aria-expanded", "false");
  navToggle.setAttribute("aria-label", "Open navigation");
  document.body.classList.remove("nav-open");

  if (restoreFocus && wasOpen) {
    navToggle.focus();
  }
};

const updateScrollState = () => {
  header?.classList.toggle("is-scrolled", window.scrollY > 12);
  backToTop?.classList.toggle("is-visible", window.scrollY > 500);
};

updateScrollState();
window.addEventListener("scroll", updateScrollState, { passive: true });

if (nav && navToggle) {
  navToggle.addEventListener("click", () => {
    const isOpen = nav.classList.toggle("is-open");
    navToggle.classList.toggle("is-open", isOpen);
    navToggle.setAttribute("aria-expanded", String(isOpen));
    navToggle.setAttribute("aria-label", isOpen ? "Close navigation" : "Open navigation");
    document.body.classList.toggle("nav-open", isOpen);
  });

  nav.addEventListener("click", (event) => {
    if (event.target instanceof HTMLAnchorElement) {
      closeNav();
    }
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && nav.classList.contains("is-open")) {
      closeNav({ restoreFocus: true });
    }
  });

  document.addEventListener("click", (event) => {
    const target = event.target;

    if (
      nav.classList.contains("is-open") &&
      target instanceof Node &&
      !nav.contains(target) &&
      !navToggle.contains(target)
    ) {
      closeNav();
    }
  });
}

document.querySelectorAll('a[href^="#"]').forEach((link) => {
  link.addEventListener("click", (event) => {
    const targetId = link.getAttribute("href");
    const target = targetId ? document.querySelector(targetId) : null;

    if (!target) return;

    event.preventDefault();
    closeNav();
    target.scrollIntoView({ behavior: scrollBehavior, block: "start" });
  });
});

if (backToTop) {
  backToTop.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: scrollBehavior });
  });
}

if ("IntersectionObserver" in window && sections.length) {
  const activeObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;

        navLinks.forEach((link) => {
          link.classList.toggle("is-active", link.getAttribute("href") === `#${entry.target.id}`);
        });
      });
    },
    {
      rootMargin: "-35% 0px -55% 0px",
      threshold: 0
    }
  );

  sections.forEach((section) => activeObserver.observe(section));
}

if (prefersReducedMotion) {
  revealItems.forEach((item) => item.classList.add("is-visible"));
} else if ("IntersectionObserver" in window) {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.14 }
  );

  revealItems.forEach((item) => observer.observe(item));
} else {
  revealItems.forEach((item) => item.classList.add("is-visible"));
}

// DaDaStore Research analytics: GA4 is loaded only on /research/ pages.
if (window.location.pathname.startsWith("/research")) {
  const GA_MEASUREMENT_ID = "G-K37BBZRTJE";

  window.dataLayer = window.dataLayer || [];
  window.gtag = window.gtag || function () {
    window.dataLayer.push(arguments);
  };

  const gaScript = document.createElement("script");
  gaScript.async = true;
  gaScript.src = `https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`;
  document.head.appendChild(gaScript);

  window.gtag("js", new Date());
  window.gtag("config", GA_MEASUREMENT_ID, {
    send_page_view: true
  });

  const path = window.location.pathname;
  const isPaper = path.includes("/research/papers/");
  const paperId = isPaper ? path.split("/").pop().replace(/\.html$/, "") : "research-index";

  const sendResearchEvent = (eventName, parameters = {}) => {
    window.gtag("event", eventName, {
      research_area: "dadastore_research",
      paper_id: paperId,
      page_path: path,
      ...parameters
    });
  };

  sendResearchEvent(isPaper ? "paper_open" : "research_index_open");

  if (isPaper) {
    const reached = new Set();
    const thresholds = [25, 50, 75, 90];

    const trackScrollDepth = () => {
      const scrollable = document.documentElement.scrollHeight - window.innerHeight;
      if (scrollable <= 0) return;
      const percent = Math.min(100, Math.round((window.scrollY / scrollable) * 100));

      thresholds.forEach((threshold) => {
        if (percent >= threshold && !reached.has(threshold)) {
          reached.add(threshold);
          sendResearchEvent("paper_scroll_depth", { percent_scrolled: threshold });
        }
      });
    };

    window.addEventListener("scroll", trackScrollDepth, { passive: true });
    trackScrollDepth();

    let visibleSeconds = 0;
    let engagedSent = false;
    const engagementTimer = window.setInterval(() => {
      if (document.visibilityState === "visible") {
        visibleSeconds += 5;
      }
      if (!engagedSent && visibleSeconds >= 60) {
        engagedSent = true;
        sendResearchEvent("paper_engaged_reader", { engaged_seconds: 60 });
        window.clearInterval(engagementTimer);
      }
    }, 5000);

    document.querySelectorAll('a[href^="mailto:"]').forEach((link) => {
      link.addEventListener("click", () => {
        sendResearchEvent("review_request_click", {
          link_text: (link.textContent || "").trim().slice(0, 100)
        });
      });
    });
  } else {
    document.querySelectorAll('a[href*="papers/"]').forEach((link) => {
      link.addEventListener("click", () => {
        sendResearchEvent("paper_link_click", {
          destination: link.getAttribute("href") || ""
        });
      });
    });
  }
}
