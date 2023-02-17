require("@support/googleAuthenticationWithCode");
require("@support/getGoogleVerificationCode");

import {luna_luxe_url} from '@config/environment'

Cypress.Commands.add("luxeGoogleWithAuthenticationCode", () => {

      cy.visit(luna_luxe_url[Cypress.env('environment')]+'/admin/login')
      cy.contains('Sign In', { timeout: 5000 }).click()
      cy.googleAuthenticationWithCode(Cypress.env('EMAIL'),Cypress.env('PASSWORD')) 
      cy.getGoogleVerificationCode()
      cy.get('a[data-method="post"]', { timeout: 5000 }).should('be.visible').click()
      
  });
