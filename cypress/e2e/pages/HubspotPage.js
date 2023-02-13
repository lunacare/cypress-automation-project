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

getPathToCreateTherapist(){
    return "/crm/v3/objects/contacts"
}

getBaseUrlForApi(){
   return  "https://api.hubapi.com";
}

getCreateTherapistApiPayload(){

    requests.hubspot_therapist.body.properties.email = "yuly.murillo+"+getCurrentTimestamp("YYYYMMDDHHmmss",false)+"@koombea.com";
    requests.hubspot_therapist.body.properties.date_of_birth =getUTCDate(getNumberInRange(1950, 1991),getNumberInRange(1, 13),getNumberInRange(1, 31))
    requests.hubspot_therapist.body.properties.emr_created = getUTCDate(getNumberInRange(2018, 2024),getNumberInRange(1, 13),getNumberInRange(1, 31))

     return requests.hubspot_therapist
     
}

getSyncTherapistUrl(email){
    return workflowData[Cypress.env('environment')].draft_therapists.replace(":email",email);
}


}

export const hubspotPage = new HubspotPage();