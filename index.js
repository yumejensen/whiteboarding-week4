/**
  * Implement a function that finds the longest palindrome in a given string.
  *
  * For example, in the string "My dad is a racecar athlete", the longest
  * palindrome is "a racecar a". Count whitespaces as valid characters. Other
  * palindromes in the above string include "dad", "ete", " dad " (including
  * whitespace on each side of dad).
  *
  * @example
  *   console.log(longestPalindrome('My dad is a racecar athlete'));
  *   => 'a racecar a'
  *
  *
  * Input: A string
  * Output: A string representing the longest palindrome
  * Constraints: White spaces count as characters
  * Edge Cases: case insensitive
  *
  */

 // checking string comparison
 //console.log("aracecara" === "a racecar a"); // false
 // checking string split
 //const str = "hello hello hello"
 //console.log(str.split(''));

// checking the reverse
// const str2 = "racecar"
// const reverse = str2.split('').reverse().join('');
// console.log(str2 === reverse); // true

 // TODO: Pseudocode your entire solution before you start coding
const longestPalindrome = (string) => {
    // collector string
    const palindromes = [];

    // helper function
    const findPalindromes = function(string, stringPiece = '') {
       
        // check reverse string variable
        let reverse = string.split('').reverse().join('');
        
        // if it's a palindrome, add to our palindromes array (possible combos)
        // when comparing, set to the same case (upper or lowercase)
        if (string.toLowerCase() === reverse.toLowerCase()){
            // add to palindromes
            palindromes.push(string);
        }
        
        // loop through the string 
        for (let i = 0; i < string.length; i++){
            // add pieces of the string to something
            stringPiece += string[i];

            // call findPalindromes
            //findPalindromes()
        }
    };
    
    // base case
    // return the longest string in palindromes array
    
};


// TEST
// console.log(longestPalindrome('My dad is a racecar athlete'));