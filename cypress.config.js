const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    e2e: {
      baseUrl: 'https://meus-emprestimos.picpay.com',
      env:{
        hideCredentials: true,
        requestMode: true,
      },
      experimentalRunAllSpecs: true
    },
    fixturesFolder: false,
    video: false,
  },
});
