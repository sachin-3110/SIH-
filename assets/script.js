// Get the login and sign up buttons
const loginButton = document.getElementById('login-button');
const signUpButton = document.getElementById('sign-up-button');
const aboutbutton=document.getElementById('about-button')


// Add event listeners to the buttons
loginButton.addEventListener('click', redirectAfterLogin);


// Function to redirect after login
function redirectAfterLogin() {
  // Assuming you want to redirect to a dashboard page after login
  window.location.href = 'index.html';
}


