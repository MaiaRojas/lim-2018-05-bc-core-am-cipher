
window.cipher = {
  code:code,
  decipher:decode
};

 function code (text,displacement) {
    let i = 0;
    let ofAscii='';
    let formula= '';
    let ascii= '';
    text=text.toUpperCase();
    let letter='';
    for ( i; i <text.length; i++) {
        if (text[i]!=" ") {
          ascii=text.charCodeAt(i);
          formula = ((ascii-65 + displacement)% 26) + 65;
           ofAscii = String.fromCharCode(formula);
         letter= letter+ ofAscii;
       }else {
          letter = letter + " ";
        }
   }
   return (letter);
  };

  function decode (text,displacement) {
    let i = 0;
    let ofAscii='';
    let formula= '';
    let ascii='';
    text=text.toUpperCase();
    let letter='';
    for ( i; i <text.length ; i++) {
        if (text[i]!=" ") {
          ascii=text.charCodeAt(i);
           formula = 90-(90 -ascii+ displacement)% 26;
           ofAscii = String.fromCharCode(formula);
          letter= letter+ ofAscii;
       }else {
          letter = letter + " ";
       }
   }
   return (letter);
    };
