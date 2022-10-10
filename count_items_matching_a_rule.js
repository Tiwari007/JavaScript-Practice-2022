//  CODE IN PYTHON

// class Solution:
//     def countMatches(self, items: List[List[str]], ruleKey: str, ruleValue: str) -> int:
//         count = 0
//         ls= []
//         i = 0
//         for item in items:
//             obj ={}
//             obj["type"] = item[0]
//             obj["color"] = item[1]
//             obj["name"] = item[2]
//             # print(i, " -> ", obj)
//             ls.append(obj)
//             i += 1
//         # print(ls)
//         for data in ls:
//             # print(data["type"], data["color"], data["name"])
//             if data[ruleKey] == ruleValue:
//                 # print(data[ruleKey], ruleValue)
//                 count = count + 1
                
//         return count