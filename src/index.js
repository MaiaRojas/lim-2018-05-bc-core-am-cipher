
document.getElementById('cifrar').addEventListener('click',function(){
  let offset =document.getElementById('offset').value;
  offset=parseInt(offset);
  let text =document.getElementById("text").value;
 // console.log(cipher.encode(text,offset));
  let word=(cipher.createCipherWithOffset(offset)).encode(text);
let result =document.getElementById('result');
   result.innerHTML=word;
});


document.getElementById('descifrar').addEventListener('click',function(){
let offset =document.getElementById('offset').value;
offset=parseInt(offset);
let text=document.getElementById("text").value;
//console.log(cipher.decode(text,offset));
let word2=(cipher.createCipherWithOffset(offset)).decode(text);
let result =document.getElementById('result');
result.innerHTML=word2;
});

