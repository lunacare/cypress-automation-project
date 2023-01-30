export function gmailAuthentication(){

describe("Authentication", ({email,password}) => {

    it("Gmail authentication", function () {
      cy.origin('https://accounts.google.com', ({email,password}) => {
        var text=null;
        cy.get("input[type='email']").type(email)
        cy.get('#identifierNext > div > button', { timeout: 5000 }).click()
        Cypress.on('uncaught:exception', (err) => !err.message.includes('ResizeObserver loop limit exceeded'))
        cy.get("input[type='password']").type(password)
        cy.get('#passwordNext > div > button').click()
    })
  });

});

}