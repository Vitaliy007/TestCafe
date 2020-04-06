import { Selector} from 'testcafe'
//import { login } from '../helper'
import Navbar from '../page-objects/components/Navbar'
import LoginPage from '../page-objects/pages/LoginPage'

const navbar = new Navbar()
const loginPage = new LoginPage()


fixture `Login Test`
.page `http://zero.webappsecurity.com/`

test('User cannot login with inavlid credential', async t => {   
    await t.click(navbar.signInButton)
    loginPage.loginToApp('invalid name', 'invalid pass')
    
    await t.expect(loginPage.errorMessage.innerText).contains('Login and/or password are wrong.')
})

test('User can login', async t => {
    await t.click(navbar.signInButton)
    await t.expect(loginPage.loginForm.exists).ok()
    loginPage.loginToApp('username', 'password')
    
    const accountSummaryTab = Selector('#account_summary_tab')
    await t.expect(accountSummaryTab.exists).ok()

    await t.click(navbar.userIcon)
    await t.click(navbar.logoutButton)

    await t.expect(navbar.logoutButton.exists).notOk()
    await t.expect(navbar.signInButton.exists).ok()

})