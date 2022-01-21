//Business Logic
function createArray(num) {
  let numArray = [];
  for (i = 0; i <= num; i++) {
    numArray.push(i);
  }
  return numArray;
};

function splitNum(num) {
  let split = num.toString().split("");
  let newSplit = split.map(function (element) {
    return parseInt(element);
  });
  return newSplit;
};
