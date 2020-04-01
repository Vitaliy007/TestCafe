import { Selector } from "testcafe"
import Navbar from '../page-objects/components/Navbar'

const navbar = new Navbar()

fixture `Send forgotten password test`
.page `http://zero.webappsecurity.com/`

test('Verify the serach is working', async t => {
    const searchResultText = Selector('div').innerText
    //Actions
    navbar.search('online banking')
    // Assertion
    await t.expect(navbar.searchInput.exists).ok()
    await t.expect(searchResultText).contains('Zero - Free Access to Online Banking')

})