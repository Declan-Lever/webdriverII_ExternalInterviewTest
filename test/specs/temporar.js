
//playing around with the iterate through header items script

const chai = require('chai');
const { $$ } = require('webdriverio/build/commands/browser');
const { expect } = chai;

describe('Navigation bar', () => {
  beforeEach(async () => {
    await browser.url('https://www.ii.co.uk/');
    await browser.maximizeWindow();
    await browser.execute(() => window.scrollTo(0, 0));
    const handleCookiePopup = require('./handleCookiePopUp');
    await handleCookiePopup();
  });

  it('should click on each button and verify the dropdown link', async () => {
    const NavBarbuttons = $$('xpath=//*[@id="root"]/div/header/div/nav/ul/li');

    for (let i = 0; i < NavBarbuttons.length; i++) {
      const button = NavBarbuttons[i];
      await button.click();
      await browser.waitUntil(
        async () => await button.getAttribute('class') === 'active',
        { timeout: 5000, timeoutMsg: 'Button is not active' }
      );

      try {
        const dropdownLink = await button.$('.dropdown-menu a');
        const expectedLink = await dropdownLink.getAttribute('href');
        expect(expectedLink).to.not.be.null;
        await dropdownLink.click();
        await browser.waitUntil(
          async () => await browser.getUrl() === expectedLink,
          { timeout: 5000, timeoutMsg: 'URL did not change' }
        );
      } catch (error) {
        console.log(`Button ${i + 1} does not have a dropdown link`);
      }
    }
  });
});
