window.addEventListener("scroll", () => {
  const navbar = document.getElementById("navbar");
  navbar.style.boxShadow =
    window.scrollY > 20 ? "0 2px 10px rgba(0,0,0,0.3)" : "none";
});

const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll("nav ul li a");

window.addEventListener("scroll", () => {
  let current = "";
  sections.forEach((section) => {
    const sectionTop = section.offsetTop - 70;
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
