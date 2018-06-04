//botón cifrar
//traemos del documento html al elemento con id="cifrar" y le decimos que al escuchar el evento "click" ejecute la siguiente función
document.getElementById("cifrar").addEventListener("click",function() {
    let offset = document.getElementById("offset").value;
    offset = parseInt(offset);
    let string = document.getElementById("string").value;
    //con los valores offset y string obtenidos del documento html, invocamos a la función encode del objeto cipher.
    let encryptFunction = (cipher.createCipherWithOffset(offset)).encode(string);
    //traemos el elemento de id "textOutput" y le asignamos el resultado de la función encode.
    let showResultOfTheEncryptFunction = document.getElementById("textOutput");
    showResultOfTheEncryptFunction .innerHTML = encryptFunction; 
});
//botón descifrar
//traemos del documento html al elemento con id="descifrar" y le decimos que al escuchar el evento "click" ejecute la siguiente función
document.getElementById("descifrar").addEventListener("click",function() {
    let offset = document.getElementById("offset").value;
    offset=parseInt(offset);
    let string = document.getElementById("string").value;
    //con los valores offset y string obtenidos del documento html, invocamos a la función decode del objeto cipher.
    let decodeFunction = (cipher.createCipherWithOffset(offset)).decode(string);
    //traemos el elemento de id "textOutput" y le asignamos el resultado de la función decode.
    let showResultOfTheDecryptFunction = document.getElementById("textOutput");
    showResultOfTheDecryptFunction.innerHTML = decodeFunction;
});
//botón limpiar
//traemos del documento html al elemento con id="descifrar" y le decimos que al escuchar el evento "click" ejecute la siguiente función
document.getElementById("cleanForm").addEventListener('click',function() {
    //usamos el método .reset() para borrar lo escrito en el formulario
    document.getElementById("myForm").reset();
    //usamos el método .innerHTML para asignarle un valor vacío al "textOutput" 
    let cleanTextarea = document.getElementById("textOutput");
    cleanTextarea.innerHTML = "";
});
 
