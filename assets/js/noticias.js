// Configuração da NewsAPI
const API_KEY = '6bf6f486bc2c40ffa83dc50c39a49150';
const API_URL = `https://newsapi.org/v2/everything?q=direito+AND+(universidade+OR+faculdade)&language=pt&sortBy=publishedAt&pageSize=12&apiKey=${API_KEY}`;

// Categorias para nossas notícias
const CATEGORIAS = {
  noticias: ['direito', 'universidade', 'faculdade', 'ensino'],
  eventos: ['evento', 'congresso', 'palestra', 'seminário'],
  editais: ['edital', 'seleção', 'processo seletivo']
};

// Elementos DOM
const noticiaDestaqueEl = document.querySelector('.noticia-destaque');
const noticiasListaEl = document.querySelector('.noticias-lista');
const noticiasGridEl = document.querySelector('.noticias-grid-container');
const filtrosBtns = document.querySelectorAll('.filtro-btn');

// Variável para armazenar todas as notícias
let todasNoticias = [];

// Função principal para carregar notícias
async function carregarNoticias() {
  try {
      mostrarLoading();

      const response = await fetch(API_URL);
      const data = await response.json();

      if (data.articles && data.articles.length > 0) {
          todasNoticias = processarArtigos(data.articles);
          exibirNoticiaDestaque(todasNoticias[0]);
          exibirListaNoticias(todasNoticias.slice(1, 7));
          exibirGridNoticias(todasNoticias.slice(7));
          adicionarEventosFiltros();

          // Atualiza o scroll global
          if (window.locomotiveScroll) {
              setTimeout(() => {
                  window.locomotiveScroll.update();
                  const main = document.querySelector('#main');
                  main.style.minHeight = 'auto';
                  main.style.minHeight = main.scrollHeight + 'px';
                  window.locomotiveScroll.update();
              }, 300);
          }
      } else {
          carregarNoticiasMockadas();
      }
  } catch (error) {
      console.error('Erro ao carregar notícias:', error);
      carregarNoticiasMockadas();
  }
}


// Processar artigos da API
function processarArtigos(artigos) {
  return artigos.map((artigo, index) => {
    const categoria = determinarCategoria(artigo);

    return {
      id: index,
      titulo: artigo.title || 'Sem título',
      descricao: artigo.description || 'Sem descrição',
      conteudo: artigo.content || 'Sem conteúdo detalhado',
      categoria: categoria,
      imagem: artigo.urlToImage || `https://picsum.photos/800/400?random=${index}`,
      data: formatarData(artigo.publishedAt),
      url: artigo.url
    };
  });
}

// Determinar categoria com base no conteúdo
function determinarCategoria(artigo) {
  const texto = `${artigo.title} ${artigo.description} ${artigo.content}`.toLowerCase();

  for (const [categoria, palavras] of Object.entries(CATEGORIAS)) {
    if (palavras.some(palavra => texto.includes(palavra))) {
      return categoria;
    }
  }
  return 'noticias';
}

// Formatador de data
function formatarData(dataString) {
  if (!dataString) return '';
  return new Date(dataString).toLocaleDateString('pt-BR', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });
}

// Exibir notícia em destaque
function exibirNoticiaDestaque(noticia) {
  noticiaDestaqueEl.innerHTML = `
    <img src="${noticia.imagem}" alt="${noticia.titulo}">
    <div class="conteudo">
      <h2>${noticia.titulo}</h2>
      <p>${noticia.descricao}</p>
      <div class="rodape">
        <span class="tag ${noticia.categoria}">${noticia.categoria}</span>
        <a href="${noticia.url}" target="_blank" rel="noopener noreferrer">
          <i class="ri-arrow-right-up-line"></i>
        </a>
      </div>
    </div>
  `;
}

// Exibir lista de notícias
function exibirListaNoticias(noticias) {
  noticiasListaEl.innerHTML = noticias.map(noticia => `
    <div class="noticia-card" data-categoria="${noticia.categoria}">
      <img src="${noticia.imagem}" alt="${noticia.titulo}">
      <div class="info">
        <h4>${noticia.titulo}</h4>
        <div class="rodape">
          <span class="tag ${noticia.categoria}">${noticia.categoria}</span>
          <a href="${noticia.url}" target="_blank" rel="noopener noreferrer">
            <i class="ri-arrow-right-up-line"></i>
          </a>
        </div>
      </div>
    </div>
  `).join('');
}

