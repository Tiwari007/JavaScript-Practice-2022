// Reverse a string using Stack
//___________________________________________
// str = "We will conquere COVID-19";
// ls = [];

// for (text of str) {
//   ls.push(text);
// }

// revStr = "";
// for (let i = 0; i < str.length; i++) {
//   revStr += ls.pop();
// }

// console.log(revStr);




// Balanced Parentheses
// ___________________________________________

const isMatch = (ch1, ch2) => {
  let obj = {
    "(": ")",
    "{": "}",
    "[": "]",
  };
  return obj[ch1] === ch2;
};



const balanceParentheses = (str) => {
    let ls = [];
  for (ch in str) {
    if (ch == "(" || ch == "{" || ch == "[") {
      ls.push(ch);
    }
    if (ch == ")" || ch == "}" || ch == "]") {
      if (ls.length == 0) {
        return false;
      }
      if (!isMatch(ch, ls.pop())) {
        return false;
      }
    }
  }

  return ls.length == 0;
};


console.log(balanceParentheses("))((a+b}{"))

console.log(balanceParentheses("()[]{}"))