/// <reference types="cypress" />

describe('register user', ()=>{

    it('visit gallery page', ()=>{
        cy.visit('/');
    });

    it('click on register button', ()=>{
        cy.get('.nav-link').eq(2).click();
    });

    // it('valid registration', ()=>{           // ------->  valid only once
    //     cy.get('#first-name').type('Marko');
    //     cy.get('#last-name').type('Pzs');
    //     cy.get('#email').type('markopzs5@test.com');
    //     cy.get('#password').type('password123');
    //     cy.get('#password-confirmation').type('password123');
    //     cy.get('[type="checkbox"]').check();
    //     cy.get('button').click();
    // });

    it('without first-name', ()=>{ 
        cy.visit('/register');
        cy.get('#first-name');
        cy.get('#last-name').type('Pzs');
        cy.get('#email').type('markopzs3@test.com');
        cy.get('#password').type('password123');
        cy.get('#password-confirmation').type('password123');
        cy.get('[type="checkbox"]').check();
        cy.get('button').click();
        cy.get('#first-name').should('be.empty');
    });

    it('without last-name', ()=>{ 
        cy.visit('/register');
        cy.get('#first-name').type('Marko');
        cy.get('#last-name');
        cy.get('#email').type('markopzs3@test.com');
        cy.get('#password').type('password123');
        cy.get('#password-confirmation').type('password123');
        cy.get('[type="checkbox"]').check();
        cy.get('button').click();
        cy.get('#last-name').should('be.empty');
    });

    it('invalid email', ()=>{
        cy.visit('/register');
        cy.get('#first-name').type('Marko');
        cy.get('#last-name').type('Pzs');
        cy.get('#email').type('markopzs3@testcom');
        cy.get('#password').type('password123');
        cy.get('#password-confirmation').type('password123');
        cy.get('[type="checkbox"]').check();
        cy.get('button').click();
        cy.get('.alert').should('have.class', 'alert');
    });
    
    it('already used email', ()=>{
        cy.visit('/register');
        cy.get('#first-name').type('Marko');
        cy.get('#last-name').type('Pzs');
        cy.get('#email').type('markopzs3@test.com');
        cy.get('#password').type('password123');
        cy.get('#password-confirmation').type('password123');
        cy.get('[type="checkbox"]').check();
        cy.get('button').click();
        cy.get('.alert').should('have.class', 'alert'); 
    });

    it.only('password-confirmation invalid', ()=>{
        cy.visit('/register');
        cy.get('#first-name').type('Marko');
        cy.get('#last-name').type('Pzs');
        cy.get('#email').type('markopzs3@test.com');
        cy.get('#password').type('password123');
        cy.get('#password-confirmation').type('password12333');
        cy.get('[type="checkbox"]').check();
        cy.get('button').click();
        cy.get('.alert').should('have.class', 'alert'); 
    });
});