function caesar(input, shift, encode = true) {
 
  if (!shift || shift === 0 || shift < -25 || shift > 25) return false;  
  if (!encode) shift *= -1;  
  
  input=input.toLowerCase();  
  const inputArray = input.split('');
  const alphabets = [
      "a","b","c","d","e","f",
      "g", "h", "i", "j", "k",
      "l", "m", "n", "o", "p",
      "q", "r", "s", "t", "u",
      "v", "w", "x", "y", "z"
  ];
  const results = inputArray.reduce((acc, char) => {
    console.log(acc);
      if (alphabets.indexOf(char) === -1) { acc.push(char); }
        else {
            const totalShift = shift + alphabets.indexOf(char);
            if (totalShift >= 0 && totalShift <= alphabets.length - 1) {            
                console.log(acc);
                acc.push(alphabets[totalShift]);
            }
            else if (totalShift >= alphabets.length) {
                acc.push(alphabets[totalShift-alphabets.length]);
            }
            else if (totalShift < 0) {
                acc.push(alphabets[alphabets.length+totalShift]);  
            }
         }
        return acc;
    },[]);
  return results.join('');
   }

module.exports = caesar;
