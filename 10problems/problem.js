function countOccurrences(input) {
    // Split the input string into an array of numbers
    const persons = input.split(' ').map(Number);

    // Initialize counters for John and Rohan
    let johnCount = 0;
    let rohanCount = 0;

    // Loop through the array and count occurrences
    for (const person of persons) {
        if (person === 1) {
            johnCount++;
        } else if (person === 2) {
            rohanCount++;
        }
    }

    // Output the results
    console.log('John:', johnCount, 'Rohan:', rohanCount);
}

// Get user input
const userInput = prompt('Enter the numbers (e.g., 1 1 2 2 2):');

// Call the function with user input
countOccurrences(userInput);