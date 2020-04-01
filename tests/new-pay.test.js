import { Selector } from "testcafe";

fixture `Submit the payment`
    .page `http://zero.webappsecurity.com/`


test.only
.before( async t => {
    const signInButton = Selector('#signin_button')
    await t.click(signInButton)
    const usernameInput = Selector('#user_login')
    const passwordInput = Selector('#user_password')
    await t.typeText(usernameInput, 'username', {paste: true})
    await t.typeText(passwordInput, 'password', {paste: true})
    const submitButton = Selector('.btn-primary')
    await t.click(submitButton)    
    const accountSummaryTab = Selector('#account_summary_tab')
    await t.expect(accountSummaryTab.exists).ok()

})
('Add a payment', async t => {
    const paybillTablink = Selector('#pay_bills_tab')
    const addNewPayeeLink = Selector('a').withText('Add New Payee')
    //form
    const payeeNameInput = Selector('#np_new_payee_name')
    const payeeAddressTextarea = Selector('#np_new_payee_address')
    const accountInput = Selector('#np_new_payee_account')
    const payeeDetailsInput = Selector('#np_new_payee_details')
    const addNewPayeeButton = Selector('#add_new_payee')
    const successMessage = Selector('#alert_content')
    const successMessageText = Selector('#alert_content').innerText

    await t.click(paybillTablink)
    await t.click(addNewPayeeLink)
    await t.typeText(payeeNameInput, 'Loan pay', {paste: true})
    await t.typeText(payeeAddressTextarea, 'Lviv, UA', {paste: true})
    await t.typeText(accountInput, 'Salary account', {paste: true})
    await t.typeText(payeeDetailsInput, 'Paying my mortgage', {paste: true} )
    await t.click(addNewPayeeButton)
    // assertions
    await t.expect(successMessage.exists).ok()
    await t.expect(successMessageText).contains('The new payee Loan pay was successfully created.')
})
    
