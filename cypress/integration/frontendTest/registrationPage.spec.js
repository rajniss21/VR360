import * as registrationPageObject from '../../frontendPageObjects/registrationPageObject'

describe('Registration Scenario', () =>{

    before(() =>{
        registrationPageObject.frontendLoginUrl()
    });

    beforeEach(() => {
        cy.viewport(1280, 800);
    });

    const loginCheck = Cypress.env("mode").loggedin
    const registerCheck = Cypress.env("mode").register
    const forgotPasswordCheck = Cypress.env("mode").loggedin

    if(registerCheck) {
        it('should register new user', () => {
            registrationPageObject.registetNewUser()
        });
    }
})



