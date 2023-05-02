/*
You can run all the tests using npx wdio wdio.conf.js --spec ./test/specs/##/*.js   - replace hashes with asterisks


mocha + jasmine + webdriverIO


There are lots of spaces, personally think this makes it easier to read but you can just format it if you prefer it to be more concise
*/

describe('interactiveInvestor', function () {

  it('My First Test', async () => { //can also be written as async function () - works either way
    await browser.maximizeWindow();
    await browser.url('https://www.ii.co.uk/');


    // try catch incase of cookie pop up (not always an issue but was for me)
    try {
      const acceptCookies = await $('button.chakra-button.ii-7kliwd');

      if (await acceptCookies.isDisplayed()) {
        await acceptCookies.click();
      }

    } catch (error) {
      console.log("An error occurred whilst handling the cookie pop-up:", error);
    }   


    // declaring the services drop down element to hover over
    const servicesDropdown = await $('span[title="Services"]');
    
    await browser.pause(2000); //these pauses are not neccecary due to the await keyword, I just like watching the test 


    // Use pointer action to move to the services dropdown element
    const origin = servicesDropdown;
    await browser.action('pointer', { pointerType: 'mouse' })
      .move({ duration: 0, origin: origin, x: 0, y: 0 })
      .move({ duration: 0, origin: origin })
      .perform();
      await browser.pause(2000);

      //clicking after waiting for the animation

      await servicesDropdown.click();
      await browser.pause(2000);


    // Try catch for clicking on trading account link
    try {
      const tradingAccountLink = await $('a[href="/ii-accounts/trading-account"]');
      await tradingAccountLink.click();
      await browser.pause(2000);

    
      // Check (assert) that the current URL is www.ii.co.uk/ii-accounts/trading-account
      const currentUrl = await browser.getUrl();
      expect(currentUrl).toEqual('https://www.ii.co.uk/ii-accounts/trading-account');
      console.log("the correct url was reached")
      await browser.pause(2000);

    } catch (error) {
      console.log("An error occurred while clicking the Trading Account link:", error);
    }

  });
});

// try catches are not neccecary and could be done with an if statement but are better practice imo as it's easier than reading error logs