import { Selector } from "testcafe"
import { login } from '../helper'
fixture `Submit the payment`
    .page `http://zero.webappsecurity.com/`


test
.before( async t => {
    await login('username', 'password')
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
    
