/*

Whilst I don't expect that checking the animations of the webpage to be a top business priority I thought it was cool you could do that if you wanted

*/

const chai = require('chai');
const { expect } = chai

describe('Colour change animation', () => {
  it('should change the colour of the Services element after being clicked', async () => {
    await browser.maximizeWindow();
    await browser.url('https://www.ii.co.uk/');

    // Handles cookie pop up using a "global function"
    const handleCookiePopup = require('../../test/specs/handleCookiePopUp');
    handleCookiePopup();

    // Use pointer action to move to the services dropdown element
    const servicesDropdown = await $('span[title="Services"]');
    const origin = servicesDropdown;

    // Get the original colour of the element
    const initialColour = await servicesDropdown.getCSSProperty('color');

    await browser.action('pointer', { pointerType: 'mouse' })
      .move({ duration: 0, origin: origin, x: 0, y: 0 })
      .move({ duration: 0, origin: origin })
      .perform();

    await browser.pause(2000);

    // Click the services dropdown element
    await servicesDropdown.click();
    
    
    await browser.pause(2000); // Wait for the animation to complete


    // Get the final colour of the element
    const finalColour = await servicesDropdown.getCSSProperty('color');


    // Check that the original and final colours are different
    expect(initialColour.value).to.not.equal(finalColour.value);

  });
});