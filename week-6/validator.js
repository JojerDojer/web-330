/*
============================================
; Title: validator.js
; Author: John Davidson
; Date: 06/30/2023
; Description: The JavaScript code for WEB 330 - Assignment 6.2.
;============================================
*/

// Import necessary modules.
import { RequiredField } from "./required-field.js";
import { FloatField } from "./float-field.js";
import { FloatMinField } from "./float-min-field.js";
import { FloatMaxField } from "./float-max-field.js";

// Creates and exports a class.
export class Validator {

  // Creates empty arrays for validators and messages.
  validators = [];
  messages = [];

  constructor(name, field) {
    this.name = name;
    this.field = field;
  }

  // Creates a function that requires a field input.
  addRequiredField() {
    this.validators.push(new RequiredField(this.name, this.field));
  }

  // Creates a function that requires a float field input.
  addRequiredFloatField() {
    this.validators.push(new FloatField(this.name, this.field));
  }

  // Creates a function that adds a minimum input stipulation.
  addFloatMinField(min) {
    this.validators.push(new FloatMinField(this.name, this.field, min));
  }

  // Creates a function that adds a limit to the max value that can be entered.
  addFloatMaxField(max) {
    this.validators.push(new FloatMaxField(this.name, this.field, max));
  }

  // Creates a validate function that loops through the validators array.
  validate() {
    for (let value of this.validators) {
      // If the validation fails, add the error message to messages array and return false.
      if (!value.validate()) {
        this.messages.push(value.getMessage());
        return false;
      }
    }
    return true; // Returns true if the validators pass.
  }
}
