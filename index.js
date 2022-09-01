function isPalindrome(word) {
  // Write your algorithm here
  const wordReversed =reversestring(word);
  return word === wordReversed
}

function reversestring(word) {
  return word.split("").reverse().join("");
}
/* 
  Add your pseudocode here
*/

/*
  Add written explanation of your solution here
  Declared wordReversed to reverstring 
  split the word and the joined to reverse
  
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
