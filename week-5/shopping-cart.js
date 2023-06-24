/*
============================================
; Title: shopping-cart.js
; Author: John Davidson
; Date: 06/24/2023
; Description: The JavaScript code for WEB 330 - Assignment 5.2.
;============================================
*/

// Creates and exports a ShoppingCart class.
export class ShoppingCart {
  constructor() {
    this.products = [];
  }

  // A method that counts the length of products.
  count() {
    return this.products.length;
  }

  // A method that adds product to a list.
  add(product) {
    this.products.push(product);
  }

  // Creates an iterator that loops through products.
  *[Symbol.iterator]() {
    for (let product of this.products) {
      yield product;
    }
  }
}
