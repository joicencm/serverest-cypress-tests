const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: "serverest-cypress-tests",
  
  e2e: {
    baseUrl: "https://front.serverest.dev",
    viewportWidth: 1280,
    viewportHeight: 720,
    defaultCommandTimeout: 10000,
    requestTimeout: 10000,
    responseTimeout: 10000,
    
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    
    specPattern: "cypress/e2e/**/*.cy.js",
    supportFile: "cypress/support/e2e.js",
  },

  // Configurações adicionais
  chromeWebSecurity: false,
  allowCypressEnv: false,
});
