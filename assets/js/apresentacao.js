// scripts/apresentacao.js
document.addEventListener('DOMContentLoaded', function () {
    // Verifica se já existe uma instância do Locomotive Scroll
    if (typeof scroll !== 'undefined') {
        scroll.destroy();
    }

    // Inicializa Locomotive Scroll
    const scroll = new LocomotiveScroll({
        el: document.querySelector("#main"),
        smooth: true,
        multiplier: 0.8,
        smartphone: { smooth: true }
    });

    // Animação dos itens da linha do tempo
    gsap.utils.toArray(".timeline-item").forEach(item => {
        gsap.from(item, {
            scrollTrigger: {
                trigger: item,
                start: "top 70%",
                toggleActions: "play none none none",
                // Importante: usar o container do Locomotive Scroll
                scroller: "#main"
            },
            opacity: 0,
            y: 50,
            duration: 0.8
        });
    });

    // Animação dos cards de atualidade
    gsap.utils.toArray(".atualidade-card").forEach((card, i) => {
        gsap.from(card, {
            scrollTrigger: {
                trigger: card,
                start: "top 80%",
                toggleActions: "play none none none",
                // Importante: usar o container do Locomotive Scroll
                scroller: "#main"
            },
            opacity: 0,
            x: i % 2 === 0 ? -50 : 50,
            duration: 0.8
        });
    });

    // Atualizar scroll quando a janela for redimensionada
    window.addEventListener('resize', () => {
        scroll.update();
    });

    // Configurações do menu (igual à página de notícias)
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
            setTimeout(() => {
                menu.classList.remove("fechando");
                menu.style.display = "none";
            }, 600);
        }
    });

    // Cursor personalizado (igual à página de notícias)
    const cursor = document.querySelector("#cursor");
    if (cursor) {
        document.addEventListener("mousemove", function (e) {
            gsap.to(cursor, {
                left: e.clientX,
                top: e.clientY,
                duration: 0.2,
                ease: "power2.out",
            });
        });
    }
});