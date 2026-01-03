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

  const sections = document.querySelectorAll("section");
  const navLinks = document.querySelectorAll(".All-Links a");

  window.addEventListener("scroll", () => {
    let current = "";

    const scrollPosition = window.scrollY + window.innerHeight / 2;
    const pageBottom =
      window.innerHeight + window.scrollY >=
      document.documentElement.scrollHeight - 5;

    sections.forEach((section, index) => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.offsetHeight;

      // Normal sections
      if (
        scrollPosition >= sectionTop &&
        scrollPosition < sectionTop + sectionHeight
      ) {
        current = section.getAttribute("id");
      }

      //  FORCE last section (Contact) when at page bottom
      if (pageBottom && index === sections.length - 1) {
        current = section.getAttribute("id");
      }
    });

    navLinks.forEach((link) => {
      link.classList.remove("active");
      if (current && link.getAttribute("href") === `#${current}`) {
        link.classList.add("active");
      }
    });
  });

  // Unified scroll animation
  const animatedElements = document.querySelectorAll(
    ".scroll-fade, .fade-scroll, .skill-group"
  );

  const animationObserver = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible", "show");
          observer.unobserve(entry.target); // animate once
        }
      });
    },
    {
      threshold: 0.15,
    }
  );

  animatedElements.forEach((el, index) => {
    el.style.transitionDelay = `${index * 0.3}s`;
    animationObserver.observe(el);
  });

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
