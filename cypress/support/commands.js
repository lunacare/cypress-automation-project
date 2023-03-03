Cypress.on(
    'uncaught:exception',
    (err) => !err.message.includes('ResizeObserver loop limit exceeded')
);

Cypress.Commands.add("customWaitElement", (xpath, times, miliseconds) => {
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
});

Cypress.Commands.add("customWaitElementDoWhile", (xpath, times, miliseconds) => {
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
        let element = document.evaluate(xpath, document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null);
        console.log("found element in loop")
        console.log(element)
        i++;
    } while (i < times);
    if (!found) {
        cy.task('log', `element ´${xpath} no found`)
    }
    return found;
});