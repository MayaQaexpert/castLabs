const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: '1u7r74',
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
      on('task', {
          print(s) {
            console.log(s)
            return null
            },
              })
    },
  },
});
