let scroll; // escopo global

function animarComLocomotive() {
  const isMobile = window.innerWidth <= 768;

  if (!isMobile) {
    gsap.registerPlugin(ScrollTrigger);

    scroll = new LocomotiveScroll({
      el: document.querySelector("#main"),
      smooth: true,
      smartphone: {
        smooth: false
      },
      tablet: {
        smooth: false
      }
    });

    scroll.on("scroll", ScrollTrigger.update);

    ScrollTrigger.scrollerProxy("#main", {
      scrollTop(value) {
        return arguments.length ? scroll.scrollTo(value, 0, 0) : scroll.scroll.instance.scroll.y;
      },
      getBoundingClientRect() {
        return {
          top: 0,
          left: 0,
          width: window.innerWidth,
          height: window.innerHeight
        };
      },
      pinType: document.querySelector("#main").style.transform ? "transform" : "fixed"
    });

    ScrollTrigger.addEventListener("refresh", () => scroll.update());
    ScrollTrigger.refresh();
  } else {
    document.querySelector("#main").style.overflow = "auto";
    document.querySelector("#main").style.height = "auto";

    document.body.style.overflow = "auto";
    document.body.style.height = "auto";

    if (scroll) {
      scroll.destroy();
      scroll = null;
    }

    gsap.registerPlugin(ScrollTrigger);
    ScrollTrigger.defaults({
      scroller: window
    });
  }
}

animarComLocomotive();

// Hero com efeito de parallax fixo suave
function animarHeroFixo() {
  gsap.to(".hero-image img", {
    scale: 1.35,
    ease: "none",
    scrollTrigger: {
      trigger: "#hero",
      scroller: "#main",
      start: "top top",
      end: "bottom top",
      scrub: true,
    },
  });
}

animarHeroFixo();

// Animação do texto principal na entrada
function animacaoInicialHero() {
  gsap.from("#hero h1", {
    y: 100,
    opacity: 0,
    delay: 0.5,
    duration: 1,
    ease: "power3.out",
  });
  gsap.from(".hero-image", {
    scale: 0.95,
    opacity: 0,
    delay: 1,
    duration: 1,
    ease: "power2.out",
  });
}

animacaoInicialHero();

// Animação de cursor personalizado
function animarCursor() {
  const cursor = document.querySelector("#cursor");

  document.addEventListener("mousemove", function (e) {
    gsap.to(cursor, {
      left: e.clientX,
      top: e.clientY,
      duration: 0.2,
      ease: "power2.out",
    });
  });
}

animarCursor();

// Animações das demais seções com entrada suave
function animarSecoes() {
  const secoes = document.querySelectorAll("section:not(#hero)");
  secoes.forEach(secao => {
    gsap.from(secao, {
      opacity: 0,
      y: 100,
      duration: 1,
      ease: "power2.out",
      scrollTrigger: {
        trigger: secao,
        scroller: "#main",
        start: "top 80%",
      }
    });
  });
}

animarSecoes();

// Animação específica da seção de notícias
function animarNoticias() {
  gsap.from(".titulo-sessao", {
    opacity: 0,
    y: 50,
    duration: 0.8,
    ease: "power2.out",
    scrollTrigger: {
      trigger: ".titulo-sessao",
      scroller: "#main",
      start: "top 80%",
    }
  });

  gsap.from(".noticia-destaque", {
    opacity: 0,
    y: 60,
    duration: 1,
    ease: "power2.out",
    scrollTrigger: {
      trigger: ".noticia-destaque",
      scroller: "#main",
      start: "top 85%",
    }
  });

  gsap.utils.toArray(".noticia-card").forEach((card, i) => {
    gsap.from(card, {
      opacity: 0,
      x: 50,
      duration: 0.7,
      delay: i * 0.1,
      ease: "power2.out",
      scrollTrigger: {
        trigger: card,
        scroller: "#main",
        start: "top 90%",
      }
    });
  });
}

animarNoticias();

// Animação do rodapé
function animarRodape() {
  gsap.from("#rodape", {
    opacity: 0,
    y: 80,
    duration: 1,
    ease: "power2.out",
    scrollTrigger: {
      trigger: "#rodape",
      scroller: "#main",
      start: "top 90%",
    }
  });
}
animarRodape();

//Menu

const menuToggle = document.getElementById("menu-toggle");
const menu = document.getElementById("menu-fullscreen");
const menuIcon = menuToggle.querySelector("i");
let menuAberto = false;

menuToggle.addEventListener("click", () => {
  menuAberto = !menuAberto;

  if (menuAberto) {
    menu.style.display = "flex";
    menu.classList.remove("fechando");
    menu.classList.add("aberto");
    document.body.classList.add("menu-aberto");
    menuIcon.classList.remove("ri-menu-fill");
    menuIcon.classList.add("ri-close-line");
  } else {
    menu.classList.remove("aberto");
    menu.classList.add("fechando");
    document.body.classList.remove("menu-aberto");
    menuIcon.classList.remove("ri-close-line");
    menuIcon.classList.add("ri-menu-fill");

    // Remove o menu do DOM após a animação de fechamento
    setTimeout(() => {
      menu.classList.remove("fechando");
      menu.style.display = "none"; // some suavemente
    }, 600); // tempo deve bater com a duração do slideUp
  }

});

// Slider simples com transição suave

function iniciarSlider(classeContainer, classeSlide) {
  // Verifica se não é mobile
  if (window.innerWidth > 768) {
    const container = document.querySelector(classeContainer);
    const slides = container.querySelectorAll(classeSlide);
    let atual = 0;

    setInterval(() => {
      slides[atual].classList.remove("ativo");
      atual = (atual + 1) % slides.length;
      slides[atual].classList.add("ativo");
    }, 5000);
  }
}

iniciarSlider(".hero-slider", ".hero-slide");

// Efeito de desfoque no menu ao rolar a página - Versão universal

function setupNavScrollEffect() {
  const nav = document.getElementById("nav");
  
  if (window.innerWidth <= 768) {
    // Versão para mobile (scroll nativo)
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        nav.classList.add("nav-com-blur", "nav-mini");
      } else {
        nav.classList.remove("nav-com-blur", "nav-mini");
      }
    });
  } else {
    // Versão para desktop (Locomotive Scroll)
    if (scroll) {
      scroll.on("scroll", (args) => {
        if (args.scroll.y > 100) {
          nav.classList.add("nav-com-blur", "nav-mini");
        } else {
          nav.classList.remove("nav-com-blur", "nav-mini");
        }
      });
    }
  }
}

// Chame a função após a inicialização
setTimeout(() => {
  setupNavScrollEffect();
}, 500);