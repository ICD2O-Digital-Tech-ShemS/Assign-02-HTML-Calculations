// Copyright (c) 2020 Mr. Coxall All rights reserved
//
// Created by: Mr. Coxall
// Created on: Sep 2020
// This file contains the JS functions for index.html
"use strict";

// Function to handle the conversion when the form is submitted
function enterClicked(event) {
    // Prevent the form from submitting and refreshing the page
    event.preventDefault();

    // Get the input value and convert it to a floating-point number
    let moneyAmount = parseFloat(document.getElementById("money-amount").value);

    // Define the exchange rate (1 CAD = 0.74 USD)
    const EXCHANGERATE = 0.71;

    // Convert the money amount to USD using the exchange rate
    let moneyEarned = moneyAmount * EXCHANGERATE;

    // Display the converted amount to the user, rounding to 2 decimal places
    document.getElementById('money-earned').innerHTML = "Your amount in USD is " + moneyEarned.toFixed(2);

}
