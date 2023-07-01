/*
============================================
; Title: float-min-field.js
; Author: John Davidson
; Date: 06/30/2023
; Description: The JavaScript code for WEB 330 - Assignment 6.2.
;============================================
*/

// Creates and exports a class.
export class FloatMinField {
  constructor(name, field, min) {
    this.name = name;
    this.field = field;
    this.min = min;
  }

  // Create a validate function that checks if the input is > than the minimum requirement.
  validate() {
    if (parseFloat(this.field) > this.min) {
      return true;
    } else {
      return false;
    }
  }

  // Creates a function that displays a string if requirements aren't met.
  getMessage() {
    return `${this.name} must be more than ${this.min}. You entered ${this.field}.`
  }
}
