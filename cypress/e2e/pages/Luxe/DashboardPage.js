export class DashboardPage {

    constructor(){
        this.customers='[href="/admin/customers"]';
        this.therapists='[href="/admin/therapists"]';
      
    }
    
    
    getTherapist(){
        cy.get(this.firsNameInput).type(data)
    }
    
    }
    
    export const dashboardPage = new DashboardPage();