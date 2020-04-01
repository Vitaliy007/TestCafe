import { Selector } from "testcafe";

fixture `Send forgotten password test`
.page `http://zero.webappsecurity.com/`

test('Submit the feedback form', async t =>{
    const feedbackButton = Selector('#feedback')
    const nameInput = Selector('#name')
    const emailInput = Selector('#email')
    const subjectInput = Selector('#subject')
    const commentInput = Selector('#comment')
    const submitButton = Selector('input').withAttribute('value', 'Send Message')
    const feedbackSubmitText = Selector('.top_offset').innerText
    // Actions
    await t.click(feedbackButton)
    await t.typeText(nameInput, 'Vitaliy F')
    await t.typeText(emailInput, 'nomail@mail.com')
    await t.typeText(subjectInput, 'testing')
    await t.typeText(commentInput, 'Just testing the feedback form')
    await t.click(submitButton)
    // Verification
    await t.expect(feedbackSubmitText).contains('Thank you for your comments')
})