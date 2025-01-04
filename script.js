document.addEventListener("DOMContentLoaded", function() {
    const form = document.getElementById('contact-form');
    const thankYouMessage = document.getElementById('thank-you-message');

    form.addEventListener('submit', function() {
        alert('Thank you for your interest in visiting Crested Butte!') 
        
        
        form.style.display = 'none';
        thankYouMessage.style.display = 'block';
    });
});