// Exibir notícias em grid
function exibirGridNoticias(noticias) {
  if (noticias.length === 0) {
    noticiasGridEl.innerHTML = `
          <div class="sem-noticias">
              <p>Nenhuma notícia adicional encontrada</p>
          </div>
      `;
    return;
  }

  noticiasGridEl.innerHTML = noticias.map(noticia => `
      <div class="noticia-card-grid" data-categoria="${noticia.categoria}">
          <div class="img-container">
              <img src="${noticia.imagem}" alt="${noticia.titulo}">
              <span class="tag ${noticia.categoria}">${noticia.categoria}</span>
          </div>
          <div class="info">
              <h3>${noticia.titulo}</h3>
              <p>${noticia.descricao}</p>
              <div class="rodape">
                  <span>${noticia.data}</span>
                  <a href="${noticia.url}" target="_blank" rel="noopener noreferrer">
                      <i class="ri-arrow-right-up-line"></i>
                  </a>
              </div>
          </div>
      </div>
  `).join('');
}

// Adicionar eventos aos filtros
function adicionarEventosFiltros() {
  filtrosBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filtrosBtns.forEach(b => b.classList.remove('ativo'));
      btn.classList.add('ativo');
      filtrarNoticias('.noticia-card', btn.dataset.categoria);
      filtrarNoticias('.noticia-card-grid', btn.dataset.categoria);
    });
  });
}

// Filtrar notícias
function filtrarNoticias(selector, categoria) {
  document.querySelectorAll(selector).forEach(card => {
    card.style.display = (categoria === 'todos' || card.dataset.categoria === categoria)
      ? 'flex'
      : 'none';
  });
}

// Mostrar estado de carregamento
function mostrarLoading() {
  noticiaDestaqueEl.innerHTML = `
    <div class="loading-destaque">
      <div class="loading-spinner"></div>
      <p>Carregando notícia em destaque...</p>
    </div>
  `;

  noticiasListaEl.innerHTML = `
    <div class="loading-lista">
      <div class="loading-spinner"></div>
      <p>Carregando notícias...</p>
    </div>
  `;

  noticiasGridEl.innerHTML = `
    <div class="loading-grid">
      <div class="loading-spinner"></div>
      <p>Carregando mais notícias...</p>
    </div>
  `;
}

