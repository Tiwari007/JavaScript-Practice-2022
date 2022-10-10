var areOccurrencesEqual = function (s) {
  obj = {};

  for (let num of s) {
    if (!obj[num]) {
      obj[num] = 1;
    } else {
      obj[num] += 1;
    }
  }

  count = 0;
  console.log(obj);
  temp = obj[s[0]];
  for (const key in obj) {
    if (obj[key] == temp) {
      count += 1;
    }
  }

  var size = Object.keys(obj).length;
  console.log(size);

  if (size == count) {
    return true;
  } else {
    return false;
  }
};

console.log(areOccurrencesEqual("abacbc"));
