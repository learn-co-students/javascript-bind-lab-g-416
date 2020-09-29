const app = "I don't do much.";
// Create an object called digitalClock [x]
// This object should have two properties: []
// time: the current time in seconds, rounded off (Hint: take a look at Date) []
// startTicking: a method that increases the time property with one second every second. Use .bind() or ES2015 arrow functions to correctly set the property []

const digitalClock = {
    
    time: Math.round(Date.now() / 1000),
    startTicking: function () {
        setInterval(() => this.time++, 1000);
    }
};

// Create a function called censor. This function takes two arguments: the word being censored, and the string that should be sanitized. Don't worry about case matching for this exercise.
// The censor function should return the input string, with the censored word being replaced with 'BLEEP'.
// Create a violenceCensor function (using .bind() and the censor() function) that will censor the word 'violence'.
// Create a drugsCensor function (using .bind() and the censor() function) that will censor the word 'drugs'.

function censor(censoredWord, input) {
    const matcher = new RegExp(censoredWord, 'gi');
    return input.replace(matcher, 'BLEEP');
}

const violenceCensor = censor.bind(null, 'violence');
const drugsCensor = censor.bind(null, 'drugs');