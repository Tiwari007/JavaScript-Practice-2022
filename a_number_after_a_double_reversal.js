var isSameAfterReversals = function (num) {
  function reversal(n) {
    temp = n;
    rev = 0;
    while (temp !== 0) {
      digit = temp % 10;
      rev = rev * 10 + digit;
      temp = parseInt(temp / 10);
    }
    return rev;
  }
  return num == reversal(reversal(num));
};

console.log(isSameAfterReversals(12321));
