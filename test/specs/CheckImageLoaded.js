/* 
If I had more time id turn this into a function and call it from more scripts,
or id figure out how to select all the images on the page using webdriver io's functions and ensure they are 
all in the correct place and have loaded successfully


*/
const chai = require('chai');
const { expect } = chai

describe('Check investment platform of the year image', function() {
    it('should load the image on the trading account page', async function() {
        
        
        // Navigate to the trading account page
        await browser.url('https://www.ii.co.uk/ii-accounts/trading-account');


    // Handles cookie pop up using a "global function"
    const handleCookiePopup = require('../../test/specs/handleCookiePopUp');
    handleCookiePopup();

    
        try {
           
            // Find the image element by alt text
            const image = await $('img[alt="Investment Platform of the Year"]');

            // Assert that the image element exists
            await expect(image).toExist();

            // Assert that the image source is correct
            await expect(image).toHaveAttribute('src', 'https://media-prod.ii.co.uk/s3fs-public/2023-03/investment-platform-of-the-year.png');

            // Assert that the image has the correct class name
            await expect(image).toHaveClass('chakra-image');

        } catch (error) {
            // If any errors occur during execution, catch them and output to console
            console.error('Error relating to investment platform of the year image', error);
        }
    });
});
