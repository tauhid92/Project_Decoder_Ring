function substitution(input, alphabet, encode = true) {
    const refArray = [
        "a","b","c","d","e","f",
        "g", "h", "i", "j", "k",
        "l", "m", "n", "o", "p",
        "q", "r", "s", "t", "u",
        "v", "w", "x", "y", "z"
    ];
    alphabet = alphabet.split('');
    if (alphabet.length !== 26 || (new Set(alphabet)).size !== alphabet.length) return false;
    input = input.toLowerCase().split('');
    return (encode) ? 
        input.reduce((acc, char) => {
            if (char === " ") {
                acc.push(char);
            }
            let index = refArray.indexOf(char);
            acc.push(alphabet[index]);
            return acc;
        }, []).join(""):
        input.reduce((acc, char) => {
            if (char === " ") {
                acc.push(char);
            }
            let index = alphabet.indexOf(char);
            acc.push(refArray[index]);
            return acc;
        },[]).join(""); 
}

module.exports = substitution;
