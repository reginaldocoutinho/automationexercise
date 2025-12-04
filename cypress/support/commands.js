// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
Cypress.Commands.add('signUser', (email = 'teste7@outlook.com', password = 'teste') => {
      cy.contains('a', 'Signup / Login').click()
        cy.get('[data-qa="login-email"]').type('teste7@outlook.com') //Precisa ter um usuário criado para testar
        cy.get('[data-qa="login-password"]').type('teste')
        cy.get('[data-qa="login-button"]').click()
      cy.url().then((currentUrl) => {
      if (currentUrl.includes('login')) {
            // Dentro do 'then', 'currentUrl' é uma string JavaScript normal.
            // Ainda precisamos tratar a visibilidade do elemento.
            // Podemos usar cy.get() e verificar o comprimento (length) dentro de outro .then()
            cy.get('body').then(($body) => { // Consulta o body para usar jQuery .find()
                  if ($body.find('.login-form > form > p:visible').length > 0) {
                  cy.log('Estamos na página de login com formulário visível.');
                  cy.createUser();
                  } else {
                  // Caso a URL inclua 'login' mas o form não esteja visível (caso inesperado?)
                  cy.log('URL de login, mas formulário invisível. Tratamento alternativo.');
                  }
            });

      } else if (currentUrl === 'https://automationexercise.com/') {
            cy.log('Estamos na página inicial.');
            cy.contains('a', 'Delete Account').click();
            // Os comandos seguintes do seu else original devem ser movidos para depois da ação,
            // mas em um fluxo de teste linear e determinado (melhor prática Cypress).
            cy.get('[data-qa="continue-button"]').click();
            cy.signUser();
      } else {
            cy.contains('a','Logout').click();
            // Ações de validação após o logout:
            cy.contains('b', 'Account Deleted!');
            cy.get('[data-qa="continue-button"]').click();
      }
      });

        
})

Cypress.Commands.add('createUser', (email = 'teste7@outlook.com', password = 'teste') => {
      cy.get('[data-qa="signup-name"]').type('testname')
      cy.get('[data-qa="signup-email"]').type(email)
      cy.get('[data-qa="signup-button"]').click()
      // Captura o corpo da página e entra em um contexto síncrono (dentro do .then)
cy.get('body').then(($body) => {
    // Usamos jQuery (.find) para checar se o elemento existe E está visível.
    if ($body.find('.signup-form > form > p:visible').length > 0) {
        // Se a condição for verdadeira, execute o primeiro bloco:
        cy.log('Parágrafo do formulário de cadastro visível, chamando cy.signUser()');
        cy.signUser();
    } else {
        // Se a condição for falsa (o elemento não está visível), execute o bloco else:
        cy.log('Parágrafo não visível, prosseguindo com o preenchimento manual.');
        cy.contains('b','Enter Account Information');
        cy.get('#id_gender1').click();
        // Certifique-se de que 'password' está definida em seu teste
        cy.get('[data-qa="password"]').type(password);
        cy.get('[data-qa="days"]').select('30');
        cy.get('[data-qa="months"]').select('October');
        cy.get('[data-qa="years"]').select('1998');
        cy.get('#newsletter').click();
        cy.get('#optin').click();
        cy.get('[data-qa="first_name"]').type("First name");
        cy.get('[data-qa="last_name"]').type("Last name");
        cy.get('[data-qa="company"]').type("Company");
        cy.get('[data-qa="address"]').type("street addres");
        cy.get('[data-qa="country"]').select('Canada');
        cy.get('[data-qa="state"]').type('Ontario');
        cy.get('[data-qa="city"]').type('Toronto');
        cy.get('[data-qa="zipcode"]').type('M5V 3L9');
        cy.get('[data-qa="mobile_number"]').type('5516991509030');
        cy.get('[data-qa="create-account"]').click();
        
        // Validações após a ação:
        cy.contains('b','Account Created!');
        cy.get('[data-qa="continue-button"]').click();
    }
});


})
Cypress.Commands.add('deleteAccount', () => {
      cy.contains('a','Delete Account').click();
      cy.contains('b','Account Deleted!');
})
Cypress.Commands.add('logout', () => {
      cy.contains('a','Logout').click();
})

