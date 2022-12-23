/// <reference types="cypress" />


describe('Serviceability', () => {
    
  it('Benefits verification must be successful, once successful response send email with information, and patient must be created with all this information being propagated (basic and care plan information)', () => {
    cy.visit('https://edge.lunacare.net/admin/login')
    
      cy.contains('Sign In').click()
      

      cy.wait(5000)  
      //cy.visit('https://google.com')

      cy.origin('https://google.com', () => {
        
        cy.get("input[type='email']").type('test-automation-2@getluna.com')
        cy.get('#identifierNext > div > button').click()
        cy.wait(5000)
        cy.get("input[type='password']").type('Alg@rrobo1012!')
        cy.get('#passwordNext > div > button').click()

      })
    
      cy.wait(10000)  

  })

    it('Benefits verification must be successful, once successful response Debug HTML, and patient must be created with all this information being propagated (basic and care plan information)', () => {
      cy.visit('https://accounts.google.com')
      
        cy.get("input[type='email']").type('test-automation-2@getluna.com')
        cy.get('#identifierNext > div > button').click()
        cy.wait(5000)
        cy.get("input[type='password']").type('Alg@rrobo1012!')
        cy.get('#passwordNext > div > button').click()

        cy.wait(5000)  
        cy.visit('https://edge.lunacare.net/admin/login')

        cy.origin('https://edge.lunacare.net/admin/login', () => {
          
          cy.contains('Sign In').click()

        })
      
        cy.wait(10000)  

    })

    


    
  })