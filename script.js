// Menu Mobile Toggle
const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

if (hamburger) {
  hamburger.addEventListener("click", () => {
    navMenu.classList.toggle("active");
    hamburger.classList.toggle("active");
  });

  // Fechar menu ao clicar em um link
  document.querySelectorAll(".nav-menu a").forEach((link) => {
    link.addEventListener("click", () => {
      navMenu.classList.remove("active");
      hamburger.classList.remove("active");
    });
  });

  // Fechar menu ao clicar fora
  document.addEventListener("click", (e) => {
    if (!e.target.closest(".navbar")) {
      navMenu.classList.remove("active");
      hamburger.classList.remove("active");
    }
  });
}

// Animação de scroll para links internos
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    const href = this.getAttribute("href");
    if (href !== "#") {
      e.preventDefault();
      const target = document.querySelector(href);
      if (target) {
        target.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }
    }
  });
});

// Adicionar classe ativa na navegação conforme scroll
window.addEventListener("scroll", () => {
  let current = "";
  const sections = document.querySelectorAll("section[id], header[id]");

  sections.forEach((section) => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.clientHeight;
    if (pageYOffset >= sectionTop - 200) {
      current = section.getAttribute("id");
    }
  });

  document.querySelectorAll(".nav-menu a").forEach((link) => {
    link.classList.remove("active");
    if (link.getAttribute("href") === `#${current}`) {
      link.classList.add("active");
    }
  });
});

// Efeito parallax suave no hero
const hero = document.querySelector(".hero");
window.addEventListener("scroll", () => {
  if (window.innerWidth > 768) {
    hero.style.backgroundPosition = `center ${window.scrollY * 0.5}px`;
  }
});

// Animação de fade-in ao entrar na viewport
const observerOptions = {
  threshold: 0.1,
  rootMargin: "0px 0px -100px 0px",
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = "1";
      entry.target.style.transform = "translateY(0)";
    }
  });
}, observerOptions);

// Aplicar animação em cards e items
document
  .querySelectorAll(".project-card, .experience-item, .skills-list li")
  .forEach((el) => {
    el.style.opacity = "0";
    el.style.transform = "translateY(20px)";
    el.style.transition = "all 0.6s ease";
    observer.observe(el);
  });

// Validação de email simples
function isValidEmail(email) {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test(email);
}

// Log de inicialização
console.log("Portfolio carregado com sucesso!");
