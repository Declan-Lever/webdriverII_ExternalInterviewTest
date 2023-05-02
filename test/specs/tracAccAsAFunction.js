/*

I've taken the tradAccTestUsingChai script and turned it into a global function that can be called

I've done this so it could be called from an array in a for loop, iterating through the top nav bar

This would come with the advantage of easily being able to expand and modify each script

*/



async function navigateToTradingAccountPage() {
    const chai = require('chai');
    const { expect } = chai;
  
    describe('Interactive Investor Trading Account Page', () => {
      it('should navigate to Trading Account page', async () => {
        await browser.maximizeWindow();
        await browser.url('https://www.ii.co.uk/');
  
        /* try catch incase of cookie pop up (not always an issue but was for me) 
        - please note in later scripts I use a "global function" using this exact code to do this
        I have deliberately left this here to show the evolution of my code */
        try {
          const acceptCookies = await $('button.chakra-button.ii-7kliwd');
          if (await acceptCookies.isDisplayed()) {
            await browser.pause(2000);
            await acceptCookies.click();
          }
        } catch (error) {
          console.log("An error occurred whilst handling the cookie pop-up:", error);
        }
          //it statement should go here

        // Click on Services dropdown
        const servicesDropdown = await $('span[title="Services"]'); 
        await servicesDropdown.click();
        await browser.pause(2000);
  
        // Click on Trading Account link
        try {
          const tradingAccountLink = await $('a[href="/ii-accounts/trading-account"]');
          await tradingAccountLink.click();
          await browser.pause(2000);
        } catch (error) {
          console.log("An error occurred while clicking the Trading Account link:", error);
        }
  
        // Check the current URL is Trading Account page
        const currentUrl = await browser.getUrl();
        expect(currentUrl).to.equal('https://www.ii.co.uk/ii-accounts/trading-account');
      });
    });
  }
  
  module.exports = { navigateToTradingAccountPage };  