/*
============================================
; Title: calorie-converter.js
; Author: John Davidson
; Date: 06/16/2023
; Description: The JavaScript code for WEB 330 - Assignment 4.2.
;============================================
*/

/* Imports the FoodModel class from ./food-model.js file. */
import { FoodModel } from './food-model.js';

/* Defines and exports the CalorieConverter class that extends from FoodModel. */
export class CalorieConverter extends FoodModel {

  /* Defines a static property, containing an array of FoodModel objects. */
  static data = [
    new FoodModel(1007, 'Egg', 78),
    new FoodModel(1008, 'Apple', 95),
    new FoodModel(1009, 'Hamburger', 354),
    new FoodModel(1010, 'Fries', 400),
    new FoodModel(1011, 'Banana', 105),
    new FoodModel(1012, 'Soda', 150)
  ];

  /* A static method that looks for FoodModel objects. */
  static find(string) {
    this.string = string;

    /* Returns the FoodModel object. */
    return this.data.filter((obj) => {
      if (this.string.includes(`${obj.name}`.toLowerCase())) return obj;
    });
  }
}







