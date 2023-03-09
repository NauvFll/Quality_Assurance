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

Cypress.Commands.add('loginStandard', (username, password) => {
    cy.clearCookies()
    cy.clearLocalStorage()
    cy.get('#user-name').clear()
    cy.get('#user-name').type(username)
    cy.get('#password').clear()
    cy.get('#password').type(password)
    cy.get('#login-button').click()
    cy.get('.title').should('contain.text', 'Products').and('be.visible')
})

Cypress.Commands.add('loginLocked', (username, password) => {
    cy.clearCookies()
    cy.clearLocalStorage()
    cy.get('#user-name').clear()
    cy.get('#user-name').type(username)
    cy.get('#password').clear()
    cy.get('#password').type(password)
    cy.get('#login-button').click()
})

Cypress.Commands.add('loginProblem', (username, password) => {
    cy.clearCookies()
    cy.clearLocalStorage()
    cy.get('#user-name').clear()
    cy.get('#user-name').type(username)
    cy.get('#password').clear()
    cy.get('#password').type(password)
    cy.get('#login-button').click()
    cy.get('.title').should('contain.text', 'Products').and('be.visible')
})

Cypress.Commands.add('loginPerformance', (username, password) => {
    cy.clearCookies()
    cy.clearLocalStorage()
    cy.get('#user-name').clear()
    cy.get('#user-name').type(username)
    cy.get('#password').clear()
    cy.get('#password').type(password)
    cy.get('#login-button').click()
    cy.get('.title').should('contain.text', 'Products').and('be.visible')
})

Cypress.Commands.add('addAllitem', () => {
    cy.get('#add-to-cart-sauce-labs-backpack').should('contain.text', 'Add to cart').click()
    cy.get('#add-to-cart-sauce-labs-bike-light').should('contain.text', 'Add to cart').click()
    cy.get('#add-to-cart-sauce-labs-bolt-t-shirt').should('contain.text', 'Add to cart').click()
    cy.get('#add-to-cart-sauce-labs-fleece-jacket').should('contain.text', 'Add to cart').click()
    cy.get('#add-to-cart-sauce-labs-onesie').should('contain.text', 'Add to cart').click()
})

Cypress.Commands.add('removeAllitem', () => {
    cy.get('.shopping_cart_link').click()
    cy.get('#remove-sauce-labs-backpack').should('contain.text', 'Remove').click()
    cy.get('#remove-sauce-labs-bike-light').should('contain.text', 'Remove').click()
    cy.get('#remove-sauce-labs-bolt-t-shirt').should('contain.text', 'Remove').click()
    cy.get('#remove-sauce-labs-fleece-jacket').should('contain.text', 'Remove').click()
    cy.get('#remove-sauce-labs-onesie').should('contain.text', 'Remove').click()
    cy.get('#continue-shopping').click()
    cy.get('.title').should('contain.text', 'Products').and('be.visible')
})

Cypress.Commands.add('addCartandCheckout', () => {
    cy.get('#add-to-cart-sauce-labs-backpack').click()
    cy.get('.shopping_cart_link').click()
    cy.get('#checkout').click()
    cy.get('#first-name').clear()
    cy.get('#first-name').type('Naina')
    cy.get('#last-name').clear()
    cy.get('#last-name').type('Sports')
    cy.get('#postal-code').clear()
    cy.get('#postal-code').type('1998')
    cy.get('#continue').click()
    cy.get('.title').should('contain.text', 'Checkout: Overview').and('be.visible')
    cy.get('#finish').click()
    cy.get('.title').should('contain.text', 'Checkout: Complete!')
    cy.get('.complete-header').should('contain.text', 'THANK YOU FOR YOUR ORDER')
    cy.get('.complete-text').should('contain.text', 'Your order has been dispatched, and will arrive just as fast as the pony can get there!')
    cy.get('#back-to-products').click()
    cy.get('.title').should('contain.text', 'Products')
})

Cypress.Commands.add('openProducts', () => {
    cy.get('#item_4_title_link').click()
    cy.get('.inventory_details_desc').should('be.visible')
    cy.get('#back-to-products').click()
    cy.get('.title').should('contain.text', 'Products').and('be.visible')
})

Cypress.Commands.add('sortAZ', () => {
    cy.get('.product_sort_container').select('az', 'Name (A to Z)')
})
Cypress.Commands.add('sortZA', () => {
    cy.get('.product_sort_container').select('za', 'Name (Z to A)')
})
Cypress.Commands.add('sortLohi', () => {
    cy.get('.product_sort_container').select('lohi', 'Price (low to high)')
})
Cypress.Commands.add('sortHilo', () => {
    cy.get('.product_sort_container').select('hilo', 'Price (high to low)')
})

Cypress.Commands.add('socialmedia', () => {
    cy.get('.social_twitter').should('contain.text', 'Twitter').and('be.visible')
    cy.get('.social_facebook').should('contain.text', 'Facebook').and('be.visible')
    cy.get('.social_linkedin').should('contain.text', 'LinkedIn').and('be.visible')
})

Cypress.Commands.add('logout', () => {
    cy.get('#react-burger-menu-btn').click()
    cy.get('#logout_sidebar_link').click()
    cy.get('.bot_column').should('be.visible')
})