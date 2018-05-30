
window.cipher = {
  encode(string, offset) {
    let i = 0;
    let ASCIIcode = '';
    let codeFormula = '';
    let convertingTotheAlphabet = '';
    string = string.toUpperCase();
    let stringCipher = '';
    for (i; i < string.length; i++) {
        ASCIIcode = string.charCodeAt(i); 
        if (string[i] != " ") {  
          codeFormula = ((ASCIIcode - 65 + offset) % 26) + 65;
          convertingTotheAlphabet = String.fromCharCode(codeFormula);
          stringCipher = stringCipher + convertingTotheAlphabet;
        } else {
          stringCipher += " "; 
      }
    }
    return (stringCipher);

  },
  decode(string, offset){
    let i = 0;
    let convertingTotheAlphabet = '';
    let codeFormula = '';
    let ASCIIcode = '';
    string = string.toUpperCase();
    let stringCipher = '';
    for (i; i < string.length; i++) {
      if (string[i] != " ") {
        ASCIIcode = string.charCodeAt(i);
        codeFormula = 90 - (90 -ASCIIcode + offset) % 26;
        convertingTotheAlphabet = String.fromCharCode(codeFormula);
        stringCipher = stringCipher + convertingTotheAlphabet;
      } else {
          stringCipher += " ";
      }
    }
          return (stringCipher);
  },
  createCipherWithOffset (offset){
    const result = {
      encode  (string){return cipher.encode(string, offset)},
      decode (string){return cipher.decode(string, offset)}
    };
    return result
  }
};


