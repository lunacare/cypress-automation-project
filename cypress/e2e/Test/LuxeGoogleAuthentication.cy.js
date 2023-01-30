/// <reference types="cypress" />
import {gmailAuthentication} from '../../support/GoogleAuthenticationGeneric.js'

describe("Email assertion:", () => {

   it("Using gmail_tester.get_messages(), look for an email with specific subject and link in email body", function () {

     cy.visit('https://luxe.alpha.getluna.com/admin/login')
      cy.contains('Sign In', { timeout: 5000 }).click()
      context('GoogleAuthenticationGeneric.js', function(){
      gmailAuthentication(Cypress.env('EMAIL'),Cypress.env('PASSWORD'))})
      cy.get('a[data-method="post"]', { timeout: 5000 }).should('be.visible').click()

  });

});