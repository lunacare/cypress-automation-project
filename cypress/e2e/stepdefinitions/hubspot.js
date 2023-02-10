const {Given, When,Then} = require("@badeball/cypress-cucumber-preprocessor")

import {hubspotPage} from "@pages/HubspotPage";




Given("A therapist is created thru API", () => {
    
    const token = Cypress.env('alpha').hubspotApiKey;
    const authorization = `Bearer ${ token }`;
    const createTherapistData = hubspotPage.getCreateTherapistApi()
    cy.request({
      method: 'POST',
      url: hubspotPage.getBaseUrlForApi()+createTherapistData.data.path,
      headers: {
        "Content-Type":"application/json",
        'hapikey': authorization
      },
      qs:{
        hapikey: token
      },
      body:createTherapistData.data.body,
      failOnStatusCode: false

    }).its('status')
    .should('eq', 201);

});


When("It is searched in Luxe therapist profiles", () => {
    console.log("test")

});



Then("All therapist information matches", () => {

    console.log("test")
});