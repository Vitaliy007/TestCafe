import {Selector} from 'testcafe'


//prettier-ignore
fixture `Gettting started with TestCafe` 
    .page `https://devexpress.github.io/testcafe/example/`
    .before(async t => {

    })

test('first test', async t => {
    const developer_name_input = Selector('#developer-name')
    const submit_button = Selector('#submit-button')
    const article_text = Selector('#article-header')
    await t.typeText(developer_name_input, 'VitaliyF')
    await t.click(submit_button)

    await t.expect(article_text.innerText).contains('VitaliyF')

})