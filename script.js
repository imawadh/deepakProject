// script.js

// Get the form and confirmation message elements
const form = document.getElementById('contact-form');
const confirmationMessage = document.getElementById('confirmation-message');

// Function to handle form submission
form.addEventListener('submit', function(e) {
    e.preventDefault();  // Prevent the form from submitting the traditional way

    // Simulate a successful form submission (in a real case, you can send this data to a server)
    const formData = new FormData(form);  // You can log or process this data as needed
    
    console.log("Form Submitted!");
    console.log("Name: " + formData.get('name'));
    console.log("Email: " + formData.get('email'));
    console.log("Message: " + formData.get('message'));

    // Hide the form (optional)
    form.style.display = 'none';

    // Show the confirmation message
    confirmationMessage.style.display = 'block';
});
