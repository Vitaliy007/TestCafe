import Navbar from '../page-objects/components/Navbar'
import LoginPage from '../page-objects/pages/LoginPage'
import ForgottenPasswordPage from '../page-objects/pages/ForgottenPasswordPage'

const navbar = new Navbar()
const loginPage = new LoginPage()
const forgottenPasswordPage = new ForgottenPasswordPage()

fixture `Send forgotten password test`
.page `http://zero.webappsecurity.com/`


test('User can send forgotten password to email', async t =>{
    await t.click(navbar.signInButton)
    await t.click(loginPage.forgottenPasswordLink)
    await t.typeText(forgottenPasswordPage.emailInput, 'email@random.com', {paste: true, replace: true})
    await t.pressKey('enter')

    //Assertions
    await t.expect(forgottenPasswordPage.message.innerText).contains('email@random.com')
    await t.expect(forgottenPasswordPage.emailInput.exists).notOk()
})