import {Selector, t} from 'testcafe'

class LoginPage{
    constructor() {
        this.loginForm = Selector('#login_form')
        this.userNameInput = Selector('#user_login')
        this.passwordInput = Selector('#user_password')
        this.submitButton = Selector('.btn-primary')
        this.errorMessage = Selector('.alert-error')
    }    

    async loginToApp(username, password) {
        await t 
        .typeText(this.userNameInput, username, {paste: true, replace: true})
        .typeText(this.passwordInput, password, {paste: true, replace: true})
        .click(this.submitButton)
    }
}

export default LoginPage