// Fallback para notícias mockadas
function carregarNoticiasMockadas() {
  const noticiasMock = [
    {
      id: 1,
      titulo: 'XVI Congresso Latino-Americano de Direito Material e Processual do Trabalho',
      descricao: 'O curso de graduação em Direito da PUC Minas é frequentemente reconhecido em rankings nacionais e internacionais de excelência. A FMD possui acordos e parcerias internacionais que possibilitam o intercâmbio de alunos com Alemanha, Canadá, Chile, Espanha, França, Itália, Hungria, México, Portugal, entre outros.',
      categoria: 'eventos',
      imagem: '../assets/img/noticia-7.png',
      data: '15 de novembro de 2023',
      url: '#'
    },
    {
      id: 2,
      titulo: 'Aula inaugural da Faculdade Mineira de Direito',
      descricao: '',
      categoria: 'eventos',
      imagem: '../assets/img/noticia-1.png',
      data: '15 de novembro de 2023',
      url: '#'
    },
    {
      id: 3,
      titulo: 'Edital seleciona extensionistas para projeto aprovado no Programa de Extensão Universitária da Pós-graduação',
      descricao: '',
      categoria: 'editais',
      imagem: '../assets/img/noticia-2.png',
      data: '15 de novembro de 2023',
      url: '#'
    },
    {
      id: 3,
      titulo: 'Medalha da Inconfidência 2025: professores da PUC Minas recebem honrarias do Governo de Minas Gerais',
      descricao: '',
      categoria: 'eventos',
      imagem: '../assets/img/noticia-3.png',
      data: '15 de novembro de 2023',
      url: '#'
    },
    {
      id: 4,
      titulo: 'Nota de Pesar pelo falecimento de Sua Santidade, o Papa Francisco',
      descricao: '',
      categoria: 'noticias',
      imagem: '../assets/img/noticia-4.png',
      data: '15 de novembro de 2023',
      url: '#'
    },
    {
      id: 5,
      titulo: 'Celebração Eucarística abre comemorações de aniversário do Campus São Gabriel',
      descricao: '',
      categoria: 'noticias',
      imagem: '../assets/img/noticia-5.png',
      data: '15 de novembro de 2023',
      url: '#'
    },
    {
      id: 6,
      titulo: '25 anos PUC São Gabriel e 30 anos IEC',
      descricao: '',
      categoria: 'eventos',
      imagem: '../assets/img/noticia-6.png',
      data: '15 de novembro de 2023',
      url: '#'
    },
    {
      id: 7,
      titulo: 'Núcleo de Apoio ao Estudante retorna atividades',
      descricao: '​O Núcleo de Apoio ao Estudante, do curso de Direito da PUC Minas Contagem, iniciou os atendimentos desse semestre. O Núcleo tem como objetivo orientar os alunos na organização de sua vida acadêmica, planejando seus estudos e possibilitando a melhoria do desempenho no curso e aprimoramento do aprendizado.',
      categoria: 'noticias',
      imagem: '../assets/img/noticia-8.png',
      data: '15 de novembro de 2023',
      url: '#'
    },
    {
      id: 8,
      titulo: 'Curso de Direito recebe ex-ministro do Supremo Tribunal Federal',
      descricao: 'A palestra A interpretação da Constituição de 1988, realizada pelo Curso de Direito da PUC Minas Contagem no dia 21 de setembro, contou com participação do jurista e professor aposentado da Universidade de São Paulo (USP), professor Eros Roberto Grau, ex-ministro do Supremo Tribunal Federal. Confira a palestra na íntegra no perfil da PUC Minas no YouTube.',
      categoria: 'eventos',
      imagem: '../assets/img/noticia-9.png',
      data: '15 de novembro de 2023',
      url: '#'
    },
    {
      id: 9,
      titulo: 'Faculdade Mineira de Direito (FMD): José Afrânio Vilela, ministro do Superior Tribunal de Justiça (STJ)...',
      descricao: '"O tema desta aula está vinculado intimamente ao espírito, dinâmica e escopo da Pontifícia Universidade Católica de Minas Gerais, e se reflete por seus valores consolidados e pelo que nos conta a história", afirmou o Reitor da PUC Minas, Prof. Dr. Pe. Luís Henrique Eloy e Silva, ao dar as boas-vindas a todos os presentes na Aula Inaugural da Faculdade Mineira de Direito (FMD).',
      categoria: 'eventos',
      imagem: '../assets/img/noticia-10.jpeg',
      data: '15 de novembro de 2023',
      url: '#'
    },
    {
      id: 10,
      titulo: 'Egresso do Curso de Direito é selecionado em programa que promove acesso a mestrado profissional internacional',
      descricao: 'O egresso do Curso de Direito da PUC Minas Contagem, Samuel Santos da Silva, foi um dos vinte selecionados do Programa Alcance, realizado pela Fundação Lemann. O objetivo da edição do ano 2021 do programa é apoiar estudantes autodeclarados negros, pardos e indígenas em candidaturas para cursos de mestrado profissional em universidades internacionais parceiras da Fundação.',
      categoria: 'noticias',
      imagem: '../assets/img/noticia-11.png',
      data: '15 de novembro de 2023',
      url: '#'
    },
  ];

  todasNoticias = noticiasMock;
  exibirNoticiaDestaque(todasNoticias[0]);
  exibirListaNoticias(todasNoticias.slice(1, 7));
  exibirGridNoticias(todasNoticias.slice(7));
  adicionarEventosFiltros();
}

function animacaoInicialHero() {
  gsap.from("#hero-noticias h1", {
    y: 100,
    opacity: 0,
    delay: 0.5,
    duration: 1,
    ease: "power3.out",
  });
}

animacaoInicialHero();

if (document.readyState !== 'loading') {
  carregarNoticias();
} else {
  document.addEventListener('DOMContentLoaded', carregarNoticias);
}

// Atualizar scroll quando a janela for redimensionada
window.addEventListener('resize', () => scroll.update());
