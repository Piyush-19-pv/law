document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('student-form');

    form.addEventListener('submit', function(event) {
        event.preventDefault();

        // Simple validation example (ensure all required files are uploaded)
        const tenthMarksheet = document.getElementById('tenth_marksheet').files[0];
        const twelfthMarksheet = document.getElementById('twelfth_marksheet').files[0];
        const migration = document.getElementById('migration').files[0];
        const aadhaar = document.getElementById('aadhaar').files[0];
        const photo = document.getElementById('photo').files[0];
        const signature = document.getElementById('signature').files[0];

        if (!tenthMarksheet || !twelfthMarksheet || !migration || !aadhaar || !photo || !signature) {
            alert("Please upload all required documents.");
        } else {
            alert("Form submitted successfully!");
            form.submit(); // Normally, you'd use AJAX here or handle backend form submission
        }
    });
});
