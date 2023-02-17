import {physicianProfilePage} from "@pages/luxe/physicianProfilePage";
Cypress.Commands.add("physicianProfileAssertions", (data) => {
    
    
 cy.get(physicianProfilePage.prefix).should("exist").and('be.visible').its('text').should('eq',data.prefix)


/*cy.get(physicianProfilePage.firstname).should("exist").and('be.visible').its('text').should('eq',data.body.properties.firstname)
cy.get(physicianProfilePage.lastname).should("exist").and('be.visible').its('text').should('eq',data.body.properties.lastname)
cy.get(physicianProfilePage.npi).should("exist").and('be.visible').its('its').should('eq',data.body.properties.npi)
cy.get(physicianProfilePage.region).should("exist").and('be.visible').its('text').should('eq',data.body.properties.region)
cy.get(physicianProfilePage.hubspot_id).should("exist").and('be.visible').its('text').should('eq',data.body.properties.hubspot_id)
cy.get(physicianProfilePage.fax_number).should("exist").and('be.visible').its('text').should('eq',data.body.properties.fax_number)
cy.get(physicianProfilePage.phone_number).should('be.visible').its('text').should('eq', data.body.properties.phone_number)
cy.get(physicianProfilePage.email).should("exist").and('be.visible').its('text').should('eq', data.body.properties.email)*/

});