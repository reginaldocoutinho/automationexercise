const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    reporter: "mochawesome",
    reporterOptions: {
      reportDir: 'cypress/results/json', // Diretório onde os JSONs serão salvos
      overwrite: false, // Importante: não sobrescrever o arquivo a cada spec
      html: true, // Não gerar HTML ainda, faremos isso manualmente depois do merge
      json: true, // Gerar arquivos JSON
      embeddedScreenshots: true,
      charts: true,
    },
  },
});
