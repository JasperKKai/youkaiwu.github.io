// Log a welcome message to the console
console.log('Welcome to my personal homepage!');

// Example: Add a click event listener to a button
document.addEventListener('DOMContentLoaded', () => {
    const button = document.getElementById('exampleButton');
    if (button) {
        button.addEventListener('click', () => {
            alert('Button clicked!');
        });
    }
});