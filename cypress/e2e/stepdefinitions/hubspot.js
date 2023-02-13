const {Given, When,Then} = require("@badeball/cypress-cucumber-preprocessor")

require("@support/hubspot_requests/createDraftTherapists");
require("@commands/luxeGoogleAuthentication");


before(() => {

  cy.luxeAuthentication()
})


Given("A therapist is created thru API", () => {
  
  //cy.createDraftTherapist()
   
});


When("It is searched in Luxe therapist profiles", () => {

   
});



Then("All therapist information matches", () => {


});