import {hubspotPage} from "@pages/HubspotPage";
import {getHubspotToken} from "@support/utils";

Cypress.Commands.add("createPhysician", () => {

  const createPhysicianData = hubspotPage.getCreatePhysicianApiPayload()
  const base_url = hubspotPage.getBaseUrlForApi()
  const pathToCreateContact = hubspotPage.getPathToCreateContacts()
    cy.request({
      method: 'POST',
      url: base_url+pathToCreateContact,
      headers: {
        "Content-Type":"application/json"
      },
      qs:{
        hapikey: getHubspotToken()
      },
      body:createPhysicianData.body,
      failOnStatusCode: false

    }).then(response => {

      expect(response.status).to.be.eq(201)
  
    });
});
