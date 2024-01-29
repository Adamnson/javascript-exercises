const repeatString = function(string, num) {
  let i = num;
  let str = '';
  if (num>=0)
  {
    while(i>0){
      str += string;
      i--;
    }
    return str;
  }
  else 
  { 
    return "ERROR";
  }
};

// Do not edit below this line
module.exports = repeatString;
