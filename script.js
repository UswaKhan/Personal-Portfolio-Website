
document.addEventListener("DOMContentLoaded", () => {
  const sidebar = document.getElementById("sidebar");
  const openBtn = document.getElementById("openSidebar");
  const closeBtn = document.getElementById("closeSidebar");

  openBtn.addEventListener("click", () => {
    sidebar.classList.remove("translate-x-full");
  });

  closeBtn.addEventListener("click", () => {
    sidebar.classList.add("translate-x-full");
  });

  // Optional: Close on outside click
  document.addEventListener("click", (e) => {
    if (!sidebar.contains(e.target) && !openBtn.contains(e.target)) {
      sidebar.classList.add("translate-x-full");
    }
  });

  const navbar = document.getElementById("navbar");

  window.addEventListener("scroll", () => {
    if (window.scrollY > 50) {
      navbar.classList.add("bg-black");
    } else {
      navbar.classList.remove("bg-black");
    }
  });

  // 👇 Scroll Reveal Animation
  const revealElements = document.querySelectorAll(".reveal");

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("opacity-100", "translate-y-0");
          entry.target.classList.remove("opacity-0", "translate-y-10");
        } else {
          // Reset the animation when it goes out of view
          entry.target.classList.remove("opacity-100", "translate-y-0");
          entry.target.classList.add("opacity-0", "translate-y-10");
        }
      });
    },
    {
      threshold: 0.3
    }
  );


  revealElements.forEach(el => observer.observe(el));
});

 document.addEventListener("DOMContentLoaded", function () {
    const tabButtons = document.querySelectorAll("ul li[data-target]");
    const showContent = document.querySelector(".show-content");

    tabButtons.forEach(button => {
      button.addEventListener("click", function () {
        const targetId = this.getAttribute("data-target");
        const targetTemplate = document.getElementById(targetId);

        if (targetTemplate && showContent) {
          showContent.innerHTML = targetTemplate.innerHTML;
        }

        // Optional: Highlight active tab
        tabButtons.forEach(btn => btn.classList.remove("bg-light-green","text-black"));
        this.classList.add("bg-light-green","text-black");
      });
    });

    // Load the default content (optional)
    const defaultTab = document.querySelector("ul li[data-target]");
    if (defaultTab) defaultTab.click();
  });

  // JavaScript for smooth scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const targetId = this.getAttribute('href');
    const targetElement = document.querySelector(targetId);
    if (targetElement) {
      targetElement.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  });
});

const mobileMenuToggle = document.getElementById('mobileMenuToggle');
  const mobileMenu = document.getElementById('mobileMenu');

  mobileMenuToggle.addEventListener('click', () => {
    mobileMenu.classList.toggle('hidden');
  });