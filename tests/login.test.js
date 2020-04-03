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

    await login('invalid name', 'invalid pass')

    const errorMessage = Selector('.alert-error').innerText
    await t.expect(errorMessage).contains('Login and/or password are wrong.')
})

test('User can login', async t => {
    await t.click(navbar.signInButton)
    loginPage.loginToApp('username', 'password')
    
    const accountSummaryTab = Selector('#account_summary_tab')
    await t.expect(accountSummaryTab.exists).ok()

    const userIcon = Selector('.icon-user')
    await t.click(userIcon)

    const logoutButton = Selector('#logout_link')
    const signInButton = Selector(('#signin_button'))
    await t.click(logoutButton)

    await t.expect(logoutButton.exists).notOk()
    await t.expect(signInButton.exists).ok()

})