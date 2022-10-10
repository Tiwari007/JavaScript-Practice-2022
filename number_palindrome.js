//  JS CODE FOR NUMBER PALINDROME

function isPalindrome(ls) {
    for (let num of ls) {
        if (num < 0) {
            console.log("False");
            continue;
        }
        let temp = num;
        let rev_Value = 0;
        while (temp !== 0) {
            let digit = temp % 10;
            rev_Value = rev_Value * 10 + digit;
            temp = parseInt(temp / 10);
        }
        if (rev_Value === num) {
            console.log("True");
        } else {
            console.log("False");
        }
    }
}

isPalindrome([121, -121, 0, 12321, 12345]);

// PYTHON CODE
// class Solution:
//     def isPalindrome(self, x: int) -> bool:
//         # print(x)
//         temp = x
//         value = 0
//         Rev_value = 0
//         if (x < 0):
//             return False
//         while temp != 0:
//             digit = temp % 10
//             Rev_value = Rev_value * 10 + digit
//             temp = temp // 10
//         if Rev_value == x:
//             return True
//         else:
//             return False
//         print(value)
//         # return value
