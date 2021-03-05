// Your solution goes here 
function isStrongPassword(password) {
    let capitalChar = 0;
    // The password is at least 8 characters long.
    if (password.length < 8)
        return false;
    // The password does not contain the string "password". Hint: Use indexOf() to search for "password".
    else if (password.indexOf("password") != -1)
        return false;
    /* The password contains at least one uppercase character. Hint: Call the string method charCodeAt(index) 
        to get the Unicode value of each character in the password. If a character code is between 65 and 90 
        (the Unicode values for A and Z), then an uppercase character is found. */
    else if (capitalChar == 0) {
        for (let x = 0; x < password.length; x++) {
            if (password.charCodeAt(x) >= 65 && password.charCodeAt(x) <= 90) {
                capitalChar++;
            }
        }
        if (capitalChar == 0) {
            return false;
        }
    else
        return true;
    }
}


//isStrongPassword("Qwerty"); 
//isStrongPassword("passwordQwerty")  // false - Contains "password"
//isStrongPassword("qwerty123")       // false - No uppercase characters
//isStrongPassword("Qwerty123")       // true