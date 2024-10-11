document.addEventListener('DOMContentLoaded', function() {
    const signupForm = document.getElementById('signup-form');
    
    if (signupForm) {
        signupForm.addEventListener('submit', function(event) {
            event.preventDefault(); // Prevents the default form submission
            alert("Signup successful!");
        });
    } else {
        console.error("Signup form not found!");
    }
});
