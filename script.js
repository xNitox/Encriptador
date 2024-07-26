
function encriptador() {
    let datosEntrada = document.getElementById('textoEntrada').value;
    let datosSalida = document.getElementById('textoResultado');
    //aqui definimos el diccionario que significara cada vocal 
    const diccionario = {
        a : 'ai',
        e : 'enter',
        i : 'imes',
        o : 'ober',
        u : 'ufat',
    }
    // repasar más la logica de esta función para no olvidar
    //split('') convierte el string en array hola --> 'h','o','l','a'
    //.map regresa el nuevo valor que seria un array + la funcion buscar_vocales
    //declaramos una funcion anonima buscar_diccionario para almacenar el nuevo valor 'h','o','l','a'
    //en este caso seria el texto ingresado
    // return diccionario recorre y transforma las vocales de O || devuelve el valor original
    //finalmente con Join vuelve a juntar todo los elementos del array y lo convierte en texto
    //obtenemos que datosSalida.value(value = valor) es igual a encriptado 
    // y llamamos la funcion ocultarImagen ya que esta necesita actualizarse con cada modificacion en el texto
    //sigue estudiando , no te rindas! no lo entendi al 100% pero con esfuerzo lo haras.
    let encriptado =datosEntrada.split('').map
    (function(buscar_vocales)
    {return diccionario
        [buscar_vocales] || buscar_vocales;
    }).join('');
    datosSalida.value = encriptado;
    ocultarImagen();
    requisitoEscritura();
}
function desencriptar() {
    let datosEntradaDesencriptar = document.getElementById('textoEntrada').value;
    let datosSalidaDesencriptar = document.getElementById('textoResultado');
    let descifrar = datosEntradaDesencriptar
                    //replace se usa para remplazar y g de forma global osea todo el texto,
                    // si nosolo encontraria las primeras coincidencias
                    .replace(/ai/g,'a')
                    .replace(/enter/g,'e')
                    .replace(/imes/g,'i')
                    .replace(/ober/g,'o')
                    .replace(/ufat/g,'u');
    datosSalidaDesencriptar.value = descifrar;
    ocultarImagen();
    requisitoEscritura();
}
function ocultarImagen() {
    let conTexto = document.getElementById('textoResultado').value;
    let imagen = document.getElementById('noTexto')
    let cuadroResultado = document.getElementById('textoResultado');
    let btnCopiar = document.getElementById('button_copiar')
    if(conTexto === "" ){
    cuadroResultado.style.display= 'none';
    imagen.style.display = 'block';
    btnCopiar.style.display= 'none'
    }
    else{
        cuadroResultado.style.display = 'block';
        imagen.style.display = 'none';
        btnCopiar.style.display= 'block'

    }
}       //función para que ocultar imagen se aplique cuando se borre el texto en textoEntrada
function coordinacionDeAmbosTextos () {
    let textoEntrada = document.getElementById('textoEntrada').value;
    let borrarTexto = document.getElementById('textoResultado');
    if(textoEntrada === ''){
        borrarTexto.value = '';
        ocultarImagen();
    }
    requisitoEscritura();
}

//clipboardCopy estudiar mas de esta Api igual
function copiarTexto() {
    let textoParaCopiar = document.getElementById('textoResultado').value;
    //aqui usamos la api writeText copia el texto 
    //then() https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Promise/then
    /* ejemplo de uso p.then(alCumplir[, enRechazo]);

p.then(function(value) {
  // cumplimiento
}, function(reason) {
  // rechazo
});*/
    navigator.clipboard.writeText(textoParaCopiar)
    // then se usa para manejar cuando la promesa es exitosa 
    //function se ejecuta segun el estado de la promesa , sea exitosa o catch rechazada
    .then(function() {
        alert('El texto ha sido copiado')
    })
    //catch se usa para manejar algun error que surja durante la operación
    .catch(function() {
        alert('No ha sido posible copiar el texto')
    })
}
// https://midu.dev/leer-copiar-pegar-portapapeles-javascript/ <--practicar

