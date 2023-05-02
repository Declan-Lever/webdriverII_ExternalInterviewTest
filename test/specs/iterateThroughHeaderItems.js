/*

Struggling with this

I could solve this problem using functions in an array and a for loop but that would not take advantage of the $$ selector
This is how I was going to originally solve this problem ^

I do not believe that this code is actually doing what I want it to do despite the fact the test passes (no longer passes as was playing around with array to see if that was the issue), 
I have made an attempt to iterate through the options using the $$ selector rather than doing it with functions

I'm confident with more time or a little guidance I could solve this problem - ideally What id like to do is study code where this problem is solved so I can improve upon it in and solve similar 
problems like it in future


Some of these things are fairly new to me so I don't think this is a bad attempt at all, if I were to try and fix this independently with more time id
isolate which parts of the code are working and which parts aren't, nothing is too hard when broken down into smaller jobs

*/


const chai = require('chai');
const { $$ } = require('webdriverio/build/commands/browser');
const { expect } = chai;

    describe('Navigation bar', () => {
    it('should click on each button and verify the dropdown link', async () => {
      await browser.url('https://www.ii.co.uk/');
      await browser.maximizeWindow();
      await browser.pause(2000); 
      

      // Handles cookie pop up using a "global function"
      const handleCookiePopup = require('./handleCookiePopUp');
      handleCookiePopup();

      browser.pause(2000); 

  
      // select all the buttons of the li class in an element array
      //const NavBarbuttons = $$('.navbar-menu > ul > li'); 
      
      const NavBarbuttons = $$('xpath=//*[@id="root"]/div/header/div/nav/ul/li'); // doing the element array with xpath instead

      
      
      browser.pause(2000); 


      for (let i = 0; i < NavBarbuttons.length; i++) {
        const button = NavBarbuttons[i];
        await button.click();  // Problem could be that it's not actually clicking the buttons as it doesn't appear to be doing that
        await browser.pause(2000);
    
        const dropdownLink = button.$('.dropdown-menu a');
        if (dropdownLink) {
          const expectedLink = await dropdownLink.getAttribute('href'); 
          expect(expectedLink).to.not.be.null; // potential logic issue, one debug idea is to specify just one link to ensure this logic is sound - this would eventually be expanded to ensure it had directed to the link in the href then return back to the webpage and click the next link *quite complex*
          await dropdownLink.click();
          await browser.pause(4000);
          const currentUrl = await browser.getUrl(); // was getting error 404 at one point which essentially suggested the buttons were being clicked, issue could be here instead
          await browser.pause(2000);
          expect(currentUrl).to.equal(expectedLink);
  }
}
});
});