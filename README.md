# ☕ Conexão Café

> Uma landing page moderna e responsiva para cafeteria, desenvolvida com HTML5, CSS3 (com nesting) e JavaScript, seguindo a metodologia **Mobile First**.

[![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)](https://developer.mozilla.org/pt-BR/docs/Web/HTML)
[![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)](https://developer.mozilla.org/pt-BR/docs/Web/CSS)
[![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript)

---

## 📋 Índice

- [Sobre o Projeto](#-sobre-o-projeto)
- [Preview](#-preview)
- [Funcionalidades](#-funcionalidades)
- [Tecnologias Utilizadas](#-tecnologias-utilizadas)
- [Estrutura de Arquivos](#-estrutura-de-arquivos)
- [Como Executar](#-como-executar)
- [Responsividade](#-responsividade)
- [Desenvolvedor](#-desenvolvedor)
- [Licença](#-licença)

---

## 🎯 Sobre o Projeto

**Conexão Café** é uma landing page elegante e funcional que apresenta uma cafeteria fictícia. O projeto foi desenvolvido com foco em:

- ✅ Design responsivo (Mobile First)
- ✅ Performance otimizada
- ✅ Código semântico e acessível
- ✅ Animações suaves
- ✅ CSS com nesting para melhor organização

---

## 🖼️ Preview

### 📱 Mobile
<div align="center">
  <img src="./docs/screenshots/mobile-home.png" alt="Mobile - Home" width="250"/>
  <img src="./docs/screenshots/mobile-products.png" alt="Mobile - Produtos" width="250"/>
  <img src="./docs/screenshots/mobile-about.png" alt="Mobile - Sobre" width="250"/>
</div>

### 💻 Desktop
<div align="center">
  <img src="./docs/screenshots/desktop-full.png" alt="Desktop - Visão Geral" width="100%"/>
</div>

### 🎬 Demo Interativa
<div align="center">
  <img src="./docs/screenshots/demo.gif" alt="Demonstração interativa" width="80%"/>
</div>

> **Nota:** Para gerar os screenshots, abra o `index.html` no navegador e capture as telas usando DevTools (F12) em diferentes resoluções.

---

## ✨ Funcionalidades

### 🏠 Seção Home
- Apresentação principal da marca
- Call-to-action com botões estilizados
- Design atrativo e convidativo

### 🔥 Em Alta (Trending)
- Cards interativos com produtos populares
- Sistema de avaliação por estrelas
- Efeito hover com elevação

### ℹ️ Sobre Nós (About)
- História da marca
- Propósito e valores
- Layout flexível com imagem destacada

### 🆕 Novidades (Products)
- Showcase de produtos novos
- Cards responsivos com imagens
- Descrições detalhadas

### 🎨 Design
- Paleta de cores profissional
- Background com padrão de grãos de café
- Tipografia moderna (Poppins)
- Transições suaves

---

## 🛠️ Tecnologias Utilizadas

| Tecnologia | Descrição |
|------------|-----------|
| **HTML5** | Estrutura semântica e acessível |
| **CSS3** | Estilização com nesting e variáveis CSS |
| **JavaScript** | Interatividade do menu mobile |
| **Font Awesome** | Ícones vetoriais |
| **Google Fonts** | Tipografia Poppins |

---

## 📁 Estrutura de Arquivos

```
conexao-cafe/
│
├── index.html                 # Página principal
├── README.md                  # Documentação do projeto
│
├── src/
│   ├── css/
│   │   ├── variables.css      # Variáveis CSS (cores, tamanhos)
│   │   └── styles.css         # Estilos principais (com nesting)
│   │
│   ├── js/
│   │   └── script.js          # Lógica do menu mobile
│   │
│   └── images/
│       ├── conexao_cafe.png           # Logo principal
│       ├── conexao_cafe_2.png         # Logo alternativa
│       ├── background-mobile.png      # Background mobile (grãos)
│       ├── background-desktop.png     # Background desktop (grãos)
│       │
│       ├── trending/
│       │   ├── card1.png              # Coneccino
│       │   ├── card2.png              # Conenta
│       │   └── card3.png              # Conoesa
│       │
│       ├── about/
│       │   ├── about-us.png           # Imagem "Sobre Nós"
│       │   └── bg-about.png           # Background seções
│       │
│       └── products/
│           ├── Conexpress.png         # Produto 1
│           ├── Conlatte.png           # Produto 2
│           ├── Conmocha.png           # Produto 3
│           └── Conmara.png            # Produto 4
│
└── docs/
    └── screenshots/                   # Capturas de tela
        ├── mobile-home.png
        ├── mobile-products.png
        ├── mobile-about.png
        ├── desktop-full.png
        └── demo.gif
```

---

## 🚀 Como Executar

### Pré-requisitos
- Navegador web moderno (Chrome, Firefox, Edge, Safari)
- Editor de código (VS Code recomendado)
- Extensão Live Server (opcional, mas recomendado)

### Passos

1. **Clone o repositório**
   ```bash
   git clone https://github.com/seu-usuario/conexao-cafe.git
   cd conexao-cafe
   ```

2. **Abra o projeto**
   ```bash
   code .
   ```

3. **Execute com Live Server**
   - Clique com botão direito em `index.html`
   - Selecione "Open with Live Server"

   **OU**

   - Abra diretamente o arquivo `index.html` no navegador

4. **Acesse**
   ```
   http://localhost:5500 (com Live Server)
   ou
   file:///caminho/para/index.html
   ```

---

## 📱 Responsividade

O projeto foi desenvolvido seguindo a metodologia **Mobile First** com breakpoints estratégicos:

| Breakpoint | Resolução | Comportamento |
|------------|-----------|---------------|
| **Mobile** | < 768px | Layout em coluna, menu hambúrguer |
| **Tablet** | ≥ 768px | Cards em 2 colunas, menu expandido |
| **Desktop** | ≥ 1024px | Cards em 3 colunas, espaçamentos maiores |
| **Large Desktop** | ≥ 1200px | Cards em 4 colunas, layout otimizado |

### Ajustes Responsivos Implementados

✅ **Mobile (< 768px)**
- Padding reduzido nas seções (4%)
- Fontes adaptativas com `clamp()`
- Botões com largura adaptável
- Menu hambúrguer funcional
- Cards em coluna única

✅ **Tablet (≥ 768px)**
- Cards em grid 2 colunas
- Padding aumentado (8%)
- Menu horizontal visível

✅ **Desktop (≥ 1024px+)**
- Layout em múltiplas colunas
- Seção "About" com ordem customizada
- Espaçamentos otimizados
- Background de alta resolução

---

## 🎨 Paleta de Cores

```css
/* Cores Neutras */
--color-neutral-0: #ffffff;  /* Branco */
--color-neutral-1: #eee4db;  /* Bege claro */
--color-neutral-7: #3e2e25;  /* Marrom escuro */
--color-neutral-8: #1e0e05;  /* Marrom muito escuro */

/* Cores Primárias (Verde) */
--color-primary-1: #34815d;  /* Verde principal */
--color-primary-2: #2c6e4f;  /* Verde médio */
--color-primary-3: #245c42;  /* Verde escuro */

/* Cor Secundária (Dourado) */
--color-secondary-1: #ffb300; /* Dourado */
```

---

## 📸 Como Gerar Screenshots

### Usando DevTools do Chrome/Edge

1. Abra `index.html` no navegador
2. Pressione `F12` para abrir o DevTools
3. Clique no ícone de dispositivo móvel (`Ctrl+Shift+M`)
4. Selecione a resolução desejada:
   - **Mobile:** iPhone 12 Pro (390x844)
   - **Tablet:** iPad Air (820x1180)
   - **Desktop:** 1920x1080
5. Pressione `Ctrl+Shift+P` e digite "Capture screenshot"
6. Escolha "Capture full size screenshot"
7. Salve em `docs/screenshots/`

### Para criar o GIF Demo

1. Use uma extensão como **ScreenToGif** ou **LICEcap**
2. Grave a navegação pelas seções
3. Exporte como GIF
4. Salve como `docs/screenshots/demo.gif`

---

## 🐛 Possíveis Melhorias Futuras

- [ ] Adicionar animações de scroll (AOS ou Intersection Observer)
- [ ] Implementar formulário de contato funcional
- [ ] Integrar com backend para produtos dinâmicos
- [ ] Adicionar modo escuro (dark mode)
- [ ] Melhorar acessibilidade (ARIA labels)
- [ ] Implementar testes automatizados
- [ ] Adicionar service worker para PWA
- [ ] Otimizar imagens com lazy loading

---

## 👨‍💻 Desenvolvedor

<div align="center">
  <img src="https://github.com/SEU-USERNAME.png" width="150px" style="border-radius: 50%;" alt="Pedro"/>
  <br><br>
  
  **Desenvolvido por [Pedro](https://github.com/SEU-USERNAME)**
   [![GitHub](https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white)](https://github.com/pedro2506)<br>
  [![LinkedIn](https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/pedro-miranda-510471b4/)<br>
📧 Email: t3pedropaulo@gmail.com<br>
💬 Projeto criado com fins educacionais e para portfólio.<br>
📅 Criado em **Novembro de 2025**  

---

---

## 📄 Licença

Este projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.

---

## 🤝 Contribuições

Contribuições são bem-vindas! Sinta-se à vontade para:

1. Fazer um fork do projeto
2. Criar uma branch para sua feature (`git checkout -b feature/MinhaFeature`)
3. Commit suas mudanças (`git commit -m 'Adiciona MinhaFeature'`)
4. Push para a branch (`git push origin feature/MinhaFeature`)
5. Abrir um Pull Request

---

## 📞 Contato

Para dúvidas, sugestões ou oportunidades:

- 📧 Email: t3pedropaulo@gmail.com
- 💼 LinkedIn: (https://www.linkedin.com/in/pedro-miranda-510471b4/))
- 🐦 : 

---

## 🧑‍💻 Desenvolvido por

<div align="center">
  <img src="" width="150px" style="border-radius: 50%;" alt="Pedro"/>
  <br><br>

** [Pedro Miranda]**  
  [![GitHub](https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white)](https://github.com/pedro2506)<br>
  [![LinkedIn](https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/pedro-miranda-510471b4/)<br>
📧 Email: t3pedropaulo@gmail.com<br>
💬 Projeto criado com fins educacionais e para portfólio.<br>
📅 Criado em **Novembro de 2025**  
