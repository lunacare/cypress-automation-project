const {Given, When,Then} = require("@badeball/cypress-cucumber-preprocessor")



require("@commands/hubspot_requests/syncDraftTherapists");
require("@commands/hubspot_requests/syncPhysician");
require("@commands/hubspot_requests/createDraftTherapists");
require("@commands/hubspot_requests/createPhysician");
require("@commands/luxe/luxeGoogleAuthentication");
require("@commands/luxe/searchTherapistbyEmail");
require("@assertions/luxe/therapistProfileAssertions");






import {luna_luxe_url} from '@config/environment'


beforeEach(() =>{

  cy.session("preserving session",() =>{
    cy.luxeAuthentication()
  })
  cy.visit(luna_luxe_url[Cypress.env('environment')]+'/admin/dashboard')
})


Given("A patient is created thru API", () => {

 
   
});


Given("A physician is created thru API", () => {
  /*cy.createPhysician().then(response =>{
    cy.syncPhysician(response.body.id, response.body.properties.email)
  })*/
   
});


Given("A therapist is created thru API", () => {
  
  cy.createDraftTherapist().as("createDraftTherapist").then(response =>{
    cy.syncDraftTherapist(response.body.id, response.body.properties.email).as("syncDraftTherapist")
  })

   
});


When("It is searched in Luxe patient profiles", () => {
 /* cy.get('[href="/admin/patients"]').click({force:true})
  cy.get('[name="q[search_by_email]"]').type("yuly.murillo@")
  cy.get('[type="submit"]').click()*/
   
});

When("It is searched in Luxe physician profiles", () => {
  /*cy.get('[href="/admin/physicians"]').click({force:true})
  cy.get('#q_email').type("yuly.murillo@")
  cy.get('[type="submit"]').click()*/
   
});

When("It is searched in Luxe therapist profiles", () => {
  /*cy.get('[href="/admin/therapists"]').click({force:true})
  cy.get('[name="q[search_by_email]"]').type("yuly.murillo@")
  cy.get('[type="submit"]').click()*/
  
});

Then("All therapist information matches", () => {
  
  cy.get("@createDraftTherapist").then( response =>{
    cy.searchTherapistbyEmail(response.body.properties.email);
    cy.therapistProfileAssertions(response.body)
  })

 /* cy.get("@syncDraftTherapist").then( response =>{
    
  })*/

});

Then("All patient information matches", () => {


});

Then("All physician information matches", () => {


});