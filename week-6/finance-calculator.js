/*
============================================
; Title: finance-calculator.js
; Author: John Davidson
; Date: 06/30/2023
; Description: The JavaScript code for WEB 330 - Assignment 6.2.
;============================================
*/

// Creates and exports the class responsible for creating the calculator.
export class FinanceCalculator {

  static MONTHS_IN_YEAR = 12;

  // Static function that performs the future value calculation.
  static calculateFutureValue(monthlyPayment, rate, years) {
    let month = years * FinanceCalculator.MONTHS_IN_YEAR;
    let interestRate = 1 + rate / 100;
    let presentValue = monthlyPayment * month;
    let futureValue = presentValue * (Math.pow(interestRate, month));

    // Makes the return value have two decimal places.
    return futureValue.toFixed(2);
  }

  // Static function that converts to US currency.
  static convertToCurrency(field) {
    let currencyFormatter = new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD"
    });

    // Return currency formatter.
    return currencyFormatter.format(field);
  }
}
