
window.cipher = {
  encode:(text,offset)=> {
      let i = 0;
      let ofAscii='';
      let formula= '';
      let ascii= '';
      text=text.toUpperCase();
      let letter='';
      for ( i; i <text.length; i++) {
          if (text[i]!=" ") {
            ascii=text.charCodeAt(i);
            formula = ((ascii-65 + offset)% 26) + 65;
             ofAscii = String.fromCharCode(formula);
           letter= letter+ ofAscii;
         }else {
            letter =" ";
          }
     }
     return (letter);
    },
  decode:(text,offset)=>{
    let i = 0;
    let ofAscii='';
    let formula= '';
    let ascii='';
    text=text.toUpperCase();
    let letter='';
    for ( i; i <text.length ; i++) {
        if (text[i]!=" ") {
          ascii=text.charCodeAt(i);
           formula = 90-(90 -ascii+ offset)% 26;
           ofAscii = String.fromCharCode(formula);
          letter= letter+ ofAscii;
       }else {
          letter =" ";
       }
   }
   return (letter);
    },
  createCipherWithOffset : (offset)=>{
    return window.cipher0 = {
      encode0 :(text)=>{return cipher.encode(text,offset)},
      decode0 :(text)=>{return cipher.decode(text,offset)}
    };
  }
  };