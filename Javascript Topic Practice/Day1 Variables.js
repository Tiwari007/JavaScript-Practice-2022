// let, var and const

// 1 - Scope of variables
// 2 - Redeclaration and reassignment
// 3 - Hoisting




// 1 - SCOPE OF VARIABLES

// var can have a global or local scope.
// let can have a global, local, or block scope.
// const can have a global, local, or block scope.

// global space – so you can access it everywhere (inside and outside functions).
// local space – so you can access it function (insidefunctions).
// block space – so you can access it block { } (inside curly braces).



//  2 - REDECLARE AND REASSIGN

// var can be redeclared and reassigned
// let can be reassigned to other values, but they cannot be redeclared.





// 3 - HOISTING

a = 5
console.log(a)  // this will work as var has hoisted
var a;


// IN LET AND CONST THERE IS ALSO HOISTING BUT THEY ARE TEMPORAL DEAD ZONE(TDZ).
b = 5
console.log(b) //ReferenceError: Cannot access 'b' before initialization
let b;

c = 6
console.log(c);
// const c;  //const declaration must be initialized