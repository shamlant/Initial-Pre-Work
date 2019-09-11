
/* Some developers prefer to assign all their variables using constby default,
unless they know they will need to reassign the value. Only in that case, they use let.*/

const s = [5, 7, 2];
function editInPlace() {
  "use strict";
  // change code below this line
s[0] = 2;
s[1] = 5;
s[2] = 7;

  // change code above this line
}
editInPlace();
