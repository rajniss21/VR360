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


import 'cypress-file-upload';
 Cypress.Commands.add("login",() => {  

  // cy.request({
  //   method: 'POST',
  //   url: 'https://devadmin-bspace.ekbana.net/api/v1/auth/login',
  //   body: {"meta":{"copyright":"Copyright 2017 Ekbana Pte","email":"info@ekbana.com","api":{"version":"1"}},"data":{"username":"rajnishofficeuse@gmail.com","password":"admin123","client_id":"2","client_secret":"PvhU4Nymq8QyiWAndxThPDuowNSaBslICM0Yoc2P","grant_type":"password"}}
  // })
  // .then((resp) => {
  //   window.localStorage.setItem('access_token', resp.body.data.access_token)
  // })
  cy.visit('https://dev-bspace.ekbana.net/login')
            
            .get('#email').type('rajnishofficeuse@gmail.com')
            .get('#password').type('admin123')


            .get('.submit_btn > .btn').click()
})
//
//
// -- This is a child command --
// Cypress.Commands.add("drag", { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add("dismiss", { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite("visit", (originalFn, url, options) => { ... })
Cypress.Commands.add('getLastEmail', email => {
    function requestEmail() {
      return cy
        .request({
          method: 'GET',
          url: 'http://localhost:4003/last-email',
          headers: {
            'content-type': 'application/json',
          },
          qs: {
            email,
          },
          json: true,
        })
        .then(({ body }) => {
          if (body) {
            return body;
          }
  
          // If body is null, it means that no email was fetched for this address.
          // We call requestEmail recursively until an email is fetched.
          // We also wait for 300ms between each call to avoid spamming our server with requests
          cy.wait(300);
  
          return requestEmail();
        });
    }
  
    return requestEmail();
  });

  let LOCAL_STORAGE_MEMORY = {};

  Cypress.Commands.add("saveLocalStorage", () => {
    Object.keys(localStorage).forEach(key => {
      LOCAL_STORAGE_MEMORY[key] = localStorage[key];
    });
  });

  Cypress.Commands.add("restoreLocalStorage", () => {
    Object.keys(LOCAL_STORAGE_MEMORY).forEach(key => {
      localStorage.setItem(key, LOCAL_STORAGE_MEMORY[key]);
    });
  });