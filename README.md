# 🏆 Base de Conhecimento de Esportes

Uma aplicação simples e moderna que permite pesquisar rapidamente informações sobre diversos esportes.  
O projeto utiliza **HTML**, **CSS**, **JavaScript** e um arquivo **JSON** como base de dados.

## 🚀 Funcionalidades

- 🔍 Busca dinâmica conforme o usuário digita
- 📚 Exibição de cards com informações dos esportes
- ⚡ Carregamento assíncrono dos dados (fetch + async/await)
- 🎨 Design moderno, responsivo e com animações
- 🛡️ Proteção contra XSS (escape de HTML)
- ❗ Mensagens de erro amigáveis e automáticas
## 📂 Estrutura do Projeto
/
├── index.html # Estrutura da página
├── style.css # Estilos e responsividade
├── script.js # Lógica da aplicação
└── data.json # Base de dados com os esportes
2. Abra o arquivo:
index.html
3. Pronto! A aplicação roda direto no navegador, sem necessidade de servidor.

## 📌 Tecnologias Utilizadas

- **HTML5**
- **CSS3**
- **JavaScript ES6**
- **JSON**


## 🔧 Como funciona a busca

A aplicação carrega os dados do arquivo `data.json` e realiza filtros em:

- nome do esporte
- descrição

O filtro é *case insensitive* e funciona em tempo real.

## 📱 Layout Responsivo

A interface se adapta automaticamente para:

- Desktop
- Tablets
- Smartphones


## 📝 Autor

Projeto desenvolvido por **[Victor]**.  
Sinta-se livre para contribuir, sugerir melhorias ou abrir issues.

## 📄 Licença

Este projeto está sob a licença MIT.  
Você pode usar, modificar e distribuir como quiser.
