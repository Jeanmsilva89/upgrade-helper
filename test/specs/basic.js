const expect = require('expect.js')
const assert = require('assert')

describe('webdriver.io page', () => {
  // await browser.url('http://localhost:3000')
  // it('should have the right title', async () => {
  //   const title = await browser.getTitle()
  //   assert.strictEqual(title, 'Upgrade React Native applications')
  // })

  browser.url('http://localhost:3000')
  it('find a react component', () => {
    let myComponent = browser.react$('VersionSelector')
    console.log(myComponent)
    browser.pause(5000)
    assert.strictEqual(myComponent.isDisplayed(), true)
  })

  // it('find a component', async () => {
  //   const title = await $('div')
  //   const title2 = await title.waitForExist()
  //   expect(!!title).to.be(true)
  // })
})
