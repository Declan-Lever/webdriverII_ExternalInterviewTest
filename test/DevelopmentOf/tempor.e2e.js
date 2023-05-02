const chai = require('chai');
const expect = chai.expect;

describe('Interactive Investor Trading Account Page', () => {
  before(async () => {
    await browser.maximizeWindow();
    await browser.url('https://www.ii.co.uk/');
  });

  beforeEach(async () => {
    // Handle cookie popup
    try {
      const acceptCookies = await $('button.chakra-button.ii-7kliwd');
      if (await acceptCookies.isDisplayed()) {
        await acceptCookies.click();
      }
    } catch (error) {
      console.log("An error occurred whilst handling the cookie pop-up:", error);
    }

    // Move to services dropdown
    const servicesDropdown = await $('span[title="Services"]');
    const origin = servicesDropdown;
    await browser.action('pointer', { pointerType: 'mouse' })
      .move({ duration: 0, origin: origin, x: 0, y: 0 })
      .move({ duration: 0, origin: origin })
      .perform();

    // Click on services dropdown
    await servicesDropdown.click();
  });

  it('should navigate to Trading Account page', async () => {
    // Click on Trading Account link
    try {
      const tradingAccountLink = await $('a[href="/ii-accounts/trading-account"]');
      await tradingAccountLink.click();
    } catch (error) {
      console.log("An error occurred while clicking the Trading Account link:", error);
    }

    // Check that the current URL is Trading Account page
    const currentUrl = await browser.getUrl();
    expect(currentUrl).to.equal('https://www.ii.co.uk/ii-accounts/trading-account');
  });
});
