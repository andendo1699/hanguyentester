const chips = document.querySelectorAll(".chip");
const sections = document.querySelectorAll("main .section");
const sparkBtn = document.getElementById("sparkBtn");

chips.forEach((chip) => {
  chip.addEventListener("click", () => {
    chips.forEach((item) => item.classList.remove("active"));
    chip.classList.add("active");

    const filter = chip.dataset.filter;
    sections.forEach((section) => {
      const target = section.dataset.section;
      if (filter === "all" || target === filter) {
        section.classList.remove("hidden");
      } else {
        section.classList.add("hidden");
      }
    });
  });
});

if (sparkBtn) {
  sparkBtn.addEventListener("click", () => {
    document.body.classList.add("sparkle");
    setTimeout(() => document.body.classList.remove("sparkle"), 1200);
  });
}
