import {therapistProfilePage} from "@pages/luxe/therapistProfilePage";
Cypress.Commands.add("therapistProfileAssertions", (data) => {

cy.contains(therapistProfilePage.hubspot_id).parent().next().invoke('text').should('equal',data.id)
cy.contains(therapistProfilePage.email).parent().next().invoke('text').should('equal',data.properties.email)

/*
cy.contains(therapistProfilePage.firsName).parent().next().invoke('text').should('equal','Therapist Automation')
cy.contains(therapistProfilePage.lastname).parent().next().invoke('text').should('equal','hubspot')
cy.contains(therapistProfilePage.credentials).parent().next().invoke('text').should('equal','yes')
cy.contains(therapistProfilePage.birthday).parent().next().invoke('text').should('equal','05/02/1968 (54 years old)')
cy.contains(therapistProfilePage.gender).parent().next().invoke('text').should('equal','Male')
cy.contains(therapistProfilePage.phone_number).parent().next().invoke('text').should('equal','(333) 555-7777')

cy.contains(therapistProfilePage.legal_address).parent().next().invoke('text').should('55 Golden St, Bay Area, CA, 92345')

cy.contains(therapistProfilePage.npi).parent().next().invoke('text').should('')
cy.contains(therapistProfilePage.status).parent().next().invoke('text').should('Draft')
cy.contains(therapistProfilePage.patient_acceptance_status).parent().next().invoke('text').should('Draft')
cy.contains(therapistProfilePage.appointments_week).parent().next().invoke('text').should('5')
cy.contains(therapistProfilePage.scheduling_preffered_status).parent().next().invoke('text').should('N/A (Standard)')
cy.contains(therapistProfilePage.start_booking_date).parent().next().invoke('text').should('')
cy.contains(therapistProfilePage.pet_friendly).parent().next().invoke('text').should('')
cy.contains(therapistProfilePage.patient_preference).parent().next().invoke('text').should('Quality')*/




});