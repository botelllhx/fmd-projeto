document.addEventListener('DOMContentLoaded', function () {
    // Configurações do menu (mantido igual)
    const setupMenu = () => {
        const menuToggle = document.getElementById("menu-toggle");
        const menu = document.getElementById("menu-fullscreen");

        if (menuToggle && menu) {
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
        }
    };

    // Configurações do cursor (mantido igual)
    const setupCursor = () => {
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
    };

    const setupNavScroll = () => {
        const nav = document.getElementById('nav');
        if (!nav) return;

        const logo1 = document.querySelector('.logo1');
        const logo2 = document.querySelector('.logo2');

        // Função de atualização idêntica à home
        const updateNav = () => {
            const scrollPosition = window.pageYOffset || document.documentElement.scrollTop;

            if (scrollPosition > 100) {
                nav.classList.add('nav-com-blur', 'nav-mini');
                if (logo1) logo1.style.height = '60px';
                if (logo2) logo2.style.height = '60px';
            } else {
                nav.classList.remove('nav-com-blur', 'nav-mini');
                if (logo1) logo1.style.height = '90px';
                if (logo2) logo2.style.height = '90px';
            }
        };

        // Listener otimizado para mobile
        let ticking = false;
        window.addEventListener('scroll', () => {
            if (!ticking) {
                window.requestAnimationFrame(() => {
                    updateNav();
                    ticking = false;
                });
                ticking = true;
            }
        });

        // Atualiza estado inicial
        updateNav();
    };

    // Inicializa todas as funções
    setupMenu();
    setupCursor();
    setupNavScroll();
});