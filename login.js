document.addEventListener('DOMContentLoaded', function() {
    // Make sure the form exists before trying to access it
    const loginForm = document.getElementById('login-form');
    
    if (loginForm) {
        loginForm.addEventListener('submit', function(event) {
            event.preventDefault();
            alert("Login successful!");
        });
    } else {
        console.error("Login form not found!");
    }
});
