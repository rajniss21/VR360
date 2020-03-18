/// <reference types="Cypress" />

context('Home Page', () => {
    beforeEach(() => {
            cy.visit('https://dev-bspace.ekbana.net/register', { delay: 6000 })
        })
        describe('Registration Process', () => {
        it('.should() -  fill up form', () => {
            cy.get('#first_name')
              .type('Rajnish').should('have.value', 'Rajnish')
              .get('#namek').type('Pradhan').should('have.value', 'Pradhan')
              .get('#email').type('rajnishoffice@gmail.com')
              .get('#cname').type('admin123')
              
              .get('#dropdownMenuButton').click()
              .get("[class='form-control border-left-0 search-form-control']").type('nepal')
              .get('.dropdown-item').click()
              .get('#telephone').click().type('9841054233')
              .get('#cName').click().type('company')
             // .get('submit').click()

              
              //cy.wait(2000)
              //cy.get('form-control border-left-0 search-form-control')
             // cy.get('.dropdown-item').click()
              //cy.contains('Nepal').click()

        })
        
             
      
    })
})


    

