import {Selector, t} from 'testcafe'

class SearchResultPage {
    constructor() {
        this.resultsTitle = Selector('h2')
        this.searchResultText = Selector('div').innerText
    }
}

export default SearchResultPage