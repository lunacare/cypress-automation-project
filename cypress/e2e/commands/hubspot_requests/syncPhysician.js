import {hubspotPage} from "@pages/HubspotPage";
import {getHubspotToken} from "@support/utils";

Cypress.Commands.add("syncPhysician", (vid,email) => {


  const syncTherapistUrl = hubspotPage.getSyncPhysicianUrl(email)
  const base_url = hubspotPage.getBaseUrlForApi()

      cy.request({
        method: 'POST',
        url: base_url+syncTherapistUrl,
        headers: {
          "Content-Type":"application/json"
        },
        qs:{
          hapikey: getHubspotToken()
        },
        body:{"vid":vid},
        failOnStatusCode: false
  
      }).then(response => {
        expect(response.status).to.be.eq(204)
      });

});
