
import { Selector } from "testcafe";


fixture `Send forgotten password test`
.page `http://zero.webappsecurity.com/`


test('User can send forgotten password to email', async t =>{
    const signInButton = Selector('#signin_button')
    const linkToForgottenPass = Selector('a').withText("Forgot your password ?")
    const emailInput = Selector('#user_email')
    const message = Selector('div').innerText
    // Actions
    await t.click(signInButton)
    await t.click(linkToForgottenPass)
    await t.typeText(emailInput, 'email@random.com', {paste: true})
    await t.pressKey('enter')

    //Assertions
    await t.expect(message).contains('email@random.com')
    await t.expect(emailInput.exists).notOk()
})