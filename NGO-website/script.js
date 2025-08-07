const menuIcon = document.getElementById('menu');
const nav = document.getElementById('navList');

menuIcon.addEventListener('click', () => {
    nav.classList.toggle('active');
    
    // Toggle icon between bars and X
    if (menuIcon.classList.contains('fa-bars')) {
        menuIcon.classList.remove('fa-bars');
        menuIcon.classList.add('fa-xmark');
    } else {
        menuIcon.classList.remove('fa-xmark');
        menuIcon.classList.add('fa-bars');
    }
});

//scrolling 
const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".nav-link");

  window.addEventListener("scroll", () => {
    let current = "";

    // Find the current section in view
    sections.forEach(section => {
      const sectionTop = section.offsetTop - 80; // Adjust if you have a fixed header
      const sectionHeight = section.clientHeight;

      if (window.scrollY >= sectionTop && window.scrollY < sectionTop + sectionHeight) {
        current = section.getAttribute("id"); // Get ID of current section
      }
    });

    // Update the nav links
    navLinks.forEach(link => {
      link.classList.remove("active"); // Remove highlight
      if (link.getAttribute("href") === "#" + current) {
        link.classList.add("active"); // Highlight the active one
      }
    });
  });