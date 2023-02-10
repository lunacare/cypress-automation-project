export class HubspotPage{

constructor(){
    this.firsNameInput="#first_name";
    this.lastnameInput="#lastname";
    this.age="#age";
    this.phone="#phone";
}

visit(){
    cy.visit("https://luxe.alpha.getluna.com/admin/therapists");
}

getPathToCreateTherapist(){
    return "/crm/v3/objects/contacts"
}

getBaseUrlForApi(){
   return  "https://api.hubapi.com";
}

getCreateTherapistApi(){
    return {
            "data": {
                "path": "/crm/v3/objects/contacts",
                "body":{
                    "properties": {
                        "email":"yuly.murillo+t30@koombea.com",
                        "therapist_or_patient_":"Therapist",
                        "pt_license_number":"1234567890",
                        "emr_created":"1678320000000",
                        "hs_lead_status":"Therapist - Qualified",
                        "desired_weekly_appointments":"5",
                        "bank_account_type":"savings",
                        "pet_allergies":"yes",
                        "specialties_credentialing_form":"0",
                        "address":"55 Golden street",
                        "city":"Bay Area",
                        "state":"California",
                        "zip":"92345",
                        "treating_city":"Bay Area",
                        "treating_street_address":"55 Golden street",
                        "treating_postal_code":"92345",
                        "treating_state":"California",
                        "gender":"male",
                        "date_of_birth":"668476800000"
                    }
                }
        }
    }
       
}


}

export const hubspotPage = new HubspotPage();