/*
============================================
; Title: davidson-palindrome.js
; Author: John Davidson
; Date: 06/04/2023
; Description: The JavaScript code for WEB 330 - assignment 2.2.
;============================================
*/

/* A function that creates the date.*/
function getTodaysDate(){
  const date = new Date().toLocaleDateString('en-US')
  return date
}

/* A function that gives the length of a string. */
function getLength(str){
  return str.length
}

/* A function that reverses the order of a string. */
function reverse(str){
  let string = str.split("")
  string = string.reverse()
  string = string.join("")

  return string
}

/* A function that determines if an input is a palindrome. */
function isPalindrome(str){
  let palindrome = false

  if(reverse(str) === str){
    palindrome = true
  }

  return palindrome
}

/* An*/
document.getElementById('btnCheckPhrase').onclick = function() {

  /* Captures of the input value and converts it to lowercase. */
  let txtPhrase = document.getElementById('txtPhrase').value.toLowerCase()

  /* Captures the 'assign-results' div. */
  let assignResults = document.getElementById('assign-results')

  /* Captures the 'assign-results-header' div. */
  let assignResultsHeader = document.getElementById('assign-results-header')

  /* Gets today's date in the form of a variable. */
  let today = getTodaysDate()

  /* Gets the length of the input value from the HTML document. */
  let len = getLength(txtPhrase)

  /* Reverses the input value from the HTML document. */
  let reversePhrase = reverse(txtPhrase)

  /* Creates the results information about the input value from the HTML document. */
  let header = `Date: ${today} <br> Original Phrase: ${txtPhrase} <br> Reversed Phrase:
  ${reversePhrase} <br> Phrase Length: ${len}`

  /* Assigns the results information to the 'assignResultsHeader' id in HTML.*/
  assignResultsHeader.innerHTML = header


  if (isPalindrome(txtPhrase)) {
    /* If a palindrome, then display string. */
    assignResults.innerHTML = `${txtPhrase} <b><u>is</u></b> a palindrome!`
  } else {
    /* If not a palindrome, then display string. */
    assignResults.innerHTML = `${txtPhrase} <b><u>is not</u></b> a palindrome!`
  }
}
