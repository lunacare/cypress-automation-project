import {therapistProfilePage} from "@pages/luxe/therapistProfilePage";
Cypress.Commands.add("therapistProfileAssertions", (data) => {

   
var date_of_birth = data.local_date_of_birth.year+"-"+data.local_date_of_birth.month+"-"+data.local_date_of_birth.day
   

cy.contains(therapistProfilePage.hubspot_id).parent().next().invoke('text').should('equal',data.response.body.id)
cy.contains(therapistProfilePage.email).parent().next().invoke('text').should('equal',data.response.body.properties.email)
cy.contains(therapistProfilePage.firsName).parent().next().invoke('text').should('equal',data.response.body.properties.firstname)
cy.contains(therapistProfilePage.lastname).parent().next().invoke('text').should('equal',data.response.body.properties.lastname)
cy.contains(therapistProfilePage.birthday).parent().next(console.log).invoke('text').should.contains(date_of_birth)
cy.contains(therapistProfilePage.gender).parent().next().invoke('text').should('equal',data.response.body.properties.gender)
cy.contains(therapistProfilePage.phone_number).parent().next().invoke('text').should('equal',data.response.body.properties.phone)
cy.contains(therapistProfilePage.legal_address).parent().next().invoke('text').should('equal',data.response.body.properties.address)
cy.contains(therapistProfilePage.status).parent().next().invoke('text').should('Draft')
cy.contains(therapistProfilePage.appointments_week).parent().next().invoke('text').should('equal', data.response.body.properties.desired_weekly_appointments)
cy.contains(therapistProfilePage.pet_friendly).parent().next().invoke('text').should('equal', data.response.body.properties.pet_allergies)

});