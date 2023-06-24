/*
============================================
; Title: product.js
; Author: John Davidson
; Date: 06/24/2023
; Description: The JavaScript code for WEB 330 - Assignment 5.2.
;============================================
*/

// Creates and exports the Product class.
export class Product {
  constructor(name, price) {
    this.name = name;
    this.price = price;
    this.id = Math.random().toString(16).slice(2);
  }
}
