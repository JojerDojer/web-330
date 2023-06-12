/*
============================================
; Title: dessert.js
; Author: John Davidson
; Date: 06/11/2023
; Description: The JavaScript code for WEB 330 - assignment 3.2.
;============================================
*/

// Imports the Product class from the "product.js" module.
import { Product } from "./product.js";

// Defines a Desserts class, extending from the Product class.
export class Dessert extends Product
{
  constructor(name, price)
  {
    super(name, price);
  }
}
