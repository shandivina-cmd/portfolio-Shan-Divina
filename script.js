// Theme toggle
const toggle = document.getElementById("themeToggle");
toggle.addEventListener("click", () => {
  document.body.classList.toggle("light");
  toggle.textContent = document.body.classList.contains("light") ? "☀️" : "🌙";
});

// Tilt effect (card hover 3D)
function addTilt(el) {
  const rect = el.getBoundingClientRect();
  el.addEventListener("mousemove", (e) => {
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const rx = ((y / rect.height) - 0.5) * -8; // rotateX
    const ry = ((x / rect.width) - 0.5) * 10;  // rotateY
    el.style.transform = `rotateX(${rx}deg) rotateY(${ry}deg)`;
  });
  el.addEventListener("mouseleave", () => {
    el.style.transform = "rotateX(0) rotateY(0)";
  });
}
document.querySelectorAll(".tilt").forEach(addTilt);

// Parallax background subtle movement
const parallaxEl = document.querySelector(".parallax");
if (parallaxEl) {
  document.addEventListener("mousemove", (e) => {
    const x = (e.clientX / window.innerWidth - 0.5) * 10;
    const y = (e.clientY / window.innerHeight - 0.5) * 10;
    parallaxEl.style.transform = `translate3d(${x}px, ${y}px, 0)`;
  });
}

// Smooth scroll for internal links
document.querySelectorAll('a[href^="#"]').forEach(a => {
  a.addEventListener("click", (e) => {
    e.preventDefault();
    const t = document.querySelector(a.getAttribute("href"));
    if (t) t.scrollIntoView({ behavior: "smooth", block: "start" });
  });
});