// Wait until DOM is fully loaded
document.addEventListener("DOMContentLoaded", () => {

  // Initialize AOS
  AOS.init();

  // Debounce function to improve scroll performance
  function debounce(func, wait) {
    let timeout;
    return function (...args) {
      clearTimeout(timeout);
      timeout = setTimeout(() => func.apply(this, args), wait);
    };
  }

  // Highlight navbar link on scroll
  const sections = document.querySelectorAll("section");
  const navLinks = document.querySelectorAll(".navbar-nav .nav-link");

  function highlightNav() {
    let current = "";
    let maxVisibleHeight = 0;

    sections.forEach(section => {
      const rect = section.getBoundingClientRect();
      const visibleHeight = Math.min(window.innerHeight, rect.bottom) - Math.max(0, rect.top);

      if (visibleHeight > maxVisibleHeight && visibleHeight > 0) {
        maxVisibleHeight = visibleHeight;
        current = section.getAttribute("id");
      }
    });

    navLinks.forEach(link => {
      link.classList.remove("active");
      if (link.getAttribute("href").includes(current)) {
        link.classList.add("active");
      }
    });
  }

  window.addEventListener("scroll", debounce(highlightNav, 100));
  window.addEventListener("load", highlightNav);

  // Typewriter Effect
  const typewriterText = "Module Lead & Full Stack .NET Developer | C#, SQL, Oracle, Node.js";
  const typewriterElement = document.getElementById("typewriter");

  if (typewriterElement) {
    let i = 0;
    function typeWriter() {
      if (i === 0) typewriterElement.innerHTML = ""; // Reset before starting
      if (i < typewriterText.length) {
        typewriterElement.innerHTML += typewriterText.charAt(i);
        i++;
        setTimeout(typeWriter, 50);
      }
    }
    typeWriter();
  }

  // Back to Top Button
  const backToTop = document.getElementById("backToTop");
  if (backToTop) {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 300) {
        backToTop.classList.add("show");
      } else {
        backToTop.classList.remove("show");
      }
    });

    backToTop.addEventListener("click", (e) => {
      e.preventDefault();
      window.scrollTo({
        top: 0,
        behavior: "smooth"
      });
    });
  }
});
