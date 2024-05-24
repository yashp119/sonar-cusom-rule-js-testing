// Select the button and paragraph elements
const button = document.getElementById('myButton');
const paragraph = document.getElementById('myParagraph');

// Function to change the text of the paragraph
function changeText() {
    paragraph.textContent = 'The text has been changed!';
}

// Add an event listener to the button
button.addEventListener('click', changeText);
