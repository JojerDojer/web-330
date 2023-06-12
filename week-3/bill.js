/*
============================================
; Title: bill.js
; Author: John Davidson
; Date: 06/11/2023
; Description: The JavaScript code for WEB 330 - assignment 3.2.
;============================================
*/

// Exports the Bill class that assigns objects to arrays.
export class Bill {
  constructor() {
    this._beverages = [];
    this._appetizers = [];
    this._mainCourses = [];
    this._desserts = [];
  }

  // Adds a beverage object to the beverages array.
  addBeverage(beverage) {
    this._beverages.push(beverage);
  }

  // Adds a appetizer object to the appetizer array.
  addAppetizer(appetizer) {
    this._appetizers.push(appetizer);
  }

  // Adds a mainCourse object to the mainCourse array.
  addMainCourse(mainCourse) {
    this._mainCourses.push(mainCourse);
  }

  // Adds a dessert object to the dessert array.
  addDessert(dessert) {
    this._desserts.push(dessert);
  }

  // Calculates the total cost of items.
  getTotal() {
    let total = 0;

    // Iterates over the arrays and accumulates the price of each item.
    let beverageTotal = this._beverages.forEach(function(beverage)
    {
      total += parseFloat(beverage.price);
    })

    let appetizerTotal = this._appetizers.forEach(function(appetizer)
    {
      total += parseFloat(appetizer.price);
    })

    let mainCourseTotal = this._mainCourses.forEach(function(mainCourse)
    {
      total += parseFloat(mainCourse.price);
    })

    let dessertTotal = this._desserts.forEach(function(dessert)
    {
      total += parseFloat(dessert.price);
    })

    return total.toFixed(2);
  }
}
