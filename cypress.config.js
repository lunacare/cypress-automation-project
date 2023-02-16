const { defineConfig } = require('cypress')
const gmailTester = require("gmail-tester");
const path = require("path");
const  webpack  = require("@cypress/webpack-preprocessor");
const cucumberPreprocesor  = require("@badeball/cypress-cucumber-preprocessor");

async function setupNodeEvents(on, config) {
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
  
  await cucumberPreprocesor.addCucumberPreprocessorPlugin(on,config)
  on("file:preprocessor",
    webpack({
      webpackOptions:{
        resolve:{
          alias:{
             "@assertions":path.resolve(__dirname,"cypress/e2e/assertions"),
             "@commands":path.resolve(__dirname,"cypress/e2e/commands"),
             "@fixtures":path.resolve(__dirname,"cypress/fixtures"),
             "@support":path.resolve(__dirname,"cypress/support"),
             "@pages":path.resolve(__dirname,"cypress/e2e/pages"),
             "@config":path.resolve(__dirname,"cypress/e2e/config"),
          },
          extensions:[".js"],
        },
        module: {
          rules:[{
              test:/\.feature$/,
              
              use:[{
                loader: "@badeball/cypress-cucumber-preprocessor/webpack",
                  options: config,
                },
              ],
            },
          ],
        },
      },
    })
  );

 
return config;
}
module.exports = defineConfig({
  projectId: '2czk7i',
  chromeWebSecurity: false,
  experimentalSessionAndOrigin: true,
  experimentalModifyObstructiveThirdPartyCode: true,
  redirectionLimit: 1,
  env: {
    EMAIL1: 'test-automation-1@getluna.com',
    EMAIL: 'test-automation-2@getluna.com',
    PASSWORD: 'Alg@rrobo10123!',
    environment: 'BETA'
  },
  userAgent:
    'user-agent=Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/85.0.4183.102 Safari/537.36',
  e2e: {
   setupNodeEvents,
   specPattern:"**/*.feature",
}})




