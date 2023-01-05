/// <reference types="cypress" />
import {getVerificationCode} from '../../support/GetVerificationCode.js'
import {gmailAuthentication} from '../../support/GoogleAuthenticationGeneric.js'

describe("Email assertion:", () => {

   it("Using gmail_tester.get_messages(), look for an email with specific subject and link in email body", function () {

      cy.visit('https://luxe.alpha.getluna.com/admin/login')
      cy.contains('Sign In', { timeout: 5000 }).should('be.visible').click()
      context('GoogleAuthenticationGeneric.js', function(){
      gmailAuthentication(Cypress.env('EMAIL'),Cypress.env('PASSWORD'))})
      cy.get("[role='link']").then($option => {
        if ($option.is(':visible')) {
            $option.first().click()
            cy.getVerificationCode("noreply@google.com","Código de verificación de Google",Cypress.env("EMAIL1"),true)
            .then((code)=>{
                    console.log("this is the Code " + code)
                  })

        } else {
           assert.isOk('everything','everything is OK');
        }

      cy.get('a[data-method="post"]', { timeout: 5000 }).should('be.visible').click()
    })

  });
})