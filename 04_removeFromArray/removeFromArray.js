const removeFromArray = function(arr, ...theArgs) {
  let updated = [];
  arr.forEach((item) => {
    if (!theArgs.includes(item)) {
      updated.push(item);
    }
  });
  return updated;
};


// Do not edit below this line
module.exports = removeFromArray;
