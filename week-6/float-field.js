/*
============================================
; Title: float-field.js
; Author: John Davidson
; Date: 06/30/2023
; Description: The JavaScript code for WEB 330 - Assignment 6.2.
;============================================
*/

// Creates and exports a class.
export class FloatField {
  constructor(name, field) {
    this.name = name;
    this.field = field;
  }

  // Creates a validate function that checks if the input value is a number.
  validate() {
    if (NaN !== this.field) {
      return true;
    } else {
      return false;
    }
  }

  // Creates a function that displays a string if the stating the input must be a float value.
  getMessage() {
    return `${this.name} must be a float value. You entered ${this.field}.`
  }
}
