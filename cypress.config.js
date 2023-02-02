const { defineConfig } = require('cypress')
const gmailTester = require("gmail-tester");
const path = require("path");

module.exports = defineConfig({
  projectId: '2czk7i',
  chromeWebSecurity: false,
  experimentalSessionAndOrigin: true,
  experimentalModifyObstructiveThirdPartyCode: true,
  redirectionLimit: 1,
  env: {
    EMAIL1: 'test-automation-1@getluna.com',
    EMAIL: 'test-automation-2@getluna.com',
    PASSWORD: 'Alg@rrobo10123!'
  },
  userAgent:
    'user-agent=Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/85.0.4183.102 Safari/537.36',
  e2e: {
    setupNodeEvents(on, config) {
      on("task", {
        "gmail:gmail:get-messages": async (args) => {
          const messages = await gmailTester.check_inbox(
            path.resolve(__dirname, "credentials-test-automation-1.json"),
            path.resolve(__dirname, "token-test-automation-1.json"),
            args.options
          );
          return messages;
        },
      });
    }
  },
})
