import {Selector, t} from 'testcafe'


class FeedbackPage {
    constructor(){
    this.nameInput = Selector('#name')
    this.emailInput = Selector('#email')
    this.subjectInput = Selector('#subject')
    this.commentInput = Selector('#comment')
    this.submitButton = Selector('input').withAttribute('value', 'Send Message')
    this.message = Selector('div')
    }
   
}

export default FeedbackPage