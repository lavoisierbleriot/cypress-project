/// <reference types="cypress" />
import PtaCarComMethhods from "../PageObjectCar.com/carcommethods.spec";
const ptacarcommethods = new PtaCarComMethhods()


describe('Carcom basic functionalities', () => {

  beforeEach('Open the URL', () => {
    ptacarcommethods.visitURL()
    ptacarcommethods.SizeAppBrowser()

  })

  it('Sign Up with all the requirements', () => {
    ptacarcommethods.Car_ComSign_Up_Navigation_link().click({ force: true })
    ptacarcommethods.Car_Com_User_First_Name_Box().type('Lavoisier')
    ptacarcommethods.Car_Com_User_Last_Name_Box().type('Bleriot Pondji Ekoume')
    ptacarcommethods.Car_Com_Email_Box().type('pondjiekoume@yahoo.fr')
    ptacarcommethods.Car_Com_Pass_Word_Box().type('Ekoume20@')
    ptacarcommethods.Car_Com_Pass_Word_Confirmation_Box().type('Ekoume20@')
    ptacarcommethods.Car_Com_Sign_Up_And_Sign_In_Button().click({ force: true })

  })

  it('Sign in with good credentials', () => {
    ptacarcommethods.Car_Com_Sign_In_Navigation_Link().click({ force: true })
    ptacarcommethods.Car_Com_Email_Box().type('pondjiekoume@yahoo.fr')
    ptacarcommethods.Car_Com_Pass_Word_Box().type('Ekoume20@')
    ptacarcommethods.Car_Com_Sign_Up_And_Sign_In_Button().click({ force: true })
    ptacarcommethods.Car_Com_Sign_In_Page_Assertion()

  })

  it('Sign in with bad credentials', () => {
    ptacarcommethods.Car_Com_Sign_In_Navigation_Link().click({ force: true })
    ptacarcommethods.Car_Com_Email_Box().type('pondjiekoume@yahoo.fr')
    ptacarcommethods.Car_Com_Pass_Word_Box().type('iutume20@')
    ptacarcommethods.Car_Com_Sign_Up_And_Sign_In_Button().click({ force: true })
    ptacarcommethods.Car_Com_Sign_In_Page_Assertion()

  })

  it('Click on Forgot Password', () => {
    ptacarcommethods.Car_Com_Sign_In_Navigation_Link().click()
    ptacarcommethods.Car_Com_Email_Box().type('oxxx@yahoo.fr')
    ptacarcommethods.Car_Com_Pass_Word_Box().type('Emunx20@')
    ptacarcommethods.Car_Com_Forgot_Pass_Word_Link().click()
    ptacarcommethods.Car_Com_Forgot_Pass_Word_Page_Assertion()

  })

  it('Click on Forgot Password then Submit button', () => {
    ptacarcommethods.Car_Com_Sign_In_Navigation_Link().click({force:true})
    ptacarcommethods.Car_Com_Forgot_Pass_Word_Link().click()
    ptacarcommethods.Car_Com_Forgot_Pass_Word_Page_Assertion()
    ptacarcommethods.Car_Com_Email_Box().type('Pondjiekoume@yahoo.fr')
    ptacarcommethods.Car_Com_Submit_Button().click({ force: true })
    ptacarcommethods.Car_Com_Forgot_Pass_Word_Notification_page_Assertion()

  })

  it('Click on Forgot Password then cancel link', () => {
    ptacarcommethods.Car_Com_Sign_In_Navigation_Link().click()
    ptacarcommethods.Car_Com_Forgot_Pass_Word_Link().click()
    ptacarcommethods.Car_Com_Forgot_Pass_Word_Page_Assertion()
    ptacarcommethods.Car_Com_Email_Box().type('Pondjiekoume@yahoo.fr')
    ptacarcommethods.Car_Com_Cancel_Link().click({ force: true })
    ptacarcommethods.Car_Com_Sign_In_Page_Assertion()

  })

  it('Click On Cars for Sale Navigation link', () => {
    ptacarcommethods.Car_Com_Car_Sale_Navigation_Link().click()

  })

  it('Click On Research & Reviews Navigation link', () => {
    ptacarcommethods.Car_Com_Research_And_Reviews_Navigation_link().click()
    ptacarcommethods.Car_Com_Research_And_Reviews_Page_Assertion()
    ptacarcommethods.Car_Com_Home_link().click()

  })

  it('Click On News & Videos Navigation link', () => {
    ptacarcommethods.Car_Com_News_And_Videos_Navigation_Link().click()
    ptacarcommethods.Car_Com_News_And_Videos_Navigation_Page_Assertion()
    ptacarcommethods.Car_Com_Home_link().click()

  })

  it('Click On Sell Your Car Navigation link', () => {
    ptacarcommethods.Car_Com_Sell_Your_Car_Navigation_Link().click()
    ptacarcommethods.Car_Com_Sell_Your_Car_Navigation_Page_Assertion()
    ptacarcommethods.Car_Com_Home_link().click()

  })

  it('Click Service & Repair Navigation link', () => {
    ptacarcommethods.Car_Com_Service_And_Repair_Navigation_Link().click()
    ptacarcommethods.Car_Com_Service_And_Repair_Navigation_Page_Assertion()

  })

  it('Click On Menu Check List then click on Saved Cars Navigation link', () => {
    ptacarcommethods.Car_Com_Sign_In_Navigation_Link().click({ force: true })
    ptacarcommethods.Car_Com_Email_Box().type('pondjiekoume@yahoo.fr')
    ptacarcommethods.Car_Com_Pass_Word_Box().type('Ekoume20@')
    ptacarcommethods.Car_Com_Sign_Up_And_Sign_In_Button().click({ force: true })
    ptacarcommethods.Car_Com_Sign_In_Page_Assertion()
    ptacarcommethods.Car_Com_Menu_Check_List().click()
    ptacarcommethods.Car_Com_Saved_Cars_Link().click()
    ptacarcommethods.Car_Com_Saved_Cars_Assertion_Login_Page()

  })

  it('Click On Menu Check List then click on Saved Searches Navigation link', () => {
    ptacarcommethods.Car_Com_Sign_In_Navigation_Link().click({ force: true })
    ptacarcommethods.Car_Com_Email_Box().type('pondjiekoume@yahoo.fr')
    ptacarcommethods.Car_Com_Pass_Word_Box().type('Ekoume20@')
    ptacarcommethods.Car_Com_Sign_Up_And_Sign_In_Button().click({ force: true })
    ptacarcommethods.Car_Com_Sign_In_Page_Assertion()
    ptacarcommethods.Car_Com_Menu_Check_List().click()
    ptacarcommethods.Car_Com_Saved_Searches_Link().click()
    ptacarcommethods.Car_Com_Saved_Cars_Assertion_Login_Page()

  })

  it('Click On Menu Check List then click on Your Garage Navigation link', () => {
    ptacarcommethods.Car_Com_Sign_In_Navigation_Link().click({ force: true })
    ptacarcommethods.Car_Com_Email_Box().type('pondjiekoume@yahoo.fr')
    ptacarcommethods.Car_Com_Pass_Word_Box().type('Ekoume20@')
    ptacarcommethods.Car_Com_Sign_Up_And_Sign_In_Button().click({ force: true })
    ptacarcommethods.Car_Com_Sign_In_Page_Assertion()
    ptacarcommethods.Car_Com_Your_Garage_Link().click()
    ptacarcommethods.Car_Com_Your_Garage_Assertion_Login_Page()

  })

  it('Click On Menu Check List then click on Profile Settings Navigation link', () => {
    ptacarcommethods.Car_Com_Sign_In_Navigation_Link().click({ force: true })
    ptacarcommethods.Car_Com_Email_Box().type('pondjiekoume@yahoo.fr')
    ptacarcommethods.Car_Com_Pass_Word_Box().type('Ekoume20@')
    ptacarcommethods.Car_Com_Sign_Up_And_Sign_In_Button().click({ force: true })
    ptacarcommethods.Car_Com_Sign_In_Page_Assertion()
    ptacarcommethods.Car_Com_Menu_Check_List().click()
    ptacarcommethods.Car_Com_Profile_Settings_Link().click()
    ptacarcommethods.Car_Com_Profile_Settings_Assertion_Login_Page()

  })

  it('Click On Menu Check List then click on Email Settings Navigation link', () => {
    ptacarcommethods.Car_Com_Sign_In_Navigation_Link().click({ force: true })
    ptacarcommethods.Car_Com_Email_Box().type('pondjiekoume@yahoo.fr')
    ptacarcommethods.Car_Com_Pass_Word_Box().type('Ekoume20@')
    ptacarcommethods.Car_Com_Sign_Up_And_Sign_In_Button().click({ force: true })
    ptacarcommethods.Car_Com_Sign_In_Page_Assertion()
    ptacarcommethods.Car_Com_Menu_Check_List().click()
    ptacarcommethods.Car_Com_Email_Settings_Link().click()
    ptacarcommethods.Car_Com_Email_Setting_Assertion_Login_Page()

  })

  it('Click On Menu Check List then click on Sign Out Navigation link', () => {
    ptacarcommethods.Car_Com_Sign_In_Navigation_Link().click({ force: true })
    ptacarcommethods.Car_Com_Email_Box().type('pondjiekoume@yahoo.fr')
    ptacarcommethods.Car_Com_Pass_Word_Box().type('Ekoume20@')
    ptacarcommethods.Car_Com_Sign_Up_And_Sign_In_Button().click({ force: true })
    ptacarcommethods.Car_Com_Sign_In_Page_Assertion()
    ptacarcommethods.Car_Com_Menu_Check_List().click()
    ptacarcommethods.Car_Com_Sign_Out_Link().click()
    ptacarcommethods.Car_Com_Sign_Out_Assertion_Page()

  })




























})
