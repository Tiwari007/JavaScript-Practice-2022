const checkPanagram = (string) => {
  const characterCount = {};
  for (let i = 0; i < string.length; i++) {
    let currentChar = string.charAt(i);
    let charCode = currentChar.charCodeAt(0);
    if (
      (charCode >= 65 && charCode <= 90) ||
      (charCode >= 97 && charCode <= 122)
    )
      characterCount[currentChar] = true;
  }

  return Object.keys(characterCount).length - 1 === 26;
};

console.log(checkPanagram("boom baam dhoom dhadaka"));
console.log(checkPanagram("The quick brown fox jumps over the lazy dog"));
