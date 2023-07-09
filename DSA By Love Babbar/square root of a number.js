function Sqrt(n) {
    let start = 0;
    let end = parseInt(n / 2);
    let result = 1;
    
    while (start <= end) {
      let mid = parseInt((start + end) / 2);
      let square = mid * mid;

      if(square === n) return mid;
      
      if (square < n) {
        result = mid;
        start = mid + 1;
      } else {
        end = mid - 1;
      }
    }
    
    return result;
}


console.log(Sqrt(13));


  