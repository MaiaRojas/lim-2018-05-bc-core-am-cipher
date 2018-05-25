
document.getElementById('cifrar').addEventListener('click',function(){
    let displacement =document.getElementById('displacement').value;
    displacement=parseInt(displacement);
    let text =document.getElementById("text").value;
    let word=cipher.code(text,displacement);
  let result =document.getElementById('result');
     result.innerHTML=word;
});


document.getElementById('descifrar').addEventListener('click',function(){
  let displacement =document.getElementById('displacement').value;
  displacement=parseInt(displacement);
  let text=document.getElementById("text").value;
  let word2=cipher.decipher(text,displacement);
let result =document.getElementById('result');
  result.innerHTML=word2;
});

