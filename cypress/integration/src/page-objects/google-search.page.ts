export class GoogleSearch{
    googleSearch(){
        return cy.get('#APjFqb').first();
    }
    googleSearchBtn(){
        return cy.get('input[name="btnK]').first();
    }
    searchResult(){
        return cy.get('h3').first;
    }
}