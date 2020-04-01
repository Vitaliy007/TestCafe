import {Selector, t } from 'testcafe'

class Navbar {
    constructor() {
        this.searchInput = Selector('#searchTerm')
        this.signInButton = Selector('#signin_button')
    }

    async search(text) {
        await t
        .typeText(this.searchInput, text, {paste: true, replace: true})
        .pressKey('enter')
    }
}

export default Navbar