function getFrontendUrl(){
    return Cypress.env(Cypress.env("currentFrontendEnv")).url;
}

function getBackendUrl(){
    return Cypress.env(Cypress.env("backendEnv")).url;
}

function getUserCredentials(){
    let data = {
        email : "test",
        password : "test123"
    }
    if(Cypress.env("frontendEnv")=="dev"){
        data = Cypress.env("mode").user_dev;
    }else if(Cypress.env("frontendDev")=="uat"){
        data = Cypress.env("mode").user_uat;
    }
    return data;
}

function getRegisterCredentials(){
    let data = {}
    data = Cypress.env("mode").registerDetials;
    return data;
}

export function frontendLoginUrl(){
    cy.viewport(1280, 800);
    cy.visit(getFrontendUrl());
}

export function backendUrl(){
    cy.viewport(1280, 800);
    cy.visit(getbackendUrl());
}

export function frontLogin(){
    let userInfo = getUserDetials()

    cy.get('#first_name').type(userInfo.firstName)
    cy.get('#namek').type(userInfo.lastName)
    cy.get('#email').type(userInfo.email)
    cy.get('#cname').type(userInfo.password)
    cy.get('#telephone').type(userInfo.phone)
    cy.get('#cName').type(userInfo.companyName)
}
