export function requestHelper_POST(method, url, body, status) {
    const hubspot_keys = require("../../hubspot-keys.json");
    hubspot_keys[Cypress.env('environment')];
  
      cy.request({
          method: method,
          url: url,
          headers: {
            "Content-Type":"application/json"
          },
          qs:{
            hapikey: hubspot_keys[Cypress.env('environment')]
          },
          body:body,
          failOnStatusCode: false
    
        }).its('status')
        .should('eq', status);
  }