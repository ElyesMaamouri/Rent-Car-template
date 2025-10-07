// accordion
document.querySelectorAll(".accordion").forEach(accordion => {
  accordion.querySelectorAll(".accordion-header").forEach(header => {
    header.addEventListener("click", function () {
      const content = this.nextElementSibling;
      const iconBox = this.querySelector(".icon-box");

      // Fermer les autres
      accordion.querySelectorAll(".accordion-content").forEach(c => {
        if (c !== content) {
          c.classList.remove("open");
          c.previousElementSibling.classList.remove("active");
          c.previousElementSibling.querySelector(".icon-box").textContent = "+";
        }
      });

      // Toggle
      if (content.classList.contains("open")) {
        content.classList.remove("open");
        this.classList.remove("active");
        iconBox.textContent = "+";
      } else {
        content.classList.add("open");
        this.classList.add("active");
        iconBox.textContent = "–";
      }
    });
  });
});
