
# 📘 Faculdade Mineira de Direito — Site Institucional

Este projeto é um site institucional para a Faculdade Mineira de Direito da PUC Minas, desenvolvido com foco em uma experiência visual marcante, animações suaves e informações organizadas.

## Visão Geral

- Navegação fluida com menu fixo e fullscreen responsivo
- Animações com GSAP + Locomotive Scroll
- Página de notícias dinâmica com integração à NewsAPI
- Páginas institucionais como "Apresentação e História"
- Estética refinada com CSS puro, tipografia Fraunces e ícones Remix

---

## Estrutura de Pastas

```
/
├── index.html                             ← Página inicial (Home)
└── assets/
    ├── css/
    │   ├── style.css                      ← Estilos globais
    │   └── noticias.css                   ← Estilos específicos para notícias
    ├── js/
    │   ├── script.js                      ← Animações, menu e interações gerais
    │   └── noticias.js                    ← Carregamento dinâmico de notícias
    ├── img/                               ← Logos e imagens
    └── pages/
        ├── noticias-novidades.html        ← Página dinâmica de notícias
        └── apresentacao-historia.html     ← Página institucional (história da FMD)
```

---

## Funcionalidades Globais

- **Navbar fixa e com gradiente blur no scroll**
- **Animação das logos** que se ajustam dinamicamente
- **Menu fullscreen** para navegação em telas pequenas
- **Cursor customizado** suave com GSAP
- **Animações em seções e cards** com ScrollTrigger
- **Parallax em heros e sliders** com Locomotive Scroll

---

## Página Inicial

- Hero com imagem animada
- Slider com transição automática
- Sessão de apresentação da FMD
- Seção de notícias em destaque
- Identidade visual da PUC com cards
- Rodapé institucional

---

## Página de Notícias (`noticias-novidades.html`)

- Integração com **NewsAPI**
- Seções dinâmicas com destaque, lista e grid
- Filtros por categoria
- Carregamento mockado caso a API falhe

### ⚠️ Importante

**A página de notícias deve ser aberta com Live Server.** Caso contrário, a API pode ser bloqueada por CORS.

#### Como abrir com Live Server (VS Code):

1. Instale a extensão **Live Server**
2. Clique com o botão direito no arquivo `noticias-novidades.html`
3. Selecione **"Open with Live Server"**
4. Será aberto em http://127.0.0.1:5500 ou similar

---

## Página Apresentação e História

- Introdução institucional
- **Linha do tempo animada**
- Seção "A FMD Hoje" com grid de cards
- Design consistente com a Home
- Totalmente responsiva

---

## Responsividade

- Navbar adaptada para telas pequenas
- Layout reorganiza elementos em colunas
- Fontes e espaçamentos ajustados
- Menu fullscreen substitui a navbar padrão

---

## Tecnologias Utilizadas

- HTML5 e CSS3 puro
- JavaScript moderno (ES6+)
- GSAP 3.12.2 + ScrollTrigger
- Locomotive Scroll 3.5.4
- NewsAPI (com fallback)
- Google Fonts e Remix Icon

---

Desenvolvido com carinho por [Mateus Botelho].
