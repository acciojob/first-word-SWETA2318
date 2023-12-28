// Function to extract the first word from a string
function firstWord(s) {
    // Check if the string is empty or does not contain any space
    if (!s || s.indexOf(' ') === -1) {
        return s;
    }

    // Find the index of the first space
    const spaceIndex = s.indexOf(' ');

    // Return the first word, which is all characters up to the first space
    return s.substring(0, spaceIndex);
}

// Prompt the user to enter a string
const userInput = prompt("Enter String:");

// Call the firstWord function with user input and display the result
alert(firstWord(userInput));
