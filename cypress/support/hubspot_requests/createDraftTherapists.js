import {hubspotPage} from "@pages/HubspotPage";
import {getHubspotToken} from "@support/utils";

Cypress.Commands.add("createDraftTherapist", () => {

  const createTherapistData = hubspotPage.getCreateTherapistApiPayload()
  const syncTherapistUrl = hubspotPage.getSyncTherapistUrl(createTherapistData.body.properties.email)
  const base_url = hubspotPage.getBaseUrlForApi()

    cy.request({
      method: 'POST',
      url: base_url+createTherapistData.path,
      headers: {
        "Content-Type":"application/json"
      },
      qs:{
        hapikey: getHubspotToken()
      },
      body:createTherapistData.body,
      failOnStatusCode: false

    }).then(response => {

      expect(response.status).to.be.eq(201)
      
      cy.request({
        method: 'POST',
        url: base_url+syncTherapistUrl,
        headers: {
          "Content-Type":"application/json"
        },
        qs:{
          hapikey: getHubspotToken()
        },
        body:{"vid":response.body.id},
        failOnStatusCode: false
  
      }).then(response => {
        expect(response.status).to.be.eq(204)
      });
    });
});

