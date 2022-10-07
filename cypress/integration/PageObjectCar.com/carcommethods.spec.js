 class PtaCarComMethhods{
      visitURL(){
           return cy.visit('https://www.cars.com/')
      }

      SizeAppBrowser(){
          return cy.viewport(1000,1050)
     }

      Car_ComSign_Up_Navigation_link(){
        return  cy.contains('Sign up')
      }

      Car_Com_User_First_Name_Box(){
          return cy.get('[name="user[first_name]"]')
     }

     Car_Com_User_Last_Name_Box(){
        return  cy.get('[for="user_last_name"]')
     }

     Car_Com_Email_Box(){
        return  cy.get('[name="user[email]"]')
     }

     Car_Com_Pass_Word_Box(){
          return cy.get('[name="user[password]"]')
     }

     Car_Com_Pass_Word_Confirmation_Box(){
          return cy.get('[for="user_confirm_password"]')
     }

     Car_Com_Sign_Up_And_Sign_In_Button(){
          return cy.get('[type="submit"]')
     }

     Car_Com_Sign_In_Navigation_Link(){
          return cy.get('[data-linkname="header-sign-in"]')
     }

     Car_Com_Sign_In_Page_Assertion(){
          return cy.get('[class="desktop-nav-user-name"]').should('contain','Hi, Lavoisier Bleriot Pondji Ekoume')
     }

     Car_Com_Notifications_Assertions(){
          return cy.get('.sds-notification__title').should('contain','We were unable to sign you in.')
         return cy.get('.sds-notification__desc').should('contain','Your email or password was not recognized. Try again soon.')
     }

     Car_Com_Forgot_Pass_Word_Link(){
          return cy.contains('Forgot password?')
     }

     Car_Com_Forgot_Pass_Word_Page_Assertion(){
          return cy.get('h1').should('contain','Forgot password')
     }

     Car_Com_Submit_Button(){
          return cy.get('[type="submit"]')
     }

     Car_Com_Forgot_Pass_Word_Notification_page_Assertion(){
          return cy.get('[class="sds-notification__title"]').should('contain','We sent you an email')
     }

     Car_Com_Cancel_Link(){
          return cy.get('[data-linkname="forgot-password-cancel"]')
     }

     Car_Com_Car_Sale_Navigation_Link(){
          return  cy.contains('Cars for Sale')
     }

     Car_Com_Research_And_Reviews_Navigation_link(){
          return cy.contains('Research & Reviews')
     }

     Car_Com_Research_And_Reviews_Page_Assertion(){
          return cy.get('[class="sds-heading--1 sds-page-section__title"]').should('contain','Research & reviews')
     }

     Car_Com_News_And_Videos_Navigation_Link(){
          return cy.get('[data-linkname="header-news"]')
     }

     Car_Com_News_And_Videos_Navigation_Page_Assertion(){
          return cy.get('h1').should('contain','News & videos')
     }

     Car_Com_Sell_Your_Car_Navigation_Link(){
          return cy.get('[data-linkname="header-sell-your-car"]')
     }

     Car_Com_Sell_Your_Car_Navigation_Page_Assertion(){
          return cy.get('h1').should('contain','Sell your car')
     }

     Car_Com_Home_link(){
          return cy.get('[data-linkname="home"]')

     }


     Car_Com_Service_And_Repair_Navigation_Link(){
          return cy.contains('Service & Repair')
     }

     Car_Com_Service_And_Repair_Navigation_Page_Assertion(){
          return cy.get('[class="hero__header sds-heading--1"]').should('contain','Car service & repair')
     }

     Car_Com_Menu_Check_List(){
          return cy.get('[class="menu-icon"]')
     }

     Car_Com_Saved_Cars_Link(){
          return cy.get('[data-linkname="header-saved-cars"]')
     }

     Car_Com_Saved_Cars_Assertion_Login_Page(){
          return cy.get('.sds-heading--display').should('contain','Saved cars')
     }

     Car_Com_Saved_Searches_Link(){
          return cy.get('[data-linkname="header-saved-searches"]')
     }

     Car_Com_Saved_Searches_Assertion_Login_Page(){
          return cy.get('h1').should('contain','Saved searches')
     }

     Car_Com_Profile_Settings_Link(){
          return cy.get('[data-linkname="header-settings"]')
     }

     Car_Com_Profile_Settings_Assertion_Login_Page(){
          return cy.get('[class="sds-heading--1 sds-page-section__title"]').should('contain','Profile settings')
     }

     Car_Com_Your_Garage_Link(){
          return cy.get('[data-linkname="header-your-garage"]')
     }

     Car_Com_Your_Garage_Assertion_Login_Page(){
          return cy.get('[class="sds-heading--display"]').should('contain','Your Garage')
     }

     Car_Com_Email_Settings_Link(){
          return cy.get('[data-component="header-click"]')
     }

     Car_Com_Email_Setting_Assertion_Login_Page(){
          return cy.get('h1').should('contain','Email Settings')
     }

     Car_Com_Sign_Out_Link(){
          return  cy.get('[data-linkname="header-sign-out"]')
     }

     Car_Com_Sign_Out_Assertion_Page(){
          return cy.get('h1').should('contain','Sign in')
     }

    


}export default PtaCarComMethhods














 