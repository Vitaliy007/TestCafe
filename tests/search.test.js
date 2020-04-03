import { Selector } from "testcafe"
import Navbar from '../page-objects/components/Navbar'
import SearchResultsPage from '../page-objects/pages/SearchResultsPage'

const navbar = new Navbar()
const searchResultsPage = new SearchResultsPage()

fixture `Send forgotten password test`
.page `http://zero.webappsecurity.com/`

test('Verify the serach is working', async t => {

    //Actions
    navbar.search('online banking')
    // Assertion
    await t.expect(navbar.searchInput.exists).ok()
    await t.expect(searchResultsPage.resultsTitle.exists).ok()
    await t.expect(searchResultsPage.searchResultText.innerText).contains('Zero - Free Access to Online Banking')

})