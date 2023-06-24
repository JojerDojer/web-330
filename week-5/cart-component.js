/*
============================================
; Title: cart-component.js
; Author: John Davidson
; Date: 06/24/2023
; Description: The JavaScript code for WEB 330 - Assignment 5.2.
;============================================
*/

// Creates a CartComponent class that extends from HTMLElement.
class CartComponent extends HTMLElement {
  constructor() {
    super();
  }

  // A method that sets up HTML content for the shopping cart icon.
  connectedCallback() {
    this.innerHTML = `
    <i id="cartIcon" class="fa fa-shopping-cart"></i> (<span id="cart-count"></span>)`
  }
}
// Allows for the usage of card-component as an element in HTML.
customElements.define('cart-component', CartComponent);
