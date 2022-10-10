var intervalid;
var runCount = 0;
 function sayHello () {
    ++runCount;
     if (runCount > 4) {
        clearInterval(intervalld)
     }
    console.log( "Hello !", runCount)
 }
 console.log( "And the wait starts :")
intervalld = setInterval(sayHello, 1000)