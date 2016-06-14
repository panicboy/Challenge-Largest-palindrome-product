/*  function(digits)
 *
 *  @param {Number} digits         the amount of digits in each multiplicand
 *
 *  @return {Object} an object containing the two factors used to produce
 *                   the palindromeNumber and the palindromeNumber itself.
 */
module.exports = function(digits){
  var factor_0 = Number('9'.repeat(digits));
  var factor_1 = Number('9'.repeat(digits));
  var palindromeNumber = 0;

  // do your work here
function isPalindrome(theNumber){
  theNumber = String(theNumber);
  var isPal= true ;
  var midpoint = Math.ceil(theNumber.length/2);
  var s = 0;
  for (var i = theNumber.length - 1; i >= midpoint; i--) {
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