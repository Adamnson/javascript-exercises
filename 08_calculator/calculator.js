const add = function(a,b) {
  return (a+b);	
};

const subtract = function(a,b) {
	return (a-b);
};

const sum = function(a) {
  let total =0;
  a.forEach(element => {
    total += element;
  });	
  return total;
};

const multiply = function(a) {
  let product = 1;
  a.forEach(el => {
    product *= el;
  });
  return product;

};

const power = function(number, power) {
	let ans = 1;
  for(let i=1; i<=power; i++)
  {
    ans *= number;
  }
  return ans;
};

const factorial = function(number) {
  if(number === 0 || number === 1) {
    return 1;
  }
  else {
    for(let i=number; i>=1; i--){
      return number*factorial(number-1);
    }
  }
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
