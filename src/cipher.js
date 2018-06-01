
window.cipher = {
  encode(string, offset) {
    let i = 0;
    let ASCIIcode = '';
    let codeFormula = '';
    let convertingTotheAlphabet = '';
   // let invalidSymbol="ø";
   // string = string.toUpperCase();
    let stringCipher = '';
      for (i; i < string.length; i++) {
          ASCIIcode = string.charCodeAt(i);
          //mayusculas 
          if (ASCIIcode>=65 && ASCIIcode<=90) {  
            codeFormula = ((ASCIIcode - 65 + offset) % 26) + 65;
            convertingTotheAlphabet = String.fromCharCode(codeFormula);
            stringCipher = stringCipher + convertingTotheAlphabet;
          // minusculas 
          }else if(ASCIIcode>=97 && ASCIIcode<=122){
            codeFormula = ((ASCIIcode - 97 + offset) % 26) + 97;
            convertingTotheAlphabet = String.fromCharCode(codeFormula);
            stringCipher = stringCipher + convertingTotheAlphabet;
          //numeros
          }else if (ASCIIcode>=48 && ASCIIcode<=57){
            codeFormula = ((ASCIIcode - 48 + offset) % 10) + 48;
            convertingTotheAlphabet = String.fromCharCode(codeFormula);
            stringCipher = stringCipher + convertingTotheAlphabet;
          }else{
            //defecto
            stringCipher = stringCipher + String.fromCharCode(string.charCodeAt(i));
          }
      }
    return (stringCipher); },

  decode(string, offset){
    let i = 0;
    let convertingTotheAlphabet = '';
    let codeFormula = '';
    let ASCIIcode = '';
    //let invalidSymbol="ø";
    //string = string.toUpperCase();
    let stringCipher = '';
    for (i; i < string.length; i++) {
      ASCIIcode = string.charCodeAt(i);
      //mayusculas
      if (ASCIIcode>=65 && ASCIIcode<=90) {
        codeFormula = 90 - (90 -ASCIIcode + offset) % 26;
        convertingTotheAlphabet = String.fromCharCode(codeFormula);
        stringCipher = stringCipher + convertingTotheAlphabet;
     //minussculas
      } else if(ASCIIcode>=97 && ASCIIcode<=122){
        codeFormula = 122-(122-ASCIIcode + offset) % 26;
        convertingTotheAlphabet = String.fromCharCode(codeFormula);
        stringCipher = stringCipher + convertingTotheAlphabet;
      //números
      } else if (ASCIIcode>=48 && ASCIIcode<=57){
         codeFormula = 57-(57-ASCIIcode + offset) % 10;
         convertingTotheAlphabet = String.fromCharCode(codeFormula);
        stringCipher = stringCipher + convertingTotheAlphabet;
         } else{
        //defecto
        stringCipher = stringCipher + String.fromCharCode(string.charCodeAt(i));      }
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



