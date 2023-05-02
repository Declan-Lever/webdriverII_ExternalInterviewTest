/*

Whilst I don't expect that checking the colours of the webpage to be a top business priority I thought it was cool you could do that if you wanted

*/

const chai = require('chai');
const { expect } = chai

describe('Color of Services element', () => {

  it('should be #1a202c', async () => {
    await browser.maximizeWindow();
    await browser.url('https://www.ii.co.uk/');

    // Handles cookie pop up using a "global function"
    const handleCookiePopup = require('../../test/specs/handleCookiePopUp');
    handleCookiePopup();



    // Find the Services element by title
    const servicesDropdown = await $('span[title="Services"]');

    await browser.pause(2000);

    // Get the computed color property of the element
    const colour = await servicesDropdown.getCSSProperty('color');

    await browser.pause(2000);

    // Assert that the color value is #1a202c
    expect(colour.parsed.hex).to.equal('#1a202c');

  });
});