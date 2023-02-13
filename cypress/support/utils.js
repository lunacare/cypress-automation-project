export function  getCurrentTimestamp(format, isUtc) {
    const timestamp = require('time-stamp');
    if(!isUtc){
        return timestamp(format);
    }
        return timestamp.utc(format);
};

export function getNumberInRange(min, max){
    return Math.floor(Math.random() * (max - min) + min);
};


export function getUTCDate(year, month, day) {
    return Date.UTC(year,month,day);
}

export function getHubspotToken() {
    const hubspot_keys = require("../../hubspot-keys.json");
    return hubspot_keys[Cypress.env('environment')];
}