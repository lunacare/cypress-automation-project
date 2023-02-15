import {dashboardPage} from "@pages/luxe/dashboardPage";
import {therapistsPage} from "@pages/luxe/therapistsPage";

Cypress.Commands.add("searchTherapistbyEmail", (email) => {
      cy.get(dashboardPage.therapists).click({force:true})
      cy.get(therapistsPage.filterEmailInput).type(email)
      cy.get(therapistsPage.filterbutton).click()
      cy.get(therapistsPage.viewTherapistAction).click({force: true})   
});