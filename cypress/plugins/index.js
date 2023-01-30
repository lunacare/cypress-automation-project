/// <reference types="cypress" />
const {GoogleSocialLogin} = require('cypress-social-logins').plugins
require('tsconfig-paths').register()
// ***********************************************************
// This example plugins/index.js can be used to load plugins
//
// You can change the location of this file or turn off loading
// the plugins file with the 'pluginsFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/plugins-guide
// ***********************************************************

// This function is called when a project is opened or re-opened (e.g. due to
// the project's config changing)
async function fewMoreSteps({page, options} = {}) {

  //await page.waitForSelector("input[type='tel']")

  cy.task("generateOTP", "3f7data27rlplumdbkz3vkrfwftvlvc3").then(token => {
    cy.get("input[type='tel']").type(token)

  cy.get('#totpNext > div > button').click()

  cy.wait(15000)
  })
  // ... define steps
}
/**
 * @type {Cypress.PluginConfig}
 */
// eslint-disable-next-line no-unused-vars
async function moreSteps({page, options} = {}) { 
  cy.task("generateOTP", "3f7data27rlplumdbkz3vkrfwftvlvc3").then(token => {
    cy.get("input[type='tel']").type(token)

  cy.get('#totpNext > div > button').click()

  cy.wait(15000)
  })
  
  
  //await page.click('#pin_Field') 
}


module.exports = (on, config) => {

  let shared_vars = {}

  on('task', {
    GoogleSocialLogin: GoogleSocialLogin,
    generateOTP: require("cypress-otp"),
    saveSharedVar(variable){
      shared_vars[variable.name] = variable.value
      return null
    },
    getSharedVars(){
      return shared_vars || {}
    }
  })
}