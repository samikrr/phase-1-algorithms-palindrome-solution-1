function isPalindrome(word) {
  // Write your algorithm here
  ord = word.toLowerCase();
  const reversedWord = reverse(word);
  
  return word === reversedWord;
}


function reverse(word){
  //'abc' => 'cba'
  // const wordArray = word.split("");
  // const reverserdWordArray = wordArray.reverse();
  // const reversedWord = reverserdWordArray.join("");
  // return reversedWord;
return word.split("").reverse().join("");
}

/* 
  Add your pseudocode here
*/

/*
  Add written explanation of your solution here
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
console.log("");

console.log("Expecting: false");
console.log("=>", isPalindrome("ab"));




module.exports = isPalindrome;
