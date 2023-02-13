export class DashboardPage {

    constructor(){
        this.customers='[href="/admin/customers"]';
      
    }
    
    
    getTherapist(){
        cy.get(this.firsNameInput).type(data)
    }
    
    }
    
    export const dashboardPage = new DashboardPage();