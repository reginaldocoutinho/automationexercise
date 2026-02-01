# 🎭 Automation Exercise - UI Testing with Cypress

Este repositório contém a automação de testes de interface (Front-end) para o site [Automation Exercise](https://automationexercise.com). O projeto visa garantir a qualidade da experiência do usuário em fluxos críticos como cadastro, compras, contato e navegação.

## 🌟 Visão Geral do Projeto

Diferente de testes de API, este projeto interage diretamente com os elementos da página (botões, formulários, menus). Ele utiliza o **Cypress** para simular as ações de um usuário real no navegador, validando se o comportamento visual e funcional está correto.

## 🛠️ Tecnologias Utilizadas

*   **Cypress**: Framework principal para automação E2E.
*   **JavaScript**: Linguagem base para os scripts de teste.
*   **Faker/Massa de Dados**: Gerenciamento de dados dinâmicos para testes de cadastro.

## 🧪 Cenários de Teste Abrangidos

Os testes cobrem os principais fluxos do site, como:
- **Fluxo de Registro**: Cadastro de novos usuários com preenchimento de formulários complexos.
- **Login/Logout**: Validação de acesso seguro e encerramento de sessão.
- **Carrinho de Compras**: Adição de produtos, verificação de quantidades e checkout.
- **Formulário de Contato**: Envio de mensagens e validação de sucesso.
- **Filtros e Busca**: Pesquisa de produtos e navegação por categorias.

## 📁 Organização das Pastas

```text
├── cypress/
│   ├── e2e/           # Scripts de teste de interface (.cy.js)
│   ├── fixtures/      # Dados simulados para preenchimento de campos
│   ├── screenshots/   # Capturas de tela automáticas em caso de falha
│   └── support/       # Comandos customizados (ex: login via comando)
├── cypress.config.js  # Configurações do ambiente de navegador
└── package.json       # Gerenciamento de scripts e dependências
