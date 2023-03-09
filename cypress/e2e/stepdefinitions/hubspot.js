const { Given, When, Then } = require("@badeball/cypress-cucumber-preprocessor")



require("@commands/hubspot_requests/syncDraftTherapists");
require("@commands/hubspot_requests/syncPhysician");
require("@commands/hubspot_requests/createDraftTherapists");
require("@commands/hubspot_requests/createPhysician");
require("@commands/luxe/luxeGoogleAuthentication");
require("@commands/luxe/openLuxeWithToken");
require("@commands/luxe/searchTherapistbyEmail");
require("@commands/luxe/searchPhysicianByNpi");
require("@assertions/luxe/therapistProfileAssertions");
require("@assertions/luxe/physicianProfileAssertions");


import { luna_luxe_url } from '@config/environment'

beforeEach(function () {
    cy.openLuxeWithToken()
})


Given("A physician is created thru API", () => {
  cy.createPhysician().as("createPhysician").then(response => {
    cy.syncPhysician(response.body.id, response.body.properties.email)
  })

});


Given("A therapist is created thru API", () => {

  cy.createDraftTherapist().as("createDraftTherapist").then(modified_response => {
    cy.syncDraftTherapist(modified_response.response.body.id, modified_response.response.body.properties.email)
  })

});



When("It is searched in Luxe physician profiles", () => {


  cy.get("@createPhysician").then(response => {
    cy.searchPhysicianByNpi(response.body.properties.npi);
  })




});

When("It is searched in Luxe therapist profiles", () => {

  cy.get("@createDraftTherapist").then(modified_response => {
    cy.searchTherapistbyEmail(modified_response.response.body.properties.email);
  })

});

Then("All therapist information matches", () => {

  cy.get("@createDraftTherapist").then(modified_response => {
    cy.therapistProfileAssertions(modified_response)
  })

});


Then("All physician information matches", () => {
  cy.get("@createPhysician").then(response => {
    cy.physicianProfileAssertions(response.body)
  })

});