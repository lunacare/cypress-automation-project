Cypress.Commands.add("googleAuthenticationWithCode", (email,password) => {
        cy.origin('https://accounts.google.com', { args: { email,password } }, ({ email,password }) => {
        cy.get("input[type='email']").type(email)
        cy.get('#identifierNext > div > button').click()
        cy.wait(5000)
        Cypress.on('uncaught:exception', (err) => !err.message.includes('ResizeObserver loop limit exceeded'))
        cy.get("input[type='password']").first().type(password)
        cy.get('#passwordNext > div > button').click()
    })
})
