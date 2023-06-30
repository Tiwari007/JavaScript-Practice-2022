// power (2, 4) => 16

{
    let result = 1
    let a = 3
    let b = 3

    for(let i=0;i<b;i++){
        result *= a
    }

    console.log(`the power of ${a}, ${b} is ${result}`)
}


{
    function findSqrt(x){
        if(x < 2){
            return x;
        }
        let y = x;
        let z = (y + (x/y))/2;
         
        while(Math.abs(y-z)>=0.00001){
            y = z;
            z = (y + (x/y))/2;
        }
        return z;
    }
     
    let n = 25;
    let ans = findSqrt(n);
    console.log(ans.toPrecision(3) + " is the square root of 3");
}