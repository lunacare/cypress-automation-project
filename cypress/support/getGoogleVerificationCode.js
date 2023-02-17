import {customWaitElement} from '@support/utils.js'
Cypress.Commands.add("getGoogleVerificationCode", () => {
      let found=customWaitElement("//*[@role='link']",4,1000)
      if(found){
                  const args = {
                        _from:"noreply@google.com",
                        _subject:"Código de verificación de Google",
                        _to:Cypress.env("EMAIL"),
                        _include_body:true
                  };

            cy.origin('https://accounts.google.com', {args},({_from,_subject,_to,_include_body}) => {
            

                              cy.get("[role='link']").first().should("exist").and("be.visible").click().then(console.log)
                              
                              

                              cy.task("gmail:gmail:get-messages", {
                                    options: {
                                    from: _from,
                                    subject: _subject,
                                    to: _to,
                                    include_body: _include_body,
                                    wait_time_sec: 10,
                                    max_wait_time_sec: 60,
                                    },
                              }).then((emails) => {

                                    assert.isAtLeast(
                                    emails.length,
                                    1,
                                    "Expected to find at least one email, but none were found!"
                                    );
                                    const body = emails[0].body.text;
                                    const result = body.match(/(^|[^\d])(\d{6})([^\d]|$)/);

                                    cy.task('log', result[0])
                                    cy.get("#idvPinId").type(result[0])
                                    cy.type({enter})

                                    return result[0];
                              });
                  
            });
      }

});

