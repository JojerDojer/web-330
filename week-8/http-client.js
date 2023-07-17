/**
============================================
; Title: http-client.js
; Author: John Davidson
; Date: 07/16/2023
; Description: The JavaScript file for WEB 330 - Assignment 8.2.
============================================
*/

// Creates and exports the HttpClient class.
export class HttpClient {
  async get(url, params) {

    // Create a new url object.
    url = new URL(url);

    // Set the query parameters for the URL.
    url.search = new URLSearchParams(params);

    // Send a GET request to the URL via fetch.
    const res = await fetch(url.toString(), {
      method: 'GET',
     })

    // Parse the response body as JSON.
    const json = await res.json();

    // Return the parsed data.
    return json;
  }
}
