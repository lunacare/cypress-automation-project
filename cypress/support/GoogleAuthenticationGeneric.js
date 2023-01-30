export function gmailAuthentication(email,password){
        cy.origin('https://accounts.google.com', { args: { email,password } }, ({ email,password }) => {
        var text=null;
        cy.get("input[type='email']").type(email)
        cy.get('#identifierNext > div > button').click()
        cy.wait(5000)
        Cypress.on('uncaught:exception', (err) => !err.message.includes('ResizeObserver loop limit exceeded'))
        cy.get("input[type='password']").type(password)
        cy.get('#passwordNext > div > button').click()
    })
}