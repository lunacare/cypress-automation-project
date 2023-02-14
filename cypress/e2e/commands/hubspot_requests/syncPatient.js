import {hubspotPage} from "@pages/HubspotPage";

require("@support/hubspot_request_helper");

Cypress.Commands.add("syncPatient", (vid,email) => {

  const syncPatientUrl = hubspotPage.getSyncPatientUrl(email)
  cy.hubspot_request_helper('POST', syncPatientUrl,{"vid":vid},201).then(response => {
    return response;
  });

});
