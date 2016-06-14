/*  function(digits)
 *
 *  @param {Number} digits         the amount of digits in each multiplicand
 *
 *  @return {Object} an object containing the two factors used to produce
 *                   the palindromeNumber and the palindromeNumber itself.
 */
module.exports = function(digits){
  var factor_0 = 0;
  var factor_1 = 0;
  var palindromeNumber = 0;

  // do your work here
function isPalindrome(theNumber){
  theNumber = String(theNumber);
  var isPal= true ;
  var numLength = theNumber.length;
  var midpoint = Math.ceil(numLength/2);
  var isEven = (numLength % 2 === 0);
  var s = 0;
  for (var i = numLength - 1; i >= midpoint; i--) {
    if(theNumber.charAt(i) != theNumber.charAt(s)) {
      isPal = false;
    }
    s++;
  }
  return isPal;
}


  return {
    factor_0 : factor_0,
    factor_1 : factor_1,
    palindromeNumber : palindromeNumber
  };
};