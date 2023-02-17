import {dashboardPage} from "@pages/luxe/dashboardPage";
import {therapistsPage} from "@pages/luxe/therapistsPage";
Cypress.Commands.add("searchTherapistbyEmail", (email) => {
 
     cy.get(dashboardPage.therapists).first().click({force:true})
     cy.wait(5000)
     cy.get(therapistsPage.filterEmailInput).should("be.visible").type(email)
     cy.get(therapistsPage.filterbutton).should("be.visible").click()
     cy.get(therapistsPage.viewTherapistAction).first().click({force: true})
            
});