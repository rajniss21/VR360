/// <reference types="Cypress" />


context('Home Page', () => {
  
  beforeEach(() => {
    cy.restoreLocalStorage();
  });
  
  afterEach(() => {
    cy.saveLocalStorage();
  });

     describe('call to login function', ()=>{
         it('.should() - Login into the system', ()=>{
            cy.login()
            cy.saveLocalStorage();
            cy.wait(10000)
            
         })
     }) 

     describe('Create Space', ()=>{
        it('.should() - Create space', ()=>{
          const todaysDate = Cypress.moment().format('YYYY-MM-DD')
          //const value = 'Category 1'
           cy
        
           cy.get('.icon-container > .img-fluid').click()
           .get('#spaceTitle').type('Space titile 1')
             //imapge upload
             
           Cypress.$(document).ready(function(){ setInterval(function(){
            Cypress.$('input[type="hidden"]').prop('type','file').first().prop('id','file1');  
           },1000 ) })
            
        const fileName = 'Optimizer-Inc-02072019_140252.jpg';
          cy.fixture(fileName).then(fileContent => {
          cy.get('#file-upload').upload({ fileContent, fileName, mimeType: 'image/jpg' })
          .get('#cInfo').type('EKbana Test')
          .get('#author').type('Rajnish Pradhan')
          .get('#contact_name').type('Rajnish Pradhan')
          .get(':nth-child(4) > :nth-child(1) > .form-group > .col-sm-9 > .input-group > .input-group-append > #basic-addon2').click()
          .get('#contact_email').type('rajnishofficeuse@gmail.com')  
          .get(':nth-child(4) > :nth-child(2) > .form-group > .col-sm-9 > .input-group > .input-group-append > #basic-addon2').click() 
          .get(".field-section > .dropdown > #dropdownMenuButton").click()
          .get('.dropdown-menu > .input-group > .form-control').type('nepal')
          .get('.ps-content > .dropdown-item').click()
          .get('#phone').type('9841054233')
          .get(':nth-child(2) > .input-group-append > #basic-addon2').click()
          .get('#address').type('Pepsicola')
          .get(':nth-child(5) > :nth-child(2) > .form-group > .col-sm-9 > .input-group > .input-group-append > #basic-addon2').click()
          .get('#webAddress').type('https://dev-bspace.ekbana.net/')
          .get(':nth-child(6) > :nth-child(1) > .form-group > .col-sm-9 > .input-group > .input-group-append > #basic-addon2').click()
          .get('#summary').type('Virtual tour is a panoramic view or video simulation of an existing place that can be viewed online.')
          .get('#category').select('category 1')
          cy.get(':nth-child(6) > :nth-child(2) > .form-group > .col-sm-9 > .input-group > .form-control').click()
          cy.get('body').click()
          cy.get(':nth-child(5) > .owl-dt-day-4 > .owl-dt-calendar-cell-content').click()
          cy.get(':nth-child(5) > .owl-dt-day-4 > .owl-dt-calendar-cell-content').click()
          cy.get('body').click()
          cy.get('.modal-footer > .btn').click({wait:1000})  
          cy.get('.btn-orange').click({wait:1000})  
          cy.get('.btn-orange').click({wait:1000})
         // cy.get('#img-title').should('have.class', 'img-title')
                  cy
            .get('h1')
            .should(($h1) => {
              // should have found 3 elements
              expect($h1).to.have.length(3)

              // make sure the first contains some text content
              expect($h1.first()).to.contain('Space')

              // use jquery's map to grab all of their classes
              // jquery's map returns a new jquery object
              
              })
          

         })
            
         })     

    })
})
