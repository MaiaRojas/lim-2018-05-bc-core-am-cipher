
window.cipher = {
  Cipher:(text,displacement)=>{
    let i = 0;
    const ofAscii='';
    const formula= '';
    text=text.toUpperCase();

    for ( i; i <text.length; i++) {
        if (text[i]!=" ") {
          ascii=text.charCodeAt(i);
          formula = ((ascii-65 + displacement)% 26) + 65;
           ofAscii = String.fromCharCode(formula);
         letter= letter+ ofAscii;
       }else {
          letter = letter + " ";
        }
       return (letter);
   }
  },
  Decipher:(text,displacement)=> {
    let i = 0;
    const ofAscii='';
    const formula= '';
    text=text.toUpperCase();
    for ( i; i <text.length ; i++) {
        if (text[i]!=" ") {
           formula = 90-(90 - text.charCodeAt(i)+ displacement)% 26;
           ofAscii = String.fromCharCode(formula);
          letter= letter+ ofAscii;
       }else {
          letter = letter + " ";
       }
        return (letter);
   }

    }

  };





  




///

document.getElementById('optionCifrar').addEventListener('click',function(){
    let displacement =document.getElementById('displacement').value;
    let text =document.getElementById("text").value;
  const letter=cipher.Cipher(text,displacement);
  let result =document.getElementById('result');
     result.innerHTML=letter;
});
document.getElementById('optionDescifrar').addEventListener('click',function(){
  let displacement =document.getElementById('displacement').value;
  let text=document.getElementById("text").value;
  const letter=cipher.Decipher(text,displacement);
let result =document.getElementById('result');
  result.innerHTML=letter;
});












var option =parseInt(document.getElementById("option"));
var text = document.getElementById("text").toUpperCase();
var displacement  = parseInt(prompt('Indica cuantos espacios van a desplazarse'));
var sizetext = text.length;
alert(sizetext);
var index = 0;
var letter ="";
var ofAscii='';
var formula= '';


var cipher = function(){
  for ( index; index <sizetext ; index ++) {
      if (text[index]!=" ") {
         formula = (text.charCodeAt(index)-65 + displacement)% 26 + 65;
         ofAscii = String.fromCharCode(formula);
        letter= letter+ ofAscii;
     }else {
        letter = letter + " ";
     }
 }

  return(letter);
}


var decipher = function(){
  for ( index; index <sizetext ; index ++) {
      if (text[index]!=" ") {
         formula = 90-(90 - text.charCodeAt(index)+ displacement)% 26;
         ofAscii = String.fromCharCode(formula);
        letter= letter+ ofAscii;
     }else {
        letter = letter + " ";
     }
 }

  return(letter);
}

if (option === 1){
  alert (cipher());
 }else if(option === 2){
   alert (decipher());
 }

//(x+n)%26 formula
/*(0+33)%26
33%26
7

codigo ASCII
(x-65+       n)       % 26            + 65
ASCII/ VALOR FIJO/RESIDUO DE 26/PARA OBTENER CÓDIGO ASCII
*/
