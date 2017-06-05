module.exports = function main(str) {
  // Write your cade here
  var num = Number(str);
  
  function sum(n) {
    if (n > 9) {
      return n % 10 + sum(n / 10);
    } else {
      return n;
    }  
  }
  
  return sum(num);
};
