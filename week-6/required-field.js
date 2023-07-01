/*
============================================
; Title: required-field.js
; Author: John Davidson
; Date: 06/30/2023
; Description: The JavaScript code for WEB 330 - Assignment 6.2.
;============================================
*/

// Creates and exports a class.
export class RequiredField {
  constructor(name, field) {
    this.name = name;
    this.field = field;
  }

  // Creates a validate function that checks if the input value is equal to a typeof string.
  validate() {
    if (typeof this.field == 'string') {
      return true;
    } else {
      return false;
    }
  }

  // Creates a function that displays a string if no input is entered.
  getMessage() {
    return `${this.name} is a required field.`
  }
}
