// Set footer year
document.getElementById("year").textContent = new Date().getFullYear();

// Optional: offset fix for sticky header when jumping to anchors
// (prevents headings from hiding under the navbar)
const NAV_HEIGHT = 64;

function scrollWithOffset(hash) {
  const el = document.querySelector(hash);
  if (!el) return;
  const top = el.getBoundingClientRect().top + window.pageYOffset - NAV_HEIGHT - 10;
  window.scrollTo({ top, behavior: "smooth" });
}

document.querySelectorAll('a[href^="#"]').forEach(a => {
  a.addEventListener("click", (e) => {
    const href = a.getAttribute("href");
    if (!href || href === "#") return;
    e.preventDefault();
    history.pushState(null, "", href);
    scrollWithOffset(href);
  });
});