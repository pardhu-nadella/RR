// Example JS file for handling simple interactions, such as form validation or animations
document.addEventListener('DOMContentLoaded', function () {
    const form = document.querySelector('form');

    form.addEventListener('submit', function (e) {
        e.preventDefault();
        alert('Message Sent!');
    });
});
