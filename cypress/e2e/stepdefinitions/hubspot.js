const {Given, When,Then} = require("@badeball/cypress-cucumber-preprocessor")



require("@commands/hubspot_requests/syncDraftTherapists");
require("@commands/hubspot_requests/syncPhysician");
require("@commands/hubspot_requests/createDraftTherapists");
require("@commands/hubspot_requests/createPhysician");
require("@commands/luxe/luxeGoogleAuthentication");
require("@commands/luxe/searchTherapistbyEmail");
require("@commands/luxe/searchPhysicianByNpi");
require("@assertions/luxe/therapistProfileAssertions");


import {luna_luxe_url} from '@config/environment'
import {luna_luxe_cookie} from '@config/environment'


before(function(){

    cy.luxeAuthentication()
    cy.getCookie(luna_luxe_cookie[Cypress.env('environment')]).as("cookie") 
  
})

afterEach(function(){
  cy.session("preserving session",()=>{
   
    cy.setCookie(luna_luxe_cookie[Cypress.env('environment')],this.cookie.value,{
      secure: true
    })
  })
  cy.visit(luna_luxe_url[Cypress.env('environment')]+'/admin/dashboard')
})



Given("A physician is created thru API", () => {
  cy.createPhysician().as("createPhysician").then(response =>{
    cy.syncPhysician(response.body.id, response.body.properties.email)
  })
   
});


Given("A therapist is created thru API", () => {
  
  cy.createDraftTherapist().as("createDraftTherapist").then(modified_response =>{
    cy.syncDraftTherapist(modified_response.response.body.id, modified_response.response.body.properties.email)
  })
   
});



When("It is searched in Luxe physician profiles", () => {
  cy.get("@createPhysician").then( response =>{
    cy.searchPhysicianByNpi(response.body.properties.npi);
  }).pause()


  
   
});

When("It is searched in Luxe therapist profiles", () => {
  
  cy.get("@createDraftTherapist").then( response =>{
    cy.searchTherapistbyEmail(response.body.properties.email);
  })
  
});

Then("All therapist information matches", () => {
  
  cy.get("@createDraftTherapist").then( modified_response =>{
    cy.therapistProfileAssertions(modified_response)
  })

});


Then("All physician information matches", () => {
  cy.get("@createPhysician").then( response =>{
    cy.therapistProfileAssertions(response.body)
  })

});