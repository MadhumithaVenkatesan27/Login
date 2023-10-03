const forms = document.querySelector(".forms"),
pwShowHide = document.querySelectorAll(".eye-icon"),
links = document.querySelectorAll(".link");

pwShowHide.forEach(eyeIcon => {
eyeIcon.addEventListener("click", () => {
  let pwFields = eyeIcon.parentElement.parentElement.querySelectorAll(".password");
  
  pwFields.forEach(password => {
      if(password.type === "password"){
          password.type = "text";
          eyeIcon.classList.replace("bx-hide", "bx-show");
          return;
      }
      password.type = "password";
      eyeIcon.classList.replace("bx-show", "bx-hide");
  })
  
})
})      

links.forEach(link => {
link.addEventListener("click", e => {
 e.preventDefault(); //preventing form submit
 forms.classList.toggle("show-signup");
})
})

// Function to initialize Google Sign-In
function initializeGoogleSignIn() {
  gapi.load('auth2', function() {
    gapi.auth2.init({
      client_id: 'YOUR_GOOGLE_CLIENT_ID', // Replace with your actual Google client ID
    }).then(function(auth2) {
      // Google Sign-In is initialized.
      // Create and render the Google Sign-In button
      gapi.signin2.render('google-signin-button', {
        scope: 'profile email',
        longtitle: true,
        theme: 'dark', // You can choose 'light' or 'dark' theme
        onsuccess: onGoogleSignInSuccess,
        onfailure: onGoogleSignInFailure
      });
    });
  });
}

// Function to handle successful Google Sign-In
function onGoogleSignInSuccess(googleUser) {
  // Get the user's Google profile information
  const profile = googleUser.getBasicProfile();
  const email = profile.getEmail();
  const name = profile.getName();
  const imageUrl = profile.getImageUrl();

  // You can use the retrieved information for your login or registration process
  // For example, you can send the email and name to your server for authentication.

  console.log('Logged in with Google:');
  console.log('Email: ' + email);
  console.log('Name: ' + name);
  console.log('Profile Image URL: ' + imageUrl);
}

// Function to handle failed Google Sign-In
function onGoogleSignInFailure(error) {
  console.error('Google Sign-In failed:', error);
}

// Call the function to initialize Google Sign-In
initializeGoogleSignIn();