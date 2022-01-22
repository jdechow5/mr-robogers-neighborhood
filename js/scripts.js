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

function checkNumber(array) {
  for (i = 0; i < array.length; i++) {
    if (array[i] === 3) {
      return "Won't you be my neighbor?";
    }
  }
  for (j = 0; j < array.length; j++) {
    if (array[j] === 2) {
      return "Boop!";
    }
  }
  for (k = 0; k < array.length; k++) {
    if (array[k] === 1) {
      return "Beep!";
    }
  }
  return parseInt(array.join(""));
}

function beepBopify(num) {
  let robot = createArray(num).map(function (element) {
    return splitNum(element);
  });
  let newRobot = robot.map(function (element) {
    return checkNumber(element);
  });
  return newRobot;
}

//User Interface Logic
$(document).ready(function () {
  $("form#robot").submit(function (event) {
    event.preventDefault();
    let numberInput = parseInt($("#numberInput").val());
    if (number < 0) {
      $("#result").text("Mr. Roboger's would like a positive number!");
    } else {
      $("#result").html(beepBopify(num));
    }
  })
})