import {Selector, t} from 'testcafe'

class SearchResultPage {
    constructor() {
        this.resultsTitle = Selector('h2')
        this.searchResultText = Selector('div')
    }
}

export default SearchResultPage