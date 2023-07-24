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

Cypress.Commands.add('LoginWithSession', (user_id, password, url) => {
    cy.session([user_id, password, url], () => {
        cy.visit(url);
        cy.get("input[name=user_id]").type(user_id);
        cy.get("input[name=password]").type(password);
        cy.get("button").click();

        cy.url().should('include', '/dashboard');
    });
});

Cypress.Commands.add('ChangeMenu', (component, url, selectSubMenu, scrollable) => {
    const splitted = url.split('/');
    cy.log(splitted[3]);
    const get = splitted[3];
    if(scrollable){
        cy.get(`.scrollbar-container > :nth-child(2) > ${component} > [href="/${splitted[3]}"]`).click();
        cy.get(`.expand > .sub-menu > :nth-child(${selectSubMenu}) > a`).click();
    }else{
        cy.get(`${component} > [href="/${splitted[3]}"]`).click();
        cy.get(`.expand > .sub-menu > :nth-child(${selectSubMenu}) > a`).click();
    }
});

Cypress.Commands.add('ChangeSubMenu', (selectSubMenu) => {
    cy.get(`.expand > .sub-menu > :nth-child(${selectSubMenu}) > a`).click();
})