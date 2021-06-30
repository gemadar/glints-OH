/* Write chained if/else if statements to fulfill the following conditions:
num < 5 - return "Tiny"
num < 10 - return "Small"
num < 15 - return "Medium"
num < 20 - return "Large"
num >= 20 - return "Huge" */

function testSize(num) {
  // code below this line
  if (num < 5) {
    return "Tiny";
  } else if (num < 10) {
    return "Small";
  } else if (num < 15) {
    return "Medium";
  } else if (num < 20) {
    return "Large";
  } else {
    return "Huge";
  }
}

console.log(testSize(0));
console.log(testSize(5));
console.log(testSize(10));
console.log(testSize(17));
console.log(testSize(25));

testSize(0); // should return "Tiny"
testSize(5); // should return "Small"
testSize(10); // should return "Medium"
testSize(17); // should return "Large"
testSize(25); // should return "Huge"
