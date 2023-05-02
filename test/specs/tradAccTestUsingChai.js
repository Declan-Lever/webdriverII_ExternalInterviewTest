/*
You can run all the tests using npx wdio wdio.conf.js --spec ./test/specs/##/*.js   - replace hashes with asterisks

V2. meets and expands upon the business requirements; These tests use: mocha + chai + webdriverIO


I decided since this is meant to be a test more of my coding abilities to breakup the code into various different 
scripts contained within the specs folder to make them easier to read

There are lots of spaces, personally think this makes it easier to read but you can just format it if you prefer it to be more concise

I prefer using try catch to if statements to handle errors as it's easier than reading logs - spend 1 minute today, save 5 tommorow
*/

const chai = require('chai');
const { expect } = chai;

  describe('Interactive Investor Trading Account Page', () => {
  it('should navigate to Trading Account page', async () => {
    await browser.maximizeWindow();
    await browser.url('https://www.ii.co.uk/');


    /* try catch incase of cookie pop up (not always an issue but was for me) 
    - please note in later scripts I use a "global function" using this exact code to do this
    I have deliberatly left this here to show the evolution of my code */
   
    try {
      const acceptCookies = await $('button.chakra-button.ii-7kliwd');
      if (await acceptCookies.isDisplayed()) {
        await browser.pause(2000); //these pauses are not neccecary due to the await keyword, I just like watching the test 
        await acceptCookies.click();
      }
    } catch (error) {
      console.log("An error occurred whilst handling the cookie pop-up:", error);
    }


    /* I was previously doing this with a mouse pointer action
     then realised this was totally unneccecary and a bit silly as different sized monitors may be an issue - that could be a test in of itself 
     
     I know browser stack has some nice tools for testing on different mobile webapps, the iPhone 6s is much smaller than newer models for instance but remains popular
     Have also read that appium can do this ^
     */

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
