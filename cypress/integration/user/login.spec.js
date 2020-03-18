/// <reference types= "Cypress"/>

context('Login page', () => { 
    beforeEach(() => {
        cy.visit('https://dev-bspace.ekbana.net/login',{delay:6000})
    })
    describe('Login process', () =>{
        it('.should() - Fill up the username and password and hit Login button', () => {
            cy
            
            .get('#email').type('rajnishofficeuse@gmail.com')
            .get('#password').type('admin123')
            .get('.submit_btn > .btn').click()
        })
    })
   


})