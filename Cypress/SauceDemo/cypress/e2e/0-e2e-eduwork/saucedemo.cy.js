/// <reference types="cypress"/>

describe('Automation Test on Saucedemo', () => {
    before(() => {
        cy.clearCookies()
        cy.clearLocalStorage()
        cy.visit('https://www.saucedemo.com/')
        cy.url().should('include', 'saucedemo.com')
    })

    it('.Should() - be checking fitur on saucedemo', () => {
        cy.fixture("user").then(user => {
            const usernameStandard = user.standard_user
            const usernameLocked = user.locked_out_user
            const usernameProblem = user.problem_user
            const usernamePerformance = user.performance_glitch_user
            const password = user.secret_sauce
        
        // login standard user
        cy.loginStandard(usernameStandard, password)
        // Add all products and remove
        cy.addAllitem()
        cy.removeAllitem()
        // Check open products & Back to products
        cy.openProducts()
        // Add to cart and checkout
        cy.addCartandCheckout()
        // Sort
        cy.sortZA()
        cy.sortLohi()
        cy.sortHilo()
        // Social meida
        cy.socialmedia()
        // Logout
        cy.logout()
        cy.get('.bot_column').should('be.visible')
        cy.pause()

        // login locked user
        cy.loginLocked(usernameLocked, password)
        cy.get('h3').should('contain.text', 'Epic sadface: Sorry, this user has been locked out.')
        cy.get('.bot_column').should('be.visible')
        cy.pause()

        // login problem user
        cy.loginProblem(usernameProblem, password)
        cy.get('.inventory_item_img').should('be.visible')
        // Add all products and remove
        //cy.addAllitem()
        //cy.removeAllitem()
        // Check open products & Back to products
        cy.openProducts()
        // Add to cart and checkout error
        //cy.addCartandCheckout()
        // Sort
        cy.sortZA()
        cy.sortLohi()
        cy.sortHilo()
        // Social meida
        cy.socialmedia()
        // Logout
        cy.logout()
        cy.get('.bot_column').should('be.visible')
        cy.pause()

        // login performance user
        cy.loginPerformance(usernamePerformance, password)
        cy.get('.title').should('contain.text', 'Products')
        // Add all products and remove
        cy.addAllitem()
        cy.removeAllitem()
        // Check open products & Back to products
        cy.openProducts()
        // Add to cart and checkout
        cy.addCartandCheckout()
        // Sort
        cy.sortZA()
        cy.sortLohi()
        cy.sortHilo()
        // Social meida
        cy.socialmedia()
        // Logout
        cy.logout()
        cy.get('.bot_column').should('be.visible')
        
        })
    })
})