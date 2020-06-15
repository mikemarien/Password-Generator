//Character set: http://www.net-comber.com/charset.html. The first number, so 97 or 65, sets the first key from the character code, and the last number, 122 or 90, sets the last key from the character code.

function randomSymbol() {
    return String.fromCharCode(generator(33, 47));
}

function randomUpperCase() {
    return String.fromCharCode(generator(65, 90));
}

function randomLowerCase() {
    return String.fromCharCode(generator(97, 122));
}

function randomNumber() {
    return Number.fromCharCode(generator(48, 57));
}



//Generates a random decimal to select for in the character code. Without math.floor, math.random would grab a decimal. Math.floor indicates only random integers. 

//The (min = 0, max = 1) indicates simply that I want a random number. When I call "generator(x, y)" that indicates that I want a random number between x and y. The (max - min + 1) expression indicates that the (x, y) values are inclusive. 

//Without the (...) + min), if given (x, y) values, the computer would generate a random number between 0 and 9 for example if (x, y) were equivalent to (48, 57). The + min aspect of the expression says, "add 48" so the random number generated would not be between 0 and 9, but rather between 48 and 57, in other words (0 + 48) - (9 + 48). I used the following website for help explaining this concept: (https://teamtreehouse.com/community/mathfloor-mathrandom-max-min-1-min-explanation).

function generator(min = 0, max = 1) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}


//function to generate password
function generate() {

    //.value returns the value of length. let used rather than const because the value of length can change from 8 to 128.
    let length = document.getElementById("length").value;
    //conntecting function to elements. const used because these values are set by character code.
    let symbol = document.getElementById("symbols").checked
    let upperCase = document.getElementById("uppercase").checked;
    let lowerCase = document.getElementById("lowercase").checked;
    let number = document.getElementById("numbers").checked;

    //Sets the password to a string with nothing in it. This way the addition statement adds characters to blank space. This way there is a space to  
    let result = "";

    if (lowerCase + upperCase + symbol + number <= 0)
        return;

    for (let i = 0; i < length; i++) {

        const r = generator(0, 3);
        if (lowerCase && r === 0) {
            result += randomLowerCase();
        } else if (upperCase && r === 1) {
            result += randomUpperCase();
        } else if (symbol && r === 2) {
            result += randomSymbol();
        } else if (number && r === 3) {
            result += generator(0, 9);
        } else {
            i--;
        }

    }

    document.getElementById("result").textContent = result;

}



