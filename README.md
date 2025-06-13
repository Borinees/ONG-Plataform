# Plataforma Conexão Voluntaria

Projeto desenvolvido com o objetivo de facilitar o cadastro e visualização de necessidades de instituições que precisam de ajuda voluntaria.
<br>
É uma forma simples e acessivel de conectar pessoas dispostas a ajudar.

## Objetivo

Criar uma plataforma web onde instituições possam cadastrar suas necessidades e voluntários possam visualizá-las.

## Funcionalidade

- Cadastro de necessidade com dados detalhados como:
  - Instituição
  - Tipo de ajuda
  - Endereço completo (preenchimento automático via CEP)
  - Contato
- Visualização das necessidades cadastradas
- Filtro de pesquisa por qualquer informação dos cadastros
- Disponivel em dispositivos móveis

---

## Tecnologias Utilizadas

- `HTML5` - formatação da pagina
- `CSS3` - estilização da pagina
- `JavaScript (Vanilla)` - manipulação de dados e DOM
- `LocalStorage` - armazenamento dos cadastros localmente
- `API ViaCEP` - busca do endereço pelo CEP

## Estrutura Diretórios
```bash
├── index.html # Página inicial
├── cadastro.html # Página de cadastro
├── visualizacao.html # Página para ver as necessidades
├── css/
│ └── estilo.css # Estilo geral da aplicação
├── script/
│ ├── cadastro.js # Script do formulário
│ └── visualizacao.js # Script da listagem e pesquisa
└── README.md # Este arquivo
```

## Como usar

1. Clone ou baixe este repositório
2. Abra arquivo `index.html` no seu navegador
3. Navegue entre as páginas para cadrastrar e visualizar
4. Os dados ficarão salvos no navegador (via `localStorage`)

## Créditos

Projeto desenvolvido por **Mia**
<br>
Realizado para estudos e se possivel auxiliar outras pessoas.
