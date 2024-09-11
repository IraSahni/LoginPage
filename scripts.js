document.getElementById('loginForm').addEventListener('submit', async function(event) {
  event.preventDefault();

  // Clear any previous error messages
  clearErrors();

  // Retrieve form field values
  const username = document.getElementById('username').value;
  const password = document.getElementById('password').value;
  const rememberMe = document.getElementById('rememberMe').checked;

  let valid = true;

  // Validate username
  if (username === '') {
    showError('username', 'Username or email is required.');
    valid = false;
  } else if (!isValidEmail(username)) {
    showError('username', 'Please enter a valid email address.');
    valid = false;
  }

  // Validate password field
  if (password === '') {
    showError('password', 'Password is required.');
    valid = false;
  } else if (password.length < 6) {
    showError('password', 'Password must be at least 6 characters.');
    valid = false;
  }

  // If form validation fails, do not proceed further
  if (!valid) return;

  try {
    // Show loading spinner
    showLoadingSpinner();

    // Send API request using fetch
    const response = await fetch('https://jsonplaceholder.typicode.com/posts', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        username: username,
        password: password,
      }),
    });

    // Check if the response was successful (status code 200-299)
    if (response.ok) {
      const data = await response.json();
      displaySuccess('Login successful!');
    } else {
      displayError('Login failed! Please check your credentials.');
    }
  } catch (error) {
    console.error('Error:', error);
    displayError('Something went wrong. Please try again later.');
  } finally {
    // Hide loading spinner
    hideLoadingSpinner();
  }
});

// Show/Hide Password
document.getElementById('togglePassword').addEventListener('change', function() {
  const passwordField = document.getElementById('password');
  if (this.checked) {
    passwordField.type = 'text';
  } else {
    passwordField.type = 'password';
  }
});

// Function to check if an email is valid
function isValidEmail(email) {
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailPattern.test(email);
}

// Function to display error messages
function showError(fieldId, message) {
  const field = document.getElementById(fieldId);
  const errorMessage = document.createElement('div');
  errorMessage.className = 'error-message';
  errorMessage.textContent = message;
  field.parentElement.appendChild(errorMessage);
  field.classList.add('error-input');
}

// Function to clear previous error messages
function clearErrors() {
  const errorMessages = document.querySelectorAll('.error-message');
  errorMessages.forEach(message => message.remove());

  const errorInputs = document.querySelectorAll('.error-input');
  errorInputs.forEach(input => input.classList.remove('error-input'));
}

// Function to display success message
function displaySuccess(message) {
  alert(message);
}

// Function to display error message
function displayError(message) {
  const form = document.getElementById('loginForm');
  const errorMessage = document.createElement('div');
  errorMessage.className = 'error-message global-error';
  errorMessage.textContent = message;
  form.appendChild(errorMessage);
}

// Function to show a loading spinner
function showLoadingSpinner() {
  document.getElementById('loadingSpinner').style.display = 'block';
}

// Function to hide the loading spinner
function hideLoadingSpinner() {
  document.getElementById('loadingSpinner').style.display = 'none';
}
