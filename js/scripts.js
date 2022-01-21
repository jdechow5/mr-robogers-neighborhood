//Business Logic
function beepBoopify(num) {
  let numberArray = [];
  for (let i = 0; i <= num; i++) {
    if (numberArray.includes(1)) {
      return "Beep!"
    } else {
      numberArray.push(i);
    }
  }
  return numberArray;
}

