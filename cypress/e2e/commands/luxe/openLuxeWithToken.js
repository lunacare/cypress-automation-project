require("@support/googleAuthenticationWithCode");
require("@support/getGoogleVerificationCode");
import { luna_luxe_url } from '@config/environment'
import { getLuxeToken } from "@support/utils";

Cypress.Commands.add("openLuxeWithToken", () => {
    cy.visit(luna_luxe_url[Cypress.env('environment')] + '/automation/'
        + getLuxeToken()['AUTOMATION_LOGIN_ROUTE'] + "?automation_token="
        + getLuxeToken()['AUTOMATION_TOKEN'])

});
