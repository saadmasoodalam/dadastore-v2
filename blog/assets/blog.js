const blogHeader = document.querySelector("[data-blog-header]");
const blogNav = document.querySelector("[data-blog-nav]");
const blogNavToggle = document.querySelector("[data-blog-nav-toggle]");
const blogYearTargets = document.querySelectorAll("[data-blog-year]");
const filterButtons = document.querySelectorAll("[data-blog-filter]");
const articleCards = document.querySelectorAll("[data-blog-category]");
const filterStatus = document.querySelector("[data-blog-filter-status]");
const featuredCard = document.querySelector("[data-featured-card]");

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
        filterStatus.textContent = `Showing ${visibleCount} published ${noun}.`;
      }
    });
  });
}
const featuredWeekId = (value = new Date()) => {
  const midnight = Date.UTC(value.getUTCFullYear(), value.getUTCMonth(), value.getUTCDate());
  const day = new Date(midnight).getUTCDay();
  const mondayOffset = day === 0 ? -6 : 1 - day;
  return new Date(midnight + mondayOffset * 86400000).toISOString().slice(0, 10);
};

const isFeaturedCandidate = (post) => Boolean(
  post &&
  post.status === "published" &&
  typeof post.slug === "string" && post.slug &&
  typeof post.title === "string" && post.title &&
  typeof post.category === "string" && post.category &&
  typeof post.excerpt === "string" && post.excerpt &&
  /^\d{4}-\d{2}-\d{2}$/.test(post.date ?? "") &&
  typeof post.readingTime === "string" && post.readingTime &&
  typeof post.url === "string" && /^\.\/[a-z0-9-]+\/$/.test(post.url) &&
  post.cover &&
  typeof post.cover.src === "string" && /^\.\.\/assets\/images\/blog\/[a-z0-9-]+\.jpg$/.test(post.cover.src) &&
  typeof post.cover.alt === "string" && post.cover.alt.trim().length >= 20 &&
  post.cover.width === 1280 && post.cover.height === 720
);

const validFeaturedSchedule = (rotation, candidates) => {
  if (
    !rotation ||
    rotation.schemaVersion !== 1 ||
    rotation.timeZone !== "UTC" ||
    rotation.weekStarts !== "Monday" ||
    rotation.lookbackWeeks !== 8 ||
    !Array.isArray(rotation.assignments)
  ) return false;

  const eligibleSlugs = new Set(candidates.map((post) => post.slug));
  const weeks = new Set();
  let previousWeek = "";
  const prior = [];
  for (const assignment of rotation.assignments) {
    if (
      !assignment ||
      !/^\d{4}-\d{2}-\d{2}$/.test(assignment.week ?? "") ||
      weeks.has(assignment.week) ||
      (previousWeek && assignment.week <= previousWeek) ||
      !eligibleSlugs.has(assignment.slug) ||
      prior.slice(-8).some((item) => item.slug === assignment.slug)
    ) return false;
    weeks.add(assignment.week);
    previousWeek = assignment.week;
    prior.push(assignment);
  }
  return eligibleSlugs.has(rotation.fallbackSlug);
};

const preloadFeaturedCover = (cover) => new Promise((resolve, reject) => {
  const image = new Image();
  image.onload = async () => {
    try {
      if (typeof image.decode === "function") await image.decode();
      resolve();
    } catch (error) {
      reject(error);
    }
  };
  image.onerror = () => reject(new Error("Featured cover failed to load."));
  image.src = cover.src;
});

const initializeFeaturedInsight = async () => {
  if (!featuredCard) return;
  let warned = false;
  const warn = (message) => {
    if (warned) return;
    warned = true;
    console.warn(`[featured-insight] ${message}`);
  };

  try {
    const [postsResponse, rotationResponse] = await Promise.all([
      fetch("data/posts.json"),
      fetch("data/featured-rotation.json"),
    ]);
    if (!postsResponse.ok || !rotationResponse.ok) throw new Error("Featured data could not be loaded.");
    const [posts, rotation] = await Promise.all([postsResponse.json(), rotationResponse.json()]);
    const candidates = posts.filter(isFeaturedCandidate);
    if (!candidates.length || !validFeaturedSchedule(rotation, candidates)) throw new Error("Featured data failed validation.");

    const week = featuredWeekId();
    const assignment = rotation.assignments.find((item) => item.week === week);
    const selected = candidates.find((post) => post.slug === assignment?.slug);
    if (!selected) throw new Error(`No valid assignment exists for UTC week ${week}.`);

    const targets = {
      category: featuredCard.querySelector("[data-featured-category]"),
      title: featuredCard.querySelector("[data-featured-title]"),
      excerpt: featuredCard.querySelector("[data-featured-excerpt]"),
      date: featuredCard.querySelector("[data-featured-date]"),
      readingTime: featuredCard.querySelector("[data-featured-reading-time]"),
      link: featuredCard.querySelector("[data-featured-link]"),
      image: featuredCard.querySelector("[data-featured-image]"),
    };
    if (Object.values(targets).some((target) => !target)) throw new Error("Featured markup is incomplete.");

    await preloadFeaturedCover(selected.cover);
    const dateLabel = new Intl.DateTimeFormat("en-US", {
      year: "numeric", month: "long", day: "numeric", timeZone: "UTC",
    }).format(new Date(`${selected.date}T00:00:00.000Z`));

    targets.category.textContent = selected.category;
    targets.title.textContent = selected.title;
    targets.excerpt.textContent = selected.excerpt;
    targets.date.dateTime = selected.date;
    targets.date.textContent = dateLabel;
    targets.readingTime.textContent = selected.readingTime;
    targets.link.href = selected.url;
    targets.image.src = selected.cover.src;
    targets.image.alt = selected.cover.alt;
    targets.image.width = selected.cover.width;
    targets.image.height = selected.cover.height;
    featuredCard.dataset.featuredSlug = selected.slug;
  } catch (error) {
    warn(error instanceof Error ? error.message : "The static fallback remains active.");
  }
};

