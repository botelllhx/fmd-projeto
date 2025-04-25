document.addEventListener('DOMContentLoaded', function() {
    // Animação dos itens da linha do tempo
    gsap.utils.toArray(".timeline-item").forEach(item => {
      gsap.from(item, {
        scrollTrigger: {
          trigger: item,
          start: "top 100%",
          toggleActions: "play none none none",
          scroller: window.innerWidth <= 768 ? "body" : "#main",
          onEnter: () => updateScrollHeight() // NOVO
        },
        opacity: 0,
        y: 50,
        duration: 0.8
      });
    });
  
    // Função para atualizar a altura do scroll
    function updateScrollHeight() {
      if (typeof scroll !== 'undefined') {
        setTimeout(() => {
          const main = document.querySelector('#main');
          main.style.height = 'auto';
          main.style.height = main.scrollHeight + 'px';
        }, 100);
      }
    }
    
    // Atualiza inicialmente
    updateScrollHeight();
});