//codigo dd cifrado
var text = prompt('Ingresa tu texto o cadena').toUpperCase();
var displacement  = parseInt(prompt('Indica cuantos espacios van a desplazarse'));
var sizetext = text.length;
alert(sizetext);
var cipher = function(){
  var index = 0;
  var letter = " ";
  for ( index; index <sizetext ; index ++) {
      if (text[index]!=" ") {
        var formula = (text.charCodeAt(index)-65 + displacement)% 26 + 65;
        var ofAscii = String.fromCharCode(formula);
        letter= letter+ ofAscii;
     }else {
        letter = letter + " ";
     }
 }

  return(letter);
}

alert (cipher());




//(x+n)%26 formula
/*(0+33)%26
33%26
7

codigo ASCII
(x-65+       n)       % 26            + 65
ASCII/ VALOR FIJO/RESIDUO DE 26/PARA OBTENER CÓDIGO ASCII
*/
