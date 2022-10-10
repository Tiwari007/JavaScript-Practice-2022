var repeatedCharacter = function (s) {
  let obj = {};
  for (let word of s) {
    if (!obj[word]) {
      obj[word] = 1;
    } else {
      return word;
      break;
    }
  }
};

console.log(repeatedCharacter("abcdeabbgty"))
