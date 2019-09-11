
// Use multiple conditional operatorsin the checkSignfunction to check if a number is positive, negative or zero.

function checkSign(num) {
  return (num === 0) ? "zero" : (num > 0) ? "positive" : "negative";
}

checkSign(10);
