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
  
       describe('date picker', ()=>{

         
          it('.should() - select date', ()=>{
            
            const todaysDate = Cypress.moment().format('YYYY-MM-DD')
            cy.get('.icon-container > .img-fluid').click({wait:1000})

            // cy.get(':nth-child(6) > :nth-child(2) > .form-group > .col-sm-9 > .input-group > .form-control').then(($data)=>{
            //    //$('input[formcontrolname="published_date"]').click()
            //   // $('span[class="owl-dt-calendar-cell-content owl-dt-calendar-cell-today"]').click()
               
            //    $data('input[formcontrolname="published_date"]').click()
            //    $data('span[class="owl-dt-calendar-cell-content owl-dt-calendar-cell-today"]').click()
            // })

            //cy.get('input[formcontrolname="published_date"]').click()
           // cy.get('span[class="owl-dt-calendar-cell-content owl-dt-calendar-cell-today"]').click()
             cy.get('input[formcontrolname="published_date"]').then((data)=>{
               data.click();
             })
             cy.get('span[class="owl-dt-calendar-cell-content owl-dt-calendar-cell-today"]').then((elm)=>{
               elm.click();
               //elm.Close();
             })

            
            //cy.get('@get').type(todaysDate)
              // cy.get('@get').type('{enter}')
              // cy.get('@get').type('{enter}')
              // cy.get('@get').type(todaysDate)
           // cy.get('@get').type('{enter}')
            //cy.get(':nth-child(6) > :nth-child(2) > .form-group > .col-sm-9 > .input-group > .form-control').type('{enter}')

           // cy.get('owl-dt-calendar-cell-content owl-dt-calendar-cell-today owl-dt-calendar-cell-selected').click()
            //cy.get(':nth-child(6) > :nth-child(2) > .form-group > .col-sm-9 > .input-group > .form-control').type(todaysDate)
            //cy.get('#owl-dt-picker-0').click()
            
         
          
           
                
                })
            
  
           })
              
           })     
  