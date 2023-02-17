import {dashboardPage} from "@pages/luxe/dashboardPage";
import {physiciansPage} from "@pages/luxe/physiciansPage";
Cypress.Commands.add("searchPhysicianByNpi", (npi) => {
     
      cy.get(dashboardPage.physicians).first().click({force:true})
      cy.wait(5000)
      cy.get(physiciansPage.filterNpiInput).type(npi)
      cy.get(physiciansPage.filterbutton).click()
      cy.get(physiciansPage.viewPhysicianAction).click({force: true})
           
});