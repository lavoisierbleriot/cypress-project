/// <reference types="cypress" />


describe('Car.com Sign up and sign Functionalities',()=>{
     beforeEach('Open the URL',()=>{
          cy.visit('https://www.cars.com/')
          cy.viewport(750,800)

     });

     it('Sign up to car.com by following all the requirements',()=>{
           cy.contains('Sign up').click()
           cy.get('[name="user[first_name]"]').type('Lavoisier')
           cy.get('[for="user_last_name"]').type('Bleriot Pondji Ekoume')
           cy.get('[name="user[email]"]').type('pondjiekoume@yahoo.fr')
           cy.get('[name="user[password]"]').type('Ekoume1988@')
           cy.get('[for="user_confirm_password"]').type('Ekoume1988@')
           cy.get('[type="submit"]').click()

      })
       
     it('Sign up to car.com by enter wrong confirmation password',()=>{
          cy.contains('Sign up').click()
          cy.get('[name="user[first_name]"]').type('Lavoisier')
          cy.get('[for="user_last_name"]').type('Bleriot Pondji Ekoume')
          cy.get('[name="user[email]"]').type('pondjiekoume@yahoo.fr')
          cy.get('[name="user[password]"]').type('Ekoume1988@')
          cy.contains('[for="user_confirm_password"]').type('Ekoume20@')
          cy.get('[type="submit"]').click()
     })

     it('Sign up to car.com by enter an invalid password',()=>{
          cy.contains('Sign up').click()
          cy.get('[name="user[first_name]"]').type('Lavoisier')
          cy.get('[for="user_last_name"]').type('Bleriot Pondji Ekoume')
          cy.get('[name="user[email]"]').type('pondjiekoume@yahoo.fr')
          cy.get('[name="user[password]"]').type('xcdume1988@')
          cy.contains('[for="user_confirm_password"]').type('Ekoume20@')
          cy.get('[type="submit"]').click()
     })

     it('Sign up to car.com by enter an invalid email',()=>{
          cy.contains('Sign up').click()
           cy.get('[name="user[first_name]"]').type('Lavoisier')
           cy.get('[for="user_last_name"]').type('Bleriot Pondji Ekoume')
           cy.get('[name="user[email]"]').type('btjiekoe@yahoo.fr')
           cy.get('[name="user[password]"]').type('Ekoume1988@')
           cy.contains('[for="user_confirm_password"]').type('Ekoume20@')
           cy.get('[type="submit"]').click()
     })


     it('Sign up to car.com by enter an invalid email, and invalid password',()=>{
          cy.contains('Sign up').click()
          cy.get('[name="user[first_name]"]').type('Lavoisier')
          cy.get('[for="user_last_name"]').type('Bleriot Pondji Ekoume')
          cy.get('[name="user[email]"]').type('djuieeume@yahoo.net')
          cy.get('[name="user[password]"]').type('3547me1988@')
          cy.contains('[for="user_confirm_password"]').type('Ekoume20@')
          cy.get('[type="submit"]').click()
     })

     it.only('Sign in to car.com with Good credentials valid email and valid password',()=>{
          cy.get('[data-linkname="header-sign-in"]').click()
          cy.get('[name="user[email]"]').type('pondjiekoume@yahoo.fr')
          cy.get('#password').type('Ekoume20@')
          cy.get('[type="submit"]').click()
          cy.get('[class="desktop-nav-user-name"]').should('contain','Hi, Lavoisier Bleriot Pondji Ekoume')// was trying to assert the sign in
     })


     it('Sign in to car.com with bad credentials invalid email and valid password',()=>{
          cy.contains('Sign in').click()
          cy.get('[name="user[email]"]').type('pome@yahoo.fr')
          cy.get('#password').type('Ekoume20@')
          cy.get('[type="submit"]').click()
          cy.get('.sds-notification__title').should('contain','We were unable to sign you in.')
          cy.get('.sds-notification__desc').should('contain','Your email or password was not recognized. Try again soon.')

     })

     it('Sign in to car.com with bad credentials invalid email and valid password',()=>{
          cy.contains('Sign in').click()
          cy.get('[name="user[email]"]').type('pome@yahoo.fr')
          cy.get('#password').type('xxme2@')
          cy.get('[type="submit"]').click()
          cy.get('.sds-notification__title').should('contain','We were unable to sign you in.')
          cy.get('.sds-notification__desc').should('contain','Your email or password was not recognized. Try again soon.')

     })

     it('Click on Forgot password then submit button',()=>{
          cy.contains('Sign in').click()
          cy.contains('Forgot password?').click({force:true})
          cy.get('#email').type('pondjiekoume@yahoo.fr')
          cy.get('[type="submit"]').click({force:true})

     })


     it('Click on Forgot password then cancel button',()=>{
          cy.contains('Sign in').click()
          cy.contains('Forgot password?').click({force:true})
          cy.get('h1').should('contain','Forgot password')
          cy.get('#email').type('pondjiekoume@yahoo.fr')
          cy.get('[data-linkname="forgot-password-cancel"]').click({force:true})
     })

     it('Click on Car for Sale Navigation link',()=>{
          cy.contains('Cars for Sale').click({force:true})
          cy.get('#by-make').click({force:true})

     })

     it('Click on Research and reviews Navigation Link then Home',()=>{
          cy.contains('Research & Reviews').click({force:true})
          cy.get('[class="sds-heading--1 sds-page-section__title"]').should('contain','Research & reviews')
          cy.get('[[data-linkname="home"]]').click() // click on Home link

     })


     it('Click on News and videos Navigation link then Home',()=>{
          cy.get('[data-linkname="header-news"]').click({force:true})
          cy.get('h1').should('contain','News & videos')

     })

     it('Click on Sell Your Navigation Link then Home',()=>{
          cy.get('[data-linkname="header-sell-your-car"]').click()
          cy.get('h1').should('contain','Sell your car')
          cy.get('[data-linkname="home"]').click({force:true})

     })

     it('Click on Service and Repair Navigation Link',()=>{
          cy.contains('Service & Repair').click({force:true})
          cy.get('[class="hero__header sds-heading--1"]').should('contain','Car service & repair')

     })

     it('Click on Saved Cars link',()=>{
          cy.get('[class="menu-icon"]').click({force:true})
          cy.get('[data-linkname="header-saved-cars"]').click({force:true})
          cy.get('.sds-heading--display').should('contain','Saved cars')

     })

     it('Click on Saved searches link',()=>{
          cy.get('.menu-icon').click({force:true})
          cy.get('[data-linkname="header-saved-searches"]').click({force:true})
          cy.get('h1').should('contain','Saved searches')
     })


     it('Click on Your Garage link',()=>{
          cy.get('.menu-icon').click()
          cy.get('[data-linkname="header-your-garage"]').click({force:true})
          cy.get('[class="sds-heading--display"]').should('contain','Your Garage')

     })
     it('Click on Profile Settings link',()=>{
          cy.get('.menu-icon').click({force:true})
          cy.get('[data-component="header-click"]').click({force:true})
          cy.get('.sds-heading--1 sds-page-section__title').should('contain','Profile settings')

     })

     it('Click on Email settings',()=>{
          cy.get('.menu-icon').click({force:true})
          cy.get('[data-linkname="header-email-settings"]').click({force:true})
          cy.get('h1').should('contain','Email Settings')

     })

     it('Click on Sign out button',()=>{
          cy.get('.menu-icon').click({force:true})
          cy.get('[data-linkname="header-sign-out"]').click()
          cy.get('h1').should('contain','Sign in')

     })





































})