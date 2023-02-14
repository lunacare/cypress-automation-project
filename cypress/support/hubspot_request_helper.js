
import {getHubspotToken} from "@support/utils";
import {hubspotPage} from "@pages/HubspotPage";

Cypress.Commands.add("hubspot_request_helper", (method,path, body,status) => {
  
      cy.request({
        method: method,
        url: hubspotPage.getBaseUrlForApi()+path,
        headers: {
          "Content-Type":"application/json"
        },
        qs:{
          hapikey: getHubspotToken()
        },
        body:body,
        failOnStatusCode: false
  
      }).then(response => {
        expect(response.status).to.be.eq(status)
      });
});
