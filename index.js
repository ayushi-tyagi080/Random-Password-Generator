function generatePassword(
    length,
    includeLowercase,
    includeUppercase,
    includeNumbers,
    includeSymbols
) {
    const lowercaseChars = "abcdefghijklmnopqrstuvwxyz";
    const uppercaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const numberChars = "0123456789";
    const symbolChars = "!@#$%^&*()_-+={}[]:;<>";
    
    let allowedChars = "";
    let password = "";
    allowedChars += includeLowercase ? lowercaseChars : "";
    allowedChars += includeUppercase ? uppercaseChars : "";
    allowedChars += includeNumbers ? numberChars : "";
    allowedChars += includeSymbols ? symbolChars : "";
    
    if (length <= 0) {
        return "(Password length must be at least 1)";
    }
    if (allowedChars.length === 0) {
        return "(No characters selected; at least one needs to be selected)";
    }
    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * allowedChars.length);
        password += allowedChars[randomIndex];
    }
    
    return password;
}

function generate() {
    const length = document.getElementById("length").value;
    const includeLowercase = document.getElementById("includeLowercase").checked;
    const includeUppercase = document.getElementById("includeUppercase").checked;
    const includeNumbers = document.getElementById("includeNumbers").checked;
    const includeSymbols = document.getElementById("includeSymbols").checked;
    
    const password = generatePassword(
        length,
        includeLowercase,
        includeUppercase,
        includeNumbers,
        includeSymbols
    );
    
    document.getElementById("result").textContent = `Generated password: ${password}`;
}
