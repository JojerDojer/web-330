/*
============================================
; Title: float-max-field.js
; Author: John Davidson
; Date: 06/30/2023
; Description: The JavaScript code for WEB 330 - Assignment 6.2.
;============================================
*/

// Creates and exports a class.
export class FloatMaxField {
  constructor(name, field, max) {
    this.name = name;
    this.field = field;
    this.max = max;
  }

  // Creates a validate function that checks if the input is < than the maximum value.
  validate() {
    if (parseFloat(this.field) < this.max) {
      return true;
    } else {
      return false;
    }
  }

  // Creates a function that displays a string if requirements aren't met.
  getMessage() {
    return `${this.name} must be less than ${this.max}. You entered ${this.field}.`
  }
}
