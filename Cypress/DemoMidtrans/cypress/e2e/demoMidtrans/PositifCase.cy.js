/// <reference types="cypress" />

describe('Automation Test demoMidtrans', () => {
    before(() => {
        cy.clearCookies()
        cy.clearLocalStorage()
        cy.visit('https://demo.midtrans.com/')
    })
    
    it('Checkout With Bank Transfer', () => {
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
        cy.get('input[value="10220"]').type('16516')
        // Checkout
        cy.get('.cart-checkout').click()
        cy.wait(500)
        
    })
})

    

    
