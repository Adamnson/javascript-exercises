const sumAll = function(start, end) {
  let sum = 0;
  let typeCondition = (typeof(start) === "number" && typeof(end) === "number");
  let negativeCondition = (start >= 0 && end >= 0);
  if(typeCondition && negativeCondition){
    let start_i = 0;
    let end_i = 0;

    if( start <= end)
    {
      start_i = start;
      end_i = end;
    }
    else {
      start_i = end;
      end_i = start;
    }

    for(let i = start_i ; i <= end_i; i++){
      sum += i;
    }

    return sum;
  }
  else { return "ERROR";}
  
};

// Do not edit below this line
module.exports = sumAll;
