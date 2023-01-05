// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

Cypress.Commands.add("getVerificationCode", (_from, _subject, _to, _include_body) => {

        let code='';
        cy.task("gmail:gmail:get-messages", {
          options: {
            from: _from,
            subject: _subject,
            to: _to,
            include_body: _include_body
            },
        }).then((emails) => {
          assert.isAtLeast(
            emails.length,
            1,
            "Expected to find at least one email, but none were found!"
          );
          const body = emails[0].body.text;
          const result = body.match(/(^|[^\d])(\d{6})([^\d]|$)/);
          if (result !== null) code=result[0]
        });
        return code;
 })

Cypress.on(
    'uncaught:exception',
    (err) => !err.message.includes('ResizeObserver loop limit exceeded')
);
