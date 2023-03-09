/// <reference types="cypress" />

describe('Automation Test demoMidtrans', () => {
    // before(() => {
    
    it('.Should() - Input Number on Email Field', () => {
        cy.clearCookies()
        cy.clearLocalStorage()
        cy.visit('https://demo.midtrans.com/')

        cy.NumberEmail()
    })
        
    it('.Should() - Input Letter on Phone Number Field', () => {
        cy.clearCookies()
        cy.clearLocalStorage()
        cy.visit('https://demo.midtrans.com/')

        cy.LetterPhoneNumber()
    })

    it('.Should() - Input Letter on Postal Code', () => {
        cy.clearCookies()
        cy.clearLocalStorage()
        cy.visit('https://demo.midtrans.com/')

        cy.LetterPostalCode()
    })

    it('.Should() - Change Prices Product', () => {
        cy.clearCookies()
        cy.clearLocalStorage()
        cy.visit('https://demo.midtrans.com/')

        cy.ChangePrices()
    })

    it('.Should() - No Input', () => {
        cy.clearCookies()
        cy.clearLocalStorage()
        cy.visit('https://demo.midtrans.com/')

        cy.Blank()
    })

})
    

    
