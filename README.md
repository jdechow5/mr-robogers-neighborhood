# Mr Robogers Neighborhood

#### By _**Justin Dechow**_

#### _A website that will accept a number and display modified results_

## Technologies Used

* _CSS_
* _HTML_
* _Markdown_
* _jquery_
* _javascript_

## Description

_This webpage will accept a users numerical input and display a modified version. It will replace 1's with 'Beep!', 2's with 'Boop!' and 3's with 'Won't you be my neighbor?'_

## Setup/Installation Requirements

* _Clone the Programming Language Suggester GitHub [repository](https://github.com/jdechow5/mr-robogers-neighborhood) by running the following code in your terminal_
`$ git clone https://github.com/jdechow5/mr-robogers-neighborhood.git`
* _Open index.html in your preferred browser_

* _Or you can click [here](https://jdechow5.github.io/mr-robogers-neighborhood/) to visit the page on gh-pages._




## Known Bugs

* _No known issues_

## Tests

Describe: createArray()

Test: "It should take a number and return an array with numbers beginning at 0 up to number input"
Code: createArray(3);
Expected Output: [0,1,2,3]

Describe: splitNum()

Test: "It should take input and turn it into an array of it's digits and then return the array"
Code: splitArray(11);
Expected Output: [1, 1]

Describe: checkNumber()

Test: "It should accept an array and run a loop looking for 3, if 3 is in array it will return 'Won't you be my neighbor?"
Code: checkNumber([1, 2, 3]);
Expected Output: "Won't you be my neighbor?"

Test: "If a 3 is not present, check for a 2 and if found return 'Boop!'"
Code: numberChecker([1,2,4]);
Expected Output: "Boop!"

Test: "If 2 && 3 are not present, check for 1 and if found return 'Beep!'"
Code: numberChecker([1, 4, 5]);
Expected Output: "Beep!"

Describe: beepBopify()

Test: "If 0 is input it should return [0]"
Code: beepBopify(0);
Expected Output: [0]

Test: "If 1 is input it should return [0, 'Beep!']"
Code: beepBopify(1);
Expected Output: [0, 'Beep!']

Test: "If 2 is input it should return [0, 'Beep!', 'Boop!']"
Code: beepBopify(2);
Expected Output: [0, 'Beep!', 'Boop!']

Test: "If 3 is input it should return [0, 'Beep!', 'Boop!', 'Won't you be my neighbor?']"
Code: beepBopify(3);
Expected Output: [0, 'Beep!', 'Boop!', 'Won't you be my neighbor?']

Test: "It should take any value and return 0 to that number, replace any numbers with 3 to 'Won't you be my neighbor?', numbers with 2 but not 3 with 'Boop!', and any numbers with 1 but not 2 or 3 to 'Beep!'"
Code: beepBopify(6)
Expected Output: [0, 'Beep!', 'Boop!', 'Won't you be my neighbor?', 4, 5, 6]


## License

_Contact Justin Dechow at justin.dechow@gmail.com with any issues or concerns about this code_

Copyright (c) _2022_ _Justin Dechow_