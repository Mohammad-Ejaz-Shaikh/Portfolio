document.addEventListener("DOMContentLoaded", () => {
  //Navbar Scroll Effect
  window.addEventListener("scroll", () => {
    document
      .querySelector(".navbar")
      .classList.toggle("scrolled", window.scrollY > 5);
  });

  document.querySelectorAll(".All-Links a").forEach((link) => {
    link.addEventListener("click", function (e) {
      e.preventDefault(); // stop default jump
      const target = document.querySelector(this.getAttribute("href"));
      if (target) {
        target.scrollIntoView({ behavior: "smooth" });
      }
    });
  });
  //smooth navigation scroll

  const elements = document.querySelectorAll(".scroll-fade");

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("show");
      }
    });
  });

  elements.forEach((el) => observer.observe(el));

  const sections = document.querySelectorAll("section");
  const navLinks = document.querySelectorAll(".All-Links a");

  window.addEventListener("scroll", () => {
    let current = "";

    sections.forEach((section) => {
      const sectionTop = section.offsetTop - 100;
      if (scrollY >= sectionTop) {
        current = section.getAttribute("id");
      }
    });

    navLinks.forEach((link) => {
      link.classList.remove("active");
      if (link.getAttribute("href").includes(current)) {
        link.classList.add("active");
      }
    });
  });

  // Scroll fade animation
  const targets = document.querySelectorAll(".fade-scroll");

  function checkVisible() {
    targets.forEach((el, index) => {
      const rect = el.getBoundingClientRect();
      if (
        rect.top < window.innerHeight - 100 &&
        !el.classList.contains("visible")
      ) {
        setTimeout(() => {
          el.classList.add("visible");
        }, index * 300);
      }
    });
  }

  window.addEventListener("scroll", checkVisible);
  checkVisible();

  const skillGroups = document.querySelectorAll(".skill-group");

  function checkSkills() {
    skillGroups.forEach((el, index) => {
      const rect = el.getBoundingClientRect();

      if (
        rect.top < window.innerHeight - 100 &&
        !el.classList.contains("visible")
      ) {
        el.style.transitionDelay = `${index * 0.25}s`;
        el.classList.add("visible");

        setTimeout(() => {
          el.style.transitionDelay = "0s";
        }, index * 300 + 400);
      }
    });
  }

  window.addEventListener("scroll", checkSkills);
  window.addEventListener("load", checkSkills);

  // Back to top Button
  const topBtn = document.getElementById("backToTop");

  window.addEventListener("scroll", () => {
    if (window.scrollY > 400) {
      topBtn.style.display = "flex";
    } else {
      topBtn.style.display = "none";
    }
  });

  topBtn.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
});
