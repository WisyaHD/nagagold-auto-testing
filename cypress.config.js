const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl:"https://qc.nagatech.id",
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    specPattern: ['cypress/integration/src/specs/**/*.specs.{js,jsx,ts,tsx}', 'cypress/*.cy.{js,jsx,ts,tsx}',],
  },
  // component: {
  //   specPattern: 'src/specs/*.specs.{js,jsx,ts,tsx}'
  // },
});
