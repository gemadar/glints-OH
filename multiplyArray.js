/* function multiplyAll(arr) {
  var product = 1;
  // Only change code below this line
var 
  // Only change code above this line
  return product;
}

multiplyAll([[1,2],[3,4],[5,6,7]]);
//multiplyAll([[1,2],[3,4],[5,6,7]]) should return 5040
 */
function multiplyAll(arr) {
  var product = 1;
  // Only change code below this line
  arr.map((array) => {
    array.map((num) => {
      product *= num;
    });
  });
  // Only change code above this line
  return product;
}

console.log(
  multiplyAll([
    [1, 2],
    [3, 4],
    [5, 6, 7],
  ])
);
