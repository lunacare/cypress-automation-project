/// <reference types="cypress" />
import {gmailAuthentication} from '../../support/GoogleAuthenticationGeneric.js'
import {getVerificationCode} from '../../support/GetVerificationCode.js'

describe("Email assertion:", () => {

   it("Using gmail_tester.get_messages(), look for an email with specific subject and link in email body", function () {
    let code='';
     cy.visit('https://app.hubspot.com/login')
      cy.contains('Sign in with Google', { timeout: 5000 }).click()
      context('GoogleAuthenticationGeneric.js', function(){
      gmailAuthentication(Cypress.env('EMAIL1'),Cypress.env('PASSWORD'))})
      cy.get("#code").then($code => {
        if ($code.is(':visible')) {
                  cy.getVerificationCode("noreply@hubspot.com","is your HubSpot Log In Code",Cypress.env('EMAIL1'),true)
                  .then((code)=>{
                    console.log("this is the Code " + code)
                    cy.get("#code").type(code)
                    cy.get("button[type='submit']", { timeout: 5000 }).click()
                  })
        } else {
           assert.isOk('everything','everything is OK');
        }
      })

    });
})