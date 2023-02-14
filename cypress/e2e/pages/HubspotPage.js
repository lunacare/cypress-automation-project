const requests = require("@fixtures/hubspot_requests.json");
const workflowData = require("@fixtures/hubspot_workflows.json");
import {getCurrentTimestamp} from '@support/utils.js'
import {getUTCDate} from '@support/utils.js'
import {getNumberInRange} from '@support/utils.js'

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

getPathToCreateContacts(){
    return "/crm/v3/objects/contacts"
}

getBaseUrlForApi(){
   return  "https://api.hubapi.com";
}

getCreateTherapistApiPayload(){

    requests.hubspot_therapist.body.properties.email = "yuly.murillo+t-"+getCurrentTimestamp("YYYYMMDDHHmmss",false)+"@koombea.com";
    requests.hubspot_therapist.body.properties.date_of_birth =getUTCDate(getNumberInRange(1950, 1991),getNumberInRange(1, 13),getNumberInRange(1, 31))
    requests.hubspot_therapist.body.properties.emr_created = getUTCDate(getNumberInRange(2018, 2024),getNumberInRange(1, 13),getNumberInRange(1, 31))

     return requests.hubspot_therapist
     
}


getCreatePhysicianApiPayload(){
    var currentTimeStamp=getCurrentTimestamp("YYYYMMDDHHmmss",false);
    requests.hubspot_physician.body.properties.email = "yuly.murillo+ph-"+currentTimeStamp+"@koombea.com";
    requests.hubspot_physician.body.properties.firstname ="Physician "+currentTimeStamp;
    requests.hubspot_physician.body.properties.npi =getCurrentTimestamp("YYYYMMDDHH",false);
   
     return requests.hubspot_physician
     
}

getCreatePatientApiPayload(){
    var currentTimeStamp=getCurrentTimestamp("YYYYMMDDHHmmss",false);
    requests.hubspot_physician.body.properties.email = "yuly.murillo+ph-"+currentTimeStamp+"@koombea.com";
    requests.hubspot_physician.body.properties.firstname ="Physician "+currentTimeStamp;
    requests.hubspot_physician.body.properties.npi =getCurrentTimestamp("YYYYMMDDHH",false);
   
     return requests.hubspot_physician
     
}

getSyncTherapistUrl(email){
    return workflowData[Cypress.env('environment')].draft_therapists.replace(":email",email);
}

getSyncPhysicianUrl(email){
    return workflowData[Cypress.env('environment')].physicians.replace(":email",email);
}

getSyncPatientUrl(email){
    return workflowData[Cypress.env('environment')].physicians.replace(":email",email);
}


}

export const hubspotPage = new HubspotPage();