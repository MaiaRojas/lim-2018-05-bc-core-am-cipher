document.getElementById('cifrar').addEventListener('click',function(){
  let offset =document.getElementById('offset').value;
      offset=parseInt(offset);
  let string =document.getElementById("string").value;
 // console.log(cipher.encode(text,offset));
  let word=(cipher.createCipherWithOffset(offset)).encode(string);
  let result =document.getElementById("result");
      result.innerHTML=word;
 
});


document.getElementById("descifrar").addEventListener('click',function(){
let offset =document.getElementById('offset').value;
offset=parseInt(offset);
let string=document.getElementById("string").value;
//console.log(cipher.decode(text,offset));
let word2=(cipher.createCipherWithOffset(offset)).decode(string);
let result =document.getElementById("result");
result.innerHTML=word2;
});
