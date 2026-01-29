const sparkBtn = document.getElementById("sparkBtn");

if (sparkBtn) {
  sparkBtn.addEventListener("click", () => {
    document.body.classList.add("sparkle");
    setTimeout(() => document.body.classList.remove("sparkle"), 1200);
  });
}
