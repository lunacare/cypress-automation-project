import {hubspotPage} from "@pages/HubspotPage";

require("@support/hubspot_request_helper");

Cypress.Commands.add("createPatient", () => {

  const createPatient = hubspotPage.getCreatePatientApiPayload()
  const pathToCreateContact = hubspotPage.getPathToCreateContacts()

  cy.hubspot_request_helper('POST',pathToCreateContact, createPatient,201).then(response => {
    return response;
  });

});