//https://lenguajejs.com/javascript/web-apis/speechsynthesis/ el speech
function requisitoEscritura() {
    const texto = document.getElementById('textoEntrada').value;
    const requisito = /^[a-z ]+$/; // Solo minúsculas, y espacios y el espacio despues del 9 para que igual se permita
    const mensajeVoz = new SpeechSynthesisUtterance('Solo se permiten letras minúsculas y sin acentos');
    if (!requisito.test(texto)){/*el operador ! inverte el valor booleano si es verdadero lo inverte a falsa*/ {
    speechSynthesis.speak(mensajeVoz);
    limitadorDeCaracteres(); }
    }
}

    //entonces 
//^ este simbolo "^" hace que se deba comenzar como requisito con las especificaciones que estan dentro de [] de la a hacia la z minuscula y de 0-9 y espacio , estos estan permitidos
// el + nos dice que los caracteres anteriores se pueden repetir y el $ nos obliga a que deba terminar con uno de los caracteres permitidos dentro de  [] 
// /^[a-z0-9 ]+$/ es una expresion regular recuerda esto xd 
/*Explicacion del if : el operador "!" el operador logico de negacion NOT (!)
este se encarga de negar un valor booleano es decir si es true lo niega y se converite en un fasle
entonces:
Si texto cumple con el patron que definimos en la expresion regular "Requisitos"
    este sera "True" y debiera ejecutarse el mensaje , PERO:
    al tener el operador de negación se converite en "false" y no se ejecuta la voz.
Si el texto No cumple con el patron que definimos en "Requisitos "
entonces sera "False" y no se ejecuta la voz PERO:
    al tener el operador de negación este se vuelve "True" y ejecuta la voz.
    a seguir estudiando! */
function limitadorDeCaracteres() {
    let compruebaSiHayDatos = document.getElementById('textoEntrada');
    let limitante = /^[a-z ]*$/; // Permitir solo letras minúsculas y espacios
    // addEventListener registra un evento o parametro de tipo 'input' , hay más como click', 'input', 'mouseover', etc.,
    //a un objeto especifico del DOM
    // acompañado de una funciona anonima que comprueba si hay cambios en el textoEntrada
    /* una funcion anonima , es una funcion sin nombre que se usa para activar donde se le necesita por decirlo asi
    ejemplos:

    document.getElementById('miBoton').addEventListener('click', function() {
    alert('El botón ha sido clicado!');
    });
    otro:
    let numeros = [1, 2, 3, 4, 5];
    let cuadrados = numeros.map(function(numero) {
    return numero * numero;
    });
    console.log(cuadrados); // [1, 4, 9, 16, 25]
*/
    compruebaSiHayDatos.addEventListener('input', function() { 
        // seria asi element.addEventListener(tipoDeEvento, funciónARegistrar)
        //el evento de tipo input se activa cada vez que cambie el valor de un elemento ya sea
        //input , textarea, selec,  esto es mas recomendable para "Dectectar cambios en tiempo REAL"
        let detección = compruebaSiHayDatos.value;
        // a traves del listener se obtiene  el valor actual y se guarda en detección
        if (!limitante.test(detección)) {
            compruebaSiHayDatos.value = detección.slice(0, -1); // Eliminar el último carácter ingresado
        }                              //string.slice(inicio, fin);                 

    });
}
/* en el if
Se usa el operador de Negacion ! donde invierte el resultado del valor booleano
    *El método test() ejecuta la búsqueda de una ocurrencia entre una 
    expresión regular y una cadena especificada. Devuelve true o false.*
Luego     
    compara detección con limitante 
Si  detección (valor de textoEntrada) Si cumple con el patrón o requisito de limitante 
    devuelve un true y ! lo con vierte en false
Si  detección (valor de tectoEntrada) No cumple con el patrín o requisito de limitante
    devuelve un false y ! lo convierte en True y se ejecuta la limitacion de escritura de caracteres
    que es simplemente borra el ultimo caracter escrito a través de slice.(0,-1)
    Slice se usa para extraer parte de un texto y lo devuelve como un nuevo texto (string)
    string.slice(inicio, fin);  detección.slice(0, -1);
    inicio : el indice donde comienza la extracción ("0") 
    fin: donde termina la extracción "indice" en este caso ("-1), si se omite (no pones nada) se extrae hasta el final de la cadena
    Los indices negativos en slicd se cuenta desde el final de la cadena
    asi -1 el ultimo , -2 penultimo y asi, como ejemplo :

    let cadena = "hola";
    let resultado = cadena.slice(1, -1);
    console.log(resultado); // "ol"
    */