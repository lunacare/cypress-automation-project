import {gmailAuthentication} from '@support/GoogleAuthenticationGeneric.js'
import {luna_luxe_url} from '@config/environment'

Cypress.Commands.add("luxeAuthentication", () => {
     cy.visit(luna_luxe_url[Cypress.env('environment')]+'/admin/login')
      cy.contains('Sign In', { timeout: 5000 }).click()
      context('GoogleAuthenticationGeneric.js', function(){
      gmailAuthentication(Cypress.env('EMAIL'),Cypress.env('PASSWORD'))})
      cy.get('a[data-method="post"]', { timeout: 5000 }).should('be.visible').click()   
});