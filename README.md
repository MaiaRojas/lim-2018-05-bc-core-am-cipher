# Cifrado César
#####cifra tus mensajes, da la mejor sorpresa.❤️
![Así funciona Cifrado Cesar](https://scontent.flim1-1.fna.fbcdn.net/v/t1.15752-9/34367975_2056785364595691_7383719754499883008_n.png?_nc_cat=0&oh=e15fb01e88844bbeb5aecdfbd5d2e84b&oe=5BB8D2CA)

Cifrado Cesar es una web sencilla para cifrar y descifrar mensajes que serán usados en conversaciones secretas.
##Como nació la idea 👩 💻

Está proxima la fecha del cumpleaños de mi novio y estoy organizando una fiesta sorpresa. Para organizar la fiesta creé un grupo de whatsapp junto con amigos y familiares.
Un gran problema es que pongo mi alarma para levantarme temprano, sin embargo
(como supondrás) eso nunca sucede y mi novio es quien termina apagando la alarma
y "de casualidad" revisando mis mensajes.
Debido a que es algo sorpresa, decidí crear una aplicación que me permita enviar mensajes cifrados y que las demás personas (partícipes de la fiesta) puedan tener una interfaz para descifrarlo. Así que me tocó aplicar mis superpoderes 😎 y de esta necesidad nació Cifrado Cesar.

##Usabilidad.
Si necesitas organizar una fiesta🤡 sorpresa para tu pareja o unx amigx y quieres asegurarte que no se enteren antes de tiempo, Cifrado Cesar es la herramienta para tí.📲 💻 
##Instalación/modo de acceso.
Para acceder a Cifrado Cesar no es necesario instalarlo.
Con ir a la URL de [Cifrado César](https://yulissateran.github.io/lim-2018-05-bc-core-am-cipher/src/) es suficiente.😉 
## Objetivos y modo de uso.
El objetivo principal de esta web es que podamos cifrar y descifrar un mensaje, para ello podemos:

* elegir un `desplazamiento` (número)indicando cuántas posiciones queremos que el cifrado
  desplace cada caracter.
* insertar un `mensaje` (texto) que queremos cifrar (puede incluir mayúsculas, minúsculas, números y símbolos)
* ver el resultado del mensaje cifrado
* insertar un `mensaje` (texto) a descifrar
* ver el resultado del mensaje descifrado

## Decisiones de diseño.
Los colores usados en el diseño de la interfaz(parte visible) de la web, se basaron en la tendencia [minimalista](https://www.mediaclick.es/blog/diseno-web-minimalista-caracteristicas-leyes-de-la-simplicidad-y-ejemplos/) del *menos es más* ultimamente muy usada entre desarrolladores.
Uno de los elementos que fue hecho pensado en la User Experience fue el botón **Limpiar**, con este elemento los usuarios ya no tienen necesidad de borrarr lo que descifraron, sino que pueden simplemente darle '*click*' y escribir un nuevo texto.
## El método Cifrado César .
El [cifrado César](https://en.wikipedia.org/wiki/Caesar_cipher)es un tipo de cifrado por sustitución en el que una letra en el texto original es reemplazada por otra
letra que se encuentra un número fijo de posiciones más adelante en el alfabeto.

![caeser-cipher](https://upload.wikimedia.org/wikipedia/commons/thumb/2/2b/Caesar3.svg/2000px-Caesar3.svg.png)


Por ejemplo si usáramos un desplazamiento de 33:

* Alfabeto sin cifrar: A B C D E F G H I J K L M N O P Q R S T U V W X Y Z
* Alfabeto cifrado: D E F G H I J K L M N O P Q R S T U V W X Y Z A B C
## Ejemplos del uso del Cifrado Cesar en mí código.´
```string = "s"  ```   
```desplazamiento = 4 ```
```letraCifrada="w"  ```

## [Diagrama de flujo de la web](https://scontent.flim1-1.fna.fbcdn.net/v/t1.15752-9/34338821_2056811261259768_7614020256008241152_n.png?_nc_cat=0&oh=48b6deb368b62ae30b5d5aef67388d7d&oe=5B7A23D0)

## Recursos
- https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Objetos_globales/String/fromCharCode
- https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Objetos_globales/String/charCodeAt
- http://www.chaijs.com/api/assert/
- https://openclassrooms.com/courses/gestiona-tu-codigo-con-git-y-github?status=published
- https://www.w3schools.com/html/html_forms.asp
- https://www.w3schools.com/js/js_if_else.asp
- https://jesuslc.com/2016/07/12/como-escribir-un-readme-que-mole/
- https://www.mediaclick.es/blog/diseno-web-minimalista-caracteristicas-leyes-de-la-simplicidad-y-ejemplos/ 