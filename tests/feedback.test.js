import { Selector } from "testcafe";
import FeedbackPage from '../page-objects/pages/FeedbackPage'

const feedbackPage = new FeedbackPage()

fixture `Send forgotten password test`
.page `http://zero.webappsecurity.com/`

test('Submit the feedback form', async t =>{
    const feedbackButton = Selector('#feedback')
    // Actions
    await t.click(feedbackButton)
    await t.typeText(feedbackPage.nameInput, 'Vitaliy F')
    await t.typeText(feedbackPage.emailInput, 'nomail@mail.com')
    await t.typeText(feedbackPage.subjectInput, 'testing')
    await t.typeText(feedbackPage.commentInput, 'Just testing the feedback form')
    await t.click(feedbackPage.submitButton)
    // Verification
    await t.expect(feedbackPage.message.innerText).contains('Thank you for your comments')
})