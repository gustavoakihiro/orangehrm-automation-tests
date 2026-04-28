import { select } from 'async'
import userData from '../fixtures/user-data.json'
import LoginPage from '../pages/loginPage'
import DashboardPage from '../pages/dashboardPage'
import MenuPage from '../pages/menuPage'
import MyInfoPage from '../pages/myInfoPage'
import BuzzPage from '../pages/buzzPage' 

const loginPage = new LoginPage()
const dashboardPage = new DashboardPage()
const menuPage = new MenuPage()
const buzzPage = new BuzzPage()
const myInfoPage = new MyInfoPage()

describe('Orange HRM Tests', () => {

  it('User Buzz Post - Success', () => {

    loginPage.accessLoginPage()
    loginPage.loginWithAnyUser(userData.userSuccess.username, userData.userSuccess.password)
    
    dashboardPage.dashboardCheck()
    
    menuPage.accessBuzz()
    
    buzzPage.fillBuzzDetails()
    buzzPage.buzzPostCheck()

  })

}) 