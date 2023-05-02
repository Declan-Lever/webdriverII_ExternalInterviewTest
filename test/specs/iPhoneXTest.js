/* 

Trading account test but a rough emulation for iPhone X

*/
const chai = require('chai');
const { expect } = chai;

describe('Interactive Investor Trading Account Page', () => {
  it('should navigate to Trading Account page on iPhone X', async () => {
    await browser.setWindowSize(375, 812); // set window size to iPhone X resolution
    await browser.pause(2000); 
    await browser.url('https://www.ii.co.uk/');
    // Handles cookie pop up using a "global function"


    // Handles cookie pop up using a "global function"
    const handleCookiePopup = require('../../test/specs/handleCookiePopUp');
    handleCookiePopup();
  
    await browser.pause(2000); 

    // Click menu
    const button = await $('.ii-1o7z9py');
    await button.click();
    await browser.pause(2000); 

    // Click Services dropdown
    const servicesDropdown = await $('span.chakra-text.ii-1gqxnor');
    await servicesDropdown.click();    
    await browser.pause(2000); 

    // Click Trading Account link
    try {
        const tradingAccountLink = await $('span=Trading Account');
        await tradingAccountLink.click();
        await browser.pause(2000); 
    } catch (error) {
        console.log("An error occurred while clicking the Trading Account link:", error);
    }
        await browser.pause(2000); 

    // Check URL updated to Trading Account page
    const currentUrl = await browser.getUrl();
    expect(currentUrl).to.equal('https://www.ii.co.uk/ii-accounts/trading-account');
  });
});
