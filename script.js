// script.js


const form = document.getElementById('contact-form');
const confirmationMessage = document.getElementById('confirmation-message');


form.addEventListener('submit', function(e) {
    e.preventDefault(); 

   
    const formData = new FormData(form); 
    
    console.log("Form Submitted!");
    console.log("Name: " + formData.get('name'));
    console.log("Email: " + formData.get('email'));
    console.log("Message: " + formData.get('message'));

    
    form.style.display = 'none';

 
    confirmationMessage.style.display = 'block';
});
