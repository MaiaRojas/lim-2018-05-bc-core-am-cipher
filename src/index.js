document.getElementById('cifrar').addEventListener('click',function(){
  let offset =document.getElementById('offset').value;
  offset=parseInt(offset);
  let text =document.getElementById("text").value;
  let word=(cipher.createCipherWithOffset(offset)).encode0(text);
let result =document.getElementById('result');
   result.innerHTML=word;
});


document.getElementById('descifrar').addEventListener('click',function(){
let offset =document.getElementById('offset').value;
offset=parseInt(offset);
let text=document.getElementById("text").value;
let word2=(cipher.createCipherWithOffset(offset)).decode0(text);
let result =document.getElementById('result');
result.innerHTML=word2;
});

