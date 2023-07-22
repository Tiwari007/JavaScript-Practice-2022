function removeUnwanted(s) {
    return s.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
  }
  
  function checkPalindrome(s) {
    const cleanedString = removeUnwanted(s);
    const reversedString = cleanedString.split('').reverse().join('');
    return cleanedString === reversedString;
  }

  


// Test cases
console.log(checkPalindrome('A man, a plan, a canal, Panama'));
console.log(checkPalindrome('Was it a car or a cat I saw?'));
console.log(checkPalindrome('No lemon, no melon'));
console.log(checkPalindrome('Hello, world!'));
console.log(checkPalindrome('Racecar'));
console.log(checkPalindrome('12321'));
console.log(checkPalindrome('12345'));
console.log(checkPalindrome('Able was I, ere I saw Elba'));
console.log(checkPalindrome('Palindrome'));

