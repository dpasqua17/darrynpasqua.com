(function () {
  const DARK_TINT = "#8A6745";
  const LIGHT_TINT = "#755437";

  function upsertThemeMeta() {
    let meta = document.querySelector('meta[name="theme-color"]:not([media])');
    if (!meta) {
      meta = document.createElement("meta");
      meta.name = "theme-color";
      document.head.appendChild(meta);
    }
    return meta;
  }

  function resolveTheme() {
    const explicit = document.documentElement.getAttribute("data-theme");
    if (explicit === "light" || explicit === "dark") {
      return explicit;
    }
    return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
  }

  function syncThemeColor() {
    const theme = resolveTheme();
    upsertThemeMeta().setAttribute("content", theme === "dark" ? DARK_TINT : LIGHT_TINT);
  }

  syncThemeColor();

  const observer = new MutationObserver(syncThemeColor);
  observer.observe(document.documentElement, {
    attributes: true,
    attributeFilter: ["data-theme"],
  });

  window.matchMedia("(prefers-color-scheme: dark)").addEventListener("change", syncThemeColor);
  document.addEventListener("visibilitychange", syncThemeColor);
})();
