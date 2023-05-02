/*Turning handle cookie pop up into a "global function" so to avoid code repetition */

async function handleCookiePopup() {
    try {
      const acceptCookies = await $('button.chakra-button.ii-7kliwd');
      if (await acceptCookies.isDisplayed()) {
        await browser.pause(2000);
        await acceptCookies.click();
      }
    } catch (error) {
      console.log("An error occurred whilst handling the cookie pop-up:", error);
    }
  }
  
  module.exports = handleCookiePopup;  