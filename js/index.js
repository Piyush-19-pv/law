
window.onload = function() {
    setTimeout(function() {
        document.getElementById("dialog").style.display = "block"
    }, 5000); // 5000 milliseconds = 5 seconds
}

// Close the dialog when the close button is clicked
document.getElementById("close-dialog").addEventListener("click", function() {
    document.getElementById("dialog").style.display = "none";
});





// Toggle the nav-links on hamburger click
const hamburger = document.getElementById('hamburger-menu');
const navLinks = document.querySelector('.nav-links');

hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});


//blogs js 
function toggleContent(button) {
    const fullContent = button.previousElementSibling; // Gets the full content div
    if (fullContent.style.display === "none") {
        fullContent.style.display = "block";
        button.innerText = "Read Less";
    } else {
        fullContent.style.display = "none";
        button.innerText = "Read More";
    }
}


// faculty
document.addEventListener("DOMContentLoaded", function() {
    const cards = document.querySelectorAll('.faculty-card');
    cards.forEach(card => {
        card.style.opacity = '0';
        setTimeout(() => {
            card.style.opacity = '1';
        }, 200);
    });
});


// document.getElementById('hamburger-menu').addEventListener('click', function() {
//     var navbar = document.querySelector('.nav-links');
//     nav-links.classList.toggle('open');
// });

///signup.html js 






