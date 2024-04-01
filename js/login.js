document.addEventListener('DOMContentLoaded', function() {
    const loginForm = document.getElementById('login-form');
  
    loginForm.addEventListener('submit', function(event) {
      event.preventDefault(); // Prevent the default form submit action
  
      const emailInput = document.getElementById('login-email');
      const passwordInput = document.getElementById('login-password');
  
      const storedEmail = localStorage.getItem('email');
      const storedPassword = localStorage.getItem('password');
  
      if(emailInput.value === storedEmail && passwordInput.value === storedPassword) {
          // Correct login
          alert('Login successful!');
          // Redirect to another page or perform your logic here.
          // window.location.href = 'path_to_redirect';
      } else {
          // Incorrect login
          alert('Email or password is incorrect.');
          // You can clear the form or highlight the incorrect fields here.
          emailInput.classList.add('error'); // CSS class for error
          passwordInput.classList.add('error'); // CSS class for error
      }
    });
  });
  