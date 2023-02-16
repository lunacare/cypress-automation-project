import {physicianProfilePage} from "@pages/luxe/physicianProfilePage";
Cypress.Commands.add("physicianProfileAssertions", (data) => {

   

cy.contains(physicianProfilePage.prefix).parent().find("td").invoke('text').should('equal',data.body.id)
cy.contains(physicianProfilePage.firstname).parent().next().invoke('text').should('equal',data.body.properties.email)
cy.contains(physicianProfilePage.lastname).parent().next().invoke('text').should('equal',data.body.properties.firstname)
cy.contains(physicianProfilePage.npi).parent().next().invoke('text').should('equal',data.body.properties.lastname)
cy.contains(physicianProfilePage.region).parent().next().invoke('text').should('equal',data.body.properties.gender)
cy.contains(physicianProfilePage.gender).parent().next().invoke('text').should('equal',data.body.properties.phone)
cy.contains(physicianProfilePage.hubspot_id).parent().next().invoke('text').should('equal',data.body.properties.address)
cy.contains(physicianProfilePage.fax_number).parent().next().invoke('text').should('Draft')
cy.contains(physicianProfilePage.phone_number).parent().next().invoke('text').should('equal', data.body.properties.desired_weekly_appointments)
cy.contains(physicianProfilePage.email).parent().next().invoke('text').should('equal', data.body.properties.pet_allergies)
cy.contains(physicianProfilePage.address).parent().next().invoke('text').should('equal', data.body.properties.pet_allergies)

});