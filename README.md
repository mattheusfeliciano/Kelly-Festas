<<<<<<< HEAD
# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
export default tseslint.config({
  languageOptions: {
    // other options...
    parserOptions: {
      project: ['./tsconfig.node.json', './tsconfig.app.json'],
      tsconfigRootDir: import.meta.dirname,
    },
  },
})
```

- Replace `tseslint.configs.recommended` to `tseslint.configs.recommendedTypeChecked` or `tseslint.configs.strictTypeChecked`
- Optionally add `...tseslint.configs.stylisticTypeChecked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and update the config:

```js
// eslint.config.js
import react from 'eslint-plugin-react'

export default tseslint.config({
  // Set the react version
  settings: { react: { version: '18.3' } },
  plugins: {
    // Add the react plugin
    react,
  },
  rules: {
    // other rules...
    // Enable its recommended rules
    ...react.configs.recommended.rules,
    ...react.configs['jsx-runtime'].rules,
  },
})
```
=======
#🎉 Projeto: Sistema de Gerenciamento de Decorações para Kelly Festas
Bem-vindo(a) ao sistema de gerenciamento de decorações da Kelly Festas! Este projeto foi desenvolvido para auxiliar na organização de decorações infantis, casamentos, aniversários e outros eventos especiais.

O sistema foi construído com uma stack moderna, garantindo rapidez, flexibilidade e fácil manutenção para atender as demandas de um ambiente de eventos dinâmico e criativo.

🛠️ Pré-Requisitos
Antes de iniciar o projeto, certifique-se de ter os seguintes itens configurados:

Vite - Ferramenta de build para desenvolvimento rápido com frontend moderno.
Node.js - Plataforma para execução de JavaScript no servidor.
React - Biblioteca JavaScript para criação de interfaces interativas.
TypeScript - Superconjunto de JavaScript com tipagem estática.
PostgreSQL 13 - Banco de dados relacional, para armazenamento de informações de decoração.
VS Code - Editor de código recomendado para desenvolvimento.
Insomnia - Para testar as requisições da API.
Site para conversão de imagem em link - im.ge, para transformar imagens em links rapidamente.
🚀 Instruções de Execução
Para iniciar o projeto, siga os seguintes comandos:

Instale as dependências do projeto:
npm install

Inicie o servidor de desenvolvimento:
npm run dev

🔧 Exemplos de Comandos SQL
Aqui estão alguns comandos SQL úteis para atualizar e remover registros na tabela de decorações:

Atualizando uma entrada na tabela de decorações:
UPDATE food SET title = 'Novo Título', image = 'nova_imagem.jpg', price = 9.99 WHERE id = 3;

Removendo múltiplos registros da tabela de decorações:
DELETE FROM food WHERE id IN (3, 5, 7);

📬 Contato
Entre em contato conosco e veja mais sobre nosso trabalho nas redes sociais!

Instagram: Kelly Festas
WhatsApp: Contato pelo WhatsApp

👨‍💻 Desenvolvedor
Desenvolvido por Matheus Feliciano, Full Stack Developer.

LinkedIn: Matheus Feliciano
>>>>>>> ac85395194c5a707339fe1c08ce113515c5ffa6a