void initializeFeaturedInsight();
const categoryDirectoryRoot = document.querySelector("[data-category-directory]");
const categoryResults = document.querySelector("[data-category-results]");
const categoryResultsGrid = document.querySelector("[data-category-results-grid]");
const categoryResultsTitle = document.querySelector("[data-category-results-title]");
const categoryResultsDescription = document.querySelector("[data-category-results-description]");
const categoryResultsStatus = document.querySelector("[data-category-results-status]");
const categoryLinks = document.querySelectorAll("[data-category-link]");
const categoryClear = document.querySelector("[data-category-clear]");

const createCategoryArticleCard = (post) => {
  const article = document.createElement("article");
  article.className = "blog-article-card";
  article.dataset.blogCategory = post.category;

  const image = document.createElement("img");
  image.className = "blog-card-cover";
  image.src = post.cover.src.replace(/^\.\.\//, "../../");
  image.width = post.cover.width;
  image.height = post.cover.height;
  image.loading = "lazy";
  image.decoding = "async";
  image.alt = post.cover.alt;

  const body = document.createElement("div");
  body.className = "blog-card-body";
  const kicker = document.createElement("div");
  kicker.className = "blog-card-kicker";
  const category = document.createElement("span");
  category.textContent = post.category;
  kicker.append(category);
  const title = document.createElement("h3");
  title.textContent = post.title;
  const excerpt = document.createElement("p");
  excerpt.textContent = post.excerpt;
  const meta = document.createElement("div");
  meta.className = "blog-card-meta";
  const date = document.createElement("time");
  date.dateTime = post.date;
  date.textContent = new Intl.DateTimeFormat("en-US", { year: "numeric", month: "long", day: "numeric", timeZone: "UTC" }).format(new Date(`${post.date}T00:00:00.000Z`));
  const readingTime = document.createElement("span");
  readingTime.textContent = post.readingTime;
  meta.append(date, readingTime);
  const link = document.createElement("a");
  link.className = "blog-read-link";
  link.href = `../${post.slug}/`;
  link.append("Read Article ");
  const arrow = document.createElement("span");
  arrow.setAttribute("aria-hidden", "true");
  arrow.textContent = "\u2192";
  link.append(arrow);
  body.append(kicker, title, excerpt, meta, link);
  article.append(image, body);
  return article;
};

const initializeCategoryDirectory = async () => {
  if (!categoryDirectoryRoot || !categoryResults || !categoryResultsGrid || !categoryLinks.length) return;
  try {
    const response = await fetch("../data/posts.json");
    if (!response.ok) throw new Error("Category registry could not be loaded.");
    const posts = await response.json();
    const published = posts.filter((post) =>
      post.status === "published" &&
      typeof post.url === "string" && post.url &&
      post.cover && typeof post.cover.src === "string" && typeof post.cover.alt === "string"
    );
    const links = new Map([...categoryLinks].map((link) => [link.dataset.categoryLink, link]));

    const renderCategory = (slug, { updateHistory = false, scroll = false } = {}) => {
      const selectedLink = links.get(slug);
      categoryLinks.forEach((link) => {
        const active = link === selectedLink;
        link.classList.toggle("is-selected", active);
        if (active) link.setAttribute("aria-current", "true"); else link.removeAttribute("aria-current");
      });
      if (!selectedLink) {
        categoryResults.hidden = true;
        categoryResultsGrid.replaceChildren();
        return;
      }

      const title = selectedLink.querySelector("h2")?.textContent.trim() ?? "Category";
      const description = selectedLink.querySelector("p")?.textContent.trim() ?? "";
      const matches = published
        .filter((post) => post.category === title)
        .sort((a, b) => String(b.date).localeCompare(String(a.date)) || a.title.localeCompare(b.title));
      const fragment = document.createDocumentFragment();
      matches.forEach((post) => fragment.append(createCategoryArticleCard(post)));
      categoryResultsGrid.replaceChildren(fragment);
      categoryResultsTitle.textContent = title;
      categoryResultsDescription.textContent = description;
      const noun = matches.length === 1 ? "article" : "articles";
      categoryResultsStatus.textContent = `Showing ${matches.length} published ${noun}.`;
      categoryResults.hidden = false;
      if (updateHistory) history.pushState({ category: slug }, "", `?category=${encodeURIComponent(slug)}#category-results`);
      if (scroll) categoryResults.scrollIntoView({ behavior: "smooth", block: "start" });
    };

    categoryLinks.forEach((link) => link.addEventListener("click", (event) => {
      event.preventDefault();
      renderCategory(link.dataset.categoryLink, { updateHistory: true, scroll: true });
    }));
    categoryClear?.addEventListener("click", (event) => {
      event.preventDefault();
      history.pushState({}, "", "index.html");
      renderCategory(null);
      categoryDirectoryRoot.scrollIntoView({ behavior: "smooth", block: "start" });
    });
    window.addEventListener("popstate", () => renderCategory(new URLSearchParams(location.search).get("category")));
    renderCategory(new URLSearchParams(location.search).get("category"));
  } catch (error) {
    console.warn(`[category-directory] ${error instanceof Error ? error.message : "The directory remains available."}`);
  }
};

void initializeCategoryDirectory();