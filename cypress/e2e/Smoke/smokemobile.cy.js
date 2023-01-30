/// <reference types="cypress" />


describe('Therapist Smoke ', () => {
    
    it('Therapist login', () => {
    
        cy.request({
            method: 'POST',
            url: 'https://edge.lunacare.net/api/v2/therapist/auth/sign_in',
            headers: {
                'X-Luna-Device-OS': 'iOS',
              },
            body: { 
               'email': 'demo+uat2@koombea.com',
               'password' : 'Koombea1234!'
            }
    }).then((response) => { 
        expect(response.status).to.eq(200);
        expect(response.body.data.email).to.eq('demo+uat2@koombea.com');
        expect(response.body.data.state).to.eq('active');

            
    })  


    })

    it('Patient login', () => {
    
        cy.request({
            method: 'POST',
            url: 'https://edge.lunacare.net/api/v2/patient/auth/sign_in',
            headers: {
                'X-Luna-Device-OS': 'iOS',
              },
            body: { 
               'email': 'zayter+lunapuat1@koombea.com',
               'password' : 'koombea1234'
            }
    }).then((response) => { 
        expect(response.status).to.eq(200);
        expect(response.body.data.email).to.eq('zayter+lunapuat1@koombea.com');
        expect(response.body.data.state).to.eq('active');
            
    })  


    })
  
  })