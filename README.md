
# 📘 Faculdade Mineira de Direito — Site Institucional

Este projeto representa o site institucional da **Faculdade Mineira de Direito (FMD)** da PUC Minas, idealizado como parte de um desafio técnico. Ele foi cuidadosamente planejado e desenvolvido com foco tanto em **excelência técnica** quanto em **tendências modernas de design digital**, entregando uma experiência marcante, responsiva e fluida em qualquer dispositivo.

---

## Visão Geral

O site se destaca por reunir:

- **Boas práticas de desenvolvimento web** moderno com JavaScript puro, GSAP e Locomotive Scroll
- **Design contemporâneo** inspirado em **tendências visuais atuais**, como:
- **Hero Typography**: títulos maiores e marcantes
- **Full-width layouts**: uso inteligente da largura total da tela
- **Grande uso de imagens** com forte impacto visual
- **Immersive fullscreen navigation**: menu fullscreen usado em *todas* as resoluções
- **Soft animations**: microinterações e transições suaves
- Modularidade: páginas independentes, reutilizando componentes visuais e scripts globais

---

## Estrutura de Pastas

```
│
├── index.html                             ← Página inicial (Home)
├── pages/
    ├── noticias-novidades.html        ← Página dinâmica de notícias
    └── apresentacao-historia.html     ← Página institucional (história da FMD)
└── assets/
    ├── css/
    │   ├── style.css                      ← Estilos globais
    │   └── noticias.css                   ← Estilos específicos para notícias
    ├── js/
    │   ├── script.js                      ← Animações, menu e interações gerais
    │   └── noticias.js                    ← Carregamento dinâmico de notícias
    └── img/                               ← Logos e imagens
```

---

## Páginas Criadas

### `index.html` — Página Inicial

- Slider animado com parallax
- Hero section com **tipografia imersiva**
- Seção de notícias animadas
- Rodapé institucional completo
- Navegação fullscreen permanente

---

### `noticias-novidades.html` — Página de Notícias

- Integração com a [NewsAPI](https://newsapi.org/)
- Filtros interativos por tipo: Notícias, Eventos, Editais
- Divisão em Destaque, Lista e Grid
- Scroll suave e animações com GSAP

> Funciona perfeitamente **sem necessidade de Live Server**  
> **Recomendado** utilizar Live Server para que a integração com `fetch` funcione 100% (especialmente via `file://` em navegadores que bloqueiam requisições locais)

#### Como abrir com Live Server

1. No VS Code, instale a extensão [Live Server](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer)
2. Clique com o botão direito em `noticias-novidades.html`
3. Selecione **"Open with Live Server"**

> Caso não esteja em um servidor local, será carregado um conteúdo mockado para visualização.

---

### `apresentacao-historia.html` — Página Institucional

- Estrutura de **linha do tempo interativa**
- Cards visuais sobre a atuação atual da FMD
- Animações suaves com ScrollTrigger
- Totalmente responsiva e integrada com o restante do site

---

## Destaques de Design

O projeto foi construído sob influência de tendências modernas em UI/UX como:

- **Full Width Layouts**: uso completo da largura de tela para conteúdos e imagens
- **Hero Typography**: títulos grandes e expressivos
- **Visual Weight em imagens**: blocos visuais com foco em fotografia
- **Menu Fullscreen imersivo**: adotado em **todas as resoluções**
- **Minimalismo funcional**: uso ponderado de cores, sombras e elementos decorativos
- **Responsividade fluida** com layout adaptado para dispositivos móveis

---

## Tecnologias Utilizadas

- **HTML5 / CSS3**
- **JavaScript (Vanilla)**
- **GSAP (GreenSock Animation Platform)**
- **ScrollTrigger**
- **Locomotive Scroll**
- **Remix Icons**
- **Google Fonts — Fraunces**

---

## Conclusão

Este projeto busca oferecer uma **experiência institucional moderna**, acessível e visualmente elegante, posicionando a FMD de forma marcante no ambiente digital.

Ele funciona perfeitamente mesmo sem ferramentas adicionais, mas recomenda-se a execução local via Live Server para garantir **a melhor experiência com dados dinâmicos e animações suaves.**

Desenvolvido com carinho e foco no detalhe.
