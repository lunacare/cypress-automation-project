export function getCurrentTimestamp(format, isUtc) {
    const timestamp = require('time-stamp');
    if (!isUtc) {
        return timestamp(format);
    }
    return timestamp.utc(format);
};

export function getNumberInRange(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
};


export function getUTCDate(data) {
    return Date.UTC(data.year, data.month, data.day);
}

export function getHubspotToken() {
    const hubspot_keys = require("../../hubspot-keys.json");
    return hubspot_keys[Cypress.env('environment')];
}
export function getLuxeToken() {
    const luxe_token = require("../../luxe_token_authentication.json");
    return luxe_token[Cypress.env('environment')];
}


export function customWaitElement(xpath, times, miliseconds) {
    let element = document.evaluate(xpath, document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null);
    console.log("found element in method")
    console.log(element)
    let found = false;
    for (let i = 0; i < times; i++) {

        if (element != undefined && element != null) {
            if (element.singleNodeValue != null) {
                console.log("found element in loop")
                console.log(element)
                found = true
                break;
            }
        }
        cy.task('log', `waiting element ´${xpath} to appear`)
        cy.wait(miliseconds)
        element = document.evaluate(xpath, document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null)
    }
    if (!found) {
        cy.task('log', `element ´${xpath} no found`)
    }
    return found;
}

export function customWaitElementDoWhile(xpath, times, miliseconds) {
    let element = document.evaluate(xpath, document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null);
    console.log("found element in method")
    console.log(element)
    let found = false;
    let i = 0;
    do {
        if (element != undefined && element != null) {
            if (element.singleNodeValue != null) {
                console.log("found element in loop")
                console.log(element)
                found = true
                break;
            }
        }
        cy.task('log', `waiting element ´${xpath} to appear`)
        cy.wait(miliseconds)
        element = document.evaluate(xpath, document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null)
        i++;
    } while (i < times);
    if (!found) {
        cy.task('log', `element ´${xpath} no found`)
    }
    return found;
}