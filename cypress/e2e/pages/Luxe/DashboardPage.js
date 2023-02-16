export class DashboardPage {

    constructor(){
        this.customers='[href="/admin/customers"]';
        this.therapists='[href="/admin/therapists"]'
        this.physicians='[href="/admin/physicians"]';
      
    }
    
    
    getTherapist(){
        cy.get(this.firsNameInput).type(data)
    }
    
    }
    
    export const dashboardPage = new DashboardPage();