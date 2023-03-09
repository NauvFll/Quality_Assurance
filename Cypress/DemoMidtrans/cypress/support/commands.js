// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

Cypress.Commands.add('NumberEmail', () => {
    cy.get('.btn.buy').click()
    // Input Name
    cy.get('input[value="Budi"]').clear()
    cy.get('input[value="Budi"]').type('Nauval')
    // Input Email
    cy.get('input[value="budi@utomo.com"]').clear()
    cy.get('input[value="budi@utomo.com"]').type('087777936080')
    // Input Phone Number
    cy.get('input[value="081808466410"]').clear()
    cy.get('input[value="081808466410"]').type('087777936080')
    // Input City
    cy.get('input[value="Jakarta"]').clear()
    cy.get('input[value="Jakarta"]').type('Depok')
    // Input Address
    cy.get('textarea').clear()
    cy.get('textarea').type('Bojongsari Baru, Sawangan, Depok')
    // Input Postal Code
    cy.get('input[value="10220"]').clear()
    cy.get('input[value="10220"]').type('16516')
    // Checkout
    cy.get('.cart-checkout').click()
    cy.wait(500)

Cypress.Commands.add('LetterPhoneNumber', () => {
    cy.get('.btn.buy').click()
    // Input Name
    cy.get('input[value="Budi"]').clear()
    cy.get('input[value="Budi"]').type('Nauval')
    // Input Email
    cy.get('input[value="budi@utomo.com"]').clear()
    cy.get('input[value="budi@utomo.com"]').type('Nauval@gmail.com')
    // Input Phone Number
    cy.get('input[value="081808466410"]').clear()
    cy.get('input[value="081808466410"]').type('ABC')
    // Input City
    cy.get('input[value="Jakarta"]').clear()
    cy.get('input[value="Jakarta"]').type('Depok')
    // Input Address
    cy.get('textarea').clear()
    cy.get('textarea').type('Bojongsari Baru, Sawangan, Depok')
    // Input Postal Code
    cy.get('input[value="10220"]').clear()
    cy.get('input[value="10220"]').type('16516')
    // Checkout
    cy.get('.cart-checkout').click()
    cy.wait(500)

Cypress.Commands.add('LetterPostalCode', () => {
    cy.get('.btn.buy').click()
    // Input Name
    cy.get('input[value="Budi"]').clear()
    cy.get('input[value="Budi"]').type('Nauval')
    // Input Email
    cy.get('input[value="budi@utomo.com"]').clear()
    cy.get('input[value="budi@utomo.com"]').type('Nauval@gmail.com')
    // Input Phone Number
    cy.get('input[value="081808466410"]').clear()
    cy.get('input[value="081808466410"]').type('087777936080')
    // Input City
    cy.get('input[value="Jakarta"]').clear()
    cy.get('input[value="Jakarta"]').type('Depok')
    // Input Address
    cy.get('textarea').clear()
    cy.get('textarea').type('Bojongsari Baru, Sawangan, Depok')
    // Input Postal Code
    cy.get('input[value="10220"]').clear()
    cy.get('input[value="10220"]').type('ABC')
    // Checkout
    cy.get('.cart-checkout').click()
    cy.wait(500)

Cypress.Commands.add('ChangePrices', () => {
    cy.get('.btn.buy').click()
    // Change Price
    cy.get('input[value="20000"]').clear()
    cy.get('input[value="20000"]').type('10000')
    // Input Name
    cy.get('input[value="Budi"]').clear()
    cy.get('input[value="Budi"]').type('Nauval')
    // Input Email
    cy.get('input[value="budi@utomo.com"]').clear()
    cy.get('input[value="budi@utomo.com"]').type('Nauval@gmail.com')
    // Input Phone Number
    cy.get('input[value="081808466410"]').clear()
    cy.get('input[value="081808466410"]').type('087777936080')
    // Input City
    cy.get('input[value="Jakarta"]').clear()
    cy.get('input[value="Jakarta"]').type('Depok')
    // Input Address
    cy.get('textarea').clear()
    cy.get('textarea').type('Bojongsari Baru, Sawangan, Depok')
    // Input Postal Code
    cy.get('input[value="10220"]').clear()
    cy.get('input[value="10220"]').type('16516')
    // Checkout
    cy.get('.cart-checkout').click()
    cy.wait(500)

Cypress.Commands.add('Blank', () => {
    cy.get('.btn.buy').click()
    // Change Price
    cy.get('input[value="20000"]').clear()
    // Input Name
    cy.get('input[value="Budi"]').clear()
    // Input Email
    cy.get('input[value="budi@utomo.com"]').clear()
    // Input Phone Number
    cy.get('input[value="081808466410"]').clear()
    // Input City
    cy.get('input[value="Jakarta"]').clear()
    // Input Address
    cy.get('textarea').clear()
    // Input Postal Code
    cy.get('input[value="10220"]').clear()
    // Checkout
    cy.get('.cart-checkout').click()
    cy.wait(500)
})
})
})
})
})