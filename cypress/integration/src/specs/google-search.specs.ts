import { GoogleSearch } from "../page-objects/google-search.page";
const search = new GoogleSearch();

describe('Google Navigation', () => {
    it('Google Search', () => {
        cy.visit('https://www.google.com');
        search.googleSearch().type("The Beatles{enter}");
    });
});