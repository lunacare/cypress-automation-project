import {gmailAuthentication} from '../support/GoogleAuthenticationGeneric.js'
import {getVerificationCode} from '../support/GetVerificationCode.js'

export function gmailAuthenticationWithCode(email,password) {

      /*context('GoogleAuthenticationGeneric.js', function(){
      gmailAuthentication(Cypress.env('EMAIL'),Cypress.env('PASSWORD'))})*/

      gmailAuthentication(email,password)
      cy.origin('https://accounts.google.com', () => {

      cy.get(":nth-child(1) > .lCoei > .vxx8jf", { timeout: 5000 }).should('be.visible').click()
     })
      cy.getVerificationCode("noreply@google.com","Código de verificación de Google",email,true)
      .then((code)=>{
                    console.log("this is the Code " + code)
                  })
      /*context('GetVerificationCode.js', function(){
                getVerificationCode("noreply@google.com","Código de verificación de Google",email,true)})
            .then((code)=>{
                    console.log("this is the Code " + code)
                  })*/
        cy.origin('https://accounts.google.com',() => {
        cy.get('a[data-method="post"]', { timeout: 5000 }).should('be.visible').click()})

}
