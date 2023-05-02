/*

This code works fine despite the typeScript error regarding the browser object - Can be fixed by setting up an ignore in typescript
Npm install typescript ts-node --save-dev doesn't appear to work
You may need to run: npm install --save @types/jquery

*/

describe('Demo tests', function () {

  it('My First Test', async () => { //can also be written as async function ()

      await browser.url('https://google.com'); 

      browser.pause(2000); 

      try {
          const rejectAllButton = await $('[id="W0wltc"] div');
          if (await rejectAllButton.isDisplayed()) {
            await rejectAllButton.click();
          }
        } catch (error) {
          console.log("An error occurred whilst handling the cookie pop up:", error);
        } // try catch incase of cookie pop up (not always an issue but was for me occasionally)

        browser.pause(2000); //these pauses are not neccecary due to the await keyword, I just like watching the test 

      await $('[name="q"]').setValue('interactive investor'); // puts interactive investor into the searchbar
      browser.pause(2000);

      //await $('[name="btnK"]').click(); // either this or browser.keys enter can be used, they serve the same purpose.
      
      await browser.keys('Enter');
      
      browser.pause(2000); 
  });
});