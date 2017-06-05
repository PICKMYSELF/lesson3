module.exports = function main(str) {
  // Write your cade here
  var num = Number(str);
  
  function sum(n) {
    if (n > 9) {
      return n % 10 + sum(Math.floor(n / 10));
    } else {
      return n;
    }  
  }
  
  return sum(num);
};
