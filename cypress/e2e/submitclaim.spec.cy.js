import { select } from 'async'
import userData from '../fixtures/user-data.json'
import LoginPage from '../pages/loginPage'
import DashboardPage from '../pages/dashboardPage'
import MenuPage from '../pages/menuPage'
import MyInfoPage from '../pages/myInfoPage'
import BuzzPage from '../pages/buzzPage' 
import SubmitClaimPage from '../pages/submitClaimPage'

const loginPage = new LoginPage()
const dashboardPage = new DashboardPage()
const menuPage = new MenuPage()
const submitClaimPage = new SubmitClaimPage()

describe('Orange HRM Tests', () => {

  it('User Submit Claim - Success', () => {

    loginPage.accessLoginPage()
    loginPage.loginWithAnyUser(userData.userSuccess.username, userData.userSuccess.password)
    
    dashboardPage.dashboardCheck()
    
    menuPage.accessClaim()
    
    submitClaimPage.fillClaimDetails()
    submitClaimPage.claimPostCheck()

  })

}) 