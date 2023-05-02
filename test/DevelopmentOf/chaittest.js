const { expect } = require('chai');

// Function to be tested
function addNumbers(a, b) {
  if (typeof a !== 'number' || typeof b !== 'number') {
    return NaN;
  }

  return a + b;
}

// define variables for the addNumbers function
describe('addNumbers', () => {
  it('should add two numbers correctly', () => {
    // Define the inputs and expected output
    const a = 2;
    const b = 3;
    const expectedSum = 5;

    // Call the function and check the output using Chai expectedSum assertion
    const sum = addNumbers(a, b);
    expect(sum).to.equal(expectedSum);
  });

  it('should return NaN if either input is not a number', () => {
    // Define the inputs and expected output
    const a = '5';
    const b = 'not a number';

    // Call addNumbers and check the output using Chai
    const sum = addNumbers(a, b);
    expect(sum).to.be.NaN;
  });
});
