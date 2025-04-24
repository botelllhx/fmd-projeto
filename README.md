
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
│
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

## Funcionalidades Implementadas

### Página Inicial (`index.html`)

- Hero section com **slider animado** e parallax suave
- Navegação com **menu fullscreen estilizado**, utilizado **em todas as resoluções**
- Animações suaves de entrada com GSAP
- Cursor customizado e interativo
- Seção de notícias com cards animados
- Rodapé com informações organizadas e links úteis

---

### Página de Notícias e Novidades (`noticias-novidades.html`)

- Integração com a [NewsAPI](https://newsapi.org/) para exibição de notícias atualizadas
- Filtros interativos por categoria: `Notícias`, `Eventos`, `Editais`
- Apresentação dividida em:
  - Destaque
  - Lista lateral
  - Grid em colunas
- Scroll suave com Locomotive Scroll
- Animações com ScrollTrigger

#### ⚠️ Importante: funcionamento local

> A página de notícias **requer um servidor local** (como o Live Server do VS Code) para funcionar corretamente devido ao uso de `fetch`.

##### 🔧 Como rodar com Live Server:

1. Instale a extensão [Live Server](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer) no VS Code
2. Clique com o botão direito no arquivo `noticias-novidades.html`
3. Selecione **"Open with Live Server"**

> Caso não utilize servidor, a página exibe automaticamente **conteúdo mockado** para demonstração.

---

### Página de Apresentação e História (`apresentacao-historia.html`)

- Conteúdo institucional estruturado em **linha do tempo histórica**
- Destaques sobre:
  - Fundação da FMD
  - Primeiras turmas
  - Reconhecimento oficial
  - Criação da universidade
- Cards modernos sobre estrutura atual e parcerias internacionais
- Layout responsivo com animações suaves
- Design consistente com a identidade visual da FMD

---

## Diferenciais de Design

- Tipografia refinada com **Fraunces** (Google Fonts)
- **Menu fullscreen permanente**, com animações em todas as resoluções (diferencial UX)
- Animações elegantes com GSAP
- Navegação fixada com **gradiente desfocado ao rolar**
- Scroll suave com Locomotive Scroll
- Cores e elementos respeitando a identidade institucional

---

## Tecnologias Utilizadas

- HTML5 / CSS3
- JavaScript (Vanilla)
- GSAP + ScrollTrigger
- Locomotive Scroll
- NewsAPI
- Google Fonts
- Remix Icons

---

Este projeto foi desenvolvido com foco em responsividade, acessibilidade visual e uma experiência interativa moderna para destacar o prestígio da Faculdade Mineira de Direito.
