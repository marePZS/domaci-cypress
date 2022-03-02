/// <reference types="cypress" />

describe('register user', ()=>{

    it('visit gallery page', ()=>{
        cy.visit('/');
    });

    it('click on register button', ()=>{
        cy.get('.nav-link').eq(2).click();
        cy.get('#first-name').type('Marko');
        cy.get('#last-name').type('Pzs');
        cy.get('#email').type('markopzs3@test.com');
        cy.get('#password').type('password123');
        cy.get('#password-confirmation').type('password123');
        cy.get('[type="checkbox"]').check();
        cy.get('button').click();
    });
});