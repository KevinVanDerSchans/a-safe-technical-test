import { defineConfig } from 'cypress'

export default defineConfig({
  e2e: {
    setupNodeEvents(on, config) {},
    baseUrl: 'http://localhost:3000',
  },
  reporter: 'cypress-junit-reporter',
  reporterOptions: {
    mochaFile: 'testing/cypress-junit.xml',
    toConsole: true,
    suiteTitleSeparatedBy: '.',
  },
})
