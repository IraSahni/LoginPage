# Simple Login Web Page

Project Overview
This project is a simple login web page built using HTML, CSS, and JavaScript. It integrates with an open login API, includes form field validations, and is designed to be responsive for both web and mobile devices. The project also includes optional features such as show/hide password functionality, a "Remember Me" checkbox, and a loading spinner while the API request is being processed.

Features
Form Validations:

Validates that the username/email field is not empty and contains a valid email address.
Validates that the password field is not empty and has at least 6 characters.
API Integration:

Uses the fetch API to send login credentials to an open API (https://jsonplaceholder.typicode.com/posts).
Displays success or error messages based on the response from the server.
Responsive Design:

Ensures the login form is user-friendly on both desktop and mobile devices using CSS media queries.
Bonus Features:

Show/Hide Password: Users can toggle between hiding and showing the password.
Remember Me: A checkbox is available to simulate the "Remember Me" functionality.
Loading Spinner: A spinner is displayed during the API request to indicate loading.
Prerequisites
To run this project, you need:

A modern web browser (Chrome, Firefox, Edge, etc.)
A simple HTTP server (optional, if testing on localhost)
For example, you can use Live Server in VSCode.
How to Run the Project
Option 1: Open Directly in a Browser
Download the project files.
Open index.html in a web browser.
Option 2: Run on Localhost
Download and navigate to the project folder in your terminal.

Start a local server. For example:

Using VSCode:
Install the Live Server extension.
Open the project and click Go Live at the bottom of VSCode.
Open the browser and go to http://localhost:8000 (or the port specified by the local server).

Project Files
index.html: The HTML structure for the login page.
style.css: The CSS file that styles the login form and ensures responsiveness.
scripts.js: The JavaScript file that handles form validations, API integration, show/hide password, loading spinner, etc.

API Details
The project uses an open login API to simulate authentication. The API endpoint is:

POST https://jsonplaceholder.typicode.com/posts
The request body contains:

{
  "username": "user@example.com",
  "password": "yourpassword"
}
This API does not actually verify credentials, so any valid request will return a successful response for demonstration purposes.

How It Works
The form is validated client-side when the user submits it.
If the form fields pass validation, a POST request is sent to the API with the entered credentials.
The user receives a success or error message based on the response.
Password visibility toggle, "Remember Me", and the loading spinner enhance the user experience.

The API being used is a mock API and does not perform real authentication.
"Remember Me" functionality is not persistent; it only simulates the feature visually.
