export class TherapistProfilePage{

constructor(){
    this.firsNameInput="#first_name";
    this.lastnameInput="#lastname";
    this.age="#age";
    this.phone="#phone";
}

visit(){
    cy.visit("https://luxe.alpha.getluna.com/admin/therapists");
}

getTherapist(){
    cy.get(this.firsNameInput).type(data)
}

}

export const therapistProfilePage = new TherapistProfilePage();