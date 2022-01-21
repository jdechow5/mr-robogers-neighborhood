//Business Logic
function beepBoopify(num) {
  let numberArray = [];
  for (let i = 0; i <= num; i++) {
    if (numberArray[i].includes(1)) {
      numberArray.push("Beep!")
    } else {
      numberArray.push(i);
    }
  }
  return numberArray;
}

