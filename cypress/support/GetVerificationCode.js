Cypress.Commands.add("getVerificationCode", (_from, _subject, _to, _include_body) => {


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

          return result[0];
        });
});